import React from "react";
import Pokemon from "./Pokemon";

const Team = ({ team }) => {
  return (
    <div className="team-container">
      {team.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Team;
