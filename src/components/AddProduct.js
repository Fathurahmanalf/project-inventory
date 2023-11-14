import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
//   const [Version, setVersion] = useState("");
//   const [User, setUser] = useState("");
//   const [Product, setProduct] = useState("");
//   const [Stock, setStock] = useState("");
//   const [Amount, setAmount] = useState("");
//   const navigate = useNavigate();

//   const saveUser = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/users", {
//         Version,
//         User,
//         Product,
//         Stock,
//         Amount,
//       });
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }

  return (
    <div className="max-w-xl mx-auto mt-5">
    <form className="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="version">
          Version
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="version"
          type="text"
          placeholder="Version"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user">
          User
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="user"
          type="text"
          placeholder="Name User"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
          Product
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="product"
          type="text"
          placeholder="Product"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
          Stock
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="stock"
          type="text"
          placeholder="Stock"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
          Amount
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="amount"
          type="text"
          placeholder="Amount"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Save
        </button>
      </div>
    </form>
  </div>
);

};

export default AddProduct;