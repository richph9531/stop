const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '';
const facebook = process.env.NEXT_PUBLIC_FACEBOOK || '';
const email = process.env.NEXT_PUBLIC_EMAIL || '';

export function Footer() {
  return (
    <footer className="bg-muted py-4 mt-auto sticky bottom-0">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <span>© S.T.O.P. 2025</span>
        <span className="ml-2">
          <a href={whatsapp} target="_blank" className="mx-2 text-muted-foreground" aria-label="WhatsApp">
            WhatsApp
          </a>
          <a href={facebook} target="_blank" className="mx-2 text-muted-foreground" aria-label="Facebook">
            Facebook
          </a>
          <a href={`mailto:${email}`} target="_blank" className="mx-2 text-muted-foreground" aria-label="Email">
            Email
          </a>
        </span>
      </div>
    </footer>
  );
} 