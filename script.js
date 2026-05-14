let products = [
  {
    id: "crossbred-purple",
    breed: "Кроссбред",
    type: "Кардочесная лента",
    color: "фиолетовый",
    microns: "18-20",
    price: 1100,
    image: "assets/crossbred-purple.jpg",
    available: true,
  },
  {
    id: "crossbred-green",
    breed: "Кроссбред",
    type: "Кардочесная лента",
    color: "зеленый",
    microns: "18-20",
    price: 1100,
    image: "assets/crossbred-green.jpg",
    available: true,
  },
  {
    id: "crossbred-black",
    breed: "Кроссбред",
    type: "Кардочесная лента",
    color: "черный",
    microns: "18-20",
    price: 1100,
    image: "assets/crossbred-black.jpg",
    available: true,
  },
  {
    id: "crossbred-yellow",
    breed: "Кроссбред",
    type: "Кардочесная лента",
    color: "желтый",
    microns: "18-20",
    price: 1100,
    image: "assets/crossbred-yellow.jpg",
    available: true,
  },
  {
    id: "crossbred-white-1",
    breed: "Кроссбред",
    type: "Кардочесная лента",
    color: "белый",
    microns: "18-20",
    price: 1100,
    image: "assets/crossbred-white-1.jpg",
    available: true,
  },
  {
    id: "crossbred-white-2",
    breed: "Кроссбред",
    type: "Кардочесная лента",
    color: "белый",
    microns: "20-22",
    price: 1100,
    image: "assets/crossbred-white-2.jpg",
    available: true,
  },
  {
    id: "crossbred-red",
    breed: "Кроссбред",
    type: "Кардочесная лента",
    color: "красный",
    microns: "18-20",
    price: 1100,
    image: "assets/crossbred-red.jpg",
    available: true,
  },
  {
    id: "crossbred-pink",
    breed: "Кроссбред",
    type: "Кардочесная лента",
    color: "розовый",
    microns: "18-20",
    price: 1100,
    image: "assets/crossbred-pink.jpg",
    available: true,
  },
];

const works = [
  { image: "assets/works/work-01.jpg", alt: "Работа из нашей шерсти 1", author: "Лидия Кетова" },
  { image: "assets/works/work-02.jpg", alt: "Работа из нашей шерсти 2", author: "Ирина Зайцева" },
  { image: "assets/works/work-03.jpg", alt: "Работа из нашей шерсти 3", author: "Ирина Варнава" },
  { image: "assets/works/work-04.jpg", alt: "Работа из нашей шерсти 4", author: "Светлана Ефанова" },
  { image: "assets/works/work-05.jpg", alt: "Работа из нашей шерсти 5", author: "Елена Затонская ЗаВаЛенка" },
  { image: "assets/works/work-06.jpg", alt: "Работа из нашей шерсти 6", author: "Ирина Зайцева" },
  { image: "assets/works/work-07.jpg", alt: "Работа из нашей шерсти 7", author: "Елена Затонская ЗаВаЛенка" },
  { image: "assets/works/work-08.jpg", alt: "Работа из нашей шерсти 8", author: "Наталья Епанчинцева" },
  { image: "assets/works/work-09.jpg", alt: "Работа из нашей шерсти 9", author: "Анна Русских" },
  { image: "assets/works/work-10.jpg", alt: "Работа из нашей шерсти 10", author: "Елена Затонская ЗаВаЛенка" },
  { image: "assets/works/work-11.jpg", alt: "Работа из нашей шерсти 11", author: "Елена Мишута" },
  { image: "assets/works/work-12.jpg", alt: "Работа из нашей шерсти 12", author: "Наталья Епанчинцева" },
  { image: "assets/works/work-13.jpg", alt: "Работа из нашей шерсти 13", author: "Арина Бачиева" },
  { image: "assets/works/work-14.jpg", alt: "Работа из нашей шерсти 14", author: "Анна Русских" },
  { image: "assets/works/work-15.jpg", alt: "Работа из нашей шерсти 15", author: "Анна Поваляева" },
  { image: "assets/works/work-16.jpg", alt: "Работа из нашей шерсти 16", author: "Арина Бачиева" },
  { image: "assets/works/work-17.jpg", alt: "Работа из нашей шерсти 17", author: "Мария Иванова" },
  { image: "assets/works/work-18.jpg", alt: "Работа из нашей шерсти 18", author: "Елена Затонская ЗаВаЛенка" },
  { image: "assets/works/work-19.jpg", alt: "Работа из нашей шерсти 19", author: "Анна Поваляева" },
  { image: "assets/works/work-20.jpg", alt: "Работа из нашей шерсти 20", author: "Светлана Ефанова" },
  { image: "assets/works/work-21.jpg", alt: "Работа из нашей шерсти 21", author: "Елена Н" },
  { image: "assets/works/work-22.jpg", alt: "Работа из нашей шерсти 22", author: "Татьяна Матусевич" },
  { image: "assets/works/work-23.jpg", alt: "Работа из нашей шерсти 23", author: "Татьяна Фёдорова" },
  { image: "assets/works/work-24.jpg", alt: "Работа из нашей шерсти 24", author: "Наталья Епанчинцева" },
  { image: "assets/works/work-25.jpg", alt: "Работа из нашей шерсти 25", author: "Елена Затонская ЗаВаЛенка" },
];

