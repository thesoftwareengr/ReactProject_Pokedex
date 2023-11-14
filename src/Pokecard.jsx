// Function to pad the Pokemon ID with zeros
const padWithZeros = (id) => {
  const paddedId = String(id).padStart(3, '0');
  return paddedId;
};

function Pokecard({ id, name, type, base_experience }) {
  const paddedId = padWithZeros(id);

  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`} alt={name} />
      <p>Type: {type}</p>
      <p>Base Experience: {base_experience}</p>
    </div>
  );
}

export default Pokecard;