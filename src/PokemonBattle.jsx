import React, { useState, useEffect } from 'react';
import Pokedex from './Pokedex';
import './index.css';

// Utility function to calculate total experience
const calculateTotalExp = (pokemons) => {
  return pokemons.reduce((totalExp, pokemon) => totalExp + pokemon.base_experience, 0);
};

function PokemonBattle({ player1Pokemons, player2Pokemons }) {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const determineWinner = () => {
      const player1Exp = calculateTotalExp(player1Pokemons);
      const player2Exp = calculateTotalExp(player2Pokemons);

      if (player1Exp > player2Exp) {
        setWinner('Player 1');
      } else if (player2Exp > player1Exp) {
        setWinner('Player 2');
      } else {
        setWinner('It\'s a tie!');
      }
    };

    determineWinner();
  }, [player1Pokemons, player2Pokemons]);

  return (
    <div>
      <h2>Pokemon Battle</h2>

      <div className='player_1'>
        <h3>Player 1 Pokemons</h3>
        <Pokedex pokemonData={player1Pokemons} />
        <p>Total Experience: {calculateTotalExp(player1Pokemons)}</p>
      </div>

      <div className='player_2'>
        <h3>Player 2 Pokemons</h3>
        <Pokedex pokemonData={player2Pokemons} />
        <p>Total Experience: {calculateTotalExp(player2Pokemons)}</p>
      </div>

      {winner && <h2>The winner is: {winner}</h2>}
    </div>
  );
}

export default PokemonBattle;