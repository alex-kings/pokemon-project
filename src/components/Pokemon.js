import React, { useEffect, useState } from "react";
import PokemonDisplay from "./PokemonDisplay";

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <p>{pokemon.name}</p>
      <br></br>
      {console.log(pokemon)}
    </>
  );
};

export default Pokemon;