const deliveryTemplates = {
  OZON: [
    ["ozonPhone", "Номер телефона"],
    ["ozonAddress", "Адрес удобного ПВЗ"],
    ["ozonLinkedPhone", "Телефон, привязанный к OZON"],
  ],
  Wildberries: [
    ["wbPhone", "Номер телефона"],
    ["wbAddress", "Адрес удобного ПВЗ"],
    ["wbLinkedPhone", "Телефон, привязанный к Wildberries"],
  ],
  "Почта России": [
    ["postIndex", "Индекс"],
    ["postPhone", "Номер телефона"],
    ["postName", "ФИО получателя"],
  ],
  СДЭК: [
    ["cdekIndex", "Индекс"],
    ["cdekPhone", "Номер телефона"],
    ["cdekName", "ФИО получателя"],
  ],
  "ТК ПЭК": [
    ["pekAddress", "Адрес склада или доставки по городу"],
    ["pekPhone", "Номер телефона"],
    ["pekName", "ФИО получателя"],
  ],
};

const cart = [];
const productGrid = document.querySelector("#productGrid");
const orderText = document.querySelector("#orderText");
const delivery = document.querySelector("#delivery");
const deliveryFields = document.querySelector("#deliveryFields");
const customerName = document.querySelector("#customerName");
const cartPreview = document.querySelector("#cartPreview");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const cartClear = document.querySelector("#cartClear");
const whatsappOrder = document.querySelector("#whatsappOrder");
const vkOrder = document.querySelector("#vkOrder");
const worksImage = document.querySelector("#worksImage");
const worksPrevImage = document.querySelector("#worksPrevImage");
const worksNextImage = document.querySelector("#worksNextImage");
const worksCurrentAuthor = document.querySelector("#worksCurrentAuthor");
const worksPrevAuthor = document.querySelector("#worksPrevAuthor");
const worksNextAuthor = document.querySelector("#worksNextAuthor");
const worksCounter = document.querySelector("#worksCounter");
const worksProgress = document.querySelector("#worksProgress");
const worksPrev = document.querySelector("#worksPrev");
const worksNext = document.querySelector("#worksNext");
const worksTape = document.querySelector("#worksTape");
const worksSection = document.querySelector("#works");
let activeWorkIndex = 0;

