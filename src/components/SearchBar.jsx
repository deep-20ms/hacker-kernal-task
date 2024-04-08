
import React from "react";

const SearchBar = ({ products, setFilteredProducts }) => {
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <input
      className="p-2 mb-4 border rounded w-full"
      type="text"
      onChange={handleSearch}
      placeholder="Search products..."
    />
  );
};

export default SearchBar;
