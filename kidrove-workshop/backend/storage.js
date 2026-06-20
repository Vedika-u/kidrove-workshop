import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'db', 'enquiries.json');

// Ensure db directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Initialize file if it doesn't exist
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify([], null, 2));
}

// Read all enquiries from file
export const readEnquiries = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading enquiries:', err.message);
    return [];
  }
};

// Write enquiries to file
export const writeEnquiries = (enquiries) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(enquiries, null, 2));
  } catch (err) {
    console.error('Error writing enquiries:', err.message);
  }
};

// Add new enquiry
export const addEnquiry = (enquiry) => {
  const enquiries = readEnquiries();
  const newEnquiry = {
    id: Date.now().toString(),
    ...enquiry,
    createdAt: new Date().toISOString(),
  };
  enquiries.push(newEnquiry);
  writeEnquiries(enquiries);
  return newEnquiry;
};

// Check if email exists
export const emailExists = (email) => {
  const enquiries = readEnquiries();
  return enquiries.some((e) => e.email.toLowerCase() === email.toLowerCase());
};

// Get all enquiries
export const getAllEnquiries = () => {
  const enquiries = readEnquiries();
  return enquiries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};
