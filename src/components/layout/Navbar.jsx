// import { useState } from "react";
// import { FiHome, FiInfo, FiTruck, FiMenu, FiX } from "react-icons/fi";
// import "./index.css";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { href: "#home", label: "Home", icon: <FiHome /> },
//     { href: "#about", label: "About", icon: <FiInfo /> },
//     { href: "#cars", label: "Cars", icon: <FiTruck /> },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex relative">
//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 md:static transition-transform duration-300 z-50 shadow-xl`}
//       >
//         <div className="px-6 py-4 border-b border-gray-700 flex items-center justify-between md:justify-center">
//           <span className="text-xl font-bold tracking-wider">
//             <span className="text-yellow-400">Car</span> Spotter
//           </span>
//           <button
//             className="md:hidden text-gray-400 hover:text-white"
//             onClick={() => setIsOpen(false)}
//             aria-label="Close sidebar"
//           >
//             <FiX size={20} />
//           </button>
//         </div>

//         <nav className="flex flex-col gap-4 mt-8 px-6">
//           {links.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="flex items-center gap-3 py-2 px-4 rounded-md hover:bg-yellow-400 hover:text-black transition"
//             >
//               {link.icon}
//               <span>{link.label}</span>
//             </a>
//           ))}
//         </nav>

//         <div className="absolute bottom-4 left-6 text-sm text-gray-400">
//           © {new Date().getFullYear()} Intega Rental
//         </div>
//       </aside>

//       {/* Backdrop saat sidebar terbuka di mobile */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Toggle Button (Mobile Only) */}
//       <button
//         className="fixed top-4 left-4 z-50 text-white bg-yellow-400 hover:bg-yellow-500 p-2 rounded-lg md:hidden transition"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Toggle sidebar"
//       >
//         {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//       </button>

//       {/* Main Content */}
//       <main className="flex-1 p-6 mt-16 md:mt-0 md:ml-64 z-10">
//         <section id="home" className="mb-12">
//           <h1 className="text-3xl font-bold mb-4">Home</h1>
//           <p>Welcome to Intega Rental! Browse your dream car here.</p>
//         </section>

//         <section id="about" className="mb-12">
//           <h1 className="text-3xl font-bold mb-4">About</h1>
//           <p>We provide premium car rentals with affordable prices.</p>
//         </section>

//         <section id="cars">
//           <h1 className="text-3xl font-bold mb-4">Cars</h1>
//           <p>Check out our car collection.</p>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;
