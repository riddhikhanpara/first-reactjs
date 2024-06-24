import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const userData = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async () => {
    const data = {
      name: name,
      company: company,
      price: price,
      category: category,
      user_id: userData?._id,
    };
    const result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    // const res = await result.json();
    // if (res.email) {
    //   localStorage.setItem("user", JSON.stringify(res));
    //   navigate("/");
    // }
  };

  return (
    <div className="shadow p-7 max-w-[600px] mx-auto space-y-5">
      <h1>Login</h1>

      <div className="flex gap-2 items-center">
        <label>Name</label>
        <input
          type="email"
          name="email"
          value={name}
          onChange={(e) => setName(e?.target?.value)}
          placeholder="Enter Name"
          className="border border-black rounded px-2 py-1"
        />
      </div>
      <div className="flex gap-2 items-center">
        <label>Price</label>
        <input
          type="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e?.target?.value)}
          placeholder="Enter price"
          className="border border-black rounded px-2 py-1"
        />
      </div>
      <div className="flex gap-2 items-center">
        <label>Category</label>
        <input
          type="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e?.target?.value)}
          placeholder="Enter category"
          className="border border-black rounded px-2 py-1"
        />
      </div>
      <div className="flex gap-2 items-center">
        <label>Company</label>
        <input
          type="company"
          name="company"
          value={company}
          onChange={(e) => setCompany(e?.target?.value)}
          placeholder="Enter Name"
          className="border border-black rounded px-2 py-1"
        />
      </div>

      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-black px-4 py-2 rounded-md text-white"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
