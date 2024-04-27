import { Center, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
    <NavBar />
    <Center height={{base: '95vh', md: '98vh'}}>
      <HStack padding="4rem" backgroundColor="gray.100" color="gray.900" borderRadius="md" spacing={4}>
        <VStack align="center" padding={{base: '0', md: '4rem'}} borderWidth={{base: '0', md: '1px'}} borderColor="gray.900" borderRadius="md" spacing={4}  width={{base: '55vw', md: '50vw', lg: '50vw', xl: '40vw'}}>
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
    </>
  )
}

export default ErrorPage