import Link from 'next/link';
const NotFoundPage = () => {
  return (
    <div className="text-center my-20">
      <h1 className="text-xl mb-3">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="underline" href="/">
        Go back to the home page
      </Link>
    </div>
  );
};
export default NotFoundPage;
