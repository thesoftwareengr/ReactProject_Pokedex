import React from 'react';
import PokemonBattle from './PokemonBattle';
import Pokedex from './Pokedex';
// import 'index.css'


function getRandomPokemons() {
  const shuffledPokemons = Pokedex.defaultProps.pokemonData.sort(() => 0.5 - Math.random());
  return shuffledPokemons.slice(0, 4);
}

function App() {
  const player1Pokemons = getRandomPokemons();
  const player2Pokemons = getRandomPokemons();

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