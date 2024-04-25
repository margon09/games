import { Button, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { BsSearch, BsX } from 'react-icons/bs'
import useWindowSize from '../hooks/useWindowSize'
import useGameQueryStore from '../store'

const SearchInput = () => {
  const {width} = useWindowSize()
  const isDesktop = width > 599
  
  const ref = useRef<HTMLInputElement>(null)
  const setSearchText = useGameQueryStore(s => s.setSearchText)

  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleClear = () => {
    if (ref.current) {
      ref.current.value = ''
      setInputValue('')
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

    const handleDelete = (event: KeyboardEvent) => {
    if (event.key === 'Delete') {
      if (ref.current) {
        ref.current.value = ''
      }
    }
  }

    document.addEventListener('keydown', handleAltEnter)
    document.addEventListener('keydown', handleDelete)

    return () => {
      document.removeEventListener('keydown', handleAltEnter)
      document.removeEventListener('keydown', handleDelete)
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <HStack
      marginLeft={{ lg: '175px', xl: '225px' }}
      marginRight={{ base: '5px', lg: '20px' }} 
      width='100%'
    >
      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (ref.current) setSearchText(inputValue)
        }}
      >
        <InputGroup marginLeft={{ base: '10px', lg: '0' }}>
          <InputLeftElement
            className='leftInputElement'
            children={<BsSearch className='searchBtn'/>}
          />
          <Input
            ref={ref}
            value={inputValue}
            onChange={handleChange}
            borderRadius={17}
            placeholder={isFocused ? '' : isDesktop ? 'Search games...' : 'Search'}
            variant='filled'
            _focus={{ bg: "gray.100", color: "black" }}
            _hover={{ bg: "gray.100", color: "black" }}
            sx={{
              '&::placeholder': {
                color: 'gray.500',
              },
            }}
            onFocus={() => {
              setIsFocused(true)
              ref.current?.focus()
            }}
            onBlur={() => {
              setIsFocused(false)
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false)
              setIsFocused(false)
              ref.current?.blur()
            }}
          />
          {
            isDesktop ?
              <InputRightElement className='rightInputElement1'>
              {(isFocused || isHovered || inputValue) && (
                <HStack gap='0.2rem'>
                <BsX
                  className='xBtn'
                  onClick={handleClear}
                  style={{ cursor: 'pointer'}}
                />
                  </HStack>
              )}
              {!isFocused && !isHovered && !inputValue && (
                <HStack gap='0.2rem'>
                  <Button
                    className='btn1'
                    variant="outline"
                  >
                    alt
                  </Button>
                  <Text>+</Text>
                  <Button
                    className='btn2'
                    variant="outline"
                  >
                    enter
                  </Button>
                </HStack>
              )}
              </InputRightElement>
              :
              <InputRightElement className='rightInputElement2'>
                  <BsX
                    className='xBtn'
                    onClick={handleClear}
                    style={{ cursor: 'pointer' }}
                  />
                <Button
                  className='btn2'
                  variant="outline"
                  onClick={(event) => {
                    if (!isDesktop) {
                      event.preventDefault()
                      if (ref.current) setSearchText(inputValue)
                    }
                  }}
                  style={{marginRight: '2rem'}}
                >
                  enter
                </Button>
              </InputRightElement>
          }
        </InputGroup>
      </form>
    </HStack>
  )
}

export default SearchInput
