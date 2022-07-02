import React, { useState, useEffect } from "react";
import Pagination from "../components/Paganation";
import Pills from "../components/Pills";
const url = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

const Pokemon = () => {
  const [mons, setMons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(100);

  useEffect(() => {
    const fetchPokes = async () => {
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();
      setMons(data.results);
      setLoading(false);
    };

    fetchPokes();
  }, []);

  // Get current pokemon
  const indexOfLastPoke = currentPage * pokemonPerPage;
  const indexOfFirstPoke = indexOfLastPoke - pokemonPerPage;
  const currentPokemon = mons.slice(indexOfFirstPoke, indexOfLastPoke);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
      <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-between">
        <div className="flex flex-wrap gap-1 justify-center">
          {currentPokemon.map((mon) => (
            <Pills key={mon.name} mon={mon} loading={loading} />
          ))}
        </div>
        <div className="mt-4 w-[80%] mx-auto">
          <Pagination
            pokemonPerPage={pokemonPerPage}
            totalPokemon={mons.length}
            paginate={paginate}
          />
        </div>
      </div>
  );
};

export default Pokemon;
