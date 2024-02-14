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
          scams, and cause losses of billions of dollars every year. We built
          this machine-learning powered application with the goal of mitigating
          the damage perpetuated by malicious URLs. Detailed below are the steps
          we have taken so far and the results from our research.
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
        </div>
      </div>
    </div>
  );
}
