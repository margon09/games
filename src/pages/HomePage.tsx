import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GenreList from '../components/GenreList'
import GameHeading from '../components/GameHeading'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GameGrid from '../components/GameGrid'

const HomePage = () => {
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
      <Show above='lg'>
        <GridItem area='aside' paddingX={5} position= 'fixed' top='6.5rem'>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main' 
      >
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