import { Grid, GridItem, Show } from '@chakra-ui/react'
import GenreListSkeleton from './GenreListSkeleton'
import GameGridSkeleton from './GameGridSkeleton'

interface Props {
  children: React.ReactNode
  asideContent: React.ReactNode
  loading?: boolean
}

const PageLayout = ({ children, asideContent, loading }: Props) => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
        xl: '300px 1fr',
        '2xl': '300px 1fr',
      }}
    >
      <Show above="lg">
        <GridItem
          area="aside"
          paddingX={5}
          position="fixed"
          top="8.5rem"
          css={{
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          overflowY="auto"
        >
          {loading ? <GenreListSkeleton /> : asideContent}
        </GridItem>
      </Show>
      <GridItem area="main">{loading ? <GameGridSkeleton /> : children}</GridItem>
    </Grid>
  )
}

export default PageLayout


