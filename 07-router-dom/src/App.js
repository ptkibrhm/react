import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";  //herhangi bir eşleşme olmazsa
import EmployeeAbout from "./pages/EmployeeAbout";
import CompanyAbout from "./pages/CompanyAbout";
import Header from "./components/Header";
import "./App.css";
 
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="employee" element={<EmployeeAbout />}/>
          <Route path="company" element={<CompanyAbout />}/>
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />   
      </Routes> 
    </div>
  );
}

export default App;
