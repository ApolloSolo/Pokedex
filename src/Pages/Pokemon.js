import React, { useState, useEffect } from "react";
import Pills from "../components/Pills";
const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

const Pokemon = () => {
  const [mons, setMons] = useState([]);

  const fetchPokes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMons(data.results);
  };

  fetchPokes();

  return (
    <div className="flex flex-wrap gap-1 items-start justify-center pt-8">
      {mons.map((mon) => (
        <Pills mon={mon} />
      ))}
    </div>
  );
};

export default Pokemon;
