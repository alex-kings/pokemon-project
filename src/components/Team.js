import React from "react";
import Pokemon from "./Pokemon";

const Team = ({ ids }) => {
  return (
    <>
      {ids.map((id) => (
        <Pokemon key={id} id={id} />
      ))}
    </>
  );
};

export default Team;
