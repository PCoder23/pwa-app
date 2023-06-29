import { Avatar, AvatarBadge, Flex, Icon, Text } from "@chakra-ui/react";
import { FcApproval } from "react-icons/fc";
import {  useState } from "react";

type senderType = {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
};

type messageType = {
  id: string;
  message: string;
  sender: senderType;
  time: string;
}[];

type MainProps = {
  messages: messageType;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  fetchData: () => Promise<void>;
};

const Main = ({ messages, setPage, fetchData }: MainProps) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollTop <= clientHeight - scrollHeight + 450 && !isFetching) {
      setIsFetching(true);
      setPage((prevPage) => prevPage + 1);
      fetchData().then(() => setIsFetching(false));
    }

  };

  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column-reverse" p="3" onScroll={handleScroll}>
      {messages.map((message, index) => {
        if ( message.sender.self === true) {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                bg="#1C63D5"
                color="white"
                minW="100px"
                maxW="80%"
                my="2"
                p="2"
                rounded={10}
                borderBottomRightRadius={0}
                boxShadow="lg"
              >
                <Text  fontSize="xs" >{message.message}</Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%">
              <Avatar
                name="Computer"
                src={message.sender.image}
                bg="blue.300"
              >{message.sender.is_kyc_verified && (
                  <AvatarBadge boxSize=".9em" bg="white" border="transparent" >
                    <Icon as={FcApproval} boxSize=".8em" color="blue" />
                </AvatarBadge>
              )
                
              }
              </Avatar>
              <Flex
                bg="white"
                color="#606060"
                minW="100px"
                maxW="70%"
                my="2"
                rounded={15}
                mx={1}
                p="3"
                boxShadow="lg"
                borderTopLeftRadius={0}
              >
                <Text fontSize="xs" >{message.message}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
    </Flex>
                    )
}

export default Main