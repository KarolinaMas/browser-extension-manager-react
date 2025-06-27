import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import moonIcon from "./assets/icons/icon-moon.svg";
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

  useEffect(() => {
    setItems(data);
    setAllItems(data);
  }, []);

  const insertAllItems = () => {
    setItems(allItems);
  };

  const insertActiveItems = () => {
    const activeItems = allItems.filter((item) => item.isActive);
    setItems(activeItems);
  };

  const insertInactiveItems = () => {
    const inactiveItems = allItems.filter((item) => !item.isActive);
    setItems(inactiveItems);
  };

  const handleToggle = (name) => {
    setAllItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    );

    setItems((prev) =>
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

    if (name === "All") {
      insertAllItems();
    } else if (name === "Active") {
      insertActiveItems();
    } else {
      insertInactiveItems();
    }
  };

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
        <section className="grid grid-cols-1 gap-3 place-items-center">
          {items.map((item) => (
            <UserContext.Provider
              value={[item.isActive, () => handleToggle(item.name)]}
              key={item.name}
            >
              <ExtensionItem {...item} />
            </UserContext.Provider>
          ))}
        </section>
      </main>
    </>
  );
};

export default App;
