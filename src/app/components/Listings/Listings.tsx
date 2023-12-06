import { FC } from 'react';
import { ListingCard } from './ListingCard';
import { Listing } from '@prisma/client';
import { useListingsStore } from '@/app/store/listings';

interface ListingsProps {
  listings: Listing[];
}

const Listings: FC<ListingsProps> = ({ listings }) => {
  const perPage = 10;
  //const listings = useListingsStore((state) => state.listings) as Listing[];
  const totalPages = useListingsStore((state) => state.totalPages);
  const currentPage = useListingsStore((state) => state.currentPage);
  const isLoading = useListingsStore((state) => state.loading);

  const setCurrentPage = useListingsStore((state) => state.setCurrentPage);

  return (
    <div className="container mt-5">
      <div className="listingsRow">
        {isLoading && <div className="mt-8 text-center">Loading...</div>}
        {!isLoading && listings.length
          ? listings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))
          : null}
        {!isLoading && !listings.length && (
          <div className="text-center mt-8">No results found</div>
        )}
      </div>

      {/* Pagination */}
      {!!listings.length ? (
        <div className="pagination flex justify-center mt-4">
          <div className="min-w-75 flex justify-center items-center">
            {currentPage > 1 ? (
              <>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-sm p-2 ml-1"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(1);
                  }}
                >
                  &lt;&lt;
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-sm p-2 ml-1 mr-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(Math.max(1, currentPage - 1));
                  }}
                >
                  &lt;
                </a>
              </>
            ) : (
              <div className="w-20 ml-4" />
            )}
            {listings.length > perPage && (
              <div>
                <span>Page:</span> {currentPage} of {totalPages}
                {currentPage < totalPages ? (
                  <>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-sm p-2 ml-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(Math.min(totalPages, currentPage + 1));
                      }}
                    >
                      &gt;
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-sm p-2 ml-1"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(totalPages);
                      }}
                    >
                      &gt;&gt;
                    </a>
                  </>
                ) : (
                  <div className="w-20 mr-4" />
                )}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Listings;
