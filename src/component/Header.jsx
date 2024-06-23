import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const Header = () => {
  const router = useNavigate();
  return (
    <div className="bg-white shadow">
      <div className="container px-4 mx-auto">
        <ul className="flex items-center gap-10 justify-end py-3">
          <li onClick={() => router("/")}>Products</li>
          <li onClick={() => router("/add")}>Add</li>
          <li onClick={() => router("/update")}>Update</li>
          <li onClick={() => router("/list")}>List</li>
          <li onClick={() => router("/delete")}>Delete</li>
          <li onClick={() => router("/logout")}>Logout</li>
          <li onClick={() => router("/profile")}>Profile</li>
          <li onClick={() => router("/signup")}>Signup</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
