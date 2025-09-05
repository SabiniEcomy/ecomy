
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ECOMY Academy',
  description: 'Corsi e risorse by ECOMY',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="min-h-screen flex flex-col">
        <header className="border-b bg-white">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-ecomyBlue" />
              <span className="font-semibold text-ecomyBlue">ECOMY Academy</span>
            </div>
            <nav className="flex gap-6 text-sm">
              <a href="/">Home</a>
              <a href="/courses">Corsi</a>
              <a href="/about">About</a>
              <a href="/contact">Contatti</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t">
          <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} ECOMY — Conoscere, Decidere, Crescere
          </div>
        </footer>
      </body>
    </html>
  );
}
