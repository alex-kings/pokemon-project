import React from "react";

const PokemonDisplay = ({ pokemon }) => {
  return (
    <div className="pkm-container">
      <div>
        <p className="pkm-name">{pokemon.name}</p>
        <p className="pkm-id">id:{pokemon.id}</p>
      </div>

      <div>
        {pokemon.types.map((type) => (
          <p className={"type " + type.type.name}>{type.type.name}</p>
        ))}
      </div>

      <div>
        <img
          src={pokemon.sprites.other["official-artwork"]["front_default"]}
          alt="Italian Trulli"
          className="pkm-img"
        />
      </div>
    </div>
  );
};

export default PokemonDisplay;
