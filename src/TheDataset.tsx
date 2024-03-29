import React from "react";
import dataset from "./assets/full_dataset.png";

const DataframeTable = () => {
  return (
    <>
      <div
        className={`flex ${
          window.innerWidth < 600 ? "flex-col" : "flex-row"
        } gap-10 justify-center items-center`}
      >
        <div className="w-[100%] text-left max-w-[600px]">
          <h2 className="h2-bold">Let's start with the original dataset... </h2>
          <br />
          <p>
            It consists of 651,191 rows of collected URLs that are classified as
            either 1 of 4 classes: Benign, Defacement, Phishing, or Malware.{" "}
          </p>
          {/* {window.innerWidth >= 600 && <br />} */}
          <br />
          <p className="mb-0 text-xs">
            *Dataset was obtained from a public{" "}
            <a
              href="https://www.kaggle.com/datasets/sid321axn/malicious-urls-dataset"
              style={{ color: "blue" }}
              target="_blank"
            >
              Kaggle repository
            </a>
            .
          </p>
        </div>

        <div className="w-[100%] align-center justify-center items-center content-center flex">
          <img
            src={dataset}
            alt="XG Boost Confusion Matrix"
            className="w-[90%] max-w-[500px]"
          />
        </div>
      </div>
    </>
  );
};

export default DataframeTable;
