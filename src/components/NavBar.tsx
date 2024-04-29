import { HStack, Image, Show, useColorMode } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  const { colorMode } = useColorMode()
  
  return (
    <HStack 
      height= '6.5rem'
      position= 'sticky'
      top= '0'
      zIndex= '100'
      background= {colorMode === 'dark' ? 'gray.900' : 'white'}
    >
      <Show above='lg'>
        <Image src={logo} boxSize='60px'/>
      </Show>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar