import React from "react";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

const BarAndDoughnut = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">Visual breakdown of the data...</h2>
        <br />
        <p>
          Notice how there are many more data points labeled the 'Benign' class
          than the other 3 classes; this imbalance may be skewed to the majority
          class and affect prediction accuracy.
        </p>
      </div>

      <div>
        {/* <div
          className={`flex ${
            window.innerWidth < 1000 ? "flex-col" : "flex-row"
          } gap-12 justify-center items-center`}
        > */}
        <div
          className={`flex ${
            window.innerWidth < 800 ? "flex-col gap-12" : "flex-row gap-16"
          } justify-center items-center`}
        >
          <div
            className={`${
              window.innerWidth < 700 ? "w-[100%]" : "w-[60%] max-w-[500px]"
            }`}
          >
            <BarChart />
          </div>

          <div
            className={`${
              window.innerWidth < 700 ? "w-[75%]" : "w-[40%] max-w-[300px]"
            }`}
          >
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarAndDoughnut;
