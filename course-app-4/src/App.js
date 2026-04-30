import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, setDrawer } from "./redux/slices/basketSlice";
import { useEffect } from "react";

//ANA ROOT COMPONENTİ HANGİ SIRA İLE ÇALIŞTIRMAK İÇİN
function App() {
  const { products, drawer ,totalAmount} = useSelector((store) => store.basket);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(calculateBasket()) //sayfa ilk yüklendiğinde fonk çek

  },[])

  return (
    <div>
      <PageContainer>
        {" "}
        {/* sağdan ve soldan düzgün mesafe bırakıyor*/}
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          className="drawer"
          sx={{ padding: "20px" }}
          onClose={() => dispatch(setDrawer())}
          anchor="right"
          open={drawer}
        >
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="flex-row" style={{ padding: "20px" }}>
                    <img
                      style={{ marginRight: "5px" }}
                      src={product.image} 
                      alt="Ürün detay görseli"
                      width={50}
                      height={50}
                    />
                    <p style={{ width: "320px", marginRight: "5px" }}>
                      {product.title}({product.count})
                    </p>
                    <p style={{ fontWeight: "bold", marginRight: "10px" }}>
                      {product.price} ₺
                    </p>
                    <button
                      style={{
                        padding: "5px",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "rgb(185,76,76)",
                        color: "#fff",
                        width: "60px",
                      }}
                    >
                      sil
                    </button>
                  </div>
                  
                </div>

              );
            })}
            <div style={{textAlign:'center'}}>Toplam tutar:{totalAmount} ₺</div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
