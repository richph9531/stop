'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectHandler() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if there's a stored redirect path
    const redirectPath = sessionStorage.getItem('redirectPath');
    
    if (redirectPath) {
      // Clear the stored path
      sessionStorage.removeItem('redirectPath');
      
      // Only redirect if we're on the homepage
      if (window.location.pathname === '/' || window.location.pathname === '') {
        // Use Next.js router to navigate to the stored path
        router.push(redirectPath);
      }
    }
  }, [router]);
  
  // This component doesn't render anything
  return null;
}
