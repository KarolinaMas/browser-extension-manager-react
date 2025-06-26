import React from "react";
import logo from "./assets/logo.svg";
import moonIcon from "./assets/icons/icon-moon.svg";

const App = () => {
  return (
    <>
      <header className="flex items-center bg-[#FBFDFE] px-3 py-2 rounded-[10px] border-1 border-[#D6E2F5] shadow-[0px_2px_3px_0px_rgba(217,229,244,0.75)]">
        <img src={logo} alt="logo." className=" h-[41px]" />
        <button className="ml-auto bg-neutral-100 w-[50px] h-[50px] flex items-center justify-center rounded-[12px]">
          <img src={moonIcon} alt="moon icon." />
        </button>
      </header>
      <main>
        <section className="my-10 block place-items-center">
          <h1 className="text-[34px] font-bold leading-[-1px] text-[#091540] mb-6">
            Extensions List
          </h1>
          <ul className="flex gap-3">
            <li className="bg-[#FBFDFE] px-5 pt-2 pb-2.5 text-[#091540] text-[20px] rounded-full border-1 border-[#D6E2F5] shadow-[0px_1px_2px_0px_rgba(217,229,244,0.75)] hover:bg-red-700 hover:text-[#FBFDFE]">
              All
            </li>
            <li className="bg-[#FBFDFE] px-5 pt-2 pb-2.5 text-[#091540] text-[20px] rounded-full border-1 border-[#D6E2F5] shadow-[0px_1px_2px_0px_rgba(217,229,244,0.75)] hover:bg-red-700 hover:text-[#FBFDFE]">
              Active
            </li>
            <li className="bg-[#FBFDFE] px-5 pt-2 pb-2.5 text-[#091540] text-[20px] rounded-full border-1 border-[#D6E2F5] shadow-[0px_1px_2px_0px_rgba(217,229,244,0.75)] hover:bg-red-700 hover:text-[#FBFDFE]">
              Inactive
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;
