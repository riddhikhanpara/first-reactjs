import React, { useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const Header = () => {
  const router = useNavigate();
  const userData = localStorage.getItem("user");
  return (
    <div className="bg-white shadow">
      <div className="container px-4 mx-auto">
        <ul className="flex items-center gap-10 justify-end py-3">
          <li onClick={() => router("/")}>Products</li>
          <li onClick={() => router("/add")}>Add</li>
          <li onClick={() => router("/update")}>Update</li>
          <li onClick={() => router("/list")}>List</li>
          <li onClick={() => router("/delete")}>Delete</li>
          <li onClick={() => router("/profile")}>Profile</li>
          {userData ? (
            <li
              onClick={() => {
                localStorage.removeItem("user");
                router("/signup");
              }}
            >
              Logout
            </li>
          ) : (
            <>
              <li onClick={() => router("/login")}>Login</li>
              <li onClick={() => router("/signup")}>Signup</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
