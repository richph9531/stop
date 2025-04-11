import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Donate | S.T.O.P.',
  description: 'Support our mission with a SnapScan donation',
};

export default function DonateLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
