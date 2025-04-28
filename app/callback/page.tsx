//app/callback/page.tsx
'use client'; 

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import UserInfo from '@/components/UserInfo';

interface GitHubUser { login: string; }
type UserState = GitHubUser | null;

export default function CallbackPage() {
  const [user, setUser] = useState<UserState>(null);

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {  
      const url = new URL(window.location.href);
      const code = url.searchParams.get('code') as string | null;
      if (!code) return;
      const res = await fetch(`/api/callback?code=${code}`);
      const data: { login: string } = await res.json();
      setUser({ login: data.login });
      window.history.replaceState({}, document.title, '/callback');
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        <Header />
        <div className="flex-1 flex items-center justify-center"><h1 className="text-3xl font-bold">Loading...</h1></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Header />
      <UserInfo user={user} />
    </div>
  );
}
