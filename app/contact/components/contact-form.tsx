import './contact-form.css';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';

export function ContactForm() {
    useEffect(() => {
        (function() {
            emailjs.init("8RYJjJMEUxC3B2sMC");
        })();
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;

        emailjs.sendForm('service_1ov36bf', 'template_1j7zv2g', form)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
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
          <button
            type="submit"
            className="button"
          >
            Send Message
          </button>
        </form>
      </div>
    );
}