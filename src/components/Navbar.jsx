import { useEffect, useState } from "react";
import style from "./Navbar.module.css";

function Navbar({ pokemonsList, setTempPokemons, pesquisa, setPesquisa }) {
  useEffect(() => {
    let pokemonsFiltrados = pokemonsList.filter((list) =>
      list.name.includes(pesquisa)
    );
    setTempPokemons(pokemonsFiltrados);
  }, [pesquisa, setTempPokemons]);

  return (
    <nav className={style.nav}>
      <span>Pokemon</span>
      <input
        type="text"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
    </nav>
  );
}

export default Navbar;
