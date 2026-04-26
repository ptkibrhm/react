import React from "react";
import { useParams } from "react-router-dom";
import urunler from "../data/urunler"; 

const ProductDetails = () => {
  
  const { id } = useParams();

  // 'urunler' dizisi içinde, id'si URL'den gelenle eşleşen TEK BİR ürünü bul
 const secilenUrun = urunler.find((urunler) => urunler.id === id);


  if (!secilenUrun) {
    return <h2>Aradığınız ürün stoklarımızda bulunamadı.</h2>;
  }

  return (
    <div style={{ padding: "20px", marginTop: "20px", border: "1px dashed gray" }}>
      <h1>Ürün Detayları</h1>
      <hr />
      <h3>Ürün Adı: {secilenUrun.name}</h3>
      <h3>Fiyatı: {secilenUrun.price} TL</h3>
      <p>Ürün Kodu: {secilenUrun.id}</p>
    </div>
  );
};

export default ProductDetails;