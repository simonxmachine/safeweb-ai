import React from "react";
import confusionMatrix from "./assets/xgboost5_confusion_matrix.png"; // Import your logo image
import tensorflowMatrix from "./assets/tensorflow6_confusion_matrix.png"; // Import your logo image

export default function LimitationsFuture() {
  return (
    <div className="flex flex-col">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">Limitations & Future Directions</h2>
        <br />
        <p>
          There were several limitations when assembling this project. One
          notable limitation, as with many other machine learning models, is the
          quality of the data. Our model utilized a dataset sourced from a
          public Kaggle repository; however, the origin of the URLs and the
          accuracy of the associated labels are unverified. Because of this, the
          model's predictions may be confined only to the dataset's scope, and
          the true accuracy may vary vastly from real-world scenarios.
          <br /> <br />
          Looking ahead, there are several approaches we can implement for a
          more robust model:
          <br />
          <br />
          <ul>
            <li>
              <strong>1) Enhance data collection and verification. </strong>
              Strategies for obtaining higher quality data include sourcing from
              reputable sources, implementing an ensemble of machine learning
              methods to verify label accuracy in isolated testing environments,
              and/or with human intervention.{" "}
            </li>
            <br />
            <li>
              <strong>
                2) Enhance data quality through comprehensive outlier detection
                and anomaly treatment.{" "}
              </strong>
              As mentioned early in the study, multiple outliers and anomalies
              were detected, and this warrants a granular exmination of each
              data point, as they can heavily impact feature scaling and
              normalization.
            </li>
            <br />
            <li>
              <strong>
                {" "}
                3) Expansion of feature space and hyperparemeter optimization.
              </strong>
              Incorporating additional features, such as originating country
              detection and common character patterns, could better capture the
              complexity of deeply embedded malicious URLs. In addition,
              implementing regularization techniques like L1, L2, and dropout
              can mitigate overfitting risks and potentially improve model
              performance.
            </li>
          </ul>
          <br />
          <br />
          <br />
          <strong>
            <span style={{ fontSize: "18px" }}>
              Thank you for taking the time to explore our study. Together we
              can create a more safe web.
            </span>
          </strong>
        </p>
      </div>

      <div>
        <div
          className={`flex ${
            window.innerWidth < 800 ? "flex-col gap-12" : "flex-row gap-16"
          } justify-center items-center`}
        >
          {/* <img
            src={confusionMatrix}
            alt="XG Boost Confusion Matrix"
            className={`${
              window.innerWidth < 700 ? "w-[100%]" : "w-[50%] max-w-[400px]"
            } `}
          />

          <img
            src={tensorflowMatrix}
            alt="Tensorflow Confusion Matrix"
            className={`${
              window.innerWidth < 700 ? "w-[100%]" : "w-[50%] max-w-[400px]"
            } `}
          /> */}
        </div>
      </div>
    </div>
  );
}
