// app/api/login/route.ts
import {NextResponse } from 'next/server';

export async function GET() { 
    const clientId = process.env.GITHUB_CLIENT_ID!;
    const redirectUri = process.env.GITHUB_REDIRECT_URI!;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user`;
    return NextResponse.redirect(githubAuthUrl);
}
