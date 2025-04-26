//components/Header.tsx

'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <header
      className="w-full p-4 bg-black text-white flex items-center justify-center shadow-md cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="text-xl font-bold">Simple OAuth App</h1>
    </header>
  );
}
