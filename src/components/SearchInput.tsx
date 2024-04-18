import { HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSearch: (searchText: string) => void
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <HStack marginLeft={{lg: '175px', xl: '225px'}} marginRight={{base: '5px', lg: '20px'}} width='100%'>
    <form onSubmit={(event) => {
      event.preventDefault()
      if(ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={17} placeholder='Search games...' variant='filled'/>
      </InputGroup>
    </form>
    </HStack>
  )
}

export default SearchInput