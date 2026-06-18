# Setup Verification Checklist

Use this checklist to verify your project is set up correctly.

## ✅ Pre-Setup Checks

- [ ] Node.js installed (`node --version` should show v16+)
- [ ] npm installed (`npm --version` should show version)
- [ ] MongoDB installed OR MongoDB Atlas account created
- [ ] Code editor open (VS Code recommended)

## ✅ File Structure Verification

### Root Level
- [ ] `kidrove-workshop/` folder exists
- [ ] `frontend/` folder exists
- [ ] `backend/` folder exists
- [ ] `README.md` exists
- [ ] `GETTING_STARTED.md` exists
- [ ] `DEPLOYMENT.md` exists
- [ ] `ARCHITECTURE.md` exists
- [ ] `PROJECT_SUMMARY.md` exists
- [ ] `package.json` exists
- [ ] `.gitignore` exists

### Frontend
- [ ] `frontend/src/components/` has 8 files:
  - [ ] Nav.jsx
  - [ ] Hero.jsx
  - [ ] Details.jsx
  - [ ] Outcomes.jsx
  - [ ] FAQ.jsx
  - [ ] RegistrationForm.jsx
  - [ ] Footer.jsx
  - [ ] RobotIllustration.jsx
- [ ] `frontend/src/styles/globals.css` exists
- [ ] `frontend/src/App.jsx` exists
- [ ] `frontend/src/main.jsx` exists
- [ ] `frontend/index.html` exists
- [ ] `frontend/vite.config.js` exists
- [ ] `frontend/package.json` exists

### Backend
- [ ] `backend/models/Enquiry.js` exists
- [ ] `backend/routes/enquiry.js` exists
- [ ] `backend/middleware/validation.js` exists
- [ ] `backend/server.js` exists
- [ ] `backend/.env` exists
- [ ] `backend/.env.example` exists
- [ ] `backend/package.json` exists

## ✅ Installation Steps

### Step 1: Install Dependencies
```bash
npm run install-all
```
- [ ] No errors during installation
- [ ] `frontend/node_modules/` created
- [ ] `backend/node_modules/` created

### Step 2: Verify MongoDB
**Local MongoDB:**
```bash
mongod --version
```
- [ ] MongoDB shows version

**Or start MongoDB service:**
- [ ] MongoDB service started (Windows Services or `brew services start mongodb-community`)

**Or MongoDB Atlas:**
- [ ] Account created at mongodb.com/cloud/atlas
- [ ] Connection string copied to `backend/.env`

## ✅ Environment Configuration

### Backend .env File
- [ ] Open `backend/.env`
- [ ] Verify these keys exist:
  - [ ] `PORT=5000`
  - [ ] `NODE_ENV=development`
  - [ ] `MONGODB_URI=mongodb://localhost:27017/kidrove` (or your Atlas URI)
  - [ ] `FRONTEND_URL=http://localhost:5173`

## ✅ Server Startup Tests

### Test Backend
```bash
cd backend
npm run dev
```
- [ ] Terminal shows: "Server running on http://localhost:5000"
- [ ] Terminal shows: "MongoDB connected"
- [ ] No error messages

**In another terminal:**
```bash
curl http://localhost:5000/api/health
```
- [ ] Response: `{"status":"API is running"}`

### Test Frontend
```bash
cd frontend
npm run dev
```
- [ ] Terminal shows: "VITE v5.0.8 ready in XXX ms"
- [ ] Terminal shows: "http://localhost:5173"
- [ ] Browser opens automatically to localhost:5173

## ✅ UI Verification

Visit http://localhost:5173 and verify:

### Navigation
- [ ] Kidrove logo visible at top
- [ ] "Enroll Now" button in nav bar
- [ ] Page scrolls smoothly

### Hero Section
- [ ] Main headline visible: "AI & Robotics Summer Workshop"
- [ ] Description text visible
- [ ] "Enroll Now" button visible
- [ ] "See What They'll Learn" button visible
- [ ] Robot illustration visible (on desktop)
- [ ] Floating cards with animations visible

### Workshop Details Section
- [ ] 5 detail cards visible:
  - [ ] Age Group: 8–14 Years
  - [ ] Duration: 4 Weeks
  - [ ] Mode: Online
  - [ ] Start Date: 15 July 2026
  - [ ] Fee: ₹2,999 (highlighted)

