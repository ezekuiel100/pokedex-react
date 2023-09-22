import { useEffect, useState } from "react";

import Home from "./pages/Home";
import "./Global.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [pokemonsList, setPokemonsList] = useState([]);
  const [tempPokemons, setTempPokemons] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => res.json())
      .then((data) => setPokemonsList(data.results));
  }, []);

  return (
    <>
      <Navbar
        pokemonsList={pokemonsList}
        setTempPokemons={setTempPokemons}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
      />
      <Home>
        {pesquisa.length > 0
          ? tempPokemons.map((pokemons, i) => (
              <Card pokemons={pokemons} key={i} />
            ))
          : pokemonsList.map((pokemons, i) => (
              <Card pokemons={pokemons} key={i} />
            ))}
      </Home>
    </>
  );
}

export default App;
