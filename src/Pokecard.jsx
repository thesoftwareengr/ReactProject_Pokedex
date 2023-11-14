import React from 'react';


function Pokecard({ id, name, type, base_experience }) {
  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
      <p>Type: {type}</p>
      <p>Base Experience: {base_experience}</p>
    </div>
  );
}

export default Pokecard;