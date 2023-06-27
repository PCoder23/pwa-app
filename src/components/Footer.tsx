import { Input, Flex } from "@chakra-ui/react"
import { AttachmentIcon,Icon } from '@chakra-ui/icons'
import { BiSend } from 'react-icons/bi'


const Footer = ({to}:{to:string}) => {
  return (
    <Flex w="100%" alignItems="center" bg="white" rounded={5} my={3} mx={1}>

      <Input placeholder={"reply to @" + to} border="none" px={5} bg="white"/>
      <AttachmentIcon boxSize={6} ml="auto" mr="2" />
      <Icon as={BiSend} boxSize={6} mr="2" />
    </Flex>
  )
}

export default Footer   