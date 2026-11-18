import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://tebaconnects.com'),
  title: {
    default: 'Teba Connects | Global Business Advisory & Strategic Representation',
    template: '%s | Teba Connects'
  },
  description: 'Teba Connects is a US headquartered global business advisory and market development Firm that helps organizations enter new markets, build strategic partnerships and accelerate cross-border growth across the USA, Africa and the Middle East.',
  keywords: [
    'Teba Connects',
    'Teba H. Molla',
    'global business advisory',
    'market entry',
    'strategic representation',
    'trade facilitation',
    'cross-border investment',
    'USA Africa Middle East trade',
    'business development',
    'emerging markets advisory'
  ],
  authors: [{ name: 'Teba H. Molla', url: 'https://tebaconnects.com' }],
  creator: 'Teba Connects LLC',
  publisher: 'Teba Connects LLC',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Teba Connects | Bridging Markets. Building Futures.',
    description: 'Turning market ambitions into sustainable cross-border growth across the USA, Africa, and the Middle East.',
    url: 'https://tebaconnects.com',
    siteName: 'Teba Connects',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/hero-teba-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Teba Connects — Bridging Markets. Building Futures.'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teba Connects | Global Business Advisory',
    description: 'Turning market ambitions into sustainable cross-border growth across the USA, Africa, and the Middle East.',
    images: ['/assets/hero-teba-main.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://tebaconnects.com/#organization',
      name: 'Teba Connects',
      url: 'https://tebaconnects.com',
      logo: 'https://tebaconnects.com/assets/tc-logo-official-large.png',
      image: 'https://tebaconnects.com/assets/hero-teba-main.jpg',
      description: 'US headquartered global business advisory and market development Firm that helps organizations enter new markets, build strategic partnerships and accelerate cross-border growth.',
      telephone: ['+1-206-850-0926', '+251-912-689-532'],
      email: ['teba.molla@tebaconnects.com', 'info@tebaconnects.com'],
      founder: {
        '@type': 'Person',
        name: 'Teba H. Molla',
        jobTitle: 'Founder & CEO',
        sameAs: 'https://www.linkedin.com/in/teba-molla'
      },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Continent', name: 'Africa' },
        { '@type': 'AdministrativeArea', name: 'Middle East' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Core Advisory Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strategic Representation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Market Entry & Expansion' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trade & Investment Facilitation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Events & Market Promotion' } }
        ]
      },
      sameAs: [
        'https://linkedin.com/company/tebaconnects',
        'https://www.linkedin.com/in/teba-molla'
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#071B31] bg-white selection:bg-[#B42034] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
