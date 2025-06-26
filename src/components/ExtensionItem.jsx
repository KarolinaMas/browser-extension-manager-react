import React from "react";
import img from "../assets/images/logo-console-plus.svg";
import ToggleSwitch from "./ToggleSwitch";

const ExtensionItem = () => {
  return (
    <div className="bg-neutral-0 p-5 rounded-[20px] max-w-[343px] min-h-[200px] flex flex-col justify-between border-1 border-neutral-200 shadow-[0px_2px_3px_0px_rgba(217,229,244,1)]">
      <div className="flex gap-4 align-top">
        <img src={img} alt="img" className="w-[60px] h-[60px]" />
        <span>
          <h2 className="text-[20px] text-neutral-900 font-bold">DevLens</h2>
          <p className="text-neutral-600 tracking-[-0.5px] leading-[1.4]">
            Quickly inspect page layouts and visualize element boundaries.
          </p>
        </span>
      </div>
      <div className="flex justify-between items-center">
        <button className="text-neutral-900 tracking-[-0.5px] py-2 px-4 border-1 border-neutral-300 rounded-full">
          Remove
        </button>
        <ToggleSwitch
          onToggle={(val) => console.log("Toggle is", val ? "on" : "off")}
        />
      </div>
    </div>
  );
};

export default ExtensionItem;
