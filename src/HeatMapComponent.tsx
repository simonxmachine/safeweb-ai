import React from "react";
import heat_map from "./assets/heat_map.png";

const HeatMapComponent = () => {
  return (
    <div
      className={`flex ${
        window.innerWidth < 600 ? "flex-col" : "flex-row"
      } gap-10 justify-center items-center`}
    >
      <div className="w-[100%] text-left max-w-[600px]">
        <h2 className="h2-bold">
          This is a heatmap of the data with added features...{" "}
        </h2>
        <br />
        <p>
          A heatmap helps us identify and visualize correlations between the
          different features.
          <br />
          <br />
          This heatmap suggests a potential association between the Defacement
          class and the 'http' and 'www' features. Let's investigate further.{" "}
        </p>
      </div>

      <div className="w-[100%] align-center justify-center items-center content-center flex">
        <img
          src={heat_map}
          alt="XG Boost Confusion Matrix"
          className="w-[100%] max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default HeatMapComponent;
