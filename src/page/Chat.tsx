import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Divider from '../components/Divider'
import { getMessages } from '../api/messages'
import { Flex,CircularProgress } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

type senderType = {
    image: string
    is_kyc_verified: boolean
    self: boolean
    user_id: string
}

type messageType = {
    id: string
    message: string
    sender: senderType
    time: string

}


const Chat = () => {
    const [messages, setMessages] = useState<messageType[]>([])
    const [from, setFrom] = useState<string>('')
    const [to, setTo] = useState<string>('')
    const[page,setPage] = useState<number>(0)
    const [tripName, setTripName] = useState<string>('')
    useEffect(() => { 
        getMessages(0).then((res) => {
            setMessages(res?.chats.reverse() || []);
            setFrom(res?.from)
            setTo(res?.to)
            setTripName(res?.name)
        })
    }, [])
    
    const fetchData = async () => { 
        console.log(page);
        const res = await getMessages(page)
        console.log(messages);
        setMessages((prevMessages) => [...prevMessages, ...(res?.chats.reverse() || [])]);
    }
  return (
      <div>
          
          <Flex w="100%" h="100vh" justify="center" align="center" bg="#FAF9F4" >
              <Flex w={["100%","100%","40%"]} h="95%" flexDir="column" align="center" mx={4}  >
                  <Header from={from} to={to} tripName={tripName}  />
                  <Divider />
                  {messages.length ? <Main messages={messages} setPage={setPage} fetchData={ fetchData} /> : <CircularProgress />}
                  <Divider />
                  <Footer to={ to} />
              </Flex>    
          </Flex>
    </div>
  )
}

export default Chat