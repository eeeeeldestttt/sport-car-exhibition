function CarCard({ name, image, price }) {
  return (
    <div
      className="relative flex-shrink-0 w-72 h-[360px] rounded-2xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 group"
      style={{
        backgroundImage: `url('/img/card-bg.jpg')`, // ← ganti dengan path gambar background kamu
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay Glass Effect */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between p-4">
        {/* Gambar Mobil */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src={image}
            alt={name}
            className="w-full h-40 object-cover transition duration-300 group-hover:brightness-110"
          />
        </div>

        {/* Detail Mobil */}
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-bold text-yellow-400 drop-shadow">{name}</h3>
          <p className="text-lg font-semibold text-white drop-shadow">
            Rp {price.toLocaleString("id-ID")}
          </p>
        </div>

        {/* Tombol Aksi */}
        <button className="mt-4 py-2 w-full bg-yellow-400 text-black font-bold rounded-lg shadow hover:bg-yellow-300 transition">
          Lihat Sekarang
        </button>
      </div>

      {/* Badge */}
      <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
        ⭐ Populer
      </span>
    </div>
  );
}

export default CarCard;
