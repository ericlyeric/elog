import { generatePagination } from '../lib/pagination';
import { default as Link } from './Link';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  link: {
    href: (page: number) => string;
    as: (page: number) => string;
  };
}

const Pagination = ({ totalPages, currentPage, link }: PaginationProps) => {
  const pagination = generatePagination({ currentPage, totalPages });

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {/* {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <button>Previous</button>
          </Link>
        )} */}
        <span>
          {currentPage} of {totalPages}
        </span>
        {/* {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button>Next</button>
          </Link>
        )} */}
      </nav>
    </div>
  );
};

export default Pagination;
