import { Box, Grid, GridItem, HStack, Image, Show, useColorMode } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import FilterIcon from './UI/FilterIcon'
import useGameQueryStore from '../store'

const NavBar = () => {
  const {width} = useWindowSize()
  const isDesktop = width > 599

  const { colorMode } = useColorMode()

  const toggleFilters = useGameQueryStore(state => state.toggleFilters)
  
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`
        }}
        templateColumns={{
          base: '1fr',
          lg: '250px 1fr',
          xl: '300px 1fr',
          '2xl': '300px 1fr',
        }}
        height= '6.5rem'
        position= 'sticky'
        top= '0'
        zIndex= '100'
        background= {colorMode === 'dark' ? 'gray.900' : 'white'}
      >
        <Show above='lg'>
          <GridItem 
            area='aside' 
            paddingX={5} 
            style={{
              width: '35%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center'
            }}>
              <Link to='/'>
                <Image src={logo}  />
              </Link>
            </GridItem>
          </Show>

          <GridItem area='main'>
            {
              isDesktop 
              ?
                <HStack 
                  height= '8.5rem'
                  position= 'sticky'
                  top= '0'
                  zIndex= '100'
                  background= {colorMode === 'dark' ? 'gray.900' : 'white'}
                >
                  <SearchInput />
                  <ColorModeSwitch />
                </HStack>
            : 
              <HStack 
                height= '8.5rem'
                position= 'sticky'
                top= '0'
                zIndex= '100'
                background= {colorMode === 'dark' ? 'gray.900' : 'white'}
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
                paddingTop='1rem'
              >
                <Box
                  display='flex'
                  flexDirection='row'
                >
                  <Link to={'/'} >
                    <Image src={logo}  style={{width: '18%'}}/>
                </Link>

                <Box 
                  marginRight='10px' 
                  display='flex' 
                  justifyContent='center'
                >
                  <ColorModeSwitch />
                </Box>
                </Box>

                <Box
                  width='100%'
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='center'

                >

                <Box
                  width='25%' 
                  onClick={toggleFilters} 
                >
                  <FilterIcon />
                </Box>
                <SearchInput />
              </Box>

              </HStack>
            }
        </GridItem>
      </Grid>
      </>
  )
}

export default NavBar