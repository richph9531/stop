# S.T.O.P. - Standing Together to Oppose Pornography

A Next.js web application dedicated to providing support, resources, and information to help individuals break free from pornography addiction and build healthier lives.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/richph9531/stop.git
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

## Contact Form

The contact form allows users to submit their name, email, and a message. This information is sent to stop.now.2025@gmail.com using EmailJS (login with richard.philips5551@gmail.com). Spam is filtered through a Google reCAPTCHA (v2). There is validation on all input fields to ensure that the form is filled out correctly.

On the EmailJS side, a service ID is set up and linked to the stop.now.2025 email address. A template is also set up to send through the fields in the form. The template is set up for the Google reCAPTCHA v2.

There is a forwarding rule set up within the stop.now.2025 email address to send all emails to the stop@unix.co.za account.

## Visual Regression Testing

This project uses Playwright for visual regression testing to ensure UI consistency across different devices and browsers.

### Overview

Visual regression tests capture screenshots of key pages and compare them against baseline images to detect unintended visual changes. This helps maintain UI consistency during development and prevents visual regressions.

### Test Configuration

- **Framework**: Playwright Test
- **Devices Tested**:
  - Desktop Chrome (1280×720)
  - Pixel 7 (portrait and landscape)
  - iPad Pro 11 (portrait and landscape)

### Running Visual Tests

```bash
# Run all visual tests
npm test

# Update baseline screenshots after intentional UI changes
npm run test:update
```

### How It Works

1. Tests navigate to specific pages and wait for them to fully load
2. Screenshots are captured of the entire page
3. Screenshots are compared with baseline images
4. Tests fail if differences exceed the threshold (3% in CI environments)

### Best Practices

- Always update baseline screenshots after intentional UI changes
- Review visual differences carefully in the Playwright UI
- Run tests on the same resolution/scale factor for consistent results
- CI environments use a slightly higher tolerance (3%) to prevent false positives

### Adding New Visual Tests

To add a new visual test:

1. Add a new test case in `tests/visual.spec.ts`
2. Use the `navigateAndWait` and `expectScreenshot` helper functions
3. Run tests with `--update-snapshots` to create baseline images
4. Commit the new baseline images to version control

### Troubleshooting

- You might need to install Playwright browsers before the tests will run locally: `npx playwright install chromium`
- If tests fail in CI but pass locally, check for environment-specific rendering differences
- Use `testinfo.snapshotSuffix = ''` to prevent device-specific snapshot names
- Adjust timeout values if pages take longer to stabilize
- For dynamic content, consider using locators to wait for specific elements
