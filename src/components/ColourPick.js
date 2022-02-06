import React from "react";

const ColourPick = ({ setTeam }) => {
  const inputSelected = (event) => {
    pokemonsFromColour(event.target.value);
  };

  // Find list of pokemons of a certain colour
  async function pokemonsFromColour(myColour) {
    let myPokemons = [];
    fetch("https://pokeapi.co/api/v2/pokemon-color/" + myColour)
      .then((response) => response.json())
      .then((data) => {
        shuffle(data["pokemon_species"]);
        let pokemons = data["pokemon_species"].slice(0, 6);

        pokemons.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((response) => response.json())
            .then((pkm) => {
              myPokemons.push(pkm);
            });
        });
      })
      .then(() => {
        setTeam(myPokemons);
      });
  }

  /*async function getPokemon(id) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => response.json())
      .then((pokemon) => {
        return pokemon;
      });
  }*/

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
    </div>
  );
};

export default ColourPick;
