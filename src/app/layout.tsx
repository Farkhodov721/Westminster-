import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TrafficSense CV | WIUT Hackathon 2026',
  description: 'WIUT Hackathon 2026 – CV Track: Real-time traffic event detection and accident anticipation from fixed CCTV cameras.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
