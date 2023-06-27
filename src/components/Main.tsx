import { Avatar, Flex ,Text} from "@chakra-ui/react";
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
    const [threshold, setThreshold] = useState<number>(-600);
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { scrollTop} = e.currentTarget;
    if (scrollTop <= threshold) {
      setPage((prevPage) => prevPage + 1);
      fetchData();
      setThreshold((prevThreshold) => prevThreshold-1000);
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
                src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                bg="blue.300"
              ></Avatar>
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