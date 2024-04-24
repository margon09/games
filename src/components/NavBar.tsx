import { HStack, Image, Show } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding='10px'>
      <Show above='lg'>
        <Image src={logo} boxSize='60px'/>
      </Show>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar