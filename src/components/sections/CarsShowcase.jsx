import { useState } from "react";

function CarsShowcase() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [compareCars, setCompareCars] = useState([]);

  const cars = [
    {
      id: 1,
      name: "Lamborghini Aventador",
      image: "/img/lamborghini.jpg",
      price: 6400000000,
      specs: [
        "6.5L V12 engine",
        "700 HP",
        "Top Speed: 350 km/h",
        "0-100 km/h: 2.9s",
      ],
    },
    {
      id: 2,
      name: "Ferrari F8 Tributo",
      image: "/img/ferrari.jpg",
      price: 10000000000,
      specs: [
        "3.9L V8 twin-turbo",
        "710 HP",
        "Top Speed: 340 km/h",
        "0-100 km/h: 2.9s",
      ],
    },
    {
      id: 3,
      name: "Koenigsegg Jesko",
      image: "/img/koenigseg.jpg",
      price: 42000000000,
      specs: [
        "5.0L V8 twin-turbo",
        "1600 HP",
        "Top Speed: 480 km/h",
        "0-100 km/h: 2.5s",
      ],
    },
    {
      id: 4,
      name: "Bugatti Bolide",
      image: "/img/bugatti.jpg",
      price: 50000000000,
      specs: [
        "8.0L W16 quad-turbo",
        "1825 HP",
        "Top Speed: 500 km/h",
        "0-100 km/h: 2.2s",
      ],
    },
    {
      id: 5,
      name: "McLaren Senna",
      image: "/img/mclaren.jpg",
      price: 22000000000,
      specs: [
        "4.0L V8 twin-turbo",
        "800 HP",
        "Top Speed: 335 km/h",
        "0-100 km/h: 2.8s",
      ],
    },
    {
      id: 6,
      name: "Bugatti La Voiture Noire",
      image: "/img/Bugatti-la.jpg",
      price: 110000000000,
      specs: [
        "8.0L W16 quad-turbo",
        "1500 HP",
        "Top Speed: 420 km/h",
        "0-100 km/h: 2.4s",
      ],
    },
  ];

  const formatPrice = (price) => `Rp ${price.toLocaleString("id-ID")}`;

  // Urutkan mobil → favorit dulu
  const sortedCars = [...cars].sort((a, b) => {
    const aFav = favorites.includes(a.id) ? -1 : 0;
    const bFav = favorites.includes(b.id) ? -1 : 0;
    return aFav - bFav;
  });

  // Toggle favorite
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  // Toggle compare (max 3 mobil)
  const toggleCompare = (car) => {
    setCompareCars((prev) => {
      if (prev.find((c) => c.id === car.id)) {
        return prev.filter((c) => c.id !== car.id);
      } else if (prev.length < 3) {
        return [...prev, car];
      } else {
        return prev; // batasi max 3
      }
    });
  };

  return (
    <section id="cars" className="relative py-20 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: "url('/img/cars-bg.jpg')" }}
      ></div>

      {/* Gradient hitam atas & bawah */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 drop-shadow">
          Our <span className="text-yellow-400">Premium Cars</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg text-center mb-10 max-w-2xl mx-auto drop-shadow-sm">
          Select from our exclusive collection of high-performance vehicles.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedCars.map((car) => (
            <div
              key={car.id}
              className="bg-black rounded-xl overflow-hidden shadow-lg border border-yellow-500 relative"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-yellow-400">{car.name}</h3>
                <p className="mb-4">{formatPrice(car.price)}</p>

                {/* Tombol Lihat */}
                <button
                  onClick={() => setSelectedCar(car)}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded mb-2"
                >
                  Lihat Sekarang
                </button>

                {/* Tombol Favorite */}
                <button
                  onClick={() => toggleFavorite(car.id)}
                  className={`w-full py-2 rounded font-semibold transition mb-2 ${
                    favorites.includes(car.id)
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-white"
                  }`}
                >
                  {favorites.includes(car.id)
                    ? "❤️ Favorit"
                    : "🤍 Tambah Favorit"}
                </button>

                {/* Tombol Bandingkan */}
                <button
                  onClick={() => toggleCompare(car)}
                  className={`w-full py-2 rounded font-semibold transition ${
                    compareCars.find((c) => c.id === car.id)
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-white"
                  }`}
                >
                  {compareCars.find((c) => c.id === car.id)
                    ? "✅ Dipilih"
                    : "📊 Bandingkan"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tabel Perbandingan */}
        {compareCars.length >= 2 && (
          <div className="mt-12 overflow-x-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-yellow-400">
              Perbandingan Mobil
            </h3>
            <table className="w-full text-white border border-gray-700">
              <thead>
                <tr>
                  <th className="p-3 border">Spesifikasi</th>
                  {compareCars.map((car) => (
                    <th key={car.id} className="p-3 border">
                      {car.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Harga</td>
                  {compareCars.map((car) => (
                    <td key={car.id} className="p-3 border">
                      {formatPrice(car.price)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 border">Power</td>
                  {compareCars.map((car) => (
                    <td key={car.id} className="p-3 border">
                      {car.specs[1]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 border">Top Speed</td>
                  {compareCars.map((car) => (
                    <td key={car.id} className="p-3 border">
                      {car.specs[2]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 border">0–100 km/h</td>
                  {compareCars.map((car) => (
                    <td key={car.id} className="p-3 border">
                      {car.specs[3]}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center">
          <div
            className="relative bg-cover bg-center w-[90%] md:w-[450px] h-[500px] rounded-lg shadow-lg overflow-hidden"
            style={{ backgroundImage: "url('/img/modal-bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 p-6 backdrop-blur-sm">
              <button
                className="absolute top-2 right-3 text-white text-2xl font-bold hover:text-red-500"
                onClick={() => setSelectedCar(null)}
              >
                &times;
              </button>

              <h3 className="text-xl font-bold text-yellow-400 mb-2 mt-8">
                {selectedCar.name}
              </h3>
              <p className="text-white font-semibold mb-3">
                {formatPrice(selectedCar.price)}
              </p>

              {/* List Spesifikasi */}
              <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
                {selectedCar.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CarsShowcase;
