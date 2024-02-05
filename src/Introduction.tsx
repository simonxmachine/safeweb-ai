import React from "react";
import confusionMatrix from "./assets/xgboost5_confusion_matrix.png";
import tensorflowMatrix from "./assets/tensorflow6_confusion_matrix.png";

export default function Introduction() {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">Why did we build this...?</h2>
        <br />
        <p>
          Malicious URLs are a serious threat to cybersecurity; they host
          unsolicited content and lure unsuspecting users to become victims of
          scams, and cause losses of billions of dollars every year.
        </p>
      </div>

      <div>
        <div
          className={`flex ${
            window.innerWidth < 800 ? "flex-col gap-12" : "flex-row gap-16"
          } justify-center items-center`}
        >
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
