// Simple contact form API handler that doesn't rely on NextJS types
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    // Validate honeypot
    if (data.honeypot) {
      return res.status(403).json({ error: 'Bot detected' });
    }

    // Validate required fields
    if (!data.name || !data.phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    // Validate phone format
    const phoneRegex = /^0\d{1,2}[-\s]?\d{7,8}$/;
    if (!phoneRegex.test(data.phone)) {
      return res.status(400).json({ error: 'Invalid phone number format' });
    }

    // Validate email format if provided
    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }
    }

    // Log the form submission (replace with your email service in production)
    console.log('Form submission received:', {
      name: data.name,
      phone: data.phone,
      email: data.email || 'Not provided',
      message: data.message || 'Not provided',
      timestamp: new Date().toISOString(),
    });

    // In a real app, you'd implement email sending here
    
    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 