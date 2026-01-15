// server.js
import fs from 'fs';
import bodyParser from 'body-parser';
import jsonServer from 'json-server';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Настройка путей для ES Modules (так как у нас vite/react проект)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Настраиваем папку для статики (чтобы картинки открывались в браузере)
// Файлы будут доступны по адресу: http://localhost:3001/uploads/имя_файла
const middlewares = jsonServer.defaults({ static: path.join(__dirname, 'public') });

server.use(middlewares);
server.use(bodyParser.json());

// --- НАСТРОЙКА MULTER (ЗАГРУЗКА ФАЙЛОВ) ---

// 1. Указываем, куда сохранять файлы
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'public/uploads');
    // Если папки нет, создадим её
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Генерируем уникальное имя (дата + оригинал), чтобы файлы не перезатирались
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// 2. Создаем эндпоинт POST /upload
// 'avatar' — это имя поля в FormData, которое мы будем отправлять с фронта
server.post('/upload', upload.single('avatar'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Файл не загружен' });
  }
  
  // Возвращаем фронтенду ПУТЬ к файлу
  // url: '/uploads/17000000-image.jpg'
  res.json({ url: `/uploads/${req.file.filename}` });
});

// --- КОНЕЦ НАСТРОЙКИ ФАЙЛОВ ---

server.use(router);

server.listen(3001, () => {
  console.log('JSON Server + Upload is running on port 3001');
});