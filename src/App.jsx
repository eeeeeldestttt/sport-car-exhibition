import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import CarouselMobil from "./components/sections/CarouselMobil";
import CarNews from "./components/sections/CarNews";

import CarsPage from "./pages/CarPage";
import AboutPage from "./pages/AboutPage";
import BiodataPage from "./pages/BiodataPage";
import CompanyPage from "./pages/CompanyPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import SuggestionPage from "./pages/SuggestionPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const toggleSidebarMinimize = () => setIsSidebarMinimized((prev) => !prev);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        {/* Redirect "/" ke dashboard kalau login, kalau tidak ke login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Login & Register */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <RegisterPage />
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LayoutWithSidebar
                isSidebarMinimized={isSidebarMinimized}
                toggleSidebarMinimize={toggleSidebarMinimize}
              >
                <Hero />
                <CarNews />
                <div>
                  <h1 className="text-center text-3xl font-bold mt-6">
                    🚗 Mobil Pilihan
                  </h1>
                  <CarouselMobil />
                </div>
              </LayoutWithSidebar>
            </ProtectedRoute>
          }
        />

        {/* Cars */}
        <Route
          path="/cars"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LayoutWithSidebar
                isSidebarMinimized={isSidebarMinimized}
                toggleSidebarMinimize={toggleSidebarMinimize}
              >
                <CarsPage />
              </LayoutWithSidebar>
            </ProtectedRoute>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LayoutWithSidebar
                isSidebarMinimized={isSidebarMinimized}
                toggleSidebarMinimize={toggleSidebarMinimize}
              >
                <AboutPage />
              </LayoutWithSidebar>
            </ProtectedRoute>
          }
        />

        {/* Biodata */}
        <Route
          path="/biodata"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LayoutWithSidebar
                isSidebarMinimized={isSidebarMinimized}
                toggleSidebarMinimize={toggleSidebarMinimize}
              >
                <BiodataPage />
              </LayoutWithSidebar>
            </ProtectedRoute>
          }
        />

        {/* Company */}
        <Route
          path="/company"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LayoutWithSidebar
                isSidebarMinimized={isSidebarMinimized}
                toggleSidebarMinimize={toggleSidebarMinimize}
              >
                <CompanyPage />
              </LayoutWithSidebar>
            </ProtectedRoute>
          }
        />
        {/* Suggestion Page */}
        <Route
          path="/suggestion"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LayoutWithSidebar
                isSidebarMinimized={isSidebarMinimized}
                toggleSidebarMinimize={toggleSidebarMinimize}
              >
                <SuggestionPage />
              </LayoutWithSidebar>
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LayoutWithSidebar
                isSidebarMinimized={isSidebarMinimized}
                toggleSidebarMinimize={toggleSidebarMinimize}
              >
                <ProfilePage />
              </LayoutWithSidebar>
            </ProtectedRoute>
          }
        />

        {/* Edit Profile */}
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LayoutWithSidebar
                isSidebarMinimized={isSidebarMinimized}
                toggleSidebarMinimize={toggleSidebarMinimize}
              >
                <EditProfilePage />
              </LayoutWithSidebar>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

// ProtectedRoute pakai Redux state
function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Layout Sidebar (responsif)
function LayoutWithSidebar({
  children,
  isSidebarMinimized,
  toggleSidebarMinimize,
}) {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white min-h-screen overflow-x-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-auto">
        <Sidebar
          isMinimized={isSidebarMinimized}
          toggleMinimize={toggleSidebarMinimize}
        />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out 
          ml-0 md:${isSidebarMinimized ? "ml-20" : "ml-64"}`}
      >
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
