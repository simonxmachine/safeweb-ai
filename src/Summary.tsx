import React from "react";
import confusionMatrix from "./assets/xgboost5_confusion_matrix.png"; // Import your logo image
import tensorflowMatrix from "./assets/tensorflow6_confusion_matrix.png"; // Import your logo image

export default function Summary() {
  return (
    <div className="flex flex-col">
      <div className="mb-4 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">Summary & Key Findings</h2>
        <br />
        <p>
          In this application, we shared the inner workings of the beta version
          of our malware scanner. We explained the key steps taken to develop
          the underlying machine learning model, from data extraction and
          cleaning to analysis and evaluation of results.
          <br /> <br />
          While initial evaluation metrics indicate high accuracy on both
          models, the low recall suggests potential overfitting, characterized
          by a large amount of false negatives. This implies the models perform
          well on training data but may struggle with generalizing new unseen
          data. We recognize the need for further refinement to ensure the
          model's robustness and its ability to accurately identify malicious
          actors in various scenarios.
        </p>
      </div>
    </div>
  );
}
