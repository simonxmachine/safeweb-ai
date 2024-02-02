import React from "react";
import heat_map from "./assets/heat_map.png"; // Import your logo image

const xg_test_data = {
  Accuracy: 0.9089,
  Recall: 0.9089,
  Precision: 0.9068,
  F1_score: 0.9041,
};

const tf_model_testing = {
  //     Epoch 1/10
  // 16280/16280 [==============================] - 58s 3ms/step - loss: 0.4110 - accuracy: 0.8525
  // Epoch 2/10
  // 16280/16280 [==============================] - 52s 3ms/step - loss: 0.3620 - accuracy: 0.8750
  // Epoch 3/10
  // 16280/16280 [==============================] - 51s 3ms/step - loss: 0.3486 - accuracy: 0.8790
  // Epoch 4/10
  // 16280/16280 [==============================] - 56s 3ms/step - loss: 0.3377 - accuracy: 0.8838
  // Epoch 5/10
  // 16280/16280 [==============================] - 54s 3ms/step - loss: 0.3303 - accuracy: 0.8872
  // Epoch 6/10
  // 16280/16280 [==============================] - 54s 3ms/step - loss: 0.3249 - accuracy: 0.8892
  // Epoch 7/10
  // 16280/16280 [==============================] - 54s 3ms/step - loss: 0.3210 - accuracy: 0.8903
  // Epoch 8/10
  // 16280/16280 [==============================] - 52s 3ms/step - loss: 0.3182 - accuracy: 0.8912
  // Epoch 9/10
  // 16280/16280 [==============================] - 52s 3ms/step - loss: 0.3157 - accuracy: 0.8925
  // Epoch 10/10
  // 16280/16280 [==============================] - 54s 3ms/step - loss: 0.3140 - accuracy: 0.8933
  // 4070/4070 [==============================] - 9s 2ms/step - loss: 0.3129 - accuracy: 0.8928
  // Test loss: 0.3128771483898163
  // Test accuracy: 0.8927817344665527
};

export default function HeatMap() {
  return (
    <div className="flex justify-center items-center">
      <img src={heat_map} alt="Malicious URL Heatmap" className="w-[75%]" />
    </div>
  );
}
