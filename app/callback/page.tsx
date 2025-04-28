//app/callback/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';

export default function CallbackPage() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  if (!username) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-3xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Your Information</h1>
        <p className="text-xl mb-2"><strong>Username:</strong> {username}</p>
        <p className="text-xl"><strong>Signed in with:</strong> GitHub</p>
      </div>
    </div>
  );
}
