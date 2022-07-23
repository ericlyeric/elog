import LinkWrapper from './Link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <LinkWrapper href={currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`}>
            <button>Previous</button>
          </LinkWrapper>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <LinkWrapper href={`/page/${currentPage + 1}`}>
            <button>Next</button>
          </LinkWrapper>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
