import React from "react";

const PokeNavbar = ({active, activeClass, setActive}) => {

    // State handled in PnePokemon.js to allow stats and moves sections to update based on navbar state change
  const handleActiveTab = (event) => {
    let tabName = event.target.innerText;
    setActive(tabName);
  };
  return (
    <nav className="h-[52px] pt-4 bg-slate-300 rounded-t-2xl shadow-lg">
      <ul className="flex justify-evenly">
        <li
          onClick={handleActiveTab}
          className={active === "About" ? activeClass : "cursor-pointer"}
        >
          About
        </li>
        <li
          onClick={handleActiveTab}
          className={active === "Stats" ? activeClass : "cursor-pointer"}
        >
          Stats
        </li>
        <li
          onClick={handleActiveTab}
          className={active === "Moves" ? activeClass : "cursor-pointer"}
        >
          Moves
        </li>
      </ul>
    </nav>
  );
};

export default PokeNavbar;
