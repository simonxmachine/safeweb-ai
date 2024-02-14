import React from "react";
import dataset from "./assets/full_dataset.png";
import predictionTool from "./assets/prediction_tool.png";

const PredictionTool = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">The resulting scanner...</h2>
        <br />
        <p>
          The scanner on which this project is based on was built in Python,
          packaged into a Docker container, and hosted on AWS Elastic Container
          Service.
          <br />
          <br />
          The resulting output for the user-inputted URL is headed by the
          prediction classification (either in green for 'Benign' or red for
          malicious), followed by a list of all the classes and the probability
          prediction for each class.
        </p>
      </div>

      <div className="w-[100%] align-center justify-center items-center content-center flex">
        <img
          src={predictionTool}
          alt="XG Boost Confusion Matrix"
          className="w-[100%] max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default PredictionTool;
