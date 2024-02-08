import React from "react";
import malwareImage from "./assets/malware_image2.jpg"; // Import your logo image

export default function Introduction() {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">Why did we build the scanner?</h2>
        <br />
        <p>
          Malicious URLs are a serious threat to cybersecurity; they host
          unsolicited content and lure unsuspecting users to become victims of
          scams, and cause losses of billions of dollars every year.
        </p>
      </div>

      <div>
        <div className={`flex justify-center mt-5`}>
          <img
            src={malwareImage}
            alt="XG Boost Confusion Matrix"
            className={`${
              window.innerWidth < 700 ? "w-[90%]" : "w-[50%] max-w-[700px]"
            } `}
          />
          {/* <img
            src={confusionMatrix}
            alt="XG Boost Confusion Matrix"
            className={`${
              window.innerWidth < 700 ? "w-[100%]" : "w-[50%] max-w-[400px]"
            } `}
          />

          <img
            src={tensorflowMatrix}
            alt="Tensorflow Confusion Matrix"
            className={`${
              window.innerWidth < 700 ? "w-[100%]" : "w-[50%] max-w-[400px]"
            } `}
          /> */}
        </div>
      </div>
    </div>
  );
}
