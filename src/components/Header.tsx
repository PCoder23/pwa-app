import { Flex, Text, Avatar } from '@chakra-ui/react'
import { ArrowBackIcon, EditIcon,Icon } from '@chakra-ui/icons'
import { FiMoreVertical } from 'react-icons/fi'
import logo from '../img/image1.png';

type HeaderProps = {
    from: string;
    to: string;
    tripName: string;
}

const Header = ({from,to,tripName}:HeaderProps) => {
    return (
        <Flex w="100%" flexDir="column">
            <Flex my={4} align="center"  >
                <ArrowBackIcon boxSize={10} />
                <Text fontSize="3xl" fontWeight="bold" ml="2">{ tripName}</Text>
                <EditIcon justifySelf="flex-end" ml="auto" boxSize={6} />
            </Flex>
            
      <Flex w="100%">
          <Avatar size="lg" name="logo" src={logo}>
          </Avatar>  
          <Flex direction="column" mx="5" justify="center">
                    <Text fontSize="sm" >From <Text as="span" fontSize="md" fontWeight="bold">{ from}</Text></Text>
                    <Text fontSize="sm">To <Text fontSize="md" as="span" fontWeight="bold">{ to}</Text></Text>
           </Flex>   
          
            <Icon as={FiMoreVertical} boxSize={6} ml="auto" mr="2" justifySelf="flex-end" alignSelf="center" />
            </Flex>
    </Flex>

  )
}

export default Header