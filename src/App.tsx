import Chat from "./page/Chat";
import { ChakraProvider} from '@chakra-ui/react';

function App() {
  return (
    <div >
      <ChakraProvider>
        <Chat />
      </ChakraProvider>
    </div>
  );
}

export default App;
