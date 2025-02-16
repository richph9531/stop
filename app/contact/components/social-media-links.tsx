import FacebookIcon from '../../data/facebook.svg';
import WhatsAppIcon from '../../data/whatsapp.svg';

export function SocialMediaLinks() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-4">
        <a
          href="https://www.facebook.com/groups/294768610534132"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
          <span>Facebook</span>
        </a>
        <a
          href="https://wa.me/27834634762"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-green-600 hover:text-green-800"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}