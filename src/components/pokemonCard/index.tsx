import { ContainerImg, ContainerInfo, ContainerThub, ImgContainer, NamePokemon, NumberPokemon } from "./styles"

interface Pokemoncard {
  id?: number,
  name: string,
  type: string,
  image: string
}
export const PokemonCard = ({ id, name, image, type }: Pokemoncard) => {
  return (
    <>

      <ContainerThub itemType={type}>
        <ContainerImg >
          <ImgContainer src={image} alt={name} height={100} width={100} />
        </ContainerImg>
        <ContainerInfo>
          <NamePokemon>{name}</NamePokemon>
          <NumberPokemon>#0{id}</NumberPokemon>
          <small>Type:{type}</small>
        </ContainerInfo>
      </ContainerThub>
    </>
  )
}