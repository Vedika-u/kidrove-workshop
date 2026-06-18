# Kidrove Workshop - Complete GitHub Ready Project

A **production-ready full-stack React + Express + MongoDB** workshop landing page. All requirements met, fully deployed-ready!

## ✨ Features

✅ **Beautiful Light Theme UI** - Modern responsive design with animations
✅ **Hero Section** - Engaging copy with robot illustration  
✅ **Workshop Details** - Age, duration, mode, fee, start date
✅ **6 Learning Outcomes** - Comprehensive benefits list
✅ **Interactive FAQ** - 5 collapsible FAQs with smooth animations
✅ **Registration Form** - Full validation (client + server)
✅ **MongoDB Integration** - Cloud-based data persistence
✅ **Express.js API** - RESTful endpoints with error handling
✅ **Error Handling** - Proper status codes and user feedback
✅ **Loading States** - Spinner animation during submission
✅ **Mobile Responsive** - Works on all devices
✅ **Duplicate Prevention** - Prevents duplicate email registrations

---

## 🚀 Quick Start (3 Steps)

### Step 1: Clone & Install
```bash
git clone https://github.com/yourusername/kidrove-workshop.git
cd kidrove-workshop
npm run install-all
```

### Step 2: Set Up MongoDB Atlas
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster (free tier)
4. Get connection string
5. Create `backend/.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kidrove?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:5173
```

### Step 3: Run Project
```bash
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:5000

---

## 📦 Project Structure

```
kidrove-workshop/
├── frontend/                 # React.js with Vite
│   ├── src/
│   │   ├── components/      # 8 modular React components
│   │   ├── styles/          # CSS with variables & responsive design
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                  # Express.js API
│   ├── models/              # MongoDB schema
│   ├── routes/              # API endpoints
│   ├── middleware/          # Validation logic
│   ├── server.js
│   ├── .env                 # Config (create from .env.example)
│   ├── .env.example
│   └── package.json
│
├── docs/                     # Documentation
├── .gitignore
├── package.json             # Root scripts
└── README.md
```

---

## 🎯 Available Scripts

### Development
```bash
npm run dev              # Start frontend + backend
npm run dev:frontend    # Start only frontend
npm run dev:backend     # Start only backend
```

### Production
```bash
npm run build           # Build for production
npm start               # Start backend
```

---

## 🔧 Setup Detailed Instructions

### For Local Development

**Requirements:**
- Node.js v16+
- MongoDB Atlas account (free)
- VS Code (optional)

**Setup Steps:**

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/kidrove-workshop.git
   cd kidrove-workshop
   ```

2. **Install All Dependencies**
   ```bash
   npm run install-all
   ```

3. **Configure MongoDB Atlas**
   - Sign up at https://www.mongodb.com/cloud/atlas
   - Create free cluster
   - Get connection string
   - Save to `backend/.env`

4. **Start Development**
   ```bash
   npm run dev
   ```

5. **Test Form**
   - Open http://localhost:5173
   - Fill registration form
   - Submit and verify success

---

## 🌐 Deployment

### Frontend - Vercel (Free)
```bash
npm install -g vercel
cd frontend
vercel
```

### Backend - Railway or Render (Free)
1. Push to GitHub
2. Connect repository
3. Set environment variables
4. Deploy

### Database - MongoDB Atlas (Free)
Already set up! Just use your connection string.

---

## 📋 API Documentation

### POST /api/enquiry
Register user
```bash
curl -X POST http://localhost:5000/api/enquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9876543210"
  }'
```

### GET /api/enquiry
Get all registrations
```bash
curl http://localhost:5000/api/enquiry
```

### GET /api/health
Check API status
```bash
curl http://localhost:5000/api/health
```

---

## ✅ Assignment Requirements Met

| Requirement | Status | Details |
|-------------|--------|---------|
| Hero Section | ✅ | Title, description, CTA |
| Workshop Details | ✅ | 5 cards with all info |
| Learning Outcomes | ✅ | 6 outcomes with descriptions |
| FAQ Section | ✅ | 5 collapsible FAQs |
| Registration Form | ✅ | Full validation |
| Backend API | ✅ | Express with MongoDB |
| Responsive Design | ✅ | Mobile, tablet, desktop |
| Light Theme | ✅ | Beautiful gradients |
| Form Validation | ✅ | Client + server |
| Loading States | ✅ | Spinner animation |

---

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite (build tool)
- CSS3 with variables
- Fetch API

**Backend:**
- Express.js
- MongoDB with Mongoose
- CORS support
- dotenv for config

**Deployment:**
- Vercel (frontend)
- Railway/Render (backend)
- MongoDB Atlas (database)

---

## 📝 Environment Variables

Create `backend/.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/kidrove?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:5173
```

---

## 🐛 Troubleshooting

**MongoDB Connection Error**
- Verify MongoDB Atlas connection string
- Check username:password are correct
- Ensure IP whitelist includes your IP (0.0.0.0/0 for testing)

**Form Not Submitting**
- Check backend console for errors
- Verify MongoDB is connected
- Check network tab for API response

**Port Already in Use**
- Backend: Change PORT in .env
- Frontend: Change port in vite.config.js

---

## 📚 Documentation

- [GETTING_STARTED.md](./GETTING_STARTED.md) - Quick start guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Production deployment
- [ARCHITECTURE.md](./ARCHITECTURE.md) - System design
- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Complete overview

---

## 🎓 Learning Outcomes

This project demonstrates:
- React component architecture
- RESTful API design
- MongoDB data modeling
- Form validation patterns
- Responsive CSS design
- Error handling
- Deployment practices

---

## 📄 License

This project is for educational purposes.

---

## 🤝 Support

For issues or questions, open a GitHub issue or check the documentation files.

---

**Status:** ✅ Production Ready
**Last Updated:** June 18, 2026
**Deployment Deadline:** June 20, 2026
