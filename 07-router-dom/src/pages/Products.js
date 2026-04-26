import React from "react";
import Product from "../components/Product";
import urunler from "../data/urunler";

const Products = () => {
  return (
    <div>
      {urunler?.map((urun) => (
        <Product key={urun.id} product={urun} />
      ))}
    </div>
  );
};

export default Products;
