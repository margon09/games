import { Center, Grid, GridItem, HStack, Heading, Show, Text, VStack, useColorMode } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"

const ErrorPage = () => {
  const error = useRouteError()
  const { colorMode } = useColorMode()

  return (
    <>
      <NavBar />
      <Grid templateAreas={{
        base: `"main"`,
        lg: `"aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
        xl: '300px 1fr', 
        '2xl': '300px 1fr', 
      }}
      >
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}></GridItem>
        </Show>
        <GridItem 
          area='main' 
          paddingRight={5} 
          paddingLeft={{base: '20px', md: '20px', lg: '0'}}
        >
          <Center height={{base: '95vh', md: '98vh'} }>
            <HStack 
              padding="4rem" 
              backgroundColor={colorMode === 'dark' ? 'gray.700' : 'gray.100'} 
              color='gray.500' borderRadius="md" 
              spacing={4} width='100%
            '>
              <VStack 
                align="center" 
                padding={{base: '0', md: '4rem'}} 
                spacing={4} width='100%'
              >
                <Heading as='h1'>Oops...</Heading>
                <Text>
                  {
                    isRouteErrorResponse(error)
                    ? 'This page does not exist'
                    : 'An unexpected error occurred'
                  }
                </Text>
              </VStack>
            </HStack>
          </Center>
      </GridItem>
    </Grid>
    </>
  )
}

export default ErrorPage