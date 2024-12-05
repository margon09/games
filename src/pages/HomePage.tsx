import { Box, Grid, GridItem, HStack, Show, useColorMode } from '@chakra-ui/react'
import GenreList from '../components/GenreList'
import GameHeading from '../components/GameHeading'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GameGrid from '../components/GameGrid'
import useGameQueryStore from '../store'
import useWindowSize from '../hooks/useWindowSize'

const HomePage = () => {
  const {width} = useWindowSize()
  const isMobile = width < 599
  
  const filtersOpened = useGameQueryStore(state => state.filtersOpened)

  const { colorMode } = useColorMode()

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
        <GridItem area='aside' paddingX={5} position= 'fixed' top={isMobile ? '6.5rem' : '8.5rem'}>
          <Box
            maxHeight={{ base: "calc(100vh - 6.5rem)", lg: "calc(100vh - 8.5rem)" }}
            overflowY="auto" 
            css={{
            scrollbarWidth: "none", 
            "&::-webkit-scrollbar": {
              display: "none", 
            },
          }}
            paddingX={5}
          >
            <GenreList />
          </Box>
        </GridItem>
      </Show>

    {
      isMobile 
      ?
      <GridItem area='main'>
        <Box
        className={filtersOpened ? "filtersContainer visible" : "filtersContainer"}
          position='sticky'
          top='8.5rem'
          zIndex='100'
          background= {colorMode === 'dark' ? 'gray.900' : 'white'}
          
        >
          {filtersOpened &&  
          <>
          <GameHeading /><HStack spacing={ 5 } paddingLeft={ 2 } marginBottom={ 5 } marginTop={ 2.5 }>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          </>
          }
        </Box>
        <GameGrid />
      </GridItem>
      :
      <GridItem area='main'>
        <Box
          position='sticky'
          top='8.5rem'
          zIndex='100'
          height= '9rem'
          background= {colorMode === 'dark' ? 'gray.900' : 'white'}
        >
          <GameHeading /><HStack spacing={ 5 } paddingLeft={ 2 } marginBottom={ 5 } marginTop={ 2.5 }>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
      }
    </Grid>
  )
}

export default HomePage