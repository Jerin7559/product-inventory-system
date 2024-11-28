import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products/list");
        setProducts(response.data);
      } catch (err) {
        setError("Error fetching products.");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <b>{product.name}</b>
            {product.variants.map((variant) => (
              <div key={variant.id}>
                {variant.name}: {variant.options.join(", ")}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
