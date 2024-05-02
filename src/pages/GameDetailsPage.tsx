import { Grid, GridItem, Show, HStack, VStack, Heading, useColorMode, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import ExpandableText from "../components/ExpandableText"
import GameAttributes from "../components/GameAttributes"
import GameTrailer from "../components/GameTrailer"
import GameScreenshots from "../components/GameScreenshots"

const GameDetailsPage = () => {
  const { colorMode } = useColorMode()
  const {slug} = useParams()
  const {data: game, isLoading, error} = useGame(slug!)

  if (error) {
    throw error
  }

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
      >
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}></GridItem>
        </Show>
        <GridItem
          area='main'
          marginRight={{ base: '0', md: '0', lg: '10rem' }}
          marginTop= {{ base: '2rem', md: '0', lg: '0' }}
        >
          <HStack
            padding={{ base: '1rem', md: '4rem' }}
            backgroundColor={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
            color='gray.500' borderRadius="md"
            spacing={4} 
            width='100%'
          >
            <VStack
              align="center"
              justify="center"
              padding={{ base: '0', md: '4rem' }}
              spacing={4}
              width='100%'
            >
              {(isLoading || !game) && <Spinner />}
              {!isLoading && game && (
                <>
                  <Heading as='h1' width='100%'>{game.name}</Heading>
                  <ExpandableText>{game.description_raw}</ExpandableText>
                  <GameAttributes game={game}/>
                  <GameTrailer gameId={game.id}/>
                  <GameScreenshots gameId={game.id}/>
                </>
              )}
            </VStack>
          </HStack>
        </GridItem>
      </Grid>
    </>
  )
}

export default GameDetailsPage
