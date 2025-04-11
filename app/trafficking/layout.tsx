import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Trafficking | S.T.O.P.',
  description: 'Information and statistics about human trafficking and its connection to pornography',
};

export default function TraffickingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
