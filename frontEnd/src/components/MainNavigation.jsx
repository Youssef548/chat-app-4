import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Item to="/auth">
                Authentication
            </Item>
            <Item to="/dashboard">
                Massages
            </Item>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;

const Item = ({to,children}) => {
  return (
    <div>
      <Link
        to={to}
        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {children}
      </Link>
    </div>
  );
};
