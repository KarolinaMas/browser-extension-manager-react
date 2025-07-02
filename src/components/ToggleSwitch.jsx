import React, { useContext, useState } from "react";
import { UserContext } from "../context";

const ToggleSwitch = () => {
  const [isActive, onToggle] = useContext(UserContext);

  const [checked, setChecked] = useState(isActive);

  const handleChange = () => {
    setChecked(!checked);
    onToggle();
  };

  return (
    <label className=" group relative inline-block w-9 h-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={handleChange}
      />
      <div
        className={`w-9 h-5 rounded-full transition-colors duration-300 ${
          checked
            ? "bg-red-700 group-hover:bg-red-400 dark:bg-red-400 dark:group-hover:bg-red-500"
            : "bg-neutral-300 dark:bg-neutral-600"
        }`}
      ></div>
      <div
        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
          checked ? "translate-x-4" : ""
        }`}
      ></div>
    </label>
  );
};

export default ToggleSwitch;
