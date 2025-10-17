import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return (
      <p className="text-center mt-10 text-cyan-400 animate-pulse font-mono">
        ⚠ Tidak ada data user.
      </p>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-lg border border-cyan-500 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Efek Glow Latar - pointer-events-none agar tidak blok tombol */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-2xl animate-pulse"></div>
      </div>

      <h2 className="relative text-3xl font-extrabold mb-6 text-cyan-400 tracking-widest font-mono text-center drop-shadow-[0_0_8px_#00ffff]">
        👤 PROFILE
      </h2>

      <div className="relative space-y-4 font-mono">
        <div className="bg-gray-800/50 p-3 rounded-lg border border-cyan-400/50 shadow-[0_0_10px_#00ffff]">
          <strong className="text-purple-400">Username:</strong>{" "}
          <span className="text-cyan-300">{user.username}</span>
        </div>

        <div className="bg-gray-800/50 p-3 rounded-lg border border-cyan-400/50 shadow-[0_0_10px_#00ffff]">
          <strong className="text-purple-400">Email:</strong>{" "}
          <span className="text-cyan-300">{user.email}</span>
        </div>
      </div>

      <div className="mt-6 text-center relative z-10">
        <Link
          to="/edit-profile"
          className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg shadow-[0_0_10px_#00ffff] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00ffff]"
        >
          ✏ Edit Profil
        </Link>
      </div>
    </div>
  );
}
