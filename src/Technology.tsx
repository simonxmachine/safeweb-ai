import React from "react";
import confusionMatrix from "./assets/xgboost5_confusion_matrix.png";
import tensorflowMatrix from "./assets/tensorflow6_confusion_matrix.png";

import googleColab from "./assets/google_cloud.png";
import python from "./assets/Python.png";
import sklearn from "./assets/scikit-learn.png";
import tensorflow from "./assets/TensorFlow.png";
import pandas from "./assets/Pandas.png";

import nginx from "./assets/NGINX.png";
import aws from "./assets/AWS.png";

import docker from "./assets/Docker.png";
import github from "./assets/new_github.png";
import javascript from "./assets/JavaScript.png";
import openai from "./assets/open-ai.png";
import react from "./assets/React.png";
import tailwind from "./assets/tailwind.png";
import vercel from "./assets/Vercel.png";

export default function Technology() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 max-w-[1050px] mobile-text">
        <h2 className="h2-bold mb-6">References & Technologies Used</h2>
      </div>

      <div>
        <div
          className={` 
          ${
            window.innerWidth < 600
              ? "text-sm grid grid-cols-2 justify-center border-0 border-black gap-6 m-[auto] items-center"
              : "text-lg grid grid-cols-2 justify-center border-0 border-black gap-10 ml-16 items-center "
          }`}
        >
          <div className="justify-left items-center gap-3 flex flex-row">
            <img
              src={python}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Python</div>
          </div>

          <div className="justify-left items-center gap-3 flex flex-row">
            <img
              src={googleColab}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div className="text-left">Google Colab</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={javascript}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Javscript</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={react}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>React</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={aws}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div className="text-left">AWS EC2, ECS,Fargate</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={docker}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Docker</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={openai}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>OpenAI</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={tensorflow}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Tensorflow</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={pandas}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Pandas</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={sklearn}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>SciKit-Learn</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={tailwind}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Tailwind CSS</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={nginx}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Nginx</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={vercel}
              alt="XG Boost Confusion Matrix"
              className="tech-logo"
            />
            <div>Vercel</div>
          </div>

          <div className="items-center justify-left  gap-3 flex flex-row">
            <img
              src={github}
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
