import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'
import { Link } from 'react-router-dom'

interface Props {
  game: Game
}

const GameCard = ({game}: Props) => {
  const cardBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Card
      bg={cardBg}
      _hover={{
        transform: 'scale(1.05)',
        transition: 'transform .6s ease-in',
      }}
      transition='all 0.6s ease-out'
    >
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <CardBody maxHeight= '182px' minHeight= '182px'>
        <HStack justifyContent='space-between' marginBottom={3}>
          {game.parent_platforms?.length > 0 && (
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
          )}
          <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize='2xl' minHeight= '58px'>
          <Link to={'/games/' + game.slug}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top}/>
      </CardBody>
    </Card>
  )
}

export default GameCard