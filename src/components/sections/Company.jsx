import React, { useState } from "react";

const brands = [
  { name: "Lamborghini", image: "/img/Llamboghini.png", badge: "🔥 Top" },
  { name: "Ferrari", image: "/img/Lferrari.png", badge: "⭐ Luxury" },
  { name: "Koenigsegg", image: "/img/Lkoenigsegg.png", badge: "⚡ Rare" },
  { name: "Bugatti", image: "/img/Lbugatti.png", badge: "🏆 Premium" },
  { name: "McLaren", image: "/img/Lmclaren.jpg", badge: "🚀 Speed" },
  { name: "Porsche", image: "/img/Lporsche.png", badge: "🏁 Classic" },
  { name: "Aston Martin", image: "/img/Lastonmartin.png", badge: "🎩 Elegance" },
  { name: "BMW", image: "/img/Lbmw.png", badge: "💎 Prestige" },
  { name: "Mercedes-Benz", image: "/img/Lmercedes.png", badge: "👑 Luxury" },
  { name: "Audi", image: "/img/Laudi.png", badge: "⚙️ Tech" },
  { name: "Bentley", image: "/img/Lbentley.png", badge: "💼 Elite" },
  { name: "Rolls-Royce", image: "/img/Lrollsroyce.png", badge: "👑 Royal" },
  { name: "Maserati", image: "/img/Lmaserati.png", badge: "🎶 Stylish" },
  { name: "Pagani", image: "/img/Lpagani.png", badge: "💨 Hyper" },
  { name: "Lotus", image: "/img/Llotus.png", badge: "🌿 Lightweight" },
];

function Company() {
  // default langsung dark mode
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      {/* Toggle Dark/Light */}
      <div className="flex justify-end px-6 py-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg shadow-md font-medium 
                     bg-gradient-to-r from-blue-500 to-purple-500 text-white
                     hover:opacity-90 transition"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Sport Car Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`relative text-center p-4 rounded-2xl shadow-lg transition 
                          ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
            >
              {/* Badge di atas logo */}
              <span className="block mb-2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow mx-auto">
                {brand.badge}
              </span>

              {/* Logo */}
              <img
                src={brand.image}
                alt={brand.name}
                className="w-32 h-32 object-contain mx-auto mb-2 
                           transform transition duration-300 hover:scale-110 rounded-lg"
              />
              <p className="text-lg font-medium">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company;
