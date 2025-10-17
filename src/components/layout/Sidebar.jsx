import {
  FiHome,
  FiTruck,
  FiInfo,
  FiUser,
  FiMenu,
  FiX,
  FiChevronsLeft,
  FiChevronsRight,
  FiSearch,
  FiLogIn,
  FiUserPlus,
  FiLogOut,
  FiMessageSquare,
} from "react-icons/fi";
import { FaCar, FaBuilding } from "react-icons/fa"; // fix icon Car dan Building
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

function Sidebar({ isMinimized, toggleMinimize }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("blue");

  const toggleSidebar = () => setIsOpen(!isOpen);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const sidebarWidthClass = isMinimized ? "md:w-20" : "md:w-64";

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleLogout = () => dispatch(logout());

  // Tema
  const themeBg = {
    blue: "/img/bg-nav-blue.png",
    green: "/img/bg-nav-green.png",
    purple: "/img/bg-nav-purple.jpg",
  };
  const themeTextColor = {
    blue: "text-blue-100 hover:text-white",
    green: "text-green-100 hover:text-white",
    purple: "text-purple-100 hover:text-white",
  };
  const themeBorderColor = {
    blue: "border-blue-700",
    green: "border-green-700",
    purple: "border-purple-700",
  };
  const themeInputBg = {
    blue: "bg-blue-950/40 focus:ring-blue-400",
    green: "bg-green-950/40 focus:ring-green-400",
    purple: "bg-purple-950/40 focus:ring-purple-400",
  };
  const themeButtonBg = {
    blue: "bg-blue-700 hover:bg-blue-600",
    green: "bg-green-700 hover:bg-green-600",
    purple: "bg-purple-700 hover:bg-purple-600",
  };
  const themeMenuActive = {
    blue: "bg-blue-800/60",
    green: "bg-green-800/60",
    purple: "bg-purple-800/60",
  };
  const themeMenuHover = {
    blue: "hover:bg-blue-700/50",
    green: "hover:bg-green-700/50",
    purple: "hover:bg-purple-700/50",
  };

  return (
    <>
      {/* Tombol Toggle Mobile */}
      <button
        className={`fixed top-4 left-4 z-50 text-2xl md:hidden ${
          theme === "blue"
            ? "text-blue-100"
            : theme === "green"
            ? "text-green-100"
            : "text-purple-100"
        }`}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black/90 transform transition-transform duration-300 z-40
          w-64 ${sidebarWidthClass} 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 flex flex-col justify-between`}
      >
        {/* Header */}
        <div
          className="bg-black bg-cover bg-center relative z-50"
          style={{ backgroundImage: "url('/img/bg-header.jpg')" }}
        >
          <div
            className={`flex items-center p-6 ${themeBorderColor[theme]} border-b ${
              isMinimized ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="/img/icon.png"
                alt="Logo CarRental"
                className={`object-contain ${isMinimized ? "w-10 h-10" : "w-8 h-8"}`}
              />
              {!isMinimized && (
                <span
                  className={`font-bold text-xl select-none drop-shadow-lg ${
                    themeTextColor[theme].split(" ")[0]
                  }`}
                >
                  CarSpot
                </span>
              )}
            </div>

            <button
              onClick={toggleMinimize}
              className={`${themeTextColor[theme]} focus:outline-none`}
            >
              {isMinimized ? <FiChevronsRight size={24} /> : <FiChevronsLeft size={24} />}
            </button>
          </div>
        </div>

        {/* Isi Sidebar */}
        <div
          className="flex-grow flex flex-col"
          style={{
            backgroundImage: `url('${themeBg[theme]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Search Bar */}
          {!isMinimized && (
            <div className={`p-4 border-b ${themeBorderColor[theme]} bg-black/40`}>
              <div className={`relative ${themeTextColor[theme]} focus-within:text-white`}>
                <FiSearch
                  className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Cari menu..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`w-full ${themeInputBg[theme]} text-white rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2`}
                />
              </div>

              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className={`mt-3 w-full flex items-center justify-center gap-2 ${themeButtonBg[theme]} text-white py-2 rounded-md text-sm font-semibold transition`}
                >
                  <FiLogOut size={18} />
                  Logout
                </button>
              )}
            </div>
          )}

          {/* Pilih Tema */}
          {!isMinimized && (
            <div className={`p-4 border-b ${themeBorderColor[theme]} bg-black/30`}>
              <label
                className={`block text-sm mb-2 ${themeTextColor[theme].split(" ")[0]}`}
              >
                Theme:
              </label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className={`w-full ${themeInputBg[theme]} text-white rounded-md py-1 px-2 focus:outline-none focus:ring-2`}
              >
                <option value="blue">Biru</option>
                <option value="green">Hijau</option>
                <option value="purple">Ungu</option>
              </select>
            </div>
          )}

          {/* Menu Navigasi */}
          <nav
            className={`p-4 space-y-2 text-sm md:text-base flex-grow overflow-auto ${themeTextColor[theme]}`}
          >
            {[
              { path: "/dashboard", icon: <FiHome size={20} />, label: "Home" },
              { path: "/cars", icon: <FaCar size={20} />, label: "Cars" }, // fix icon
              { path: "/company", icon: <FaBuilding size={20} />, label: "Company" },
              { path: "/biodata", icon: <FiUser size={20} />, label: "Biodata" },
              { path: "/about", icon: <FiInfo size={20} />, label: "About" },
              { path: "/suggestion", icon: <FiMessageSquare size={20} />, label: "Suggestion" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 p-2 rounded-md transition ${
                  isActive(item.path) ? themeMenuActive[theme] : ""
                } ${themeMenuHover[theme]}`}
              >
                {item.icon}
                {!isMinimized && item.label}
              </Link>
            ))}

            {!isAuthenticated && !isMinimized && (
              <div className="mt-6 flex gap-4 justify-center">
                <Link to="/login" className="hover:text-white">
                  <FiLogIn size={18} />
                </Link>
                <Link to="/register" className="hover:text-white">
                  <FiUserPlus size={18} />
                </Link>
              </div>
            )}
          </nav>
        </div>

        {/* Footer */}
        <div
          className={`p-4 border-t ${themeBorderColor[theme]} text-center text-xs ${
            themeTextColor[theme].split(" ")[0]
          }`}
        >
          © 2025 CarSpot. All rights reserved.
        </div>
      </div>

      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default Sidebar;
