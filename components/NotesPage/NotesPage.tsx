'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import css from './Pagination.module.css';


interface PaginationProps {
  totalPages?: number;
}

export const Pagination = ({ totalPages = 10 }: PaginationProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = Number(searchParams.get('page')) || 1;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={css.container}>
      <button
        className={css.button}
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>

      <span className={css.pageInfo}>
        Page {currentPage} of {totalPages}
      </span>

      <button
        className={css.button}
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};