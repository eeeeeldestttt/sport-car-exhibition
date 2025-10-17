// src/pages/EditProfilePage.jsx
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function EditProfilePage() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password && password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }

    dispatch(updateProfile({ username, email, ...(password && { password }) }));
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#05010f] via-[#0f0f1f] to-[#05010f] text-white p-6">
      <div className="relative max-w-md w-full rounded-2xl shadow-xl p-8 backdrop-blur-md bg-white/5 border border-cyan-500/30">
        {/* Efek Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-30"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            ✨ Edit Profil ✨
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-5">
              <label className="block mb-2 text-sm text-cyan-300">Username</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-black/50 border border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username baru..."
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block mb-2 text-sm text-purple-300">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-black/50 border border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email baru..."
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block mb-2 text-sm text-pink-300">Password Baru</label>
              <input
                type="password"
                className="w-full p-3 rounded-lg bg-black/50 border border-pink-400/50 focus:outline-none focus:ring-2 focus:ring-pink-400 text-white placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Kosongkan jika tidak ingin mengubah"
              />
            </div>

            {/* Konfirmasi Password */}
            <div className="mb-5">
              <label className="block mb-2 text-sm text-pink-300">Konfirmasi Password</label>
              <input
                type="password"
                className="w-full p-3 rounded-lg bg-black/50 border border-pink-400/50 focus:outline-none focus:ring-2 focus:ring-pink-400 text-white placeholder-gray-400"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Ulangi password baru"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-cyan-500/30 hover:shadow-pink-500/30 transition-all duration-300"
            >
              💾 Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
