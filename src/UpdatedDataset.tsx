import React from "react";
import dataset from "./assets/full_dataset.png";
import updatedDataset from "./assets/updated_dataset.png";

const DataframeTable = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px]">
        <h2>This is the dataset after we added features...</h2>
        <br />
        <p>
          We added distinguishing features such as url length, number of digits,
          number of special characters, and if it contains common prefixes such
          as 'www, http, and https'.
        </p>
      </div>

      <div className="w-[100%] align-center justify-center items-center content-center flex">
        <img
          src={updatedDataset}
          alt="XG Boost Confusion Matrix"
          className="w-[100%] max-w-[900px]"
        />
      </div>
    </div>
  );
};

export default DataframeTable;
