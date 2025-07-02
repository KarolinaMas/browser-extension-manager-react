import React, { useEffect, useState } from "react";
import logoLight from "./assets/logos/logo-light.svg";
import logoDark from "./assets/logos/logo-dark.svg";
import moonIcon from "./assets/icons/icon-moon.svg";
import sunIcon from "./assets/icons/icon-sun.svg";
import ExtensionItem from "./components/ExtensionItem";
import data from "./data.json";
import FilterListItem from "./components/FilterListItem";
import { UserContext } from "./context";

const App = () => {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [listItems, setListItems] = useState([
    { name: "All", isOn: true },
    { name: "Active", isOn: false },
    { name: "Inactive", isOn: false },
  ]);

  const [isDarkMode, setIsdarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    setItems(data);
    setAllItems(data);
  }, []);

  useEffect(() => {
    const activeFilter = listItems.find((item) => item.isOn)?.name;
    let filteredItems = [];

    if (activeFilter === "All") {
      filteredItems = allItems;
    } else if (activeFilter === "Active") {
      filteredItems = allItems.filter((item) => item.isActive);
    } else {
      filteredItems = allItems.filter((item) => !item.isActive);
    }

    setItems(filteredItems);
  }, [allItems, listItems]);

  const handleToggle = (name) => {
    setAllItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const handleListItemClick = (name) => {
    setListItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, isOn: true } : { ...item, isOn: false }
      )
    );
  };

  const removeItem = (name) => {
    setAllItems((prev) => prev.filter((item) => item.name !== name));
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsdarkMode(!isDarkMode);
  };

  return (
    <div className="bg-gradient-to-b from-[#ebf2fc] to-[#eefbf9] min-h-[100vh] px-4 pt-6 pb-16 dark:from-[#04091B] dark:to-[#091540] sm:px-8">
      <header className="flex items-center bg-neutral-0 max-w-[81vw] mx-auto px-3 py-2 rounded-[10px] border-1 border-neutral-200 shadow-[0px_2px_3px_0px_rgba(217,229,244,1)] dark:bg-neutral-800  dark:shadow-none dark:border-none">
        <img
          src={isDarkMode ? logoDark : logoLight}
          alt="logo."
          className=" h-[41px]"
        />
        <button
          className="bg-neutral-100 w-[50px] h-[50px] ml-auto flex items-center justify-center rounded-[12px] cursor-pointer hover:bg-neutral-300 focus:outline-red-400 dark:bg-neutral-700 dark:hover:bg-neutral-600"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <img src={sunIcon} alt="sun icon." />
          ) : (
            <img src={moonIcon} alt="moon icon." />
          )}
        </button>
      </header>
      <main className="max-w-[81vw] mx-auto">
        <section className="mt-10 mb-8 block place-items-center md:flex md:items-center">
          <h1 className="text-[34px] font-bold leading-[-1px] text-neutral-900 mb-6 dark:text-neutral-0 md:m-0">
            Extensions List
          </h1>
          <ul className="flex gap-3 md:ml-auto">
            {listItems.map(({ name, isOn }) => (
              <FilterListItem
                key={name}
                handleClick={() => handleListItemClick(name)}
                isActive={isOn}
              >
                {name}
              </FilterListItem>
            ))}
          </ul>
        </section>
        <section className="grid grid-cols-1 gap-3 place-items-center md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <UserContext.Provider
              value={[item.isActive, () => handleToggle(item.name)]}
              key={item.name}
            >
              <ExtensionItem
                {...item}
                removeFunc={() => removeItem(item.name)}
              />
            </UserContext.Provider>
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
