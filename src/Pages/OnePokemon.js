import React, { useEffect, useState } from "react";

const OnePokemon = () => {
  const [poke, setPoke] = useState("");

  const getName = () => {
    let path = window.location.pathname.split("/");
    let pokemon = path[path.length - 1];
    setPoke(pokemon);
  };

  useEffect(() => {
    getName();
  });

  return <div>{poke}</div>;
};

export default OnePokemon;
