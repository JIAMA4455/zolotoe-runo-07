const express = require("express");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Конфиг
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "runo07admin";
const ADMIN_PASSWORD_HASH = bcrypt.hashSync(ADMIN_PASSWORD, 10);
const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(32).toString("hex");

// Простая сессия в памяти
const sessions = new Set();

// --- Middleware ---
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Статика сайта
app.use(express.static(__dirname, {
  index: "index.html",
  extensions: ["html"]
}));

// --- Данные товаров ---
const PRODUCTS_FILE = path.join(__dirname, "data", "products.json");

function ensureDataFile() {
  const dir = path.dirname(PRODUCTS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(PRODUCTS_FILE)) {
    const defaultProducts = [
      { id: "crossbred-purple", breed: "Кроссбред", type: "Кардочесная лента", color: "фиолетовый", microns: "18-20", price: 1100, weight: 500, image: "assets/crossbred-purple.jpg", available: true },
      { id: "crossbred-green", breed: "Кроссбред", type: "Кардочесная лента", color: "зеленый", microns: "18-20", price: 1100, weight: 500, image: "assets/crossbred-green.jpg", available: true },
      { id: "crossbred-black", breed: "Кроссбред", type: "Кардочесная лента", color: "черный", microns: "18-20", price: 1100, weight: 500, image: "assets/crossbred-black.jpg", available: true },
      { id: "crossbred-yellow", breed: "Кроссбред", type: "Кардочесная лента", color: "желтый", microns: "18-20", price: 1100, weight: 500, image: "assets/crossbred-yellow.jpg", available: true },
      { id: "crossbred-white-1", breed: "Кроссбред", type: "Кардочесная лента", color: "белый", microns: "18-20", price: 1100, weight: 500, image: "assets/crossbred-white-1.jpg", available: true },
      { id: "crossbred-white-2", breed: "Кроссбред", type: "Кардочесная лента", color: "белый", microns: "20-22", price: 1100, weight: 500, image: "assets/crossbred-white-2.jpg", available: true },
      { id: "crossbred-red", breed: "Кроссбред", type: "Кардочесная лента", color: "красный", microns: "18-20", price: 1100, weight: 500, image: "assets/crossbred-red.jpg", available: true },
      { id: "crossbred-pink", breed: "Кроссбред", type: "Кардочесная лента", color: "розовый", microns: "18-20", price: 1100, weight: 500, image: "assets/crossbred-pink.jpg", available: true }
    ];
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(defaultProducts, null, 2), "utf8");
  }
}
ensureDataFile();

function loadProducts() {
  return JSON.parse(fs.readFileSync(PRODUCTS_FILE, "utf8"));
}

function saveProducts(products) {
  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), "utf8");
}

// --- Аутентификация ---
function requireAuth(req, res, next) {
  const token = req.cookies.admin_token;
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ error: "Не авторизован" });
  }
  next();
}

app.post("/api/login", (req, res) => {
  const { password } = req.body;
  if (!password || !bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
    return res.status(401).json({ error: "Неверный пароль" });
  }
  const token = crypto.randomBytes(32).toString("hex");
  sessions.add(token);
  res.cookie("admin_token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 дней
  });
  res.json({ ok: true });
});

app.post("/api/logout", (req, res) => {
  const token = req.cookies.admin_token;
  if (token) sessions.delete(token);
  res.clearCookie("admin_token");
  res.json({ ok: true });
});

app.get("/api/me", (req, res) => {
  const token = req.cookies.admin_token;
  res.json({ authenticated: !!(token && sessions.has(token)) });
});

// --- CRUD товаров ---
app.get("/api/products", (req, res) => {
  res.json(loadProducts());
});

app.put("/api/products", requireAuth, (req, res) => {
  const products = req.body;
  if (!Array.isArray(products)) return res.status(400).json({ error: "Ожидается массив" });
  saveProducts(products);
  res.json({ ok: true });
});

app.post("/api/products", requireAuth, (req, res) => {
  const products = loadProducts();
  const newProduct = req.body;
  if (!newProduct.id) newProduct.id = "product-" + Date.now();
  products.push(newProduct);
  saveProducts(products);
  res.json({ ok: true, product: newProduct });
});

app.delete("/api/products/:id", requireAuth, (req, res) => {
  let products = loadProducts();
  products = products.filter(p => p.id !== req.params.id);
  saveProducts(products);
  res.json({ ok: true });
});

// --- Загрузка изображений ---
const UPLOAD_DIR = path.join(__dirname, "assets");
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const upload = multer({
  storage: multer.diskStorage({
    destination: UPLOAD_DIR,
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      const safeExt = [".jpg", ".jpeg", ".png", ".webp"].includes(ext) ? ext : ".jpg";
      const name = "product-" + Date.now() + "-" + Math.round(Math.random() * 1e6) + safeExt;
      cb(null, name);
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 МБ макс
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    cb(null, allowed.includes(file.mimetype));
  }
});

const sharp = require("sharp");

app.post("/api/upload", requireAuth, (req, res, next) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      console.error("Multer error:", err);
      return res.status(400).json({ error: "Ошибка загрузки: " + err.message });
    }
    next();
  });
}, async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "Файл не загружен" });
  
  const inputPath = req.file.path;
  const outputName = "product-" + Date.now() + "-" + Math.round(Math.random() * 1e6) + ".jpg";
  const outputPath = path.join(UPLOAD_DIR, outputName);

  try {
    await sharp(inputPath)
      .resize(1600, 2000, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 92 })
      .toFile(outputPath);

    // Удалить оригинал если он отличается
    if (inputPath !== outputPath) {
      fs.unlinkSync(inputPath);
    }

    res.json({ path: "assets/" + outputName });
  } catch (err) {
    console.error("Sharp error:", err);
    // Если sharp не смог — отдаём оригинал
    res.json({ path: "assets/" + req.file.filename });
  }
});

// --- "Хочу" голоса ---
const WANTS_FILE = path.join(__dirname, "data", "wants.json");

function loadWants() {
  if (!fs.existsSync(WANTS_FILE)) return {};
  return JSON.parse(fs.readFileSync(WANTS_FILE, "utf8"));
}

function saveWants(wants) {
  const dir = path.dirname(WANTS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(WANTS_FILE, JSON.stringify(wants, null, 2), "utf8");
}

// Получить все голоса (для админки)
app.get("/api/wants", requireAuth, (req, res) => {
  res.json(loadWants());
});

// Удалить запрос "Хочу"
app.delete("/api/wants/:productId", requireAuth, (req, res) => {
  const wants = loadWants();
  const productId = decodeURIComponent(req.params.productId);
  if (wants[productId]) {
    delete wants[productId];
    saveWants(wants);
    res.json({ ok: true });
  } else {
    res.status(404).json({ error: "Запрос не найден" });
  }
});

// Проголосовать "Хочу" (1 IP = 1 голос на товар)
app.post("/api/wants/:productId", (req, res) => {
  const { productId } = req.params;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
  
  const wants = loadWants();
  if (!wants[productId]) wants[productId] = { count: 0, ips: [] };
  
  if (wants[productId].ips.includes(ip)) {
    return res.status(429).json({ error: "Вы уже голосовали за этот товар", count: wants[productId].count });
  }
  
  wants[productId].ips.push(ip);
  wants[productId].count++;
  saveWants(wants);
  
  res.json({ ok: true, count: wants[productId].count });
});

// Получить количество голосов (публичное, без IP)
app.get("/api/wants/count", (req, res) => {
  const wants = loadWants();
  const counts = {};
  Object.keys(wants).forEach(id => { counts[id] = wants[id].count; });
  res.json(counts);
});

// --- Защита /admin ---
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  console.log(`📝 Админка: http://localhost:${PORT}/admin`);
  console.log(`🔑 Пароль по умолчанию: runo07admin`);
});
