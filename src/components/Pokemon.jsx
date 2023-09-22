import { useEffect, useState } from "react";

function Pokemon({ pokemons }) {
  const [pokemon, setPoke] = useState(null);

  useEffect(() => {
    fetch(pokemons.url)
      .then((res) => res.json())
      .then((data) => setPoke(data));
  }, [pokemons]);

  if (pokemon == null) return;

  return (
    <>
      <img src={pokemon.sprites.front_default} />
      <p>{pokemon.name}</p>
    </>
  );
}

export default Pokemon;