function renderProducts(filter = "all") {
  let visibleProducts = filter === "all" ? [...products] : products.filter((item) => item.breed === filter);
  
  // Сортировка: сначала в наличии, потом нет
  visibleProducts.sort((a, b) => (b.available ? 1 : 0) - (a.available ? 1 : 0));

  productGrid.innerHTML = visibleProducts
    .map((product) => {
      const statusText = product.available ? "В наличии" : "Нет в наличии";
      const statusClass = product.available ? "in-stock" : "sold-out";
      const actionButton = product.available
        ? `<button type="button" data-action="add" data-id="${product.id}">Добавить</button>`
        : `<button class="want-button" type="button" data-action="want" data-id="${product.id}">Хочу</button>`;

      return `
        <article class="product-card" data-breed="${product.breed}" data-id="${product.id}">
          <div class="product-image-wrap" data-open-modal="${product.id}">
            <picture>
              <source srcset="${product.image.replace(/\.jpe?g$/i, '.webp')}" type="image/webp" />
              <img class="product-image" src="${product.image}" alt="${product.breed}, ${product.type}, цвет ${product.color}" loading="lazy" />
            </picture>
            <span class="status ${statusClass}">${statusText}</span>
          </div>
          <div class="product-body">
            <div class="product-header">
              <span class="product-breed">${product.breed}</span>
              <span class="product-weight">${product.weight || 500} г / ${product.price} ₽</span>
            </div>
            <h3 class="product-title">${product.type}</h3>
            <div class="product-details">
              <div class="detail-item">
                <span class="detail-label">Цвет</span>
                <span class="detail-value">${product.color}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Микрон</span>
                <span class="detail-value">${product.microns}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Цена</span>
                <span class="detail-value">${product.price} ₽</span>
              </div>
            </div>
            <div class="add-block">
              <button class="qty-button" type="button" data-action="decrease" data-id="${product.id}" aria-label="Уменьшить количество">−</button>
              <label class="qty-field">
                <input type="number" value="0" min="0" max="100" data-id="${product.id}" aria-label="Количество" />
              </label>
              <button class="qty-button" type="button" data-action="increase" data-id="${product.id}" aria-label="Увеличить количество">+</button>
              ${actionButton}
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".qty-button[data-action='decrease']").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const input = document.querySelector(`.qty-field input[data-id="${id}"]`);
      if (input) {
        const val = parseInt(input.value) || 0;
        if (val > 0) input.value = val - 1;
      }
    });
  });

  document.querySelectorAll(".qty-button[data-action='increase']").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const input = document.querySelector(`.qty-field input[data-id="${id}"]`);
      if (input) {
        const val = parseInt(input.value) || 0;
        if (val < 100) input.value = val + 1;
      }
    });
  });

  document.querySelectorAll("[data-action='add']").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const input = document.querySelector(`.qty-field input[data-id="${id}"]`);
      const qty = input ? parseInt(input.value) || 0 : 0;
      if (qty > 0) {
        updateCart(id, "add", qty);
        input.value = 0;
      }
    });
  });

  // Кнопка "Хочу"
  document.querySelectorAll("[data-action='want']").forEach((button) => {
    button.addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      try {
        const res = await fetch(`/api/wants/${id}`, { method: "POST" });
        const data = await res.json();
        const toast = document.getElementById("wantToast");
        if (res.ok) {
          toast.textContent = "Мы передадим ваш запрос, спасибо!";
        } else {
          toast.textContent = data.error || "Вы уже голосовали за этот товар";
        }
        toast.classList.add("is-visible");
        setTimeout(() => toast.classList.remove("is-visible"), 3000);
      } catch (err) {
        // Офлайн — просто показать сообщение
        const toast = document.getElementById("wantToast");
        toast.textContent = "Мы передадим ваш запрос, спасибо!";
        toast.classList.add("is-visible");
        setTimeout(() => toast.classList.remove("is-visible"), 3000);
      }
    });
  });

  // Клик по фото — открыть модалку
  document.querySelectorAll("[data-open-modal]").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.dataset.openModal;
      openProductModal(id);
    });
  });

  injectProductSchema();
}

// --- SEO: Schema.org Product для всех товаров ---
function injectProductSchema() {
  const SITE_URL = "https://zolotoe-runo-07.ru";
  const itemListElements = products.map((product, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": `${product.breed}, ${product.type}, ${product.color}`,
      "description": `${product.breed} ${product.type.toLowerCase()}, цвет ${product.color}, тонина ${product.microns} микрон. Натуральная шерсть от производителя.`,
      "image": `${SITE_URL}/${product.image}`,
      "sku": product.id,
      "brand": {
        "@type": "Brand",
        "name": "Золотое руно 07"
      },
      "offers": {
        "@type": "Offer",
        "url": `${SITE_URL}/#${product.id}`,
        "priceCurrency": "RUB",
        "price": product.price,
        "availability": product.available
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        "seller": {
          "@type": "Organization",
          "name": "Золотое руно 07"
        }
      }
    }
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ассортимент шерсти Золотое руно 07",
    "itemListElement": itemListElements
  };

  let scriptEl = document.getElementById("product-schema");
  if (!scriptEl) {
    scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.id = "product-schema";
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(schema);
}

