import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getPokemon();
  // }, []);

  async function getPokemon() {
    if (!search.trim()) {
      alert("Введите имя");
      return;
    }
    try {
      setLoading(true);
      setErrorMessage("");
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );
      if (!response.ok) {
        throw new Error("Покемон не найден");
      }
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      setErrorMessage("Покемон не найден");
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  }

  console.log(pokemon);

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Введите имя"
      />
      <button onClick={getPokemon} disabled={loading}>
        Загрузить
      </button>
      {loading && <p>Загрузка...</p>}
      {pokemon && !errorMessage && (
        <PokemonCard pokemon={pokemon}/>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export default App;
