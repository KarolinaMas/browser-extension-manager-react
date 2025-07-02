import React, { useContext } from "react";
import { UserContext } from "../context";

const ToggleSwitch = () => {
  const [isActive, onToggle] = useContext(UserContext);

  const handleChange = () => {
    onToggle();
  };

  return (
    <label className=" group relative inline-block w-9 h-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isActive}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleChange();
          }
        }}
      />
      <div
        className={`w-9 h-5 rounded-full transition-colors duration-300 ${
          isActive
            ? "bg-red-700 group-hover:bg-red-400 dark:bg-red-400 dark:group-hover:bg-red-500"
            : "bg-neutral-300 dark:bg-neutral-600"
        } peer-focus-visible:ring-2 peer-focus-visible:ring-offset-3 peer-focus-visible:ring-red-500`}
      ></div>
      <div
        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
          isActive ? "translate-x-4" : ""
        }`}
      ></div>
    </label>
  );
};

export default ToggleSwitch;
