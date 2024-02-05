import React from "react";
import confusionMatrix from "./assets/xgboost5_confusion_matrix.png"; // Import your logo image
import tensorflowMatrix from "./assets/tensorflow6_confusion_matrix.png"; // Import your logo image

export default function Technology() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold">References & Technologies Used</h2>
        <br />
        <p className="w-[100%]">
          We can see that the two models have high accuracy making predictions
          on test data, but there is room for further improvement, because even
          1% error can be disastrous for a company/individual.
        </p>
      </div>

      <div>
        <div
          className={` 
          ${
            window.innerWidth < 500
              ? "text-sm grid grid-cols-2 justify-left border-0 border-black gap-4 m-[auto] items-center"
              : "text-lg grid grid-cols-2 justify-left border-0 border-black gap-10 m-[auto] items-center "
          }`}
        >
          <div className="justify-left items-center gap-3 flex flex-row">
            <img
              src={confusionMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Python</div>
          </div>

          <div className="justify-left items-center gap-3 flex flex-row">
            <img
              src={confusionMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div className="text-left">Google Colab</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={tensorflowMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>SciKit-Learn</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={confusionMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Tensorflow</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={confusionMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Pandas</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={tensorflowMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>OpenAI</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={tensorflowMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Javscript</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={confusionMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>React</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={tensorflowMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Tailwind CSS</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={tensorflowMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Docker</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={tensorflowMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Nginx</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={tensorflowMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div className="text-left">AWS EC2, ECS,Fargate</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={tensorflowMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Vercel</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={tensorflowMatrix}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Github</div>
          </div>
        </div>
      </div>
    </div>
  );
}
