import React from "react";
import Pokemon from "./Pokemon";

const Team = ({ ids }) => {
  return (
    <div className="team-container">
      {ids.map((id) => (
        <Pokemon key={id} id={id} />
      ))}
    </div>
  );
};

export default Team;
