import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header">
      <Link className="link" to="/">Anasayfa</Link>
      <Link className="link"to="/about">Hakkımızda</Link>
      <Link className="link"to="/contact">İletişim</Link>
      <Link className="link"to="/products">Ürünlerimiz</Link>
    </div>
  );
};
 
export default Header;
