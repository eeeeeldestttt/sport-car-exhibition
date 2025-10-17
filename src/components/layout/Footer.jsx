import { useState } from "react";
import { FaFacebookF, FaInstagram, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  // Mapping nama sosial media ke teks yang ingin ditampilkan
  const socialInfo = {
    Facebook: "Andrew Santoso",
    Discord: "EldestMobile",
    Instagram: "@Andrewnicetry_",
    Whatsapp: "087816518779",
  };

  // Handler saat icon ditekan
  function handleClick(name) {
    alert(`${name} = ${socialInfo[name]}`);
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 shadow-inner">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 tracking-tight text-yellow-400">
              <span>Car</span> Spotter
            </h3>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Premium luxury spotting service for discerning clients who value exclusivity and quality.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {[
                { Icon: FaDiscord, name: "Discord" },
                { Icon: FaInstagram, name: "Instagram" },
                { Icon: FaFacebookF, name: "Facebook" },
                { Icon: FaWhatsapp, name: "Whatsapp" },
              ].map(({ Icon, name }, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleClick(name)}
                  className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 transition-colors focus:outline-none"
                  aria-label={name}
                >
                  <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Dashboard", to: "/dashboard" },
                { name: "Company", to: "/company" },
                { name: "Cars", to: "/cars" },
                { name: "Biodata", to: "/biodata" },
                { name: "About", to: "/about" },
              ].map(({ name, to }) => (
                <li key={name}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-base font-medium"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 text-gray-300">
              Contact Us
            </h4>
            <ul className="space-y-3 text-gray-400 text-base font-light">
              <li>Jl. Sudirman No. 123, Jakarta</li>
              <li>
                <a
                  href="mailto:info@CarSpottingRN.com"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  info@CarSpottingRN.com
                </a>
              </li>
              <li>
                <a
                  href="tel:087816518779"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  0878 1651 8779
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none">
          <p>© {new Date().getFullYear()} Car Spotter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
