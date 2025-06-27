import React from "react";

const FilterListItem = ({ handleClick, children }) => {
  return (
    <li
      onClick={handleClick}
      className="bg-neutral-0 px-5 pt-2 pb-2.5 text-neutral-900 text-[20px] rounded-full border-1 border-neutral-200 shadow-[0px_1px_2px_0px_rgba(217,229,244,1)] hover:bg-red-700 hover:text-neutral-0"
    >
      {children}
    </li>
  );
};

export default FilterListItem;
