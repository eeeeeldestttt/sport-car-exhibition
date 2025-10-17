// src/redux/AuthSlice.jsx
import React from "react";
import { createSlice } from "@reduxjs/toolkit";

// Ambil user dari localStorage
const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: userFromStorage,
  isAuthenticated: !!userFromStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const { username, password } = action.payload;

      let users = JSON.parse(localStorage.getItem("users")) || [];
      const isExist = users.find((u) => u.username === username);
      if (isExist) {
        alert("Username sudah digunakan!");
        return;
      }

      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));

      // Login otomatis setelah register
      state.user = { username, password };
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify({ username, password }));

      alert("Registrasi berhasil, Anda sudah login.");
    },
    login: (state, action) => {
      const { username, password } = action.payload;

      let users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(
        (u) => u.username === username && u.password === password
      );

      if (foundUser) {
        state.user = foundUser;
        state.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(foundUser));
      } else {
        alert("Username atau password salah!");
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
    updateProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
  },
});

export const { register, login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
