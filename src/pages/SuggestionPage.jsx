import React, { useState } from "react";

function SuggestionPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  // Pertanyaan quiz
  const questions = [
    {
      question: "Apa yang paling kamu sukai dari mobil?",
      options: ["Kecepatan", "Kenyamanan", "Teknologi", "Kemewahan"],
    },
    {
      question: "Dimana kamu paling sering berkendara?",
      options: ["Jalan tol", "Kota", "Pegunungan", "Pantai"],
    },
    {
      question: "Kalau kamu punya mobil sport, warna apa yang kamu pilih?",
      options: ["Merah", "Hitam", "Putih", "Kuning"],
    },
  ];

  // Rekomendasi hasil
  const carSuggestions = {
    Speed: "🏎️ Bugatti Chiron – Raja Kecepatan!",
    Comfort: "👑 Rolls-Royce Phantom – Super Nyaman!",
    Tech: "⚙️ Tesla Model S Plaid – Penuh Teknologi!",
    Luxury: "⭐ Ferrari Roma – Mewah dan Stylish!",
  };

  // Saat pilih jawaban
  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Tentukan hasil akhir berdasarkan jawaban pertama (sederhana dulu)
      const firstAnswer = newAnswers[0];
      if (firstAnswer === "Kecepatan") setResult(carSuggestions.Speed);
      if (firstAnswer === "Kenyamanan") setResult(carSuggestions.Comfort);
      if (firstAnswer === "Teknologi") setResult(carSuggestions.Tech);
      if (firstAnswer === "Kemewahan") setResult(carSuggestions.Luxury);
    }
  };

  // Reset quiz
  const restartQuiz = () => {
    setQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-gray-700 rounded-2xl shadow-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">🔮 Car Suggestion Quiz</h2>

        {/* Kalau sudah ada hasil */}
        {result ? (
          <div>
            <p className="text-xl mb-6">{result}</p>
            <button
              onClick={restartQuiz}
              className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium"
            >
              Coba Lagi
            </button>
          </div>
        ) : (
          <div>
            <p className="text-lg font-semibold mb-4">
              {questions[questionIndex].question}
            </p>
            <div className="grid gap-3">
              {questions[questionIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg shadow transition"
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm opacity-70">
              Pertanyaan {questionIndex + 1} dari {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SuggestionPage;
