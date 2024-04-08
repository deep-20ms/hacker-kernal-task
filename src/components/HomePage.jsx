import React, { useState } from "react";
import AddProductForm from "./AddProductForm";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import LogoutButton from "./LogoutButton";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Product Dashboard
        </h1>
        <LogoutButton />
      </div>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <AddProductForm setProducts={setProducts} products={products} />
        </div>
        <div className="mb-6">
          <SearchBar setProducts={setProducts} />
        </div>
        <div>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
