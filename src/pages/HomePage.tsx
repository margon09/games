import { Box, HStack, useColorMode } from '@chakra-ui/react'
import GenreList from '../components/GenreList'
import GameHeading from '../components/GameHeading'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GameGrid from '../components/GameGrid'
import PageLayout from '../components/PageLayout'

const HomePage = () => {
  const asideContent = <GenreList />

  const { colorMode } = useColorMode()

  const mainContent = (
    <>
      <Box 
        position="sticky" 
        zIndex="100" 
        height="9rem" 
        background={colorMode === 'dark' ? 'gray.900' : 'white'}
      >
        <GameHeading />
        <HStack spacing={5} paddingLeft={2} marginBottom={5} marginTop={2.5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
      </Box>
      <GameGrid />
    </>
  )

  return <PageLayout asideContent={asideContent}>{mainContent}</PageLayout>
}

export default HomePage



