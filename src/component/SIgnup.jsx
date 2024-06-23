import React, { useState } from "react";

const SIgnup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    const result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(
      "%c🤪 ~ file: e:\nodejs project\first-reactjssrccomponentSIgnup.jsx:20 [SIgnup/handleSubmit/result] -> result : ",
      "color: #6eedc9",
      await result.json()
    );
  };
  return (
    <div className="shadow p-7 max-w-[600px] mx-auto space-y-5">
      <h1>Signup</h1>
      <div className="flex gap-2 items-center">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e?.target?.value)}
          placeholder="Enter Name"
          className="border border-black rounded px-2 py-1"
        />
      </div>
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
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SIgnup;
