import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

const ExtensionItem = ({ logo, name, description, isActive }) => {
  const [active, setActive] = useState(isActive);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="bg-neutral-0 p-5 rounded-[20px] max-w-[343px] min-h-[200px] flex flex-col justify-between border-1 border-neutral-200 shadow-[0px_2px_3px_0px_rgba(217,229,244,1)]">
      <div className="flex gap-4 align-top">
        <img
          src={logo.replace("./", "/")}
          alt="img"
          className="w-[60px] h-[60px]"
        />
        <span>
          <h2 className="text-[20px] text-neutral-900 font-bold tracking-[-0.2px] leading-[1.2] mb-2">
            {name}
          </h2>
          <p className="text-neutral-600 tracking-[-0.5px] leading-[1.4]">
            {description}
          </p>
        </span>
      </div>
      <div className="flex justify-between items-center">
        <button className="text-neutral-900 tracking-[-0.5px] py-2 px-4 border-1 border-neutral-300 rounded-full">
          Remove
        </button>
        <ToggleSwitch isActive={active} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default ExtensionItem;
