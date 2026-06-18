# Project Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT (Browser)                         │
│                    http://localhost:5173                         │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     │ HTTP/HTTPS
                     │ Fetch API
                     │
┌────────────────────▼────────────────────────────────────────────┐
│                    FRONTEND (React + Vite)                      │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Components:                                              │  │
│  │ • Nav - Navigation bar with branding                    │  │
│  │ • Hero - Main hero section with CTA                     │  │
│  │ • Details - Workshop details grid                       │  │
│  │ • Outcomes - 6 learning outcomes                        │  │
│  │ • FAQ - Collapsible FAQ section                         │  │
│  │ • RegistrationForm - Form with validation              │  │
│  │ • Footer - Footer with links                            │  │
│  │ • RobotIllustration - SVG robot graphic               │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  Styling: globals.css (CSS Variables, Light Theme)             │
│  Build: Vite (Fast development & production builds)            │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     │ JSON over HTTP
                     │ POST /api/enquiry
                     │ GET  /api/enquiry
                     │
┌────────────────────▼────────────────────────────────────────────┐
│                  BACKEND (Express.js Node.js)                   │
│               http://localhost:5000/api/...                     │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Routes (enquiry.js):                                     │  │
│  │ • POST /api/enquiry → Create new registration           │  │
│  │ • GET  /api/enquiry → Fetch all registrations           │  │
│  │ • GET  /api/health  → Health check                      │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Middleware (validation.js):                              │  │
│  │ • validateEnquiry - Form input validation               │  │
│  │ • CORS - Cross-origin resource sharing                  │  │
│  │ • JSON Parser - Request body parsing                    │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Models (Enquiry.js):                                     │  │
│  │ • name (String, required)                               │  │
│  │ • email (String, required, unique, validated)           │  │
│  │ • phone (String, required, validated)                   │  │
│  │ • createdAt (Date, auto)                                │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     │ MongoDB Protocol
                     │ Mongoose ODM
                     │
┌────────────────────▼────────────────────────────────────────────┐
│                    DATABASE (MongoDB)                           │
│                                                                  │
│  Database: kidrove                                              │
│  Collection: enquiries                                          │
│                                                                  │
│  Documents Structure:                                           │
│  {                                                              │
│    "_id": ObjectId,                                             │
│    "name": "John Doe",                                          │
│    "email": "john@example.com",                                 │
│    "phone": "+91 9876543210",                                   │
│    "createdAt": ISODate("2026-06-18T...")                       │
│  }                                                              │
│                                                                  │
│  Local: mongodb://localhost:27017/kidrove                       │
│  Cloud: mongodb+srv://user:pass@cluster.mongodb.net/kidrove    │
└──────────────────────────────────────────────────────────────────┘
```

## Data Flow

### Registration Flow

```
User fills form
    ↓
Frontend validates (client-side)
    ↓ (if valid)
POST /api/enquiry with { name, email, phone }
    ↓
Backend validates (server-side)
    ↓ (if valid)
Check for duplicate email
    ↓ (if unique)
Create Enquiry document
    ↓
Save to MongoDB
    ↓ (if successful)
Return success response (201)
    ↓
Frontend shows success message
```

### Error Handling

```
Validation Error
    → Frontend: Show field error message
    → Backend: 400 Bad Request with error details
    → Database: No save attempted

Database Error
    → Backend: 500 Internal Server Error
    → Frontend: Show generic error message
    → User: Can retry submission

Duplicate Email
    → Backend: 400 Bad Request with duplicate message
    → Frontend: Show error to user
```

## Component Hierarchy

```
App (main component)
├── Nav
├── Hero
├── Details
├── Outcomes
├── FAQ
│   └── FaqItem (x5 items)
├── Registration Section
│   └── RegistrationForm
│       ├── Form inputs
│       ├── Validation
│       └── Success message
└── Footer
```

## State Management

### Frontend
- Form state in RegistrationForm component
- Loading state during API call
- Success/error states for user feedback
- No global state manager (kept simple for assignment)

### Backend
- Request body parsing via Express middleware
- Error handling via try-catch and middleware

## API Contract

### Request
```
POST /api/enquiry
Content-Type: application/json

