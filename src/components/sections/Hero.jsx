function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-16 md:py-24"
    >
      {/* GIF Background Layer */}
      <img
        src="img/mainmenu.gif" // sesuaikan path sesuai lokasi gif kamu
        alt="Main Menu GIF"
        className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlay supaya teks tetap terbaca (lebih gelap) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        style={{ zIndex: 1 }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
          Premium <span className="text-yellow-400">Luxury Sports Car</span> Showcase
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-white drop-shadow-md">
          Experience the thrill of driving the world's most exclusive vehicles 
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Explore More Cars */}
          <a
            href="/cars"
            className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-4 rounded-lg shadow-lg transition"
          >
            Explore More Cars
          </a>

          {/* Profile */}
          <a
            href="/profile"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition"
          >
            Profile
          </a>

          {/* Edit Profile */}
          <a
            href="/edit-profile"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg shadow-lg transition"
          >
            Edit Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
