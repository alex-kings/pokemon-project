import React, { useEffect, useState } from "react";
import PokemonDisplay from "./PokemonDisplay";

const Pokemon = ({ id }) => {
  // Need to initialize a dummy object to render before fetching data
  const [pokemon, setPokemon] = useState(false);

  // Fetch pokemon on load
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  return <>{pokemon ? <PokemonDisplay pokemon={pokemon} /> : null}</>;
};

export default Pokemon;
