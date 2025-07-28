# ByteTalk 💬

ByteTalk is a full-stack, real-time messaging application built with the MERN stack and powered by Socket.IO for instant communication. Designed for speed, simplicity, and extendability, ByteTalk is a playground for learning modern web technologies while building something useful.

## ✨ Features

- 🔐 JWT-based user authentication
- 💬 Real-time messaging with Socket.IO
- 🧑‍🤝‍🧑 Contact management and chat threads
- 💾 Message history stored in MongoDB
- 🎨 Responsive UI built with [Mantine](https://mantine.dev) or Tailwind CSS
- 🚀 Deployed with Vercel (frontend) & Render (backend)

## 🛠 Tech Stack

| Layer      | Tech                     |
|------------|--------------------------|
| Frontend   | React + Vite             |
| UI Library | Mantine or Tailwind CSS  |
| Backend    | Node.js + Express        |
| Realtime   | Socket.IO                |
| Database   | MongoDB + Mongoose       |
| Auth       | JWT (JSON Web Tokens)    |
| Hosting    | Vercel & Render          |

## 📦 File Structure

ByteTalk/
├── client/ # React frontend
├── server/ # Express backend with Socket.IO
├── README.md
└── package.json (with concurrently)

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/ByteTalk.git
cd ByteTalk
```

### 2. Install Dependencies
cd client && npm install
cd ../server && npm install

## 3. Create .enc in server/
PORT=6969
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

### 4. Run in development

```
npm run dev
```

---

### Deployment

    Frontend: Deploy on Vercel

    Backend: Deploy on Render or Railway

    Ensure CORS and environment variables are correctly configured.

📅 Dev Roadmap
Day	Goal
1	Project scaffolding + GitHub setup
2	Auth system (register/login)
3	Real-time chat logic with Socket.IO
4	Contact system + message history
5	Mobile UI + feature polish
6	Deploy
7	Polish, bug fixes, bonus features
🤝 License

MIT License — use freely, contribute if you want!
