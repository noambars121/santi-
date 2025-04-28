// First install required types
// Run in terminal: npm install --save-dev @types/next

import { NextRequest, NextResponse } from 'next/server';

type ContactFormData = {
  name: string;
  phone: string;
  message: string;
  honeypot?: string;
};

// API route for contact form
export const POST = async (req: NextRequest) => {
  try {
    // Get the form data
    const data = await req.json() as ContactFormData;
    const { name, phone, message, honeypot } = data;
    
    // Honeypot check for spam prevention
    if (honeypot) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    
    // Check if all required fields are present
    if (!name || !phone || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }
    
    // Validate phone format (Israeli phone number format)
    const phoneRegex = /^0\d{1,2}[-\s]?\d{7,8}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ success: false, error: 'Invalid phone format' }, { status: 400 });
    }
    
    // Log the contact form submission (replace with your actual logging or email sending logic)
    console.log('Contact form submission:', {
      name,
      phone,
      message
    });
    
    // Return success response
    return NextResponse.json({ success: true }, { status: 200 });
    
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}; 