import React from "react";
import { IProduct } from "../App";

interface ProductProps {
  product: IProduct;
  handleAddToCartClick(id: number): void;
}

const Product = ({ product, handleAddToCartClick }: ProductProps) => {
  return (
    <div>
      {
        <>
          <h1>{product.price}</h1>
          <h1>{product.title}</h1>
        </>
      }
      <button onClick={() => handleAddToCartClick(product.id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
