# GETTING STARTED - Kidrove Workshop

## Quick Setup (5 minutes)

### Step 1: Install Node Modules
```bash
# From root directory
npm run install-all
```

### Step 2: Start MongoDB (if using locally)

**Option A: Using Docker**
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

**Option B: Using MongoDB Community Edition**
- Download from: https://www.mongodb.com/try/download/community
- Follow installation guide for your OS
- Ensure MongoDB service is running

**Option C: Using MongoDB Atlas (Cloud)**
- Create account at https://www.mongodb.com/cloud/atlas
- Create a cluster and get connection string
- Update `backend/.env` with your connection string

### Step 3: Start the Project

**Using NPM from root (requires concurrently):**
```bash
npm install -D concurrently
npm run dev
```

**Or start manually (recommended for first time):**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

### Step 4: Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/api/health

## Testing the Form

1. Open http://localhost:5173 in your browser
2. Scroll to "Register" section or click "Enroll Now"
3. Fill in the form:
   - Name: Enter any name
   - Email: Use a valid email format (e.g., test@example.com)
   - Phone: Enter a valid phone (e.g., +91 9876543210 or 7654321098)
4. Click "Reserve My Spot"
5. You should see a success message

## Troubleshooting

### Frontend not loading?
- Check if port 5173 is available
- Clear browser cache (Ctrl+Shift+Delete)
- Restart frontend dev server

### API errors?
- Ensure backend is running on port 5000
- Check backend console for error messages
- Verify MongoDB is running

### MongoDB Connection Error?
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
This means MongoDB is not running. Start it using the options in Step 2.

### Port already in use?
- Change port in vite.config.js (frontend)
- Change port in server.js or .env (backend)

## Project Structure Summary

```
kidrove-workshop/
├── frontend/              # React app (runs on 5173)
├── backend/               # Express API (runs on 5000)
├── package.json          # Root scripts
├── README.md             # Full documentation
└── .gitignore
```

## Available Scripts

### Root Level
```bash
npm run install-all       # Install all dependencies
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start only frontend
npm run dev:backend      # Start only backend
npm run build            # Build for production
npm run start            # Start backend (production)
```

### Frontend (cd frontend)
```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
```

### Backend (cd backend)
```bash
npm run dev              # Start with nodemon
npm start                # Start production server
```

## Next Steps

1. **Test the Form**: Fill out the registration form and check if data is saved to MongoDB
2. **Check Database**: Use MongoDB Compass or shell to view saved enquiries
3. **Deploy**: See README.md for deployment instructions
4. **Customize**: Update colors, text, and branding as needed

## MongoDB Compass (Optional but Recommended)

Download MongoDB Compass to visualize your database:
1. Download from: https://www.mongodb.com/products/compass
2. Connect to: mongodb://localhost:27017
3. View "kidrove" database and "enquiries" collection

## Key Endpoints

| Method | URL | Purpose |
|--------|-----|---------|
| POST | /api/enquiry | Submit registration |
| GET | /api/enquiry | View all registrations (admin) |
| GET | /api/health | Check API status |

## Need Help?

Check the full README.md for:
- Detailed API documentation
- Deployment instructions
- Project architecture
- Tech stack details
