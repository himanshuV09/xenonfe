import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Button } from 'antd';
import { loggedOut, getUserInfo } from '../utils/auth/getUserInfo';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check user authentication status
    const userInfo = getUserInfo();
    setIsLoggedIn(!!userInfo); // Set to true if user info exists, false otherwise
  }, []);

  const handleLogout = () => {
    loggedOut();
    setIsLoggedIn(false); // Set to logged-out state
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl rounded-b-lg">
      <h1
        className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider transition duration-300 ease-in-out transform hover:scale-105"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        Real Estate Properties
      </h1>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <Link
              to="/profile"
              className="bg-white text-indigo-600 font-semibold text-lg px-4 py-2 rounded-lg shadow-md hover:bg-indigo-100 transition duration-200"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <FaUserCircle size={24} className="inline mr-2" />
              Profile
            </Link>
            <Button
              onClick={handleLogout}
              className="bg-white text-red-600 font-semibold text-lg px-4 py-2 rounded-lg shadow-md hover:bg-red-100 transition duration-200"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white text-indigo-600 font-semibold text-lg px-4 py-2 rounded-lg shadow-md hover:bg-indigo-100 transition duration-200"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
