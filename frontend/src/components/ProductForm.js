import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [variants, setVariants] = useState([{ name: "", options: [""] }]);
  const [error, setError] = useState("");

  const handleAddVariant = () => {
    setVariants([...variants, { name: "", options: [""] }]);
  };

  const handleVariantChange = (index, key, value) => {
    const updatedVariants = [...variants];
    updatedVariants[index][key] = value;
    setVariants(updatedVariants);
  };

  const handleAddOption = (variantIndex) => {
    const updatedVariants = [...variants];
    updatedVariants[variantIndex].options.push("");
    setVariants(updatedVariants);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { name: productName, variants };
      await axios.post("/api/products/create", payload);
      alert("Product created successfully!");
      setProductName("");
      setVariants([{ name: "", options: [""] }]);
    } catch (err) {
      setError("Error creating product");
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        {variants.map((variant, index) => (
          <div key={index}>
            <label>Variant Name:</label>
            <input
              type="text"
              value={variant.name}
              onChange={(e) => handleVariantChange(index, "name", e.target.value)}
              required
            />
            {variant.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label>Option:</label>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...variant.options];
                    newOptions[optionIndex] = e.target.value;
                    handleVariantChange(index, "options", newOptions);
                  }}
                  required
                />
              </div>
            ))}
            <button type="button" onClick={() => handleAddOption(index)}>
              Add Option
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddVariant}>
          Add Variant
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
