import React from "react";
import dataset from "./assets/full_dataset.png";
import updatedDataset from "./assets/updated_dataset.png";
import Scatterplot from "./Scatterplot";

const ScatterplotComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">
          Correlation between letter count and special characters...
        </h2>
        <br />
        <p>
          We added distinguishing features such as url length, number of digits,
          number of special characters, and if it contains common prefixes such
          as 'www, http, and https'.
        </p>
      </div>

      <div className="w-[100%] align-center justify-center items-center content-center flex">
        <Scatterplot />
      </div>
    </div>
  );
};

export default ScatterplotComponent;
