import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    const result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await result.json();
    if (res.email) {
      localStorage.setItem("user", JSON.stringify(res));
      navigate("/");
    }
  };

  return (
    <div className="shadow p-7 max-w-[600px] mx-auto space-y-5">
      <h1>Login</h1>

      <div className="flex gap-2 items-center">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          placeholder="Enter Email"
          className="border border-black rounded px-2 py-1"
        />
      </div>
      <div className="flex gap-2 items-center">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e?.target?.value)}
          placeholder="Enter Password"
          className="border border-black rounded px-2 py-1"
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-black px-4 py-2 rounded-md text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
