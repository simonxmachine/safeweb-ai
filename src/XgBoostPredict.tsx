import React, { useState, useEffect, useRef } from "react";
import { ScanSearch } from "lucide-react";

const XgBoostPredict = ({ onInputChange }) => {
  const [inputMessage, setInputMessage] = useState(""); // Move the useState hook here

  const [returnData, setReturnData] = useState("");

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
    onInputChange(event.target.value);
  };

  const handleBlur = () => {
    // Call the parent's callback with the latest message
    onInputChange(inputMessage);
  };

  const sampleJson = {
    "XG - Benign": {
      Benign: 0.921999990940094,
      Defacement: 0.07400000095367432,
      Phishing: 0,
      Malware: 0.004000000189989805,
    },
    "TF - Defacement": {
      Benign: 0.15299999713897705,
      Defacement: 0.8460000157356262,
      Phishing: 0,
      Malware: 0,
    },
  };

  const labelList = ["XG - Benign", "TF - Benign"];

  const formattedData = (
    <table>
      <tbody>
        {Object.entries(returnData).map(([label, values]) => (
          <>
            <td>
              <tr key={label}>
                <th className="text-lg text-left font-semibold px-5 py-2 mt-3">
                  {labelList.includes(label) ? (
                    <th className="text-green-500">{label}</th>
                  ) : (
                    <th className="text-red-600">{label}</th>
                  )}
                </th>
              </tr>
              <tr>
                {Object.entries(values).map(([category, score]) => (
                  <tr key={category}>
                    <td>
                      <p className="text-left px-5">
                        {category}: {parseFloat(score).toFixed(2)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tr>
            </td>
          </>
        ))}
      </tbody>
    </table>
  );

  const handleSendMessage = async () => {
    try {
      const response = await fetch(
        // `https://ssqkmxwwhl.execute-api.us-east-1.amazonaws.com/xg_predict`,
        `https://1cn06qy3x7.execute-api.us-east-1.amazonaws.com/xg_predict`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: inputMessage }),
        }
      );
      const data = await response.json();

      setReturnData(data);
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
    <div className="flex flex-col bg-[#113768] text-white justify-center items-center h-[100%] min-h-[60vh] text-3xl">
      Scan URL for Malware
      <div className="flex flex-row mt-5 mb-5 gap-3 w-[90%] h-[40px] justify-center items-center text-black text-lg">
        <input
          type="text"
          value={inputMessage} // Use the inputMessage state here
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyPress}
          className="w-[100%] h-[100%] pl-2 rounded"
          placeholder="Enter URL Here"
        />
        <button className="predictButton" onClick={handleSendMessage}>
          <ScanSearch size={24} />
        </button>
      </div>
      <div className="text-xs px-4 text-[#FFFF00]">
        *This scanner is intended for educational and experimental purposes. It
        is not designed for real-world use, and its results should not be relied
        upon for critical decisions.{" "}
      </div>
      <div className="text-sm">{formattedData}</div>
    </div>
  );
};

export default XgBoostPredict;
