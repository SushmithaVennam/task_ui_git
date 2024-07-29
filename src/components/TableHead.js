import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowsUpDown } from "react-icons/fa6";

const TableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("SL");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          const sorticon =
            sortField === accessor && order === "asc" ? (
              <FaArrowUp />
            ) : sortField === accessor && order === "desc" ? (
              <FaArrowDown />
            ) : (
              <FaArrowsUpDown />
            );
          return (
            <th key={accessor} onClick={() => handleSortingChange(accessor)}>
              {sorticon}
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
