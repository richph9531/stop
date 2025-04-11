import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Videos | S.T.O.P.',
  description: 'Educational videos and resources about the effects of pornography and how to overcome addiction',
};

export default function VideosLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
