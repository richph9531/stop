import './contact-form.css';

export function ContactForm() {
    return (
      <div className="contact-form">
        <form className="form">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="label">Name</label>
              <input
                id="name"
                type="text"
                className="input"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="label">Email</label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="your@email.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="label">Message</label>
              <textarea
                id="message"
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