import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { AboutUs } from "./pages/AboutUs";
import Mockman from "mockman-js";
import { Wishlist } from "./pages/Wishlist";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
