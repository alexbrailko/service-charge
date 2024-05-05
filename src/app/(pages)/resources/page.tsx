import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

export default function Resources() {
  const title = 'Valuable Resources and Tools for Real Estate Investors';

  return (
    <div className="container">
      <Breadcrumbs title={title} />
      <div className="single">
        <h1>{title}</h1>
        <p>
          In this section, you will discover a range of professional tools
          designed to assist with property market research and property
          management in the United Kingdom. These resources encompass
          informative portals that offer guidance on essential property
          management legislation, convenient links to government portals
          providing valuable information for property risk assessments, profit
          calculators, browser extensions, podcasts dedicated to the property
          industry, and much more.
        </p>
        <ul>
          <li>
            <a
              href="https://www.nrla.org.uk/join?gad_source=1&gclid=EAIaIQobChMI7Iyas8yXgwMVmkRBAh0xaARcEAAYASAAEgLoWvD_BwE"
              target="_blank"
            >
              Landlords association NRLA
            </a>
          </li>
          <li>
            <a href="https://www.propertymark.co.uk/" target="_blank">
              The professional body the foe the property sector ARLA
            </a>
          </li>
          <li>
            <a
              href="https://check-long-term-flood-risk.service.gov.uk/postcode"
              target="_blank"
            >
              Check your long term flood risk
            </a>
          </li>
          <li>
            <a
              href="https://check-for-flooding.service.gov.uk/find-location"
              target="_blank"
            >
              Check for flooding
            </a>
          </li>
          <li>
            <a
              href="https://www.propertysearchesdirect.co.uk/product-page/enhanced-search-pack"
              target="_blank"
            >
              Searches package for property buyers
            </a>
          </li>
          <li>
            <a
              href="https://app.patma.co.uk/prospector/property-profit-and-yield-calculator/"
              target="_blank"
            >
              Browser extension for property analytics & Buy-to-let Property
              Profit and Tax Calculator
            </a>
          </li>
          <li>
            <a
              href="https://www.hometrack.com/latest-news/uk-house-price-index/"
              target="_blank"
            >
              Track UK house prices
            </a>
          </li>
          <li>
            <a href="https://propertyhub.net/invest/" target="_blank">
              Podcasts about the property investment
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
