import React from "react";
import logo from "./assets/logo.svg";
import moonIcon from "./assets/icons/icon-moon.svg";
import ExtensionItem from "./components/ExtensionItem";

const App = () => {
  return (
    <>
      <header className="flex items-center bg-neutral-0 px-3 py-2 rounded-[10px] border-1 border-neutral-200 shadow-[0px_2px_3px_0px_rgba(217,229,244,1)]">
        <img src={logo} alt="logo." className=" h-[41px]" />
        <button className="ml-auto bg-neutral-100 w-[50px] h-[50px] flex items-center justify-center rounded-[12px]">
          <img src={moonIcon} alt="moon icon." />
        </button>
      </header>
      <main>
        <section className="my-10 block place-items-center">
          <h1 className="text-[34px] font-bold leading-[-1px] text-neutral-900 mb-6">
            Extensions List
          </h1>
          <ul className="flex gap-3">
            <li className="bg-neutral-0 px-5 pt-2 pb-2.5 text-neutral-900 text-[20px] rounded-full border-1 border-neutral-200 shadow-[0px_1px_2px_0px_rgba(217,229,244,1)] hover:bg-red-700 hover:text-neutral-0">
              All
            </li>
            <li className="bg-neutral-0 px-5 pt-2 pb-2.5 text-neutral-900 text-[20px] rounded-full border-1 border-neutral-200 shadow-[0px_1px_2px_0px_rgba(217,229,244,1)] hover:bg-red-700 hover:text-neutral-0">
              Active
            </li>
            <li className="bg-neutral-0 px-5 pt-2 pb-2.5 text-neutral-900 text-[20px] rounded-full border-1 border-neutral-200 shadow-[0px_1px_2px_0px_rgba(217,229,244,1)] hover:bg-red-700 hover:text-neutral-0">
              Inactive
            </li>
          </ul>
        </section>
        <section>
          <ExtensionItem />
        </section>
      </main>
    </>
  );
};

export default App;
