import React from "react";

const Pagination = ({ pokemonPerPage, totalPokemon, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPokemon / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-between md:justify-center mb-2">
        {pageNumbers.map((page) => (
          <li key={page} className="mx-auto md:mx-2 bg-[#ff2323] w-[22px] text-center border-[#000000] rounded-sm font-bold">
            <a onClick={() => paginate(page)} href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
