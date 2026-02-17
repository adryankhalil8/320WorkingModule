// FilterableProductTable.jsx - Complete "Thinking in React" example
import React, { useState } from "react";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function ProductRow({ product }) {
  const nameStyle = product.stocked ? {} : { color: "red" };
  return (
    <tr>
      <td style={nameStyle}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2" style={{ backgroundColor: "#f5f5f5", padding: "4px 8px" }}>
        {category}
      </th>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;
    if (inStockOnly && !product.stocked) return;

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: "4px 8px" }}>Name</th>
          <th style={{ textAlign: "left", padding: "4px 8px" }}>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        style={{ display: "block", marginBottom: "0.5rem", padding: "0.5rem", width: "100%" }}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto", fontFamily: "sans-serif" }}>
      <h1>Product Catalog</h1>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly} />
      <p style={{ color: "#999", fontSize: "0.8rem" }}>Red items are out of stock.</p>
    </div>
  );
}

export default FilterableProductTable;
