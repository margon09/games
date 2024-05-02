import { Image, SimpleGrid, useColorMode } from "@chakra-ui/react"
import useScreenshots from "../hooks/useScreenshots"

interface Props {
  gameId: number
}

const GameScreenshots = ({gameId}: Props) => {
  const { colorMode } = useColorMode()

  const {data, error, isLoading} = useScreenshots(gameId)

  if(isLoading) return null

  if(error) throw error

  return (
    <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={ colorMode=== 'dark' ? 2 : 1 }>
      {data?.results.map(file => 
        <Image 
          key={file.id}
          src={file.image}
        />
      )}
    </SimpleGrid>
  )
}

export default GameScreenshots