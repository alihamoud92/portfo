import React, { useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import { useFilter } from "../APIs";

const Pagination = ({ pageCount, children }) => {
  const { filter, handlePageClick } = useFilter();
  const a = useRef();
  useEffect(() => {
    if (a.current) {
      a.current.state.selected = filter.get("page")
        ? filter.get("page") - 1
        : 0;
    }
  }, [filter.get("page")]);
  return (
    <>
      <div>{children}</div>
      <div className="flex justify-center my-3">
        <ReactPaginate
          className="pagination flex"
          previousLabel=""
          nextLabel=""
          breakLabel="..."
          ref={a}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          pageClassName="page-item"
          pageLinkClassName="page-link"
        />
      </div>
    </>
  );
};

export default Pagination;
