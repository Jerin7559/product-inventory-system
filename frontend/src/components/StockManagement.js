import React, { useState } from "react";
import axios from "axios";

const StockManagement = () => {
  const [variantId, setVariantId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [action, setAction] = useState("add");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint =
        action === "add" ? "/api/products/add-stock" : "/api/products/remove-stock";
      await axios.post(endpoint, { variantId, quantity });
      alert("Stock updated successfully!");
      setVariantId("");
      setQuantity(0);
    } catch (err) {
      setError("Error updating stock.");
    }
  };

  return (
    <div>
      <h2>Stock Management</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Variant ID:</label>
        <input
          type="text"
          value={variantId}
          onChange={(e) => setVariantId(e.target.value)}
          required
        />
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
        <label>Action:</label>
        <select value={action} onChange={(e) => setAction(e.target.value)}>
          <option value="add">Add Stock</option>
          <option value="remove">Remove Stock</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StockManagement;
