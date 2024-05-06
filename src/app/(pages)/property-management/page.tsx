import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

const title = 'Property & Block Management';

export const metadata = {
  title: title,
  description:
    'Find property management companies or go it alone with helpful tools. Learn how to choose the right approach for your properties.'
};

export default function PropertyManagement() {
  return (
    <div className="container">
      <Breadcrumbs title={title} />
      <div className="single">
        <h1>{title}</h1>
        <p>
          There are several options available for landlords when it comes to
          property management. The most popular choice is to outsource the
          management to high-street agencies specializing in block management
          and property management. Fortunately, there are numerous companies in
          the market competing for clients, providing a wide range of choices.
          However, it is crucial to carefully consider the selection process in
          order to ensure that the property receives proper care and attention.
          On the other hand, some landlords opt to self-manage their real estate
          assets. While this can be a challenging task, there are fortunately
          various tools and resources available that can greatly simplify a
          landlord&apos;s life. These tools are designed to assist with the
          management and maintenance of properties, making the process more
          efficient and convenient.
        </p>
        <p>Self- manage:</p>
        <ul>
          <li>
            <a href="https://www.openrent.co.uk/affiliate" target="_blank">
              Open Rent
            </a>
          </li>
          <li>
            <a
              href="https://www.lettingaproperty.com/landlord/lettings"
              target="_blank"
            >
              Letting a Property
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
