import { useEffect, useState } from "react";
import { All } from "../../service/services";
import { Container } from "./styles";
import { Pokemon } from "../types/index";
import { PokemonCard } from "../pokemonCard";
export function List() {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  // const [load, setLoad] = useState(All())
  const getStartPokemons = async () => {
    const response = await All();

    function createPokemon(result: { name: string, url: string }[]) {
      const newPokemons = [...allPokemons]
      result.forEach(async (pokemon: { name: string; url: string }) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        newPokemons.push(data.results);
      });
      setAllPokemons(newPokemons.sort());
    }
    createPokemon(response.results);
  };
  useEffect(() => {
    getStartPokemons();
  }, []);
  return (
    <Container>
      {allPokemons.sort().map((pokemon, index) => (
        <PokemonCard
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
          image={pokemon.sprites.other.dream_world.front_default}
          key={index}
        />
      ))}

      <button onClick={() => getStartPokemons()}> LoadMorea</button>
    </Container>
  );
}
