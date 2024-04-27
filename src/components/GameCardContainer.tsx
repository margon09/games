import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const GameCardContainer = ({children}: Props) => {
  return (
    <Box 
      borderRadius={10} 
      overflow='hidden'  
      boxShadow= '0 0 3px rgba(121, 127, 129, 0.2)'
      _hover={{
        transform: 'scale(1.02)',
        transition: 'transform .3s ease-in',
        boxShadow: '0 0 7px rgba(121, 127, 129, 0.2)',
      }}
      transition='all .6s ease-out'
    >
      {children}
    </Box>
  )
}

export default GameCardContainer