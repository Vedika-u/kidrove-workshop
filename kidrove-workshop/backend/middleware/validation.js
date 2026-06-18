const validateEnquiry = (req, res, next) => {
  const { name, email, phone } = req.body;
  const errors = {};

  // Validate name
  if (!name || !name.trim()) {
    errors.name = 'Name is required';
  }

  // Validate email
  if (!email || !email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Please provide a valid email';
  }

  // Validate phone
  if (!phone || !phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^\+?[\d\s\-()]{7,15}$/.test(phone)) {
    errors.phone = 'Please provide a valid phone number';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors, message: 'Validation failed' });
  }

  next();
};

export default validateEnquiry;
