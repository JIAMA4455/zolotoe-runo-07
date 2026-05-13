const loginScreen = document.getElementById("loginScreen");
const adminApp = document.getElementById("adminApp");
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("passwordInput");
const loginError = document.getElementById("loginError");
const logoutBtn = document.getElementById("logoutBtn");
const productList = document.getElementById("productList");
const addProductBtn = document.getElementById("addProductBtn");
const statusNote = document.getElementById("statusNote");
const template = document.getElementById("productCardTemplate");

let products = [];
let saveTimer = null;

// --- Проверка авторизации ---
async function checkAuth() {
  const res = await fetch("/api/me");
  const data = await res.json();
  if (data.authenticated) {
    loginScreen.style.display = "none";
    adminApp.style.display = "block";
    await loadProducts();
  } else {
    loginScreen.style.display = "flex";
    adminApp.style.display = "none";
  }
}

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loginError.textContent = "";
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: passwordInput.value })
    });
    if (!res.ok) {
      const data = await res.json();
      loginError.textContent = data.error || "Ошибка входа";
      return;
    }
    passwordInput.value = "";
    await checkAuth();
  } catch (err) {
    loginError.textContent = "Ошибка соединения";
  }
});

logoutBtn.addEventListener("click", async () => {
  await fetch("/api/logout", { method: "POST" });
  await checkAuth();
});

// --- Загрузка товаров ---
async function loadProducts() {
  const res = await fetch("/api/products");
  products = await res.json();
  renderProducts();
}

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((product, index) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".product-edit");
    const preview = card.querySelector(".edit-preview");
    const fileInput = card.querySelector('input[type="file"]');
    const deleteBtn = card.querySelector(".delete-btn");

    preview.src = product.image;
    preview.alt = `${product.breed} ${product.color}`;

    // Заполнить поля
    Object.keys(product).forEach((key) => {
      const input = card.querySelector(`[data-field="${key}"]`);
      if (!input) return;
      if (input.type === "checkbox") {
        input.checked = !!product[key];
      } else if (input.tagName === "SELECT") {
        input.value = product[key];
      } else if (input.tagName === "TEXTAREA") {
        input.value = product[key] || "";
      } else {
        input.value = product[key];
      }
    });

    // Изменения полей
    card.querySelectorAll("[data-field]").forEach((input) => {
      const eventType = (input.tagName === "SELECT") ? "change" : "input";
      input.addEventListener(eventType, () => {
        const field = input.dataset.field;
        let value = input.value;
        if (input.type === "checkbox") value = input.checked;
        else if (input.type === "number") value = Number(value) || 0;
        products[index][field] = value;
        scheduleSave();
      });
    });

    // Загрузка фото
    fileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      showStatus("Загружаем фото...");
      const formData = new FormData();
      formData.append("image", file);
      try {
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        if (!res.ok) throw new Error("Ошибка загрузки");
        const data = await res.json();
        products[index].image = data.path;
        preview.src = data.path + "?t=" + Date.now();
        scheduleSave();
        showStatus("✓ Фото загружено");
      } catch (err) {
        showStatus("✗ Ошибка загрузки фото", true);
      }
    });

    // Удаление
    deleteBtn.addEventListener("click", async () => {
      if (!confirm(`Удалить товар "${product.color} ${product.microns}"?`)) return;
      try {
        await fetch(`/api/products/${product.id}`, { method: "DELETE" });
        products.splice(index, 1);
        renderProducts();
        showStatus("✓ Товар удалён");
      } catch (err) {
        showStatus("✗ Ошибка удаления", true);
      }
    });

    productList.appendChild(node);
  });
}

// --- Автосохранение с дебаунсом ---
function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async () => {
    try {
      const res = await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(products)
      });
      if (!res.ok) throw new Error();
      showStatus("✓ Сохранено");
    } catch (err) {
      showStatus("✗ Ошибка сохранения", true);
    }
  }, 600);
}

function showStatus(message, isError = false) {
  statusNote.textContent = message;
  statusNote.classList.toggle("is-error", isError);
  statusNote.classList.add("is-visible");
  setTimeout(() => {
    statusNote.classList.remove("is-visible");
  }, 2500);
}

// --- Добавить товар ---
addProductBtn.addEventListener("click", async () => {
  const newProduct = {
    id: "product-" + Date.now(),
    breed: "Кроссбред",
    type: "Кардочесная лента",
    color: "новый цвет",
    microns: "18-20",
    price: 1100,
    weight: 500,
    description: "✅ Без ости\n✅ Без мусоринок\n✅ Сертифицированный краситель\n✅ Помыта по ГОСТу\n✅ Расфасовка 500 г\n\nСтараюсь максимально точно передать цвет, но оттенок может немного отличаться на разных экранах.",
    image: "assets/logo-circle.png",
    available: true
  };
  try {
    // Добавляем в начало
    products.unshift(newProduct);
    await fetch("/api/products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(products)
    });
    renderProducts();
    showStatus("✓ Товар добавлен");
    // прокрутить наверх к новому товару
    setTimeout(() => {
      const first = productList.firstElementChild;
      if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  } catch (err) {
    showStatus("✗ Ошибка добавления", true);
  }
});

// --- Загрузка "Хочу" запросов ---
async function loadWants() {
  try {
    const res = await fetch("/api/wants");
    if (!res.ok) return;
    const wants = await res.json();
    const wantsList = document.getElementById("wantsList");
    const entries = Object.entries(wants).filter(([, v]) => v.count > 0);
    
    if (entries.length === 0) {
      wantsList.innerHTML = '<p style="color: var(--muted); padding: 20px;">Пока нет запросов</p>';
      return;
    }

    wantsList.innerHTML = entries
      .sort((a, b) => b[1].count - a[1].count)
      .map(([productId, data]) => {
        const product = products.find(p => p.id === productId);
        const name = product
          ? `${product.breed}, ${product.type}, ${product.color} (${product.microns} мкм)`
          : `Удалённый товар (${productId})`;
        return `<div class="want-item">
          <div class="want-info">
            <span class="want-name">${name}</span>
            <span class="want-id">ID: ${productId}</span>
          </div>
          <span class="want-count">${data.count} голос${data.count > 1 ? (data.count < 5 ? 'а' : 'ов') : ''}</span>
          <button class="want-delete" data-want-id="${productId}" title="Удалить запрос">×</button>
        </div>`;
      }).join("");

    // Обработчики удаления
    wantsList.querySelectorAll(".want-delete").forEach(btn => {
      btn.addEventListener("click", async () => {
        const id = btn.dataset.wantId;
        if (!confirm("Удалить этот запрос «Хочу»?")) return;
        try {
          const res = await fetch(`/api/wants/${encodeURIComponent(id)}`, { method: "DELETE" });
          if (res.ok) {
            loadWants();
            showStatus("✓ Запрос удалён");
          } else {
            const data = await res.json();
            showStatus("✗ " + (data.error || "Ошибка"), true);
          }
        } catch (e) {
          showStatus("✗ Ошибка удаления: " + e.message, true);
        }
      });
    });
  } catch (e) {}
}

// --- Вкладки ---
document.querySelectorAll(".admin-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    
    const target = tab.dataset.tab;
    document.getElementById("tabProducts").style.display = target === "products" ? "block" : "none";
    document.getElementById("tabWants").style.display = target === "wants" ? "block" : "none";
    
    if (target === "wants") loadWants();
  });
});

// Инициализация
checkAuth();
