import styles from "./Card.module.css";

import { useEffect, useState } from "react";

function Card({ pokemons }) {
  const [pokemon, setPoke] = useState(null);

  useEffect(() => {
    fetch(pokemons.url)
      .then((res) => res.json())
      .then((data) => setPoke(data));
  }, [pokemons]);

  if (pokemon == null) return;

  return (
    <div className={styles.card}>
      <img src={pokemon.sprites.front_default} />
      <p>{pokemon.name}</p>
    </div>
  );
}

export default Card;