### Learning Outcomes Section
- [ ] "What your child will gain" title visible
- [ ] 6 numbered outcome cards visible:
  - [ ] Build a Real Robot
  - [ ] Learn Block & Python Coding
  - [ ] Understand AI Concepts
  - [ ] Design Thinking Skills
  - [ ] Teamwork & Project Presentation
  - [ ] Certificate of Completion

### FAQ Section
- [ ] "Got questions?" title visible
- [ ] 5 FAQ items visible (collapsed)
- [ ] Click FAQ item to expand
- [ ] Content appears smoothly
- [ ] Click again to collapse

### Registration Section
- [ ] "Reserve your child's spot" title visible
- [ ] Form card visible
- [ ] Three input fields visible:
  - [ ] Full Name
  - [ ] Email Address
  - [ ] Phone Number
- [ ] "Reserve My Spot →" button visible

### Footer
- [ ] Footer visible at bottom
- [ ] Copyright text visible
- [ ] Website link visible

## ✅ Form Testing

1. **Empty Form Test**
   - [ ] Click "Reserve My Spot" without filling fields
   - [ ] Error messages appear for all fields
   - [ ] Page doesn't submit

2. **Invalid Email Test**
   - [ ] Fill: Name = "Test", Email = "notanemail", Phone = "+919876543210"
   - [ ] Click submit
   - [ ] Error appears: "Enter a valid email"

3. **Invalid Phone Test**
   - [ ] Fill: Name = "Test", Email = "test@example.com", Phone = "123"
   - [ ] Click submit
   - [ ] Error appears: "Enter a valid phone number"

4. **Valid Submission Test**
   - [ ] Fill: 
     - Name = "John Doe"
     - Email = "john@example.com"
     - Phone = "+91 9876543210"
   - [ ] Click submit
   - [ ] Loading spinner appears briefly
   - [ ] Success message appears: "You're registered!"
   - [ ] Form clears

5. **Duplicate Email Test**
   - [ ] Fill the form with same email as before
   - [ ] Click submit
   - [ ] Error message appears: "This email has already been registered"

## ✅ MongoDB Verification

### Using MongoDB Compass (Optional)

1. [ ] Download MongoDB Compass from mongodb.com/products/compass
2. [ ] Open Compass
3. [ ] Connect to: `mongodb://localhost:27017`
4. [ ] View database: `kidrove`
5. [ ] View collection: `enquiries`
6. [ ] See submitted form data:
   - [ ] name
   - [ ] email
   - [ ] phone
   - [ ] createdAt

### Using MongoDB Shell
```bash
mongo
use kidrove
db.enquiries.find()
```
- [ ] Shows submitted registrations

## ✅ Responsive Design Testing

### Desktop (1200px+)
- [ ] Two-column hero with robot visible
- [ ] All content readable
- [ ] Buttons properly sized

### Tablet (600px - 900px)
- [ ] Single column layout
- [ ] Hero text centered
- [ ] Form responsive
- [ ] All readable

### Mobile (<600px)
- [ ] Single column layout
- [ ] Touch-friendly buttons
- [ ] Smooth scrolling
- [ ] No horizontal scroll

## ✅ Browser Compatibility

Test in:
- [ ] Chrome / Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

All should show:
- [ ] Same layout
- [ ] Smooth animations
- [ ] Functional forms

## ✅ Performance Check

### Frontend
- [ ] Page loads in <2 seconds
- [ ] Smooth scrolling
- [ ] No jank when scrolling

### Backend
- [ ] Form submission takes <1 second
- [ ] No console errors
- [ ] Database writes successful

## ✅ Final Checklist

- [ ] Both servers running without errors
- [ ] Frontend displays all sections
- [ ] Form validation works
- [ ] Form submission successful
- [ ] Data saved to MongoDB
- [ ] Responsive on all devices
- [ ] No console errors
- [ ] Success messages display correctly

## ✅ Ready for Submission

- [ ] All tests passed above
- [ ] Code pushed to GitHub
- [ ] Deployment tested (optional)
- [ ] README updated if needed
- [ ] Screenshots taken (optional)
- [ ] Submission notes prepared

---

## 🎉 If All Checks Pass

Your project is ready! You can:
1. Deploy to production (see DEPLOYMENT.md)
2. Submit for grading
3. Customize further with your own branding

## ⚠️ If Something Fails

1. Check the specific error message
2. Review GETTING_STARTED.md troubleshooting section
3. Verify .env file configuration
4. Restart servers
5. Clear browser cache (Ctrl+Shift+Delete)
6. Check console for detailed errors

---

**Total Setup Time**: ~15-20 minutes
**Estimated Test Time**: ~10-15 minutes

Good luck! 🚀
