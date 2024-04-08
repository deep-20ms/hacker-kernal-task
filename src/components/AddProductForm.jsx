
import React, { useState } from "react";

const AddProductForm = ({ products, setProducts }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !price) return;
    if (products.some((product) => product.name === productName)) {
      alert("Product already exists.");
      return;
    }
    const newProduct = { name: productName, price };
    setProducts([...products, newProduct]);
    setProductName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        name="productName"
        id="productName"
        className="p-2 border rounded"
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product name"
        required
      />
      <input
        name="price"
        id="price"
        className="p-2 border rounded"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
