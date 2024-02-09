import React from "react";
import confusionMatrix from "./assets/xgboost5_confusion_matrix.png";
import tensorflowMatrix from "./assets/tensorflow6_confusion_matrix.png";

export default function ConfusionMatrix() {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">Confusion matrix comparison...</h2>
        <br />
        <p>
          While both models achieve high accuracy on the majority "Benign"
          class, their ability to differentiate between the three malicious
          classes is limited, necessitating further investigation and
          alternative solutions.
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
