import React from "react";
import trainingGif from "./assets/training.gif"; // Import your logo image

const DataframeTable = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">Training and testing the models...</h2>
        <br />
        <p>
          Our model selection was guided by the need for speed and performance;
          gravitating us to XGBoost and a multi-layer neural network, both
          renowned for their historical excellence in handling complex data
          patterns and powerful predictive accuracy.
        </p>
      </div>

      <div className="w-[100%] align-center justify-center items-center content-center flex">
        <img
          src={trainingGif}
          alt="XG Boost Confusion Matrix"
          className="w-[100%] max-w-[700px]"
        />
      </div>
    </div>
  );
};

export default DataframeTable;
