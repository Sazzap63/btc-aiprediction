"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const callApi = async () => {
    setLoading(true);
    const res = await fetch("https://btc-ai-backend.onrender.com/predict");
    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Bitcoin AI Prediction</h1>

      <button
        onClick={callApi}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Predict BTC
      </button>

      {loading && <p className="mt-4">Loading...</p>}

      {result && (
        <div className="mt-6 p-4 border rounded-lg">
          <p><strong>Prediction:</strong> {result.prediction}</p>
          <p><strong>Probability Up:</strong> {result.probability_up}</p>
          <p><strong>Model Version:</strong> {result.model_version}</p>
        </div>
      )}
    </main>
  );
}
