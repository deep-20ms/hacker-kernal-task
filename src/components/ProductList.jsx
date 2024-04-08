
import React from "react";

const ProductList = ({ products }) => {
    return (
        <div>
          {products.length === 0 ? (
            <p className="text-center text-gray-500">No Product Found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product, index) => (
                <div key={index} className="p-4 shadow rounded bg-white">
                  <h4 className="font-bold">{product.name}</h4>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
};

export default ProductList;
