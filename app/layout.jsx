import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Teba Connects | Global Business Advisory & Strategic Representation',
  description: 'Turning market ambitions into sustainable cross-border growth across the USA, Africa, and the Middle East.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#0B1320] bg-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
