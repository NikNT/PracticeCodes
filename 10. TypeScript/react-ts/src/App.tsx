import React, { useState } from "react";
import "./App.css";
import Product from "./Components/Product";

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      title: "iPhone",
      price: 3000,
    },
    {
      id: 2,
      title: "MacBook",
      price: 4000,
    },
  ]);

  function handleAddToCart(id: number) {
    console.log(`Clicked ${id}`);
  }

  return (
    <>
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          handleAddToCartClick={handleAddToCart}
        />
      ))}
    </>
  );
}

export default App;
