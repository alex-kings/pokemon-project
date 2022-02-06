import React, { useEffect } from "react";
import Pokemon from "./Pokemon";

const Team = ({ team }) => {
  return (
    <div className="team-container">
      {team.map((pokemon, index) => (
        <Pokemon key={index} pokemon={pokemon} />
      ))}
      {console.log(team)}
    </div>
  );
};

export default Team;
