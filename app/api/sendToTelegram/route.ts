import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // This ensures the API is always dynamically generated

export async function POST(request: NextRequest) {
  console.log('API route hit: /api/sendToTelegram');
  
  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  
  console.log('Environment variables:', { 
    tokenExists: !!TELEGRAM_TOKEN, 
    chatIdExists: !!TELEGRAM_CHAT_ID 
  });

  if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Missing Telegram credentials in environment variables');
    return NextResponse.json({ 
      error: 'Server configuration error' 
    }, { status: 500 });
  }

  try {
    // Parse request body
    const data = await request.json();
    const { name, email, phone, message } = data;
    
    console.log('Received form data:', { name, email, phone, messageLength: message?.length });

    // Validate required fields
    if (!name || !email || !phone) {
      console.error('Missing required fields:', { name, email, phone });
      return NextResponse.json({ 
        error: 'Missing required fields' 
      }, { status: 400 });
    }

    // Send message to Telegram
    const text = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message || 'No message provided'}`;

    console.log('Sending to Telegram:', { textLength: text.length });

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'Markdown',
        }),
      });
      
      const responseData = await res.text();
      console.log('Telegram API response:', { status: res.status, data: responseData });
      
      if (!res.ok) {
        console.error('Telegram API error:', { status: res.status, data: responseData });
        return NextResponse.json({ 
          error: 'Failed to send message to Telegram' 
        }, { status: 500 });
      }
      
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (telegramError) {
      console.error('Error calling Telegram API:', telegramError);
      return NextResponse.json({ 
        error: 'Error sending to Telegram' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ 
      error: 'Server error processing request' 
    }, { status: 500 });
  }
} 