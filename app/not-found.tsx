'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Get the current path
    const path = window.location.pathname;
    
    // Ensure path has a trailing slash for consistency with trailingSlash: true
    const formattedPath = path.endsWith('/') ? path : `${path}/`;
    
    // Store the path in localStorage (more reliable than sessionStorage)
    localStorage.setItem('redirectPath', formattedPath);
    
    // Log for debugging
    console.log('not-found.tsx - Storing path:', formattedPath);
    
    // Redirect to home after a short delay
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-6">We couldn't find the page you were looking for.</p>
      <p className="mb-6">Redirecting you to the homepage...</p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
