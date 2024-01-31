import React, { useState, useEffect, useRef } from "react";

const XgBoostPredict = () => {
  const [inputMessage, setInputMessage] = useState(""); // Move the useState hook here

  const handleSendMessage = async () => {
    try {
      const response = await fetch(
        `https://b1fqrfoxwg.execute-api.us-east-1.amazonaws.com/xg_predict`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Origin: "https://example.com",
            // Host: "https://example.com",
            // "User-Agent": "https://example.com",
            // Accept: "*/*",
            // "Accept-Encoding": "gzip, deflate, br",
            // Connection: "keep-alive", // Add the "Origin" header here
          },
          body: JSON.stringify({ message: inputMessage }),
        }
      );

      console.log();
      const data = await response.text();

      console.log(data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-row mt-5 gap-5 w-[80%] justify-center items-center">
        HELLO HELLO!
        <input
          type="text"
          value={inputMessage} // Use the inputMessage state here
          onChange={(e) => setInputMessage(e.target.value)} // Update the inputMessage state here
          onKeyDown={handleKeyPress}
          className="w-[100%] pl-2"
          placeholder="Type a URL to test"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default XgBoostPredict;
