import type { NextApiRequest, NextApiResponse } from 'next';

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const sendMessageToTelegram = async (name: string, email: string, phone: string, message: string) => {
  const text = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  
  console.log('Sending to Telegram:', { url, chat_id: TELEGRAM_CHAT_ID });
  
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'Markdown',
    }),
  });
  
  if (!res.ok) {
    const errorData = await res.text();
    console.error('Telegram API error:', errorData);
    return false;
  }
  
  return true;
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
    const messageText = message || 'No message provided';
    const sent = await sendMessageToTelegram(name, email, phone, messageText);
    if (sent) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: 'Failed to send message' });
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
} 