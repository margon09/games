import { SimpleGrid } from '@chakra-ui/react'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'

const GameGridSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3, '2xl': 5 }}
      spacing={5}
      padding="10px"
      mt='10.3rem'
    >
      {skeletons.map((skeleton) => (
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  )
}

export default GameGridSkeleton
