# MexusJS Blog

> Modular blog platform built on NexusJS (mexusjs) + Express, Sequelize, Handlebars, Cloudinary & Multer.

## 🧩 Overview
**MexusJS Blog** is a modular, production-ready blogging platform scaffolded with [`nathius262/mexusjs`](https://github.com/nathius262/mexusjs-blog).  
It combines Express for routing, Sequelize for database modeling, Express-Handlebars for server-side rendering, Multer for file uploads, and Cloudinary for cloud-based media management.

The project emphasizes:
- Clear **module boundaries** (Posts, Categories, Comments, Users, Roles)
- **Scalability** and **testability**
- **Separation of concerns** via NexusJS module structure
- **Production readiness** with environment-based configs and cloud storage

---

## ⚙️ Tech Stack
- **Node.js + Express** – Backend server
- **MexusJS (NexusJS modularity)** – Project structure and modular loading
- **Sequelize ORM** – Data modeling for Postgres/MySQL
- **Express-Handlebars** – Server-side view engine
- **Multer + Cloudinary** – File uploads and cloud media storage
- **dotenv** – Environment variable management

---

## 🚀 Features
- 🧱 Modular architecture powered by MexusJS
- 🗂️ CRUD for posts, categories, and tags
- 👥 User authentication (JWT + sessions)
- 🖼️ Image upload & optimization (Multer + Cloudinary)
- 🧭 Server-side rendered pages using Handlebars
- 🧩 Admin module with role-based access
- 🧪 Test-friendly and scalable design

---

## 📁 Project Structure (planned)
```
mexusjs-blog/
├── modules/
│   ├── post/
│   ├── user/
│   ├── category/
│   └── comment/
├── config/
├── public/
├── views/
├── .env.example
├── package.json
└── README.md
```

---

## 🧰 Getting Started

### 1. Clone & install
```bash
git clone https://github.com/your-username/mexusjs-blog.git
cd mexusjs-blog
npm install
```

### 2. Configure environment
Create a `.env` file based on `.env.example`:
```bash
PORT=5000
NODE_ENV=development
DATABASE_URL=postgres://user:pass@localhost:5432/mexus_blog
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

### 3. Run in dev mode
```bash
npm run dev
```

---

## 🧑‍💻 Contributing
Contributions are welcome!  
Fork, create a branch, and open a PR with clear commits.

---

## 📜 License
Licensed under the [MIT License](LICENSE).
