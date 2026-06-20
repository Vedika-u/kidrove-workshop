import express from 'express';
import validateEnquiry from '../middleware/validation.js';
import { addEnquiry, emailExists, getAllEnquiries } from '../storage.js';

const router = express.Router();

router.post('/', validateEnquiry, async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Check if email already exists
    if (emailExists(email)) {
      return res.status(400).json({
        success: false,
        message: 'This email has already been registered',
      });
    }

    // Add new enquiry to local storage
    const enquiry = addEnquiry({ name, email, phone });

    res.status(201).json({
      success: true,
      message: 'Registration successful! We will contact you within 24 hours.',
      data: enquiry,
    });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error during registration',
    });
  }
});

// Optional: Get all enquiries (for admin dashboard)
router.get('/', async (req, res) => {
  try {
    const enquiries = getAllEnquiries();
    res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.error('Fetch enquiries error:', error.message);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error fetching enquiries',
    });
  }
});

export default router;
