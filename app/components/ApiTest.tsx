'use client';

import { useState } from 'react';

export default function ApiTest() {
  const [pagesResult, setPagesResult] = useState<string>('');
  const [appResult, setAppResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const testPagesApi = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setPagesResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setPagesResult(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  const testAppApi = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setAppResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setAppResult(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  const testTelegramApi = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/sendToTelegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          phone: '050-1234567',
          message: 'This is a test message'
        }),
      });
      
      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = { rawText: text };
      }
      
      setAppResult(`Status: ${response.status}\nData: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setAppResult(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-lg font-bold mb-4">API Test</h2>
      
      <div className="space-y-4">
        <div>
          <button 
            onClick={testPagesApi}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Test Pages API
          </button>
          <pre className="mt-2 p-2 bg-gray-100 rounded text-sm overflow-auto">
            {pagesResult || 'No result yet'}
          </pre>
        </div>
        
        <div>
          <button 
            onClick={testAppApi}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            Test App API
          </button>
          <pre className="mt-2 p-2 bg-gray-100 rounded text-sm overflow-auto">
            {appResult || 'No result yet'}
          </pre>
        </div>
        
        <div>
          <button 
            onClick={testTelegramApi}
            disabled={loading}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
          >
            Test Telegram API
          </button>
        </div>
      </div>
    </div>
  );
} 