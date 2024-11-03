'use client';
import { useState } from "react";
import { FaCalculator } from "react-icons/fa";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;
    if (weightNum && heightNum) {
      const calculatedBmi = weightNum / (heightNum * heightNum);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) setCategory("Underweight");
      else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) setCategory("Normal weight");
      else if (calculatedBmi >= 25 && calculatedBmi < 29.9) setCategory("Overweight");
      else setCategory("Obese");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-6 flex items-center justify-center gap-2">
          <FaCalculator className="text-2xl" />
          BMI Calculator
        </h1>
        <div className="mb-6">
          <label className="block text-gray-600 font-semibold">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mt-2 text-gray-700 focus:outline-none focus:border-purple-500 transition"
            placeholder="Enter weight in kilograms"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 font-semibold">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mt-2 text-gray-700 focus:outline-none focus:border-purple-500 transition"
            placeholder="Enter height in centimeters"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 transform hover:scale-105"
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-6 text-center bg-gray-100 p-4 rounded-lg shadow-inner">
            <p className="text-2xl font-bold text-purple-700">Your BMI: {bmi.toFixed(1)}</p>
            <p className="text-lg font-medium text-gray-600 mt-2">{category}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
