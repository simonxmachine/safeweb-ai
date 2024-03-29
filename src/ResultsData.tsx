import React from "react";
import tfResults from "./assets/tf_results.png";
import xgResults from "./assets/xg_results.png";

const ResultsData = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">Testing results and model evaluation...</h2>
        <br />
        <p>
          XGBoost exhibits superior performance across multiple metrics. This
          could be attributed to the neural network's susceptibility to
          overfitting, where it achieves high accuracy on training data but
          struggles to generalize on new unseen data.
        </p>
      </div>

      <div
        className={`gap-12 flex ${
          window.innerWidth < 1000 ? "flex-col" : "flex-row"
        } justify-center`}
      >
        <div
          className={`text-lg underline font-semibold ${
            window.innerWidth < 1000 ? "text-center" : "text-right"
          } justify-center items-center align-middle content-center`}
        >
          <div className={`mb-3 ${window.innerWidth < 1000 ? "mr-0" : "mr-4"}`}>
            XG-Boost Results
          </div>
          <div className="items-center flex content-center justify-center">
            <img
              src={xgResults}
              alt="XG Boost Confusion Matrix"
              className="w-[90%] max-w-[400px]"
            />
          </div>
        </div>

        <div
          className={`text-lg underline font-semibold ${
            window.innerWidth < 1000 ? "text-center" : "text-right"
          } justify-center items-center align-middle content-center`}
        >
          <div className={`mb-3 ${window.innerWidth < 1000 ? "mr-0" : "mr-4"}`}>
            Neural Network Results
          </div>
          <div className="items-center flex content-center justify-center">
            <img
              src={tfResults}
              alt="Tensorflow Confusion Matrix"
              className="w-[90%] max-w-[400px]"
            />
          </div>
        </div>
      </div>

      <p className="mt-6  mb-2 text-xs">
        [Legend: 0-Benign; 1-Defacement; 2-Phishing; 3-Malware]
      </p>
    </div>
  );
};

export default ResultsData;
