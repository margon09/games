import { Heading } from '@chakra-ui/react'
import usePlatform from '../hooks/usePlatform'
import useGenre from '../hooks/useGenre'
import useGameQueryStore from '../store'

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genre =  useGenre(genreId)

  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = usePlatform(platformId)

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

  return (
    <Heading as='h1' 
      marginY={5} 
      fontSize={{base: '2xl', md: '5xl'}} 
      paddingLeft={2}
    >
      {heading}
    </Heading>
  )
}

export default GameHeading