import { useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { Container, ContainerInput, Icone, Input } from './styles'
export function Header() {
  const [listpokemon, setListPokemon] = useState('')

  return (
    <Container>
      {/* <Icone /> */}
      <ContainerInput>
        <Input
          value={listpokemon}
          onChange={(event) => setListPokemon(event.target.value)}
          placeholder='search' />
        <a href="">
          <FcSearch style={{ fontSize: 20 }} />
        </a>
      </ContainerInput>
    </Container>
  )
}