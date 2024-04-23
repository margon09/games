import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenreId?: number
}

const GenreList = ({selectedGenreId, onSelectGenre}: Props) => {
  const {data} = useGenres()

  return (
    <>
      <Heading fontSize='2xl' marginBottom={8} marginTop={7}>Genres</Heading>
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
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        )}
      </List>
    </>
  )
}

export default GenreList