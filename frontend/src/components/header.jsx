import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <link rel="icon" type="image" href="/pathpilot_fav.png" />
            <Link to="/" className="flex items-center">
              <img
                src="/pathpilot_logo.png"
                alt="PathPilot Logo"
                className="h-20 w- object-contain"
              />
              <span className="text-2xl font-bold text-white ml-3"></span>
            </Link>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <Link
                to="/"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/features"
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                to="/paths"
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Paths
              </Link>
              {user && (
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
              )}
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-300">Hello, {user.name}</span>
                <button
                  onClick={logout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
