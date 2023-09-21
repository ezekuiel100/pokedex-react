import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((res) => res.json())
      .then((data) => console.log(data.sprites.back_default));
  }, []);

  return (
    <>
      {/* {pokemons.map((pokemon) => (
        <p>{pokemon.url}</p>
      ))} */}
    </>
  );
}

export default App;
