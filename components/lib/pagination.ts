export interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export const generatePagination = ({ currentPage, totalPages }: PaginationProps) => {
  return Array.from(Array(totalPages).keys())
    .map((count) => count + 1)
    .filter((count) => count === 1 || count === totalPages || Math.abs(currentPage - count) <= 2)
    .map((count) => {
      return {
        page:
          Math.abs(currentPage - count) === 2 && count !== 1 && count !== totalPages ? null : count,
        current: count === currentPage,
        excerpt: Math.abs(currentPage - count) === 2 && count !== 1 && count !== totalPages,
      };
    });
};
