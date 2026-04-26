import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, name, price } = product;
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <p>{price} TL</p>
      <button onClick={() => navigate(`/product-details/${id}`)}>
        Detaya Git
      </button>
    </div>
  );
};

export default Product;