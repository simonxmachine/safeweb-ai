import React from "react";

const Chatbox = () => {
  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const response = await fetch('https://www.creditmatch.ai/ask', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json', // Set the Content-Type header to application/json
  //           'password': 'abcde111222333'
  //         },
  //         body: JSON.stringify({ message: "What is the area like??" }), // Convert the body to JSON format
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
    <div className="border-black border-2 mx-6 flex flex-col justify-center px-10 items-center mt-10 mb-10 ">
      <div className="w-full h-60 m-10 border-black border flex justify-center items-center">
        Hello there
      </div>

      <form className="pb-10 w-full">
        <input
          type="text"
          placeholder="Enter your message"
          className="pl-2 w-full "
        ></input>
      </form>
    </div>
  );
};

export default Chatbox;

//This is the original code from Bard

// import React, { useState, useEffect } from 'react';

// interface Message {
//   type: 'user' | 'api';
//   message: string;
// }

// interface ChatBoxProps {}

// const ChatBox: React.FC<ChatBoxProps> = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputMessage, setInputMessage] = useState('');

//   const handleSendMessage = async () => {
//     try {
//       const response = await fetch('/your-api-endpoint', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: inputMessage }),
//       });
//       const data = await response.json();

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: 'user', message: inputMessage },
//         { type: 'api', message: data.response },
//       ]);
//       setInputMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       // Handle error gracefully, e.g., display an error message to the user
//     }
//   };

//   return (
//     <div className="chatbox">
//       <div className="chat-history" style={{ overflowY: 'scroll', maxHeight: '500px' }}>
//         {messages.map((message) => (
//           <div
//             className={`message ${message.type}`}
//             key={message.message}
//           >
//             {message.message}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={inputMessage}
//         onChange={(e) => setInputMessage(e.target.value)}
//       />
//       <button onClick={handleSendMessage}>Send</button>
//     </div>
//   );
// };

// export default ChatBox;
