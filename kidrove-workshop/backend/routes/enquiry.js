import express from 'express';
import Enquiry from '../models/Enquiry.js';
import validateEnquiry from '../middleware/validation.js';

const router = express.Router();

router.post('/', validateEnquiry, async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Check MongoDB connection
    if (require('mongoose').connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database connection error. Please try again later.',
      });
    }

    // Check if email already exists with timeout
    const existingEnquiry = await Enquiry.findOne({ email }).maxTimeMS(5000);
    if (existingEnquiry) {
      return res.status(400).json({
        success: false,
        message: 'This email has already been registered',
      });
    }

    // Create new enquiry
    const enquiry = new Enquiry({ name, email, phone });
    await enquiry.save();

    res.status(201).json({
      success: true,
      message: 'Registration successful! We will contact you within 24 hours.',
      data: enquiry,
    });
  } catch (error) {
    console.error('Registration error:', error.message);
    
    // Handle timeout errors specifically
    if (error.message.includes('buffering timed out') || error.message.includes('timeout')) {
      return res.status(503).json({
        success: false,
        message: 'Database is temporarily unavailable. Please try again in a moment.',
      });
    }
    
    res.status(500).json({
      success: false,
      message: error.message || 'Server error during registration',
    });
  }
});

// Optional: Get all enquiries (for admin dashboard)
router.get('/', async (req, res) => {
  try {
    // Check MongoDB connection
    if (require('mongoose').connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database connection error. Please try again later.',
      });
    }

    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).maxTimeMS(5000);
    res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.error('Fetch enquiries error:', error.message);
    
    if (error.message.includes('buffering timed out') || error.message.includes('timeout')) {
      return res.status(503).json({
        success: false,
        message: 'Database is temporarily unavailable. Please try again in a moment.',
      });
    }

    res.status(500).json({
      success: false,
      message: error.message || 'Server error fetching enquiries',
    });
  }
});

export default router;
