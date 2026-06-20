import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import enquiryRoutes from './routes/enquiry.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/enquiry', enquiryRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📂 Data stored in: backend/db/enquiries.json`);
  console.log(`🎯 Frontend: http://localhost:5173`);
});
