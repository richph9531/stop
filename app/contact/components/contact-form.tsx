import './contact-form.css';
import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

export function ContactForm() {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
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

        setIsLoading(true);

        emailjs.sendForm('service_ix2bs3t', 'template_1j7zv2g', form)
            .then(() => {
                console.log('SUCCESS!');
                setSubmissionMessage('Message sent successfully!');
                setIsError(false);
                recaptchaRef.current?.reset();
                setIsSubmitted(true);
            }, (error) => {
                console.log('FAILED...', error);
                setSubmissionMessage('Failed to send message. Please try again. Alternatively, get in touch via Whatsapp.');
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
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
              <label htmlFor="name" className="label">
                <span className="text-red-500">*</span> Name
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                className="input"
                placeholder="Your name"
                required
                maxLength={100}
                disabled={isSubmitted}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="label">
                <span className="text-red-500">*</span> Email
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                className="input"
                placeholder="your@email.com"
                required
                disabled={isSubmitted}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="label">
                <span className="text-red-500">*</span> Message
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea"
                placeholder="Your message (500 characters max)..."
                required
                maxLength={500}
                disabled={isSubmitted}
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
            disabled={!recaptchaToken || isLoading || isSubmitted}
            style={{ opacity: (!recaptchaToken || isLoading || isSubmitted) ? 0.6 : 1 }}
          >
            {isLoading ? (
              <span className="spinner"></span>
            ) : isSubmitted ? (
              'Message Sent'
            ) : (
              'Send Message'
            )}
          </button>
        </form>
        {submissionMessage && (
          <p className={`mt-2 ${isError ? 'text-red-500' : 'text-green-600'} text-sm`}>
            {submissionMessage}
          </p>
        )}
      </div>
    );
}