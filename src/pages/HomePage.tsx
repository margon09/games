import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GenreList from '../components/GenreList'
import GameHeading from '../components/GameHeading'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GameGrid from '../components/GameGrid'

const HomePage = () => {
  //  const { colorMode } = useColorMode()

  // const bgColor = colorMode === 'dark' ? 'gray.800' : 'gray.50'

  return (
    <Grid templateAreas={{
      base: `"main"`,
      lg: `"aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr',
      xl: '300px 1fr', 
      '2xl': '300px 1fr', 
    }}
    >
      {/* <GridItem area='nav' className='gridItem' backgroundColor={bgColor}>
        <NavBar />
      </GridItem> */}
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

export default HomePage