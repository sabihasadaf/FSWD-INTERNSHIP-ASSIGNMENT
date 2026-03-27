import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const productsData = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Phone", price: 20000, category: "Electronics", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Shoes", price: 2000, category: "Fashion", image: "https://via.placeholder.com/150" },
    { id: 4, name: "T-Shirt", price: 800, category: "Fashion", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Watch", price: 3000, category: "Accessories", image: "https://via.placeholder.com/150" },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="app">
      <h1>Product Listing UI</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Accessories">Accessories</option>
      </select>

      {/* Product Grid */}
      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;