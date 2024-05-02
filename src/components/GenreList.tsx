import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"
import useGameQueryStore from "../store"


const GenreList = () => {
  const {data} = useGenres()
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const seSelectedGenreId = useGameQueryStore(s => s.setGenreId)

  return (
    <>
      <Heading fontSize='2xl' marginBottom={8} marginTop={3}>Genres</Heading>
      <List>
        {data?.results.map(genre => 
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image 
                boxSize='32px' 
                borderRadius={8} 
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button 
                whiteSpace='normal' 
                textAlign='left' 
                fontSize='lg' 
                variant='link'
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} 
                onClick={() => seSelectedGenreId(genre.id)} 
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        )}
      </List>
    </>
  )
}

export default GenreList