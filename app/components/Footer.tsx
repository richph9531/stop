const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '';
const facebook = process.env.NEXT_PUBLIC_FACEBOOK || '';
const email = process.env.NEXT_PUBLIC_EMAIL || '';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-4 w-full">
      <div className="container mx-auto px-4 text-center text-sm">
        <div className="mb-2">
          <span>
            <a href={whatsapp} target="_blank" className="mx-2" aria-label="WhatsApp">
              WhatsApp
            </a>
            <a href={facebook} target="_blank" className="mx-2" aria-label="Facebook">
              Facebook
            </a>
            <a href={`mailto:${email}`} target="_blank" className="mx-2" aria-label="Email">
              Email
            </a>
          </span>
        </div>
        <div className="text-xs text-primary-foreground/70 max-w-2xl mx-auto">
          <span className="font-medium">Disclaimer:</span> The materials and links provided may not always represent the views of the organization.
          We aim to provide a wide variety of resources in various formats in order to encourage education and recovery.
          We urge individuals to assess each resource on its own merit and to use discretion in determining what aligns with their belief systems.
        </div>
      </div>
    </footer>
  );
}