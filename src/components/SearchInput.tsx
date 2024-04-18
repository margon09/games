import { Button, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Text  } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { BsSearch, BsX  } from 'react-icons/bs'

interface Props {
  onSearch: (searchText: string) => void
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleClear = () => {
    if (ref.current) {
      ref.current.value = ''
      // ref.current.focus()
      setIsFocused(false)
    }
  }

  useEffect(() => {
    const handleAltEnter = (event: KeyboardEvent) => {
      if (event.altKey && event.key === 'Enter') {
        if (ref.current) {
          ref.current.focus()
          setIsFocused(true)
        }
      }
    }

    document.addEventListener('keydown', handleAltEnter)

    return () => {
      document.removeEventListener('keydown', handleAltEnter)
    }
  }, [])
  
  return (
    <HStack 
      marginLeft={{lg: '175px', xl: '225px'}} 
      marginRight={{base: '5px', lg: '20px'}} width='100%'
    >
    <form 
      onSubmit={(event) => {
        event.preventDefault()
        if(ref.current) onSearch(ref.current.value)
      }}
    >
      <InputGroup>
        <InputLeftElement 
          children={<BsSearch fontSize="18px" />} 
          color="gray.500"
        />
        <Input 
          ref={ref} 
          borderRadius={17} 
          placeholder='Search games...' 
          variant='filled' 
          bg="gray.650" 
          _focus={{ bg: "gray.100", color: "black" }}
          _hover={{  bg: "gray.100", color: "black"  }}
          sx={{
            '&::placeholder': {
              color: 'gray.500',
            },
          }}
          onFocus={() => setIsFocused(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
              setIsHovered(false)
              setIsFocused(false)
            }}
        />
        <InputRightElement color='gray.500' width={isFocused || isHovered ? '5%' : '10%'}>
          {isFocused || isHovered ? (
              <BsX
                fontSize='32px'
                onClick={handleClear}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <HStack gap='0.2rem'>
                <Button
                  height='25px'
                  padding='2px'
                  variant="outline"
                  borderRadius="4px"
                  border="1px"
                  borderColor="gray.500"
                  color="gray.500"
                  fontFamily="'Courier New', Courier, monospace"
                  fontSize='12px'
                  style={{ cursor: 'auto' }}
                >
                  alt
                </Button>
                <Text>+</Text>
                <Button
                    height='25px'
                    padding='4px'
                    variant="outline"
                    borderRadius="4px"
                    border="1px"
                    borderColor="gray.500"
                    color="gray.500"
                    fontFamily="'Courier New', Courier, monospace"
                    fontSize='12px'
                    style={{ cursor: 'auto' }}
                  >
                    enter
                  </Button>
              </HStack>
            )}
        </InputRightElement>
      </InputGroup>
    </form>
    </HStack>
  )
}

export default SearchInput