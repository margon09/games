import { Grid, GridItem, HStack, Show, useColorMode } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery {
  genreId?: number
  platformId?: number
  sortOrder: string
  searchText: string
}

function App() {
  const { colorMode } = useColorMode()

  // query object pattern
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

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
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText})}/>
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList 
            selectedGenreId={gameQuery.genreId} 
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}
          />
        </GridItem>
      </Show>
      <GridItem area='main' paddingRight={5} paddingLeft={{base: '20px', md: '20px', lg: '0'}}>
        <GameHeading gameQuery={gameQuery}/>
        <HStack spacing={5} paddingLeft={2} marginBottom={5} marginTop={2.5}>
          <PlatformSelector 
            selectedPlatformId={gameQuery.platformId} 
            onSelectPlatform={(platform => setGameQuery({...gameQuery, platformId: platform.id}))}
          />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
