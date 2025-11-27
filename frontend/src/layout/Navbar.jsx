import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false); // Mobile menu
  const [profileOpen, setProfileOpen] = useState(false); // Profile dropdown
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-extrabold text-blue-600">
          MoveEase
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/find-movers" className="hover:text-blue-600">Find Movers</Link>

          {/* Dropdown: Services */}
          <div className="relative group cursor-pointer">
            <span className="hover:text-blue-600">Services ▼</span>

            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg w-48 p-3">
              <Link to='/services/home-shifting' className="block py-1 hover:text-blue-600">Home Shifting</Link>
              <Link to='/services/office-shifting' className="block py-1 hover:text-blue-600">Office Shifting</Link>
              <Link to='/services/vehicle-transport' className="block py-1 hover:text-blue-600">Vehicle Transport</Link>
            </div>
          </div>

          <Link to="/reviews" className="hover:text-blue-600">Customer Reviews</Link>
          <Link to="/help" className="hover:text-blue-600">Help & Support</Link>
        </div>

        {/* Right Auth/Profile Section */}
        <div className="hidden md:flex items-center gap-4">

          {!user ? (
            <>
              <Link to="/login" className="px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 font-medium">Login</Link>
              <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">Sign Up</Link>
            </>
          ) : (
            <div className="relative">
              {/* PROFILE ICON */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${user.name}&background=2563EB&color=fff`}
                  className="w-10 h-10 rounded-full border shadow"
                  alt="profile"
                />
              </button>

              {/* DROPDOWN MENU */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-2 z-50 animate-fadeIn">

                  {user.role === "customer" && (
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      My Bookings
                    </Link>
                  )}

                  {user.role === "mover" && (
                    <Link
                      to="/mover-dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      My Business
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {openMenu && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">

          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <Link to="/find-movers" className="block hover:text-blue-600">Find Movers</Link>

          <p className="font-medium text-gray-700">Services</p>
          <div className="pl-4 space-y-1 mt-2">
            <Link to="/services/home-shifting" className="block hover:text-blue-600">Home Shifting</Link>
            <Link to="/services/office-shifting" className="block hover:text-blue-600">Office Shifting</Link>
            <Link to="/services/vehicle-transport" className="block hover:text-blue-600">Vehicle Transport</Link>
          </div>

          <Link to="/reviews" className="block hover:text-blue-600">Customer Reviews</Link>
          <Link to="/help" className="block hover:text-blue-600">Help & Support</Link>

          {!user ? (
            <>
              <Link to="/login" className="block px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 font-medium">Login</Link>
              <Link to="/signup" className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">Sign Up</Link>
            </>
          ) : (
            <>
              {user.role === "customer" && (
                <Link to="/dashboard" className="block hover:text-blue-600">My Bookings</Link>
              )}

              {user.role === "mover" && (
                <Link to="/mover-dashboard" className="block hover:text-blue-600">My Business</Link>
              )}

              <button
                onClick={handleLogout}
                className="block text-left text-red-500 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Logout
              </button>
            </>
          )}

        </div>
      )}
    </nav>
  );
}
