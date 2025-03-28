'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectHandler() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if there's a stored redirect path in localStorage
    const redirectPath = localStorage.getItem('redirectPath');
    
    if (redirectPath) {
      // Clear the stored path
      localStorage.removeItem('redirectPath');
      
      // Only redirect if we're on the homepage
      if (window.location.pathname === '/' || window.location.pathname === '') {
        console.log('Redirecting to:', redirectPath);
        
        // Ensure path has a trailing slash for consistency with trailingSlash: true
        const formattedPath = redirectPath.endsWith('/') ? redirectPath : `${redirectPath}/`;
        
        // Use setTimeout to ensure the redirect happens after the page is fully loaded
        setTimeout(() => {
          // Use Next.js router to navigate to the stored path
          router.push(formattedPath);
        }, 100);
      }
    }
  }, [router]);
  
  // This component doesn't render anything
  return null;
}
