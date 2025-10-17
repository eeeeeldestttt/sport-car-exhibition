// src/components/Leaderboard.jsx
import React from "react";

const mobilData = [
  { nama: "Lamborghini Aventador", views: 1250, gambar: "/img/lamborghini.jpg" },
  { nama: "Ferrari F8 Tributo", views: 980, gambar: "/img/ferrari.jpg" },
  { nama: "Bugatti Chiron", views: 1670, gambar: "/img/bugatti.jpg" },
  { nama: "McLaren P1", views: 870, gambar: "/img/mclaren.jpg" },
  { nama: "Koenigsegg Jesko", views: 5670, gambar: "/img/koenigseg.jpg" }
];

export default function Leaderboard() {
  // Urutkan berdasarkan views tertinggi
  const sortedMobil = [...mobilData].sort((a, b) => b.views - a.views);

  return (
    <section className="mt-10 max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        🚀 Leaderboard Mobil Terpopuler
      </h2>
      <ul className="space-y-4">
        {sortedMobil.map((mobil, index) => (
          <li
            key={mobil.nama}
            className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition duration-300"
          >
            <span className="text-2xl font-bold text-yellow-400 w-8">
              #{index + 1}
            </span>
            <img
              src={mobil.gambar}
              alt={mobil.nama}
              className="w-20 h-14 object-cover rounded-lg border border-gray-600"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">{mobil.nama}</h3>
              <p className="text-gray-400">{mobil.views} views</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
