import styles from "./Card.module.css";
import Pokemon from "./Pokemon";

function Card({ pokemons }) {
  return (
    <div className={styles.card}>
      <Pokemon pokemons={pokemons} />
    </div>
  );
}

export default Card;
