import React from "react";
import confusionMatrix from "./assets/xgboost5_confusion_matrix.png"; // Import your logo image
import tensorflowMatrix from "./assets/tensorflow6_confusion_matrix.png"; // Import your logo image

export default function LimitationsFuture() {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px]">
        <h2>Limitations & Future Directions</h2>
        <br />
        <p>
          We can see that the two models have high accuracy making predictions
          on test data, but there is room for further improvement, because even
          1% error can be disastrous for a company/individual.
        </p>
      </div>

      <div>
        <div
          className={`flex ${
            window.innerWidth < 800 ? "flex-col gap-12" : "flex-row gap-16"
          } justify-center items-center`}
        >
          <img
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
          />
        </div>
      </div>

      <p className="mt-6  mb-2 text-xs">
        [Legend: 0-Benign; 1-Defacement; 2-Phishing; 3-Malware]
      </p>
    </div>
  );
}
