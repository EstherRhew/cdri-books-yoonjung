import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { ReactNode } from 'react';

interface PaginationWrapperProps<T> {
  data: T[];
  totalCount: number;
  pageSize?: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  children: (pageData: T[]) => ReactNode;
}

export const PaginationWrapper = <T,>({
  data,
  totalCount,
  pageSize = 10,
  currentPage,
  setCurrentPage,
  children,
}: PaginationWrapperProps<T>) => {
  const offset = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(offset, offset + pageSize);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {children(paginatedData)}

      {totalCount > pageSize && (
        <Pagination
          current={currentPage}
          total={totalCount}
          pageSize={pageSize}
          onChange={onPageChange}
          style={{ margin: '0 auto' }}
        />
      )}
    </>
  );
};
