import { Inter, Fraunces } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-loaded',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display-loaded',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

export const metadata = {
  title: 'Logic Loop — an independent design studio',
  description:
    'Logic Loop is a small design studio building interfaces, brands and websites for teams who care about the details.',
};


const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('lumina-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased min-h-screen`}
        suppressHydrationWarning
      >
        <div className="grain-overlay" aria-hidden="true" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
