import React, { useEffect, useState } from "react";
import About from "../components/About";
import Stats from "../components/Stats";
import Moves from "../components/Moves";
import PokeNavbar from "../components/PokeNavbar";

const OnePokemon = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokemonData, setPokemonData] = useState({});
  const [speciesData, setSpeciesData] = useState({});
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [active, setActive] = useState("About");
  const activeClass = "font-bold cursor-pointer border-b-2 border-b-[#128921]";

  const getName = () => {
    let path = window.location.pathname.split("/");
    let pokemon = path[path.length - 1];
    setPokeName(pokemon);
  };

  const getData = async (name) => {
    setLoading(true);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    setPokemonData(data);
    setLoading(false);
  };

  const getSpeciesData = async () => {
    setLoading2(true);
    const url = pokemonData.species.url;
    const response = await fetch(url);
    const data = await response.json();
    setSpeciesData(data);
    setLoading2(false);
  };

  // Get main pokemon data
  useEffect(() => {
    getName();
    if (pokeName) {
      getData(pokeName);
    }
  }, [pokeName]);

  // Get species data after first query completes
  useEffect(() => {
    if (Object.keys(pokemonData).length) {
      getSpeciesData();
    }
  }, [pokemonData]);

  //console.log(pokemonData.moves);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-[#C2305C] max-w-[1000px] mx-auto h-full md:rounded-b-xl">
      <div>
        <div className="flex justify-between font-bold px-4">
          <div>
            <h2 className="text-3xl mb-2">
              {pokeName[0].toLocaleUpperCase() + pokeName.slice(1)}
            </h2>
            <div className="flex">
              {pokemonData.types.map((type) => (
                <div
                  className="mr-2 text-center bg-[rgba(207,207,207,0.3)] py-1 px-2 rounded-lg"
                  key={type.type.name}
                >
                  {type.type.name[0].toLocaleUpperCase() + type.type.name.slice(1)}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 text-4xl">
            <p># {pokemonData.order}</p>
          </div>
        </div>
        <img
          alt={pokeName}
          className="w-[90%] max-w-[180px] block mx-auto mt-2"
          src={pokemonData.sprites.other["official-artwork"].front_default}
        />
      </div>

      <div className="w-full bg-slate-200 rounded-t-2xl md:rounded-b-xl h-full">
        <PokeNavbar
          active={active}
          activeClass={activeClass}
          setActive={setActive}
        />
        {active === "About" && (
          <About
            pokemonData={pokemonData}
            speciesData={speciesData}
            loading={loading}
            loading2={loading2}
          />
        )}
        {active === "Stats" && <Stats stats={pokemonData.stats} />}
        {active === "Moves" && <Moves moves={pokemonData.moves} />}
      </div>
    </div>
  );
};

export default OnePokemon;
