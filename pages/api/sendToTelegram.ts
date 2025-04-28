import type { NextApiRequest, NextApiResponse } from 'next';

// Add explicit token and chat ID as fallback in case environment variables are not set
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || '7696008604:AAGdsTP2G2yV2h-7f-4QOFQ2RN0xk0yruLE';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '-1002675016076';

const sendMessageToTelegram = async (name: string, email: string, phone: string, message: string) => {
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    
    console.log('Sending to Telegram:', { url, chat_id: TELEGRAM_CHAT_ID });
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: `New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message || 'No message provided'}`,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();
    
    if (!data.ok) {
      console.error('Telegram API error:', data);
      return { success: false, error: data.description };
    }
    
    // Send contact info as proper contact
    if (phone) {
      const contactUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendContact`;
      const contactResponse = await fetch(contactUrl, {
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
      
      const contactData = await contactResponse.json();
      console.log('Contact sent to Telegram:', contactData.ok);
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return { success: false, error: 'Failed to send message to Telegram' };
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;
  
  console.log('Received form data:', { name, email, phone, message });

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Basic sanitization
  if (
    typeof name !== 'string' || 
    typeof email !== 'string' || 
    typeof phone !== 'string' || 
    (message && typeof message !== 'string')
  ) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  try {
    const sent = await sendMessageToTelegram(name, email, phone, message);
    if (sent.success) {
      return res.status(200).json(sent);
    } else {
      return res.status(500).json(sent);
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
} 