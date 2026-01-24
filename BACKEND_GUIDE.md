# Backend Implementation Guide (MERN Stack)

## Overview
This guide explains how to build a minimal, clean backend for the Vintage Greens banquet hall website.

## Philosophy
- **Backend should be invisible to users**
- **Keep it simple** - No unnecessary features
- **Focus on reliability** - Not complexity

---

## 1. Project Setup

### Initialize Backend

```bash
# Create backend directory
mkdir backend
cd backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express mongoose dotenv cors
npm install --save-dev nodemon
```

### Project Structure

```
backend/
├── server.js
├── routes/
│   └── inquiries.js
├── models/
│   └── Inquiry.js
├── controllers/
│   └── inquiryController.js
├── .env
└── package.json
```

---

## 2. Environment Variables (.env)

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vintagegreens
NODE_ENV=development
```

---

## 3. Server Setup (server.js)

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/inquiries', require('./routes/inquiries'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 4. Database Model (models/Inquiry.js)

```javascript
const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  eventType: {
    type: String,
    required: true,
    enum: ['wedding', 'reception', 'corporate', 'birthday', 'other']
  },
  eventDate: {
    type: Date,
    required: true
  },
  guestCount: {
    type: Number,
    min: 0
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'confirmed', 'cancelled'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Inquiry', inquirySchema);
```

---

## 5. Controller (controllers/inquiryController.js)

```javascript
const Inquiry = require('../models/Inquiry');

// Create new inquiry
exports.createInquiry = async (req, res) => {
  try {
    const { name, phone, eventType, eventDate, guestCount, message } = req.body;

    // Basic validation
    if (!name || !phone || !eventType || !eventDate) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Create inquiry
    const inquiry = await Inquiry.create({
      name,
      phone,
      eventType,
      eventDate,
      guestCount,
      message
    });

    // TODO: Send email/WhatsApp notification here

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: inquiry
    });

  } catch (error) {
    console.error('Error creating inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting inquiry. Please try again.'
    });
  }
};

// Get all inquiries (Admin only - add authentication later)
exports.getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });

  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching inquiries'
    });
  }
};

// Get single inquiry by ID
exports.getInquiryById = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    res.status(200).json({
      success: true,
      data: inquiry
    });

  } catch (error) {
    console.error('Error fetching inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching inquiry'
    });
  }
};

// Update inquiry status
exports.updateInquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Inquiry updated successfully',
      data: inquiry
    });

  } catch (error) {
    console.error('Error updating inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating inquiry'
    });
  }
};
```

---

## 6. Routes (routes/inquiries.js)

```javascript
const express = require('express');
const router = express.Router();
const {
  createInquiry,
  getAllInquiries,
  getInquiryById,
  updateInquiryStatus
} = require('../controllers/inquiryController');

// Public route
router.post('/', createInquiry);

// Admin routes (add authentication middleware later)
router.get('/', getAllInquiries);
router.get('/:id', getInquiryById);
router.patch('/:id/status', updateInquiryStatus);

module.exports = router;
```

---

## 7. Update package.json Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

---

## 8. Frontend Integration

### Update ContactSection.jsx

Replace the handleSubmit function:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:5000/api/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          message: ''
        });
      }, 3000);
    } else {
      alert('Error submitting inquiry. Please try again.');
    }

  } catch (error) {
    console.error('Error:', error);
    alert('Error submitting inquiry. Please try again.');
  }
};
```

---

## 9. MongoDB Setup

### Option 1: MongoDB Atlas (Recommended)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create new cluster
4. Get connection string
5. Add to `.env` file

### Option 2: Local MongoDB

```bash
# Install MongoDB locally
# Then use this connection string:
MONGODB_URI=mongodb://localhost:27017/vintagegreens
```

---

## 10. Testing the API

### Test with cURL or Postman

```bash
# Create inquiry
curl -X POST http://localhost:5000/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "phone": "9876543210",
    "eventType": "wedding",
    "eventDate": "2026-06-15",
    "guestCount": 300,
    "message": "Looking for wedding venue"
  }'

# Get all inquiries
curl http://localhost:5000/api/inquiries
```

---

## 11. Optional Enhancements

### Email Notifications (using Nodemailer)

```bash
npm install nodemailer
```

```javascript
// In inquiryController.js after creating inquiry
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'admin@vintagegreens.com',
  subject: `New Inquiry from ${name}`,
  html: `
    <h2>New Event Inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Event Type:</strong> ${eventType}</p>
    <p><strong>Event Date:</strong> ${eventDate}</p>
    <p><strong>Guest Count:</strong> ${guestCount}</p>
    <p><strong>Message:</strong> ${message}</p>
  `
};

await transporter.sendMail(mailOptions);
```

### WhatsApp Notifications (using Twilio)

```bash
npm install twilio
```

```javascript
const twilio = require('twilio');
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

await client.messages.create({
  from: 'whatsapp:+14155238886',
  to: 'whatsapp:+919876543210',
  body: `New inquiry from ${name} for ${eventType} on ${eventDate}`
});
```

### Rate Limiting (Prevent Spam)

```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // 5 requests per window
});

router.post('/', limiter, createInquiry);
```

---

## 12. Deployment

### Backend Deployment (Render/Railway)

1. Push code to GitHub
2. Connect to Render/Railway
3. Add environment variables
4. Deploy

### Update Frontend API URL

```javascript
// Create a config file
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend.onrender.com/api'
  : 'http://localhost:5000/api';
```

---

## 13. Security Checklist

- [ ] Add input validation
- [ ] Implement rate limiting
- [ ] Use HTTPS in production
- [ ] Sanitize user inputs
- [ ] Add CORS whitelist
- [ ] Environment variables secured
- [ ] Add authentication for admin routes
- [ ] Regular backups of database

---

## Running the Full Stack

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

---

## Final Notes

- **Keep it simple**: Don't over-engineer
- **Focus on reliability**: Handle errors gracefully
- **Monitor inquiries**: Check database regularly
- **Respond quickly**: 24-hour response promise

**The backend is a tool. The frontend is the product.**

---

Built for conversion, not complexity. 🎯
