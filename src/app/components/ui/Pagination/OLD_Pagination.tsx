import React, { FC, useEffect, useState } from 'react';

interface PaginationProps {
  numberOfPages: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ onChange, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onChange(currentPage);
  }, [currentPage]);

  return (
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
      </div>
    </div>
  );
};
