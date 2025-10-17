import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  if (isAuthenticated) {
    navigate("/dashboard");
  }

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1619972891073-d6f9c6e7c5d7?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay gradient futuristic */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/70 to-blue-900/80 backdrop-blur-sm"></div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 p-8 rounded-2xl shadow-2xl w-96 border border-cyan-400/50 bg-black/40 backdrop-blur-lg"
        style={{
          boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)",
        }}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-cyan-400 drop-shadow-[0_0_10px_#00ffff]">
          🚀 Welcome Back
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="bg-black/60 border border-cyan-400/40 text-white p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-black/60 border border-cyan-400/40 text-white p-3 w-full mb-6 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button
          type="submit"
          className="bg-cyan-500/80 hover:bg-cyan-400 text-black font-bold px-4 py-3 rounded w-full mb-3 transition-all duration-300 shadow-[0_0_10px_#00ffff]"
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="bg-purple-600/80 hover:bg-purple-500 text-white font-bold px-4 py-3 rounded w-full transition-all duration-300 shadow-[0_0_10px_#a855f7]"
        >
          Register
        </button>
      </form>
    </div>
  );
}
