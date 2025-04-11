import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Resources | S.T.O.P.',
  description: 'Curated resources and helpful links to support those affected by pornography addiction',
};

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
