import React from "react";
import trainingGif from "./assets/training.gif"; // Import your logo image

const DataframeTable = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[700px] mobile-text">
        <h2 className="h2-bold">
          After cleaning the data and normalizing features, we can train and
          test the models...
        </h2>
        <br />
        <p>
          We opted to implement XG-Boost and a multi-layer neural network as our
          models due to their advanced architectures and powerful predicting
          accuracy.
        </p>
      </div>

      <div className="w-[100%] align-center justify-center items-center content-center flex">
        <img
          src={trainingGif}
          alt="XG Boost Confusion Matrix"
          className="w-[100%] max-w-[900px]"
        />
      </div>
    </div>
  );
};

export default DataframeTable;