{
  "name": "string (required, 1-255 chars)",
  "email": "string (required, valid email)",
  "phone": "string (required, 7-15 chars, digits/+/-/() only)"
}
```

### Responses
```
201 Created (success)
{
  "success": true,
  "message": "Registration successful!",
  "data": { full enquiry object }
}

400 Bad Request (validation error)
{
  "success": false,
  "message": "Validation failed",
  "errors": { field: "error message" }
}

400 Bad Request (duplicate email)
{
  "success": false,
  "message": "This email has already been registered"
}

500 Internal Server Error
{
  "success": false,
  "message": "Server error during registration"
}
```

## Directory Structure

```
kidrove-workshop/
├── frontend/
│   ├── public/                    # Static assets
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
│   │   ├── styles/
│   │   │   └── globals.css       # CSS variables, responsive design
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # React entry point
│   ├── index.html                # HTML template
│   ├── vite.config.js            # Vite configuration
│   ├── package.json
│   └── node_modules/             # Dependencies
│
├── backend/
│   ├── models/
│   │   └── Enquiry.js            # Mongoose schema
│   ├── routes/
│   │   └── enquiry.js            # API endpoints
│   ├── middleware/
│   │   └── validation.js         # Form validation
│   ├── server.js                 # Express server entry
│   ├── .env                      # Environment variables
│   ├── .env.example              # Example env file
│   ├── package.json
│   └── node_modules/             # Dependencies
│
├── .gitignore                    # Git ignore rules
├── package.json                  # Root scripts
├── README.md                     # Full documentation
├── GETTING_STARTED.md            # Quick start guide
└── DEPLOYMENT.md                 # Deployment guide
```

## Technology Stack Breakdown

### Frontend
- **React 18**: UI library for building components
- **Vite**: Modern build tool with HMR (Hot Module Replacement)
- **CSS3**: Styling with CSS Variables for theming
- **Fetch API**: Native JavaScript HTTP client
- **No additional frameworks**: Kept minimal for clarity

### Backend
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for scalable data storage
- **Mongoose**: MongoDB ODM for schema validation
- **CORS**: Middleware for cross-origin requests
- **dotenv**: Environment variable management
- **Nodemon**: Development auto-reload

### Development
- **Node.js**: JavaScript runtime
- **npm**: Package manager
- **Git**: Version control
- **Concurrently**: Run multiple processes simultaneously

## Performance Considerations

### Frontend
- Vite: Fast builds and development
- CSS: No runtime overhead, pure CSS
- React: Efficient component re-rendering
- No external CSS frameworks: Smaller bundle

### Backend
- Mongoose: Connection pooling
- MongoDB: Indexed queries
- CORS: Efficient request handling
- Error handling: Proper status codes

## Security Measures

1. **Input Validation**
   - Client-side: User feedback
   - Server-side: Actual validation

2. **CORS**
   - Only allows frontend domain
   - Prevents unauthorized requests

3. **MongoDB**
   - Schema validation
   - Mongoose schema enforcement

4. **Environment Variables**
   - Sensitive data not in code
   - Different for dev/prod

## Scalability

Current setup supports:
- Up to 10,000+ users (MongoDB Atlas free tier: 512MB)
- Horizontal scaling possible with load balancer
- Database indexes for query performance
- Stateless backend for clustering

## Future Enhancements

1. **Authentication**: User login/admin panel
2. **Payment**: Razorpay/Stripe integration
3. **Email**: Nodemailer for confirmations
4. **Analytics**: Google Analytics / Mixpanel
5. **Testing**: Jest + React Testing Library
6. **TypeScript**: Type safety for both frontend and backend
7. **Caching**: Redis for performance
8. **Rate Limiting**: Prevent abuse
9. **Admin Dashboard**: Manage enquiries
10. **Monitoring**: Sentry, New Relic for production
