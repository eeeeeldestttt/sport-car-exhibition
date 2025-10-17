// src/components/CarouselMobil.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mobilList = [
  {
    nama: "Lamborghini Aventador",
    gambar: "/img/lamborghini.jpg",
    deskripsi: "Supercar ikonik dengan mesin V12 dan kecepatan luar biasa."
  },
  {
    nama: "Ferrari F8 Tributo",
    gambar: "/img/ferrari.jpg",
    deskripsi: "Perpaduan keindahan desain dan performa mesin V8 twin-turbo."
  },
  {
    nama: "Bugatti La Voiture Noire",
    gambar: "/img/Bugatti-la.jpg",
    deskripsi: "Mobil hypercar dengan kecepatan maksimum lebih dari 400 km/h."
  }
];

export default function CarouselMobil() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <Slider {...settings}>
        {mobilList.map((mobil, idx) => (
          <div key={idx} className="relative">
            <img
              src={mobil.gambar}
              alt={mobil.nama}
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 rounded-b-lg">
              <h3 className="text-xl font-bold text-white">{mobil.nama}</h3>
              <p className="text-gray-300 text-sm">{mobil.deskripsi}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
