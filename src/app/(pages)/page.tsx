import { SearchSection } from '../components/SearchSection/SearchSection';
import { Services } from '../components/Services';

export const metadata = {
  title: 'Service Charge finder & Database',
  description: 'Find hidden costs before buying or renting a UK property.'
};

export default function Home() {
  return (
    <>
      <SearchSection />
      <Services />
    </>
  );
}
