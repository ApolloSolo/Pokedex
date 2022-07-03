import React, { useEffect, useState } from "react";

const OnePokemon = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokemonData, setPokemonData] = useState({});
  const [speciesData, setSpeciesData] = useState({});
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const getName = () => {
    let path = window.location.pathname.split("/");
    let pokemon = path[path.length - 1];
    setPokeName(pokemon);
  };

  const getData = async (name) => {
    setLoading(true);
    const url = `https:pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url);
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

  console.log(pokemonData);
  console.log(speciesData);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-[#C2305C] max-w-[1000px] mx-auto h-[calc(100vh-100px)]">
      <div className="flex justify-between font-bold pt-2 px-4">
        <div>
          <h2 className="text-2xl">
            {pokeName[0].toLocaleUpperCase() + pokeName.slice(1)}
          </h2>
          <div className="flex">
            {pokemonData.types.map((type) => (
              <div
                className="mr-2 text-center bg-[rgba(207,207,207,0.3)] py-1 px-2 rounded-lg"
                key={type.type.name}
              >
                {type.type.name}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-xl">
          <p># {pokemonData.order}</p>
        </div>
      </div>
      <img
      alt={pokeName}
        className="w-[100%] max-w-[250px] block mx-auto mt-2"
        src={pokemonData.sprites.other["official-artwork"].front_default}
      />
      <div className="h-full w-full bg-slate-200 rounded-t-2xl">
        <nav className="h-[50px] bg-slate-300 rounded-t-2xl">
          <ul className="flex justify-evenly pt-2">
            <li>About</li>
            <li>Base Stats</li>
            <li>Moves</li>
          </ul>
        </nav>
        <div className="container px-4">
          <div className="flex mt-2 font-bold text-lg">
            <ul className="mr-6">
              <li>Height:</li>
              <li className="mt-2">Weight:</li>
              <li className="mt-2">Abilities:</li>
            </ul>
            <ul>
              <li>
                {(pokemonData.height / 3.048).toFixed(1)}"{" "}
                {`(${(pokemonData.height * 10).toFixed(1)} cm)`}
              </li>
              <li className="mt-2">
                {(pokemonData.weight / 4.536).toFixed(1)} lbs.{" "}
                {`(${(pokemonData.weight * 10).toFixed(1)} kg)`}
              </li>
              <li className="flex mt-2">
                {pokemonData.abilities.map((ability) => (
                  <p className="mr-2">"{ability.ability.name}"</p>
                ))}
              </li>
            </ul>
          </div>

          <div className="about-data mt-4 pt-4 border border-t-[#505050]">
            {loading2 || loading ? (
              <>Loading</>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2 text-center">Pokedex Entry</h3>
                <h4 className="text-lg font-bold">
                  {speciesData.name[0].toUpperCase() +
                    speciesData.name.slice(1)}
                </h4>
                <p>{speciesData.flavor_text_entries[0].flavor_text}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePokemon;
