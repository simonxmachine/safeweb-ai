import React from "react";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

const productList: Product[] = [
  { id: 1, name: "Playstation 5", price: 100 },
  { id: 2, name: "TV", price: 500 },
  { id: 3, name: "Speakers", price: 500 },
];

const ProductList = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [products, setProducts] = useState<Product[]>(productList);
  const [bgColor, setBgColor] = useState("white"); // Initial color

  const changeColor = () => {
    setBgColor(bgColor === "white" ? "black" : "white"); // Toggle between white and blue
  };

  const handleAdd = () => {
    setName("");
    setPrice("");
    setProducts([
      ...products,
      {
        id: products[products.length - 1].id + 1,
        name,
        price: parseInt(price),
      },
    ]);
  };

  const handleDelete = (productToDelete: string) => {
    const updatedProducts = products.filter(
      (product) => product.name !== productToDelete
    );
    setProducts(updatedProducts);
  };

  return (
    <>
      <div className="mb-10" style={{ backgroundColor: bgColor }}>
        {/* Other elements... */}
        <button onClick={changeColor}>Change Background Color</button>
      </div>

      <div className="mb-10">
        <h4>Add product {name} </h4>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      <h4>Products List {price}</h4>
      <ul className="mb-10">
        {products.map(({ id, name, price }) => (
          <li key={id}>
            {name}, ${price}{" "}
            <button onClick={() => handleDelete(name)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
