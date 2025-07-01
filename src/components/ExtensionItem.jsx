import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const ExtensionItem = ({ logo, name, description, removeFunc }) => {
  return (
    <div className="bg-neutral-0 p-5 rounded-[20px] max-w-[343px] min-h-[200px] flex flex-col justify-between border-1 border-neutral-200 shadow-[0px_2px_3px_0px_rgba(217,229,244,1)] dark:bg-neutral-800 dark:border-neutral-600 dark:shadow-none">
      <div className="flex gap-4 align-top">
        <img
          src={logo.replace("./", "/")}
          alt="img"
          className="w-[60px] h-[60px]"
        />
        <span>
          <h2 className="text-[20px] text-neutral-900 font-bold tracking-[-0.2px] leading-[1.2] mb-2 dark:text-neutral-0">
            {name}
          </h2>
          <p className="text-neutral-600 tracking-[-0.5px] leading-[1.4] dark:text-neutral-300">
            {description}
          </p>
        </span>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => removeFunc()}
          className="text-neutral-900 tracking-[-0.5px] py-2 px-4 border-1 border-neutral-300 rounded-full cursor-pointer dark:text-neutral-0 dark:border-neutral-600"
        >
          Remove
        </button>
        <ToggleSwitch />
      </div>
    </div>
  );
};

export default ExtensionItem;
