# Kidrove AI & Robotics Summer Workshop

A full-stack landing page for Kidrove's AI & Robotics summer workshop with online registration form. Built as a single-page React application with an Express.js backend that stores registrations in a local JSON file.

---

## 🎯 Features

- **Hero Section** — Eye-catching headline with animated robot illustration and CTA buttons
- **Workshop Details** — 5 info cards (Age group, Duration, Mode, Start date, Fee)
- **Learning Outcomes** — 6 skill outcomes students will gain
- **FAQ Section** — 5 expandable/collapsible FAQs
- **Registration Form** — Client + server-side validation, duplicate-email prevention, success/error feedback
- **Responsive Design** — Works on mobile, tablet, and desktop
- **Local Data Storage** — No external database needed; data saved to JSON file

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2** — Component-based UI library
- **Vite 5.0** — Fast dev server and build tool
- **Vanilla CSS** — Custom styling with CSS variables and responsive media queries

### Backend
- **Node.js** — JavaScript runtime
- **Express 4.18** — Web framework for REST API
- **CORS** — Cross-origin resource sharing middleware
- **dotenv** — Environment variable management
- **Nodemon** (dev) — Auto-restart on file changes

### Storage
- **JSON file** (`backend/db/enquiries.json`) — Simple file-based persistence using Node.js `fs` module

---

## 📂 Project Structure

```
kidrove-workshop/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Nav.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Details.jsx
│   │   │   ├── Outcomes.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── RegistrationForm.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── RobotIllustration.jsx
│   │   ├── styles/globals.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/
│   ├── db/enquiries.json        # Local data storage
│   ├── middleware/validation.js
│   ├── routes/enquiry.js
│   ├── storage.js               # File I/O helper
│   ├── server.js
│   ├── .env.example
│   └── package.json
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```powershell
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Setup

Create `backend/.env` (copy from `.env.example`):

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Run the App

**Terminal 1 — Backend:**
```powershell
cd backend
npm run dev
```
Server runs at `http://localhost:5000`

**Terminal 2 — Frontend:**
```powershell
cd frontend
npm run dev
```
App runs at `http://localhost:5173`

Open `http://localhost:5173` in your browser.

---

## 🔌 API Endpoints

| Method | Endpoint            | Description                       |
|--------|---------------------|-----------------------------------|
| GET    | `/api/health`       | Health check                      |
| POST   | `/api/enquiry`      | Submit registration form          |
| GET    | `/api/enquiry`      | Fetch all registrations           |

### Example Request

```bash
POST /api/enquiry
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+919876543210"
}
```

### Example Response

```json
{
  "success": true,
  "message": "Registration successful! We will contact you within 24 hours.",
  "data": {
    "id": "1781976754986",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "+919876543210",
    "createdAt": "2026-06-20T17:32:34.986Z"
  }
}
```

---

## ✅ Validation Rules

- **Name** — Required, non-empty
- **Email** — Required, valid format (`user@domain.tld`), must be unique
- **Phone** — Required, 7–15 digits, supports `+`, spaces, dashes, parentheses

---

## 📄 License

MIT — see [LICENSE](LICENSE).
