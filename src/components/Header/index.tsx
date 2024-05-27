import { HeaderContainer, LinkOptionsContainer, SearchInput, SearchInputContainer } from "./style"
import { CiSearch } from 'react-icons/ci'

function Header () {
  return (
    <HeaderContainer>
      <img src="/public/logo.png" width={100}/>
      <LinkOptionsContainer>
        <a>Home</a>
        <a>Tópicos</a>
        <a>Grupos</a>
        <a>FAQs</a>
        <a>Conta</a>
      </LinkOptionsContainer>
      <SearchInputContainer>
        <CiSearch size={28}/>
        <SearchInput type="text" placeholder="Buscar"/>
      </SearchInputContainer>
    </HeaderContainer>
  )
}

export default Header