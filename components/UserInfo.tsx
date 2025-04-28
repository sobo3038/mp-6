//components/UserInfo.tsx
'use client';

interface UserInfoProps {
  user: {login: string;};
}

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Your Information</h1>
      <p className="text-xl mb-2"><strong>Username:</strong> {user.login}</p>
      <p className="text-xl"><strong>Signed in with:</strong> GitHub</p>
    </div>
  );
}
