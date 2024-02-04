import React from "react";
import dataset from "./assets/full_dataset.png"; // Import your logo image
import updatedDataset from "./assets/updated_dataset.png"; // Import your logo image

const DataframeTable = () => {
  return (
    <div
      className={`flex ${
        window.innerWidth < 600 ? "flex-col" : "flex-row"
      } gap-10 justify-center items-center`}
    >
      <div className="w-[100%] text-left max-w-[600px]">
        <h2>This was the original dataset... </h2>
        <br />
        <p>
          It consists of 651,191 rows of collected URLs that are classified as
          either 1 of 4 classes: Benign, Defacement, Phishing, or Malware.{" "}
        </p>
        <br />
        <br />
        <p style={{ fontSize: "14px" }}>
          *Dataset was obtained from Kaggle.
          (https://www.kaggle.com/datasets/sid321axn/malicious-urls-dataset)
        </p>
      </div>

      <div className="w-[100%] align-center justify-center items-center content-center flex">
        <img
          src={dataset}
          alt="XG Boost Confusion Matrix"
          className="w-[100%] max-w-[400px]"
        />
      </div>
    </div>
  );
};

export default DataframeTable;
