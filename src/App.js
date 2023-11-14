import React, { useState } from 'react';
import PokemonBattle from './PokemonBattle';
import Pokedex from './Pokedex';
import 'bootstrap/dist/css/bootstrap.min.css';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function App() {
  const [data, setData] = useState('initialData');

  const handleUpdate = (newData) => {
    setData(newData);
  };

  const shuffledPokedex = shuffle(Pokedex.defaultProps.pokemonData);
  const player1Pokemons = shuffledPokedex.slice(0, 4);
  const player2Pokemons = shuffledPokedex.slice(4, 8);

  return (
    <div>
      <PokemonBattle
        player1Pokemons={player1Pokemons}
        player2Pokemons={player2Pokemons}
        onUpdateData={handleUpdate} // Pass the callback function to the child
      />
      <div>Data in Parent: {data}</div>
    </div>
  );
}

export default App;