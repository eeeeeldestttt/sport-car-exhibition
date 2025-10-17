// src/pages/RegisterPage.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    navigate("/login");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay futuristik */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Card Register */}
      <div className="relative z-10 bg-white/10 border border-cyan-400 shadow-lg p-8 w-96 rounded-2xl backdrop-blur-md text-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400 tracking-wider">
          🚀 Create Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="bg-transparent border border-cyan-400 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-300 placeholder-cyan-300"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-transparent border border-cyan-400 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-300 placeholder-cyan-300"
            required
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg p-3 w-full transition duration-200 shadow-[0_0_15px_#06b6d4] hover:shadow-[0_0_25px_#06b6d4]"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-cyan-200 text-sm">
          Already have an account?{" "}
          <span
            className="text-cyan-400 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}
