import React, { useState, useEffect, useRef } from "react";

interface Message {
  type: "user" | "api";
  message: string;
}

interface ChatBoxProps {}

const ChatBox: React.FC<ChatBoxProps> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const chatHistoryRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", message: inputMessage },
    ]);
    setInputMessage("");

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "api", message: "Agent is thinking..." },
    ]);

    try {
      const response = await fetch("https://www.creditmatch.ai/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header to application/json
          password: "abcde111222333",
        },
        body: JSON.stringify({ message: inputMessage }), // Convert the body to JSON format
      });

      //       const data = await response.text(); // Assuming string response
      //       setResponse(data);
      //       console.log(data)
      const data = await response.text();

      setMessages((prevMessages) =>
        prevMessages.slice(0, -1).concat({ type: "api", message: data })
      );
      setInputMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error gracefully, e.g., display an error message to the user
    }
  };

  useEffect(() => {
    // Scroll to bottom of chat history when messages are updated
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        className="chat-history"
        ref={chatHistoryRef}
        style={{
          overflowY: "scroll",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "black",
          width: "80%",
          minHeight: "300px",
          maxHeight: "300px",
          padding: "20px",
        }}
      >
        {messages.map((message) => (
          <div key={message.message}>
            <div
              className={`label ${message.type}`}
              style={{
                // backgroundColor: message.type === "user" ? "green" : "blue",
                color: message.type === "user" ? "green" : "blue", // Assume white text for contrast
                padding: "0px 0px",
                marginBottom: "10px",
                width: "100%",
                textAlign: message.type === "user" ? "right" : "left",
              }}
            >
              {message.type === "user" ? "User" : "Agent"}
            </div>
            <div
              className={`message ${message.type}`}
              style={{
                textAlign: message.type === "user" ? "right" : "left",
                marginBottom: "20px",
              }}
            >
              {message.message}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row mt-5 gap-5 w-[80%] justify-center items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-[100%] pl-2"
          placeholder="Enter your message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
