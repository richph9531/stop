import contactDetails from "../data/contact-details.json"; // Adjust the path as necessary

export function Footer() {
  return (
    <footer className="bg-muted py-4 mt-auto sticky bottom-0">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <span>© S.T.O.P. 2025</span>
        <span className="ml-2">
          <a href={`https://wa.me/${contactDetails.whatsapp}`} className="mx-2 text-muted-foreground" aria-label="WhatsApp">
            WhatsApp
          </a>
          <a href={contactDetails.facebook} className="mx-2 text-muted-foreground" aria-label="Facebook">
            Facebook
          </a>
          <a href={`mailto:${contactDetails.email}`} className="mx-2 text-muted-foreground" aria-label="Email">
            Email
          </a>
        </span>
      </div>
    </footer>
  );
} 