import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('Middleware Executed');
  
  const loginPaths = [
     '/login/UserLogin',
     '/login/SetPassword',
    '/login/PasswordReset',
     '/login/ForgetPassword'
  ];

  // Check if the user is logged in and trying to access a login-related path
  if (loginPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('https://iot-jolta-final.vercel.app', request.url));
  }
  
  // Continue processing for other routes
  return NextResponse.next();
}
