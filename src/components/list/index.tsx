
import { useContext, useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import { Pokemon } from "../types/index";
import { PokemonCard } from "../pokemonCard";
import { Context } from "../../hooks/Provider";
import { observe } from "react-intersection-observer";

export function List() {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [next, setNext] = useState('')

  const loadMore = async (url = 'https://pokeapi.co/api/v2/pokemon?limit=20') => {
    const response = await fetch(url)
    const data: any = await response.json()
    setNext(data.next)
    const listRequest = data.results.map((urlPokemon: { url: RequestInfo; }) => {
      return fetch(urlPokemon.url).then(res => res.json())
    })
    const pokemonsPromise = await Promise.all(listRequest)
    setAllPokemons(allPokemons.sort((a, b) => a.id - b.id).concat(pokemonsPromise))
    // await allPokemons.sort((a, b) => a.id - b.id)
  }
  // const getStartPokemons = async () => {
  //   const response = await fetch(load);
  //   const data = await response.json()
  //   setLoad(data.next)
  //   function createPokemon(result: { name: string, url: string }[]) {
  //     const newPokemons = [...allPokemons]
  //     result.forEach(async (pokemon: { name: string; url: string }) => {
  //       const res = await fetch(pokemon.url);
  //       const data = await res.json();

  //       newPokemons.push(data);
  //       setAllPokemons([...newPokemons, data]);
  //       await allPokemons.sort((a, b) => a.id - b.id)

  //     });
  //   }
  //   createPokemon(data.results);
  // };

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting) && next) {
        loadMore(next)
      }
    })
    const sentinela: any = document.querySelector('#sentinelas')
    intersectionObserver.observe(sentinela)
    return () => intersectionObserver.disconnect()
  }, [next]);
  return (
    <>
      <Container>
        {allPokemons.map((pokemon, index) => (
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            image={pokemon.sprites.other.dream_world.front_default}
            key={index}
          />
        ))}

        {/* <button onClick={() => getStartPokemons()}> LoadMorea</button> */}
      </Container>
      <li id='sentinelas' style={{ background: 'red', width: '100%', padding: '10px' }}></li>
    </>
  );
}
