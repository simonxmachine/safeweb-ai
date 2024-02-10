import React from "react";
import dataset from "./assets/full_dataset.png";
import updatedDataset from "./assets/updated_dataset.png";
import Scatterplot from "./Scatterplot";

const ScatterplotComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">Identifying patterns and abnormalities...</h2>
        <br />
        <p>
          Notice the few sparse outliers in this sample taken from the dataset;
          these outliers need to investigated further as they may skew the
          normalizing and scaling of the features.
        </p>
      </div>

      <div className="w-[100%] align-center justify-center items-center content-center flex">
        <Scatterplot />
      </div>
    </div>
  );
};

export default ScatterplotComponent;
