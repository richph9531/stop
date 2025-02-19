import './contact-form.css';
import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

export function ContactForm() {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    useEffect(() => {
        (function() {
            emailjs.init("8RYJjJMEUxC3B2sMC");
        })();
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (!recaptchaToken) {
            console.log('reCAPTCHA not completed');
            return;
        }

        emailjs.sendForm('service_ix2bs3t', 'template_1j7zv2g', form)
            .then(() => {
                console.log('SUCCESS!');
                recaptchaRef.current?.reset(); // Reset reCAPTCHA after successful submission
            }, (error) => {
                console.log('FAILED...', error);
            });
    };

    const onRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    return (
      <div className="contact-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="label">Name</label>
              <input
                id="name"
                name="user_name"
                type="text"
                className="input"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="label">Email</label>
              <input
                id="email"
                name="user_email"
                type="email"
                className="input"
                placeholder="your@email.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="label">Message</label>
              <textarea
                id="message"
                name="message"
                className="textarea"
                placeholder="Your message..."
              />
            </div>
          </div>
          <ReCAPTCHA
            sitekey="6Lff69sqAAAAAFzqfwGq3daly9zg9yJDf0tjolB5" // Replace with your reCAPTCHA site key
            onChange={onRecaptchaChange}
            ref={recaptchaRef}
          />
          <button
            type="submit"
            className="button"
            disabled={!recaptchaToken}
            style={{ opacity: !recaptchaToken ? 0.6 : 1 }}
          >
            Send Message
          </button>
        </form>
      </div>
    );
}