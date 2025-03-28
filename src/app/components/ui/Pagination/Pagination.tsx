import React, { FC } from 'react';
//import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import { cn } from '@/app/helpers/utils';

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  className: string;
  siblingCount?: number;
  showArrows?: boolean;
}

const Pagination: FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
  showArrows = true
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={cn('flex list-none', { [className]: className })}>
      {/* Left navigation arrow */}
      {showArrows && (
        <li
          className={cn('pagination-item', {
            disabled: currentPage === 1
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
      )}

      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li key={Math.random()} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={index + 1}
            className={cn('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      {showArrows && (
        <li
          className={cn('pagination-item', {
            disabled: currentPage === lastPage
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
