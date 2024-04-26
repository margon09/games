import { Box, CloseButton, useToast } from "@chakra-ui/react"

interface Props {
  title: string
  description: string
  isClosable?: boolean
}

const CustomToast = ({ title, description, isClosable }: Props) => {
  const toast = useToast()

  const handleClose = () => {
    toast.closeAll()
  }
  return (
    <Box
      p="1rem"
      borderRadius="0.5rem"
      bg="gray.700"
      color="white"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
      position="relative"
    >
      {title && <strong>{title}</strong>}
      {description && <p>{description}</p>}
      {isClosable && (
        <CloseButton
          position="absolute"
          top="0.5rem"
          right="0.5rem"
          onClick={handleClose}
        />
      )}
    </Box>
  )

}

export default CustomToast