function Biodata() {
  return (
    <section
      id="biodata"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Background Gambar Halus */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/img/background.jpg')" }}
      ></div>

      {/* Konten Utama */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight">
          Tentang <span className="text-yellow-400">Pembuat Website</span>
        </h2>

        <p className="text-lg text-gray-300 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
          Halo! Saya adalah seorang pengembang web dengan semangat tinggi dalam membangun antarmuka yang modern, cepat, dan ramah pengguna. Website ini merupakan proyek pribadi untuk menampilkan layanan rental mobil sport mewah dengan desain elegan dan pengalaman visual yang menarik.
        </p>

        {/* Card Biodata */}
        <div className="bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl p-10 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-yellow-500/20 transition-shadow duration-500">
          {/* Foto Profil */}
          <div className="flex-shrink-0">
            <img
              src="/img/foto.jpg"
              alt="Foto Andrew Santoso"
              className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-yellow-400 shadow-xl transition duration-300 hover:scale-105"
            />
          </div>

          {/* Informasi Biodata */}
          <div className="text-left space-y-4 text-gray-300">
            <p>
              <span className="text-white font-semibold">👤 Nama:</span> Andrew Purwo Santoso
            </p>
            <p>
              <span className="text-white font-semibold">📍 Asal:</span> Sembulung
            </p>
            <p>
              <span className="text-white font-semibold">💼 Profesi:</span> Pelajar
            </p>
            <p>
              <span className="text-white font-semibold">🧠 Spesialisasi:</span>{' '}
              Frontend Development, React, Tailwind CSS
            </p>
            <p>
              <span className="text-white font-semibold">📧 Email:</span>{' '}
              andrewpurwo1140@gmail.com
            </p>
            <p>
              <span className="text-white font-semibold">🐙 GitHub:</span>{' '}
              <a
                href="https://github.com/eeeeeldestttt?tab=projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                andrewsantoso
              </a>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 text-center mt-12">
          Terima kasih telah mengunjungi website ini. Semoga memberikan kesan positif dan bermanfaat bagi Anda.
        </p>
      </div>
    </section>
  );
}

export default Biodata;
