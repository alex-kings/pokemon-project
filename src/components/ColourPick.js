import React from "react";

const ColourPick = ({ setTeam }) => {
  const inputSelected = (event) => {
    pokemonsFromColour(event.target.value);
  };

  // Find list of pokemons of a certain colour
  async function pokemonsFromColour(myColour) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-color/" + myColour);
    const pokemons = await response.json();
    shuffle(pokemons["pokemon_species"]);
    let mypkms = pokemons["pokemon_species"].slice(0, 6);
    
    const myarray = await Promise.all(mypkms.map(async (pkm)=>{

      console.log("https://pokeapi.co/api/v2/pokemon/" + getIdFromUrl(pkm.url))
      return await getPkm("https://pokeapi.co/api/v2/pokemon/" + getIdFromUrl(pkm.url))
    }));
    console.log(myarray);
    setTeam(myarray);
  }

  async function getPkm(url){
    const response = await fetch(url);
    return await response.json()
  }

  function getIdFromUrl(url) {
    let splitted = url.split("/");
    return parseInt(splitted[splitted.length - 2]);
  }

  //Shuffles the array
  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
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
    </div>
  );
};

export default ColourPick;
