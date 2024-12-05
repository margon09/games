import { VStack, Box } from '@chakra-ui/react'

const GenreListSkeleton = () => {
  const skeletons = Array.from({ length: 10 }, (_, i) => i)

  return (
    <VStack spacing={4} align="stretch">
      {skeletons.map((key) => (
        <Box
          key={key}
          height="20px"
          width="80%"
          bg="gray.300"
          borderRadius="md"
          _dark={{ bg: "gray.700" }}
        />
      ))}
    </VStack>
  )
}

export default GenreListSkeleton
