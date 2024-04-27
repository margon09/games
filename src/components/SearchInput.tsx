import { ChangeEvent, FormEvent, MouseEvent } from 'react'
import {Button, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Text, useToast } from '@chakra-ui/react'
import {  useRef, useState } from 'react'
import { BsSearch, BsX } from 'react-icons/bs'
import useWindowSize from '../hooks/useWindowSize'
import useGameQueryStore from '../store'
import CustomToast from './UI/CustomToast'
import useKeyboardEvents from '../hooks/useKeyboardEvents'


const SearchInput = () => {
  const {width} = useWindowSize()
  const isDesktop = width > 599

  const ref = useRef<HTMLInputElement>(null)
  const setSearchText = useGameQueryStore(s => s.setSearchText)
  
  const toast = useToast()

  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleClear = () => {
    if (ref.current) {
      ref.current.value = ''
      setInputValue('')
    }
  }

  useKeyboardEvents({
    'Alt+Enter': () => {
      if (ref.current) {
        ref.current.focus()
        setIsFocused(true)
      }
    },
    Delete: () => {
      if (ref.current) {
        handleClear()
      }
    }
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const showToast = () => {
    toast({
      position: 'top',
      duration: 3000,
      render: () => (
        <CustomToast
          title="Empty Input"
          description="Please enter a search query."
          isClosable={true}
        />
      ),
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (inputValue.trim() === '') {
      showToast()
    } else {
      if (ref.current) setSearchText(inputValue)
    }
  }

  return (
    <HStack
      marginLeft={{ lg: '175px', xl: '225px' }}
      marginRight={{ base: '5px', lg: '20px' }} 
      width='100%'
    >
      <form onSubmit={handleSubmit}>
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
            _hover={{ bg: "gray.100", color: "black", transition: 'all .5s ease-in' }}
            transition='all .7s ease-out'
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
                  onClick={handleSubmit}
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
