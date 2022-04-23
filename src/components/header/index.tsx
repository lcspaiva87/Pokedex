import { FcSearch } from 'react-icons/fc'
import { Container, ContainerInput, Input } from './styles'
export function Header() {
  return (
    <Container>
      <ContainerInput>
        <Input placeholder='search' />
        <a href="">
          <FcSearch style={{ fontSize: 20 }} />
        </a>
      </ContainerInput>
    </Container>
  )
}