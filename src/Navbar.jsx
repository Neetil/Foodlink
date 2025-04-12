// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="w-full px-4 md:px-10 py-4 flex justify-between items-center shadow-md bg-white dark:bg-gray-900 dark:text-white fixed top-0 z-50">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        FoodLink
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-orange-500 transition">Home</Link>
        <Link to="/dashboard" className="hover:text-orange-500 transition">Dashboard</Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
