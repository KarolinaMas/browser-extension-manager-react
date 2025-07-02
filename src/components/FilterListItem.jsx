import React from "react";

const FilterListItem = ({ handleClick, children, isActive }) => {
  const click = () => {
    handleClick();
  };

  return (
    <li
      onClick={click}
      className={`${
        isActive
          ? "bg-red-700 text-neutral-0 hover:bg-red-400 dark:bg-red-400 dark:text-neutral-900 dark:hover:bg-red-500"
          : "bg-neutral-0 text-neutral-900 border-1 border-neutral-200 shadow-[0px_1px_2px_0px_rgba(217,229,244,1)] hover:opacity-70 dark:bg-neutral-700 dark:shadow-none dark:border-neutral-600 dark:text-neutral-0 dark:hover:bg-neutral-600 dark:hover:opacity-100"
      }  px-5 pt-2 pb-2.5  text-[20px] rounded-full cursor-pointer`}
    >
      {children}
    </li>
  );
};

export default FilterListItem;
