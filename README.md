# S.T.O.P. - Standing Together to Oppose Pornography

A Next.js web application dedicated to providing support, resources, and information to help individuals break free from pornography addiction and build healthier lives.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI

## Features

- 📱 Responsive design optimized for all devices
- 🎨 Clean, accessible user interface
- 🌙 Dark mode support
- 🎯 Educational resources and information
- 🔗 Curated helpful links
- 🎥 Video resources for recovery and education
- 📞 Contact information and support

## Getting Started

1. Clone the repository:

```bash
git clone [your-repo-url]
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

# Contact Form

The contact form allows users to submit their name, email, and a message. This information is sent to stop.now.2025@gmail.com using EmailJS. Spam is filtered through a Google reCAPTCHA (v2). There is validation on all input fields to ensure that the form is filled out correctly.

On the EmailJS side, a service ID is set up and linked to the stop.now.2025 email address. A template is also set up to send through the fields in the form. The template is set up for the Google reCAPTCHA v2.

There is a forwarding rule set up within the stop.now.2025 email address to send all emails to the stop@unix.co.za account.
