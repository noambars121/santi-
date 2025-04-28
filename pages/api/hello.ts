import type { NextApiRequest, NextApiResponse } from 'next';

type HelloResponse = {
  text: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloResponse>
) {
  console.log('Hello API was called!');
  res.status(200).json({ text: 'Hello from API!' });
} 