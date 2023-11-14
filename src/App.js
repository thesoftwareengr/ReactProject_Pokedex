import React from "react";
import PokemonBattle from "./PokemonBattle";
import Pokedex from "./Pokedex";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import 'index.css'

// function getRandomPokemons() {
//   // const shuffledPokemons = Pokedex.defaultProps.pokemonData.sort(() => 0.5 - Math.random());
//   // return shuffledPokemons.slice(0, 4);

//   const shuffledPokemons = Pokedex.defaultProps.pokemonData.Math.
// }

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  console.log(array);
  return array;
}

function App() {
  const shuffledPokedex = shuffle(Pokedex.defaultProps.pokemonData);
  console.log(shuffledPokedex);
  const player1Pokemons = shuffledPokedex.slice(0,4);
console.log(shuffledPokedex);
console.log(player1Pokemons);
  
  const player2Pokemons = shuffledPokedex.slice(4,8);
 console.log(player2Pokemons);

  return (
    <div>
      <PokemonBattle
       player1Pokemons={player1Pokemons}
       player2Pokemons={player2Pokemons}
      />
    </div>
  );
}

export default App;
