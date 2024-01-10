import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import {Greeting} from './Greeting';

function App() {
  const [count, setCount] = useState(0)
  const [response, setResponse] = useState("This is standard response")

  const hisName = "lee"

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const response = await fetch('https://www.creditmatch.ai/ask', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json', // Set the Content-Type header to application/json
  //           'password': 'abcde111222333'
  //         },
  //         body: JSON.stringify({ message: "How much is the property?" }), // Convert the body to JSON format
  //       });

  //       const data = await response.text(); // Assuming string response
  //       setResponse(data);
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setResponse('Error: Could not fetch data');
  //     }
  //   };
  
  //   makeRequest();
  // }, []);

  
  return (
    <div className='App'>
      Hello World!
      {response && <div>{response}</div>}

      <Greeting name= { hisName }/>
    </div>
    
  )
}




export default App
