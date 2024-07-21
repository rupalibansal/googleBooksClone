import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({
  totalItems,
  resultsPerPage,
  startIndex,
  endIndex,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / resultsPerPage);
  const currentPage = Math.floor(startIndex / resultsPerPage) + 1;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= 10) {
      // Less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // More than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          className={styles.paginationButton}
          key={i}
          onClick={() => onPageChange(i)}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <div>
        Showing {startIndex + 1} to {endIndex + 1}
      </div>
      <div>{renderPageNumbers()}</div>
    </div>
  );
};

export default Pagination;
