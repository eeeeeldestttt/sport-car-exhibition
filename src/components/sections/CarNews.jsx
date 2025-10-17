import React from "react";

const newsList = [
  {
    title: "Lamborghini Aventador Ultimae Dirilis",
    date: "18 Agustus 2025",
    desc: "Versi terakhir dari Aventador hadir dengan tenaga 780 HP, menjadi penutup era V12 naturally aspirated.",
    image: "/img/lamborghini.jpg"
  },
  {
    title: "Ferrari Luncurkan Model Hybrid Baru",
    date: "12 Agustus 2025",
    desc: "Ferrari memperkenalkan supercar hybrid terbaru dengan kombinasi mesin V8 twin-turbo dan motor listrik.",
    image: "/img/ferrari.jpg"
  },
  {
    title: "Bugatti Siap Hadirkan Hypercar Listrik",
    date: "5 Agustus 2025",
    desc: "Bugatti umumkan rencana untuk masuk ke era hypercar listrik sepenuhnya pada tahun 2030.",
    image: "/img/Bugatti-la.jpg"
  }
];

export default function CarNews() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        📰 Berita & Update Terbaru
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {newsList.map((news, idx) => (
          <div
            key={idx}
            className="bg-white/10 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-400">{news.date}</p>
              <h3 className="text-lg font-semibold mt-1">{news.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{news.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
