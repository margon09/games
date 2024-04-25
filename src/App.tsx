import { Grid, GridItem, HStack, Show, useColorMode } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

function App() {
  const { colorMode } = useColorMode()

  const bgColor = colorMode === 'dark' ? 'gray.800' : 'gray.50'

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr',
      xl: '300px 1fr', 
      '2xl': '300px 1fr', 
    }}
    >
      <GridItem area='nav' className='gridItem' backgroundColor={bgColor}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main' paddingRight={5} paddingLeft={{base: '20px', md: '20px', lg: '0'}}>
        <GameHeading />
        <HStack spacing={5} paddingLeft={2} marginBottom={5} marginTop={2.5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
