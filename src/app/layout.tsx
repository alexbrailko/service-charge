import type { Metadata } from 'next';
import localFont from 'next/font/local';
// import GoogleAnalytics from '@/components/GoogleAnalytics';

import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
//import { Ads } from './components/Ads';
import { cn } from './helpers/utils';
import CookieBanner from './components/seo/CookieBanner';

const daikon = localFont({
  src: [
    {
      path: './fonts/Daikon-Bold.woff',
      weight: 'bold',
      style: 'normal'
    },
    {
      path: './fonts/Daikon-BoldItalic.woff',
      weight: 'bold',
      style: 'italic'
    },
    {
      path: './fonts/Daikon-ExtraLight.woff',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/Daikon-ExtraLightItalic.woff',
      weight: '200',
      style: 'italic'
    },
    {
      path: './fonts/Daikon-Italic.woff',
      weight: 'normal',
      style: 'italic'
    },
    {
      path: './fonts/Daikon-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/Daikon-LightItalic.woff',
      weight: '300',
      style: 'italic'
    },
    {
      path: './fonts/Daikon-Medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Daikon-MediumItalic.woff',
      weight: '500',
      style: 'italic'
    },
    {
      path: './fonts/Daikon-Regular.woff',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: './fonts/Daikon-SemiBold.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/Daikon-SemiBoldItalic.woff',
      weight: '600',
      style: 'italic'
    },
    {
      path: './fonts/Daikon-Thin.woff',
      weight: '100',
      style: 'normal'
    },
    {
      path: './fonts/Daikon-ThinItalic.woff',
      weight: '100',
      style: 'italic'
    }
  ]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*  TODO <GoogleAnalytics GA_MEASUREMENT_ID="G-0000000000" /> */}
      <body className={cn(`h-screen flex flex-col`, daikon.className)}>
        <Header />
        <div className="mb-auto">{children}</div>
        {/* <Ads /> */}

        <Footer />

        <CookieBanner />

        <div id="modal-root"></div>
      </body>
    </html>
  );
}
