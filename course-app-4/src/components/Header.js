import React, { useState } from "react";
import myLogo from "../images/logo.png";
import "../css/Header.css";
import { SlBasketLoaded } from "react-icons/sl";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import {useDispatch, useSelector} from "react-redux"
import { setDrawer } from "../redux/slices/basketSlice";


//NAVİGATİON BAR
const Header = () => {
  const [theme, setTheme] = useState(false);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const {products}=useSelector((store)=>store.basket); //sepetteki sayıyı değiştirme {products.length}
  const changeTheme = () => {
  const root = document.getElementById("root");

    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row" onClick={() => navigate("/")}>
        <img className="logo" src={myLogo} alt="company Logo" />
        <p className="logo-text">PETEK A.Ş</p>
      </div>

      <div className="flex-row">
        <input className="search-input" type="text" placeholder="ara" />
        <div>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}
          <Badge onClick={()=>dispatch(setDrawer())}  badgeContent={products.length} color="error">
            <SlBasketLoaded style={{ marginRight: "8px" }} />
          </Badge>

          
         

        </div>
      </div>
    </div>
  );
};

export default Header;
