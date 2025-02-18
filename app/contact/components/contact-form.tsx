// app/contact/components/contact-form.tsx
import './contact-form.css';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

export function ContactForm() {
    // State for form fields and errors
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    useEffect(() => {
        (function() {
            emailjs.init("8RYJjJMEUxC3B2sMC");
        })();
    }, []);

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { user_name, user_email, message } = formData;
        let formErrors = { user_name: '', user_email: '', message: '' };

        // Validation logic
        if (!user_name) formErrors.user_name = 'Name is required.';
        if (!user_email) {
            formErrors.user_email = 'Email is required.';
        } else if (!validateEmail(user_email)) {
            formErrors.user_email = 'Email is invalid.';
        }
        if (!message) formErrors.message = 'Message is required.';

        setErrors(formErrors);

        if (!formErrors.user_name && !formErrors.user_email && !formErrors.message) {
            emailjs.sendForm('service_ix2bs3t', 'template_1j7zv2g', event.currentTarget)
                .then(() => {
                    console.log('SUCCESS!');
                }, (error) => {
                    console.log('FAILED...', error);
                });
        }
    };

    return (
      <div className="contact-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="label">* Name</label>
              <input
                id="name"
                name="user_name"
                type="text"
                className={`input ${errors.user_name ? 'border-red-500' : ''}`}
                placeholder="Your name (100 characters max)..."
                maxLength={100}
                value={formData.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="label">* Email</label>
              <input
                id="email"
                name="user_email"
                type="email"
                className={`input ${errors.user_email ? 'border-red-500' : ''}`}
                placeholder="your@email.com"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="label">* Message</label>
              <textarea
                id="message"
                name="message"
                className={`textarea ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Your message (500 characters max)..."
                maxLength={500}
                value={formData.message}
                onChange={handleChange}
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