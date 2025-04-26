//app/page.tsx

'use client';

import Header from '@/components/Header';

export default function Home() {
  const handleLogin = () => {
    window.location.href = '/api/login';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Welcome!</h1>
        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
