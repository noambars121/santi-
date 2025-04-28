import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // This ensures the API is always dynamically generated

export async function POST(request: NextRequest) {
  console.log('API route hit: /api/sendToTelegram');
  
  // Add explicit token and chat ID as fallback in case environment variables are not set
  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || '7696008604:AAGdsTP2G2yV2h-7f-4QOFQ2RN0xk0yruLE';
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '-1002675016076';
  
  console.log('Telegram credentials:', {
    tokenExists: !!TELEGRAM_TOKEN,
    chatIdExists: !!TELEGRAM_CHAT_ID
  });
  
  if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Missing Telegram credentials in environment variables');
    return NextResponse.json(
      { success: false, error: 'Server configuration error' },
      { status: 500 }
    );
  }
  
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, message } = body;
    
    // Validate the request body
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Send message to Telegram
    try {
      const text = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message || 'No message provided'}`;
      
      console.log('Sending to Telegram:', { textLength: text.length });
      
      const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'Markdown',
        }),
      });
      
      const responseData = await res.json();
      console.log('Telegram API response:', { status: res.status, data: responseData });
      
      if (!res.ok) {
        console.error('Telegram API error:', { status: res.status, data: responseData });
        return NextResponse.json(
          { success: false, error: 'Failed to send message to Telegram' },
          { status: 500 }
        );
      }
      
      // Send contact as a proper contact object
      if (phone) {
        const contactUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendContact`;
        const contactRes = await fetch(contactUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            phone_number: phone,
            first_name: name.split(' ')[0] || name,
            last_name: name.split(' ').slice(1).join(' ') || '',
            vcard: `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
END:VCARD`
          }),
        });
        
        const contactData = await contactRes.json();
        console.log('Contact sent to Telegram:', contactData.ok);
      }
      
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (telegramError) {
      console.error('Error calling Telegram API:', telegramError);
      return NextResponse.json(
        { success: false, error: 'Error sending to Telegram' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
} 