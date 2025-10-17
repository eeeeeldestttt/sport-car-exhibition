function About() {
  const features = [
    {
      icon: "🏎️",
      title: "Pilihan Premium",
      description:
        "Koleksi eksklusif mobil sport dan mewah terbaik di dunia yang telah dikurasi dengan cermat.",
    },
    {
      icon: "🛡️",
      title: "Asuransi Lengkap",
      description: "Perlindungan menyeluruh untuk ketenangan penuh.",
    },
    {
      icon: "📞",
      title: "Dukungan 24/7",
      description: "Tim kami siap membantu Anda kapan saja, siang maupun malam.",
    },
    {
      icon: "🚗",
      title: "Terawat dengan Baik",
      description:
        "Semua kendaraan dirawat secara teliti untuk menjamin performa dan keamanan terbaik.",
    },
    {
      icon: "🌍",
      title: "Jangkauan Global",
      description:
        "Tersedia di berbagai kota besar di seluruh dunia untuk kenyamanan Anda.",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="relative py-20 text-white overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-60"
          style={{ backgroundImage: "url('/img/about-bg.jpg')" }} // Ganti sesuai nama file kamu
        ></div>

        {/* Konten Utama */}
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 drop-shadow">
            Tentang <span className="text-yellow-400">Mobil Sport</span>
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-300 drop-shadow-sm">
            Mobil sport adalah jenis kendaraan yang dirancang khusus untuk performa tinggi, termasuk akselerasi, kecepatan, dan pengendalian.
            Mobil ini biasanya memiliki desain aerodinamis, mesin bertenaga besar, serta sistem suspensi yang dioptimalkan agar mampu bermanuver dengan lincah.
          </p>

          {/* Grid Fitur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black/60 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
