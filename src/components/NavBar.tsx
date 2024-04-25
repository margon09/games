import { HStack, Image, Show } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Show above='lg'>
        <Image src={logo} boxSize='60px'/>
      </Show>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar