import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact | S.T.O.P.',
  description: 'Get in touch with our team and connect with us on social media',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
