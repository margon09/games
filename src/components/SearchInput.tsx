import { ChangeEvent, FormEvent, useRef, useEffect } from 'react'
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import { BsSearch, BsX } from 'react-icons/bs'
import useWindowSize from '../hooks/useWindowSize'
import useGameQueryStore from '../store'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
  const { width } = useWindowSize()
  const isDesktop = width > 599

  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((state) => state.setSearchText)
  const searchText = useGameQueryStore((state) => state.gameQuery.searchText)
  const navigate = useNavigate()

  const handleClear = () => {
    setSearchText('')
    if (ref.current) {
      ref.current.value = ''
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (searchText?.trim()) {
      navigate('/')
    }
  }

  const focusInput = () => {
    if (ref.current) {
      ref.current.focus()
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key === 'Enter') {
        focusInput()
        event.preventDefault()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <HStack marginRight={{ base: '5px', lg: '20px' }} width="100%">
      <form onSubmit={handleSubmit}>
        <InputGroup marginLeft={{ base: '0', md: '0.5rem' }}>
          <InputLeftElement
            className="leftInputElement"
            children={<BsSearch className="searchBtn" />}
          />
          <Input
            ref={ref}
            value={searchText || ''}
            onChange={handleChange}
            borderRadius={17}
            placeholder={isDesktop ? 'Search games...' : 'Search'}
            variant="filled"
            focusBorderColor="blue.600"
            _focus={{ bg: 'gray.100', color: 'black' }}
            _hover={{ bg: 'gray.100', color: 'black', transition: 'all .5s ease-in' }}
            transition="all .7s ease-out"
            sx={{
              '&::placeholder': {
                color: 'gray.500',
              },
            }}
          />
          {isDesktop ? (
            <InputRightElement className="rightInputElement1">
              {searchText && (
                <HStack gap="0.2rem">
                  <BsX
                    className="xBtn"
                    onClick={handleClear}
                    style={{ cursor: 'pointer' }}
                  />
                </HStack>
              )}
              {!searchText && (
                <HStack gap="0.2rem">
                  <Button className="btn1" variant="outline">
                    alt
                  </Button>
                  <Text>+</Text>
                  <Button
                    className="btn2"
                    variant="outline"
                    onClick={(e) => {
                      e.preventDefault()
                      focusInput()
                    }}
                  >
                    enter
                  </Button>
                </HStack>
              )}
            </InputRightElement>
          ) : (
            <InputRightElement className="rightInputElement2">
              {searchText && (
                <BsX
                  className="xBtn"
                  onClick={handleClear}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </InputRightElement>
          )}
        </InputGroup>
      </form>
    </HStack>
  )
}

export default SearchInput

