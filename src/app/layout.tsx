import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApolloProvider from './components/ApolloProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brighte Eats - Express Your Interest',
  description: 'Express your interest in Brighte Eats services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <ApolloProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}