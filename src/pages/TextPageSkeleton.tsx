import { Grid, GridItem, Show, HStack, VStack, Heading, Text, useColorMode } from "@chakra-ui/react"

interface Props {
  heading: string
  text: string
}

const TextPageSkeleton = ({ heading, text }: Props) => {
  const { colorMode } = useColorMode()

  return (
    <>

      <Grid
        templateAreas={{
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
          marginRight={{ base: '0', md: '0', lg: '10rem' }}
        >
            <HStack
              padding={{ base: '1rem', md: '4rem' }}
              backgroundColor={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
              color='gray.500' borderRadius="md"
              spacing={4} 
              width='100%'
            >
              <VStack
                align="center"
                padding={{ base: '0', md: '4rem' }}
                spacing={4}
                width='100%'
              >
                <Heading as='h1'>{heading}</Heading>
                <Text>{text}</Text>
              </VStack>
            </HStack>
        </GridItem>
      </Grid>
    </>
  )
}

export default TextPageSkeleton;