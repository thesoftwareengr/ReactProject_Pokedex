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
        setWinner("Prince");
      } else if (player2Exp > player1Exp) {
        setWinner("Ayan");
      } else {
        setWinner("It's a tie!");
      }

    };

    determineWinner();
    console.log(battle);
  }, [player1Pokemons, player2Pokemons,battle]);


  return (
    <>
    <div className="title">   
    <img src="https://www.freepnglogos.com/uploads/pokemon-logo-transparent-png-2.png" alt="" />
      </div>
        <div className="row">
          <div className=" col-md-5 text-center ">
          <div className="player-pokemon">
            <h2 className="player-name">Team Prince Pokemons</h2>
            <p className="experience"> {calculateTotalExp(player1Pokemons)}</p>
            </div>
            <div className="player">
            <Pokedex pokemonData={player1Pokemons} />
            </div>
          </div>
          <div className="col-md-2 text-center">
          <h2 className="winner">Winner: <div className="team-winner">{winner}</div></h2>
          
          <button className="fight" onClick={handleClick}>
      Fight!
    </button>
          </div> 
          <div className="col-md-5 text-center">
            <div className="player-pokemon">
            <h3 className="player-name">Team Ayan Pokemons</h3>
            <p className="experience"> {calculateTotalExp(player2Pokemons)}</p>
            </div>
            <div className="player">
              <Pokedex pokemonData={player2Pokemons} />
              </div>
          </div>
        </div>
    </>
  );
}

export default PokemonBattle;
