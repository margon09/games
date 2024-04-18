import { HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <HStack marginLeft={{lg: '175px', xl: '225px'}} marginRight={5} width='100%'>
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder='Search games...' variant='filled'/>
    </InputGroup>
    </HStack>
  )
}

export default SearchInput