import React from "react";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

const BarAndDoughnut = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px]">
        <h2>This is the breakdown of the data...</h2>
        <br />
        <p>
          Notice how there are many more data points labeled the 'Benign' class
          than the other 3 classes; this imbalance may be skewed to the majority
          class and affect prediction accuracy.
        </p>
      </div>

      <div>
        <div
          className={`flex ${
            window.innerWidth < 1000 ? "flex-col" : "flex-row"
          } gap-12 justify-center items-center`}
        >
          <div
            className={`${
              window.innerWidth < 1000 ? " w-[80vw]" : " w-[40vw]"
            }`}
          >
            <BarChart />
          </div>

          <div className="w-[100%] max-w-[260px] align-center justify-center items-center content-center">
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarAndDoughnut;
