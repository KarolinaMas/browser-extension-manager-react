import React, { useState } from "react";

const ToggleSwitch = ({ initial = false, onToggle }) => {
  const [checked, setChecked] = useState(initial);

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onToggle) onToggle(newValue);
  };

  return (
    <label className="relative inline-block w-9 h-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={handleChange}
      />
      <div
        className={`w-9 h-5 rounded-full transition-colors duration-300 ${
          checked ? "bg-red-700" : "bg-gray-300"
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
