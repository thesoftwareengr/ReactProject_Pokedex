import React, { useState, useEffect } from "react";
import Pokedex from "./Pokedex";
import "./index.css";


const calculateTotalExp = (pokemons) => {
  
  return pokemons.reduce(
    (totalExp, pokemon) => totalExp + pokemon.base_experience,
    0
  );
};




function PokemonBattle({ player1Pokemons, player2Pokemons,onUpdateData }) {
  const [winner, setWinner] = useState(null);
  const[battle, setBattle] = useState(true);
  
  
  
  const handleClick = () => {
    setBattle(!battle);

    onUpdateData(battle);
    
  };
  useEffect(() => {
    const determineWinner = () => {
      const player1Exp = calculateTotalExp(player1Pokemons);
      const player2Exp = calculateTotalExp(player2Pokemons);

      if (player1Exp > player2Exp) {
        setWinner("Player 1");
      } else if (player2Exp > player1Exp) {
        setWinner("Player 2");
      } else {
        setWinner("It's a tie!");
      }

    };

    determineWinner();
    console.log(battle);
  }, [player1Pokemons, player2Pokemons,battle]);


  return (
    <>
      <h1 className="title">Pokemon Battle</h1>
        <div className="row">
          <div className=" col-md-5 text-center ">
         
            <h2>Team Prince Pokemons</h2>
            <p>Total Experience: {calculateTotalExp(player1Pokemons)}</p>
            <div className="player">
            <Pokedex pokemonData={player1Pokemons} />
            </div>
          </div>
          <div className="col-md-2 text-center">
          <h2>The winner is: {winner}</h2>
          
          <button className="fight" onClick={handleClick}>
      Fight!
    </button>
          </div> 
          <div className="col-md-5 text-center">
            <h3>Team Ayan Pokemons</h3>
            <p>Total Experience: {calculateTotalExp(player2Pokemons)}</p>
            <div className="player">
              <Pokedex pokemonData={player2Pokemons} />
              </div>
          </div>
        </div>
      {/* <div className="row winner">{winner && <h2>The winner is: {winner}</h2>}</div> */}
    </>
  );
}

export default PokemonBattle;
