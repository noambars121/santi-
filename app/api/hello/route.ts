import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  console.log('App Router Hello API was called!');
  return NextResponse.json({ message: 'Hello from App Router API!' });
} 