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
          ? "bg-red-700 text-neutral-0"
          : "bg-neutral-0 text-neutral-900 border-1 border-neutral-200 shadow-[0px_1px_2px_0px_rgba(217,229,244,1)]"
      }  px-5 pt-2 pb-2.5  text-[20px] rounded-full  hover:bg-red-700 hover:text-neutral-0 cursor-pointer`}
    >
      {children}
    </li>
  );
};

export default FilterListItem;
