import React, { useState } from "react";

const ColourPick = ({ setTeam }) => {
  const [colour, setColour] = useState("");
  const [picked, setPicked] = useState(false);

  const inputSelected = (event) => {
    setColour(event.target.value);
    setPicked(false);
  };

  const buttonClicked = () => {
    if (colour != "") {
      setPicked(true);
      pokemonsFromColour(colour);
    }
  };

  // Find list of pokemons of a certain colour
  function pokemonsFromColour(myColour) {
    fetch("https://pokeapi.co/api/v2/pokemon-color/" + myColour)
      .then((response) => response.json())
      .then((data) => {
        shuffle(data["pokemon_species"]);
        let pokemons = data["pokemon_species"].slice(0, 6);
        for (let i = 0; i < pokemons.length; i++) {
          pokemons[i] = getIdFromUrl(pokemons[i].url);
        }
        console.log(pokemons);
        setTeam(pokemons);
      });
  }

  function getIdFromUrl(url) {
    let splitted = url.split("/");
    return parseInt(splitted[splitted.length - 2]);
  }

  //Shuffles the array
  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  return (
    <div onChange={inputSelected}>
      <div>
        <input type="radio" name="Colour" value="black" />
        <label>Black</label>
      </div>
      <div>
        <input type="radio" name="Colour" value="blue" />
        <label>Blue</label>
      </div>
      <div>
        <input type="radio" name="Colour" value="brown" />
        <label>Brown</label>
      </div>
      <div>
        <input type="radio" name="Colour" value="gray" />
        <label>Grey</label>
      </div>
      <div>
        <input type="radio" name="Colour" value="green" />
        <label>Green</label>
      </div>
      <div>
        <input type="radio" name="Colour" value="pink" />
        <label>Pink</label>
      </div>
      <div>
        <input type="radio" name="Colour" value="purple" />
        <label>Purple</label>
      </div>
      <div>
        <input type="radio" name="Colour" value="red" />
        <label>Red</label>
      </div>
      <div>
        <input type="radio" name="Colour" value="white" />
        <label>White</label>
      </div>
      <div>
        <input type="radio" name="Colour" value="yellow" />
        <label>Yellow</label>
      </div>
      <button onClick={buttonClicked}>Select</button>
      {picked ? null : <p>Pick a colour!</p>}
    </div>
  );
};

export default ColourPick;