// --- Модалка товара ---
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("productModal");
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalImage").alt = `${product.breed}, ${product.color}`;
  document.getElementById("modalBreed").textContent = product.breed;
  document.getElementById("modalTitle").textContent = product.type;
  document.getElementById("modalColor").textContent = product.color;
  document.getElementById("modalMicrons").textContent = product.microns;
  document.getElementById("modalWeight").textContent = (product.weight || 500) + " г";
  document.getElementById("modalPrice").textContent = product.price + " ₽";
  document.getElementById("modalDescription").textContent = product.description || "";

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("modalClose")?.addEventListener("click", closeProductModal);
document.getElementById("modalBackdrop")?.addEventListener("click", closeProductModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProductModal();
});

function updateCart(id, action, value = 1) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  if (action === "add" && value > 0) {
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      existing.qty += value;
    } else {
      cart.push({ id, qty: value, name: `${product.breed}, ${product.type}, ${product.color}`, price: product.price, weight: product.weight || 500 });
    }
  }

  renderCart();
  updateOrderText();
  saveCart();
}

function saveCart() {
  try { localStorage.setItem("zr07_cart", JSON.stringify(cart)); } catch(e) {}
}

function loadCart() {
  try {
    const saved = localStorage.getItem("zr07_cart");
    if (saved) {
      const items = JSON.parse(saved);
      items.forEach(item => cart.push(item));
    }
  } catch(e) {}
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = "<p class=\"cart-empty\">Добавьте товары из ассортимента выше</p>";
    cartCount.textContent = "0";
    cartTotal.textContent = "0 ₽";
    cartPreview.classList.remove("has-items");
    return;
  }

  cartPreview.classList.add("has-items");
  cartItems.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-qty">${item.qty} шт. × ${item.price} ₽</span>
      <span class="cart-item-price">${item.qty * item.price} ₽</span>
      <button type="button" class="cart-item-remove" data-id="${item.id}">×</button>
    </div>
  `
    )
    .join("");

  document.querySelectorAll(".cart-item-remove").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const idx = cart.findIndex((item) => item.id === id);
      if (idx > -1) cart.splice(idx, 1);
      renderCart();
      updateOrderText();
      saveCart();
    });
  });

  const totalWeight = cart.reduce((sum, item) => sum + item.qty * (item.weight || 500), 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  cartCount.textContent = cart.length;
  cartTotal.innerHTML = `${totalWeight} г &mdash; <strong>${totalPrice} ₽</strong> + стоимость доставки`;
}

// Собирает финальный текст заказа для копирования/отправки в мессенджеры
function buildOrderText() {
  const customerNameValue = (customerName?.value || "").trim();
  const commentValue = (orderText?.value || "").trim();
  const deliveryValue = delivery?.value || "";

  let text = "Здравствуйте.\n";
  if (customerNameValue) {
    text += `Меня зовут ${customerNameValue}.\n`;
  }
  text += "Хочу заказать шерсть:\n\n";

  if (cart.length === 0) {
    text += "(корзина пока пуста)\n\n";
  } else {
    cart.forEach((item) => {
      const itemWeight = (item.weight || 500) * item.qty;
      text += `- ${item.name}: ${item.qty} шт. × ${item.price} ₽ (${itemWeight} г) = ${item.qty * item.price} ₽\n`;
    });
  }

  const totalWeight = cart.reduce((sum, item) => sum + item.qty * (item.weight || 500), 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  text += `\nИтого: ${totalWeight} г — ${totalPrice} ₽ + стоимость доставки\n`;

  if (deliveryValue) {
    text += `\nДоставка: ${deliveryValue}\n`;

    // Дополнительные поля выбранной доставки (телефоны, адреса и т.д.)
    if (deliveryTemplates[deliveryValue]) {
      deliveryTemplates[deliveryValue].forEach(([id, label]) => {
        const fieldEl = document.getElementById(id);
        const value = (fieldEl?.value || "").trim();
        if (value) {
          text += `${label}: ${value}\n`;
        }
      });
    }
  }

  if (commentValue) {
    text += `\nКомментарий: ${commentValue}\n`;
  }

  return text.trim();
}

function updateOrderText() {
  // Перерисовать поля доставки в зависимости от выбранного способа
  const selectedDelivery = delivery.value;
  if (selectedDelivery && deliveryTemplates[selectedDelivery]) {
    deliveryFields.innerHTML = deliveryTemplates[selectedDelivery]
      .map(
        ([id, placeholder]) => `
        <label>
          ${placeholder}
          <input id="${id}" type="text" placeholder="${placeholder}" data-delivery-field="">
        </label>
      `
      )
      .join("");
  } else {
    deliveryFields.innerHTML = "";
  }
}

function filterProducts(filter) {
  const filters = document.querySelectorAll(".filter");
  filters.forEach((btn) => btn.classList.remove("active"));
  document.querySelector(`[data-filter="${filter}"]`).classList.add("active");
  renderProducts(filter);
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  const openingLoader = document.querySelector("#openingLoader");
  if (openingLoader) {
    const openingSheep = openingLoader.querySelector(".opening-sheep");
    const openingSheepImage = document.querySelector("#openingSheepImage");
    const runInFrames = [
      "assets/sheep-run-1.webp",
      "assets/sheep-run-2.webp",
    ];
    const runBackFrames = [
      "assets/sheep-back-1.webp",
      "assets/sheep-back-2.webp",
    ];
    const sittingFrame = "assets/sheep-sitting.webp";
    const turnedFrame = "assets/sheep-turned.webp";
    let sheepFrameTimer;

    const setOpeningGeometry = () => {
      const heroLogo = document.querySelector(".hero-logo");
      if (!heroLogo || !openingSheep) return;

      const logoRect = heroLogo.getBoundingClientRect();
      const sheepRect = openingSheep.getBoundingClientRect();
      const logoCenterX = logoRect.left + logoRect.width / 2;
      const logoCenterY = logoRect.top + logoRect.height / 2;
      const introLogoSize = Math.min(Math.max(logoRect.width * 0.38, 112), 190);
      const sheepStopRight = window.innerWidth - logoCenterX - sheepRect.width / 2;

      openingLoader.style.setProperty("--opening-logo-x", `${logoCenterX}px`);
      openingLoader.style.setProperty("--opening-logo-y", `${logoCenterY}px`);
      openingLoader.style.setProperty("--opening-logo-size", `${introLogoSize}px`);
      openingLoader.style.setProperty("--opening-sheep-stop-right", `${sheepStopRight}px`);
    };

    const morphLogoToHero = () => {
      const introLogo = openingLoader.querySelector(".opening-logo-reveal");
      const heroLogo = document.querySelector(".hero-logo");
      if (!introLogo || !heroLogo) return;

      const from = introLogo.getBoundingClientRect();
      const to = heroLogo.getBoundingClientRect();
      const toCenterX = to.left + to.width / 2;
      const toCenterY = to.top + to.height / 2;

      introLogo.style.position = "fixed";
      introLogo.style.left = `${toCenterX}px`;
      introLogo.style.top = `${toCenterY}px`;
      introLogo.style.width = `${from.width}px`;
      introLogo.style.height = `${from.height}px`;
      introLogo.style.transform = "translate(-50%, -50%)";
      introLogo.style.transition = "width 1500ms cubic-bezier(.16,.9,.18,1), height 1500ms cubic-bezier(.16,.9,.18,1), opacity 500ms ease";
      introLogo.style.zIndex = "10001";
      openingLoader.classList.add("is-morphing-logo");

      window.requestAnimationFrame(() => {
        introLogo.style.width = `${to.width}px`;
        introLogo.style.height = `${to.height}px`;
      });
    };

    const cycleSheepFrames = (frames) => {
      if (!openingSheepImage) return;
      let frameIndex = 0;
      openingSheepImage.src = frames[frameIndex];
      window.clearInterval(sheepFrameTimer);
      sheepFrameTimer = window.setInterval(() => {
        frameIndex = (frameIndex + 1) % frames.length;
        openingSheepImage.src = frames[frameIndex];
      }, 350);
    };

    const setSheepFrame = (frame) => {
      if (!openingSheepImage) return;
      window.clearInterval(sheepFrameTimer);
      openingSheepImage.src = frame;
    };

    // Ждём загрузки ключевых картинок + фона перед стартом анимации
    const preloadImages = [...runInFrames, sittingFrame, turnedFrame, ...runBackFrames, "assets/animation-bg.jpg"];
    let loadedCount = 0;
    const totalToLoad = preloadImages.length;
    let animationStarted = false;

    function startAnimation() {
      if (animationStarted) return;
      animationStarted = true;
      setOpeningGeometry();
      cycleSheepFrames(runInFrames);

      // 1.5s: овца добежала, села
      window.setTimeout(() => {
        openingSheep?.classList.add("is-sitting");
        setSheepFrame(sittingFrame);
      }, 1500);

      // 1.8s: стрижка
      window.setTimeout(() => {
        openingSheep?.classList.add("is-shearing");
        openingLoader.classList.add("is-shearing");
      }, 1800);

      // 2.6s: повернулась
      window.setTimeout(() => {
        setSheepFrame(turnedFrame);
      }, 2600);

      // 3.2s: убегает + логотип появляется
      window.setTimeout(() => {
        openingSheep?.classList.remove("is-sitting", "is-shearing");
        openingSheep?.classList.add("is-running-back");
        cycleSheepFrames(runBackFrames);
        openingLoader.classList.add("is-logo-ready");
      }, 3200);

      // 4.2s: морфинг логотипа
      window.setTimeout(() => {
        morphLogoToHero();
      }, 4200);

      // 5.0s: конец
      window.setTimeout(() => {
        window.clearInterval(sheepFrameTimer);
        openingLoader.classList.add("is-done");
        document.body.classList.remove("is-loading");
      }, 5000);

      // 5.7s: удаляем из DOM
      window.setTimeout(() => {
        openingLoader.remove();
      }, 5700);
    } // end startAnimation

    // Предзагрузка картинок, потом старт
    preloadImages.forEach(src => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount >= totalToLoad) startAnimation();
      };
      img.src = src;
    });
    // Фоллбэк — если за 4 сек не загрузились, стартуем всё равно
    window.setTimeout(() => {
      if (loadedCount < totalToLoad) startAnimation();
    }, 4000);

  } else {
    document.body.classList.remove("is-loading");
  }

  loadCart();

  // Подгрузить актуальные товары с сервера (если бекенд доступен)
  fetch("/api/products")
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        products.length = 0;
        data.forEach(p => products.push(p));
        renderProducts();
      }
    })
    .catch(() => { /* офлайн или нет бекенда — используем встроенные данные */ });

  renderProducts();
  renderCart();
  updateOrderText();

  // Обработчики для фильтров
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", (e) => {
      filterProducts(e.target.dataset.filter);
    });
  });

  // Обработчик для выбора доставки
  delivery.addEventListener("change", updateOrderText);

  // Обработчик для кнопки копирования
  document.querySelector("#copyOrder")?.addEventListener("click", () => {
    copyToClipboard(buildOrderText());
    showCopyNote("✓ Сообщение скопировано!");
  });

  // Очистка корзины
  document.querySelector("#cartClear")?.addEventListener("click", () => {
    cart.length = 0;
    renderCart();
    updateOrderText();
    saveCart();
    showCopyNote("Корзина очищена");
  });

  document.querySelector("#whatsappOrder")?.addEventListener("click", (e) => {
    e.preventDefault();
    const text = encodeURIComponent(buildOrderText());
    window.open(`https://wa.me/79280761765?text=${text}`, '_blank');
  });

  document.querySelector("#vkOrder")?.addEventListener("click", (e) => {
    e.preventDefault();
    copyToClipboard(buildOrderText());
    showCopyNote("✓ Текст скопирован — вставьте в сообщение ВК");
    window.open("https://vk.ru/zolotoe_runo_07", '_blank');
  });

  document.querySelector("#telegramOrder")?.addEventListener("click", (e) => {
    e.preventDefault();
    const text = encodeURIComponent(buildOrderText());
    window.open(`https://t.me/OlesyaBachieva?text=${text}`, '_blank');
  });

  document.querySelector("#instagramOrder")?.addEventListener("click", (e) => {
    e.preventDefault();
    copyToClipboard(buildOrderText());
    showCopyNote("✓ Текст скопирован — вставьте в Direct Instagram");
    window.open("https://www.instagram.com/zolotoe_runo_07?igsh=MThrbmZyYmE3cXE5cQ==", '_blank');
  });

  document.querySelector("#bipOrder")?.addEventListener("click", (e) => {
    e.preventDefault();
    copyToClipboard(buildOrderText());
    showCopyNote("✓ Текст скопирован — напишите в BiP: +7 928 076-17-65");
  });

  document.querySelector("#maxOrder")?.addEventListener("click", (e) => {
    e.preventDefault();
    copyToClipboard(buildOrderText());
    showCopyNote("✓ Текст скопирован — напишите в MAX: +7 928 076-17-65");
    window.open("https://max.ru/u/f9LHodD0cOI5XDlDiDhUOZ56ovKXUoKEQWQUyjUgkGesT8l0F2yveBIUrwM", '_blank');
  });

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const tempArea = document.createElement("textarea");
      tempArea.value = text;
      tempArea.style.position = "fixed";
      tempArea.style.opacity = "0";
      document.body.appendChild(tempArea);
      tempArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempArea);
    }
  }

  function showCopyNote(message, duration = 120000) {
    const copyNote = document.querySelector("#copyNote");
    if (copyNote) {
      copyNote.textContent = message;
      if (copyNote._timer) clearTimeout(copyNote._timer);
      if (duration > 0) {
        copyNote._timer = setTimeout(() => { copyNote.textContent = ""; }, duration);
      }
    }
  }

  // Обработчики для карусели работ
  let worksIsAnimating = false;

  function slideWorks(direction, changeIndex) {
    if (worksIsAnimating) return;
    worksIsAnimating = true;

    const slideOut = direction === "next" ? "is-sliding-left" : "is-sliding-right";
    const enterFrom = direction === "next" ? "is-entering-left" : "is-entering-right";

    // Phase 1: slide out current
    worksTape.classList.add(slideOut);

    window.setTimeout(() => {
      // Phase 2: update content, position for enter
      worksTape.classList.remove(slideOut);
      changeIndex();
      updateWorks();
      worksTape.classList.add(enterFrom);

      // Phase 3: trigger slide-in (next frame)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          worksTape.classList.remove(enterFrom);
          worksTape.classList.add("is-settled");

          window.setTimeout(() => {
            worksTape.classList.remove("is-settled");
            worksIsAnimating = false;
          }, 260);
        });
      });
    }, 200);
  }

  function updateWorks() {
    const prevIndex = (activeWorkIndex - 1 + works.length) % works.length;
    const nextIndex = (activeWorkIndex + 1) % works.length;

    worksImage.src = works[activeWorkIndex].image;
    worksImage.alt = works[activeWorkIndex].alt;
    worksCurrentAuthor.textContent = `Автор: ${works[activeWorkIndex].author}`;

    worksPrevImage.src = works[prevIndex].image;
    worksPrevImage.alt = works[prevIndex].alt;
    worksPrevAuthor.textContent = `Автор: ${works[prevIndex].author}`;

    worksNextImage.src = works[nextIndex].image;
    worksNextImage.alt = works[nextIndex].alt;
    worksNextAuthor.textContent = `Автор: ${works[nextIndex].author}`;

    worksCounter.textContent = `${activeWorkIndex + 1} / ${works.length}`;
    worksProgress.style.width = `${((activeWorkIndex + 1) / works.length) * 100}%`;

    // Предзагрузка +2 и -2 фото вперёд
    const preload1 = (activeWorkIndex + 2) % works.length;
    const preload2 = (activeWorkIndex - 2 + works.length) % works.length;
    new Image().src = works[preload1].image;
    new Image().src = works[preload2].image;
  }

  updateWorks();
  worksPrev.addEventListener("click", () => {
    slideWorks("prev", () => {
      activeWorkIndex = (activeWorkIndex - 1 + works.length) % works.length;
    });
  });
  worksNext.addEventListener("click", () => {
    slideWorks("next", () => {
      activeWorkIndex = (activeWorkIndex + 1) % works.length;
    });
  });

  // Swipe support for works gallery on mobile
  let touchStartX = 0;
  let touchEndX = 0;
  worksTape.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  worksTape.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        slideWorks("next", () => { activeWorkIndex = (activeWorkIndex + 1) % works.length; });
      } else {
        slideWorks("prev", () => { activeWorkIndex = (activeWorkIndex - 1 + works.length) % works.length; });
      }
    }
  }, { passive: true });

  // Scroll to top button
  const scrollTopBtn = document.querySelector("#scrollTop");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        scrollTopBtn.classList.add("is-visible");
      } else {
        scrollTopBtn.classList.remove("is-visible");
      }
    }, { passive: true });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Scroll reveal animations
  const revealElements = document.querySelectorAll(".section-head, .buyer-card, .product-card, .order-hero-content, .order-form, .cart-preview, .footer-brand, .footer-contacts, .footer-socials");
  revealElements.forEach(el => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  revealElements.forEach(el => revealObserver.observe(el));
});
