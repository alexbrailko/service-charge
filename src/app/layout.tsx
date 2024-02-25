import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Ads } from './components/Ads';

export const metadata: Metadata = {
  title: 'Service Charge checker & Database',
  description:
    'Whether you`re buying your house, planning to invest in UK property market or looking to optimise your service charge spending'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`h-screen flex flex-col`}>
        <Header />
        <div className="mb-auto">{children}</div>
        <Ads />

        <Footer />
        <div id="modal-root"></div>
      </body>
      <script
        type="text/javascript"
        src="https://www.bing.com/api/maps/mapcontrol?key=AvIqs1Qhw9kBu9iM0IJ2jMhBAYoEUqd-AtiTv_aLuNsHHsFxHMJf3-xkxDhNF-ua&callback=loadMapScenario"
        async
        defer
      ></script>
    </html>
  );
}
