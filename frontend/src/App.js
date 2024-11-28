import React from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import StockManagement from "./components/StockManagement";

function App() {
  return (
    <div>
      <h1>Product Inventory System</h1>
      <ProductForm />
      <ProductList />
      <StockManagement />
    </div>
  );
}

export default App;
