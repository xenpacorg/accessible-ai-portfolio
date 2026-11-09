import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Alden Lemberg | Accessible software & applied AI', description: 'A project portfolio exploring accessible software, Docker-based analysis, open-source tools, and responsible AI integration.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
