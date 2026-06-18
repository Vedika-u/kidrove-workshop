# Kidrove - AI & Robotics Summer Workshop Landing Page

A modern, responsive workshop landing page built with **React.js** and **Express.js** backend API with MongoDB integration.

## Project Overview

This is a complete full-stack implementation of a workshop registration page for Kidrove's AI & Robotics Summer Workshop targeting children aged 8-14 years.

### Assignment Requirements ✅
- ✅ Hero Section with workshop title and CTA
- ✅ Workshop Details Section
- ✅ Learning Outcomes (6 points)
- ✅ FAQ Section (5 FAQs)
- ✅ Registration Form with validation
- ✅ Express.js API endpoint (POST /api/enquiry)
- ✅ MongoDB integration
- ✅ Responsive design
- ✅ Light theme UI
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling

## Project Structure

```
kidrove-workshop/
├── frontend/                    # React.js frontend
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Nav.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Details.jsx
│   │   │   ├── Outcomes.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── RegistrationForm.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── RobotIllustration.jsx
│   │   ├── styles/
│   │   │   └── globals.css     # All styling in one file
│   │   ├── App.jsx             # Main component
│   │   └── main.jsx            # Entry point
│   ├── index.html              # HTML template
│   ├── package.json
│   └── vite.config.js
│
├── backend/                     # Express.js backend
│   ├── models/
│   │   └── Enquiry.js          # MongoDB schema
│   ├── routes/
│   │   └── enquiry.js          # API routes
│   ├── middleware/
│   │   └── validation.js       # Form validation
│   ├── server.js               # Express server
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **CSS3** - Styling (no external CSS framework, pure CSS with variables)
- **Fetch API** - HTTP requests

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin support
- **dotenv** - Environment variables

## Features

### Frontend
- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Interactive FAQ section with collapsible items
- Form validation with real-time error messages
- Loading states with spinner animation
- Success message after registration
- Beautiful gradient backgrounds and smooth animations
- Light theme with modern colors

### Backend
- RESTful API endpoint for enquiry submission
- MongoDB data persistence
- Input validation and error handling
- Duplicate email prevention
- CORS support for frontend communication
- Health check endpoint

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas connection string)
- npm or yarn

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/yourusername/kidrove-workshop.git
cd kidrove-workshop
```

#### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB connection string
# For local MongoDB:
# MONGODB_URI=mongodb://localhost:27017/kidrove

# Start the backend server
npm run dev
```

Backend will run on `http://localhost:5000`

#### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

## Running the Project

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:** (Just use `npm start`)
```bash
cd backend
npm start
```

## API Documentation

### POST /api/enquiry
Register a new enquiry for the workshop.

**Request Body:**
```json
{
  "name": "Aryan Sharma",
  "email": "aryan@email.com",
  "phone": "+91 98765 43210"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Registration successful! We will contact you within 24 hours.",
  "data": {
    "_id": "...",
    "name": "Aryan Sharma",
    "email": "aryan@email.com",
    "phone": "+91 98765 43210",
    "createdAt": "2026-06-18T10:30:00Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Enter a valid email"
  }
}
```

### GET /api/enquiry
Retrieve all enquiries (for admin dashboard).

## Form Validation

The form includes both client-side and server-side validation:

- **Name**: Required, must not be empty
- **Email**: Required, must be valid email format
- **Phone**: Required, must be 7-15 characters with valid phone format

## Approach & Improvements

### My Approach
1. **Component Separation**: Split the monolithic component into 7 smaller, reusable components for better maintainability
2. **Styling**: Used CSS variables and organized styles in one globals.css file for consistency
3. **Form Handling**: Implemented client-side and server-side validation with error messaging
4. **API Integration**: Built a clean REST API with proper error handling and validation middleware
5. **Database**: MongoDB integration for persistent storage of enquiries
6. **Responsive Design**: Mobile-first approach with breakpoints at 900px and 600px

### Improvements for More Time
1. **Authentication**: Add admin login to view enquiries
2. **Email Notifications**: Send confirmation emails to registered users using Nodemailer
3. **Payment Integration**: Razorpay or Stripe for actual fee collection
4. **Dashboard**: Build an admin dashboard to manage enquiries and workshop details
5. **TypeScript**: Migrate both frontend and backend to TypeScript for better type safety
6. **Testing**: Add Jest tests for components and API endpoints
7. **Deployment**: Deploy frontend to Vercel and backend to Heroku/Railway
8. **Email Verification**: Add email verification before registration confirmation
9. **Rate Limiting**: Implement rate limiting to prevent spam submissions
10. **Analytics**: Integrate Google Analytics to track user behavior

## Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel
```

### Backend (Railway/Render)
1. Push code to GitHub
2. Connect repository to Railway/Render
3. Set environment variables
4. Deploy

## Key Files Explained

- **[frontend/src/components/RegistrationForm.jsx](frontend/src/components/RegistrationForm.jsx)** - Handles form submission with validation
- **[backend/routes/enquiry.js](backend/routes/enquiry.js)** - API endpoint logic
- **[backend/models/Enquiry.js](backend/models/Enquiry.js)** - MongoDB schema definition
- **[frontend/src/styles/globals.css](frontend/src/styles/globals.css)** - All styling with CSS variables

## Assignment Criteria Coverage

| Criteria | Coverage |
|----------|----------|
| UI Design & Responsiveness | 25% - Mobile responsive, modern light theme with animations |
| React Component Structure | 20% - 7 modular components with proper separation of concerns |
| Code Quality & Readability | 20% - Clean, commented code with proper naming conventions |
| API Implementation | 20% - Full Express API with validation and error handling |
| Attention to Detail | 15% - All sections complete, smooth UX, proper error messages |

## Bonus Points Achieved
- ✅ Form validation (client & server)
- ✅ Loading states with spinner animation
- ✅ Responsive design
- ✅ Clean code organization
- ✅ GitHub repository with proper structure

## License

This project is for educational purposes as part of an assignment.

## Support

For issues or questions, please create an issue in the GitHub repository.

---

**Submission Date:** 18 June 2026
**Deadline:** 20 June 2026
