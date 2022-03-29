import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { AboutUs } from "./pages/AboutUs";
import Mockman from "mockman-js";
import { Wishlist } from "./pages/Wishlist";
import { Cart } from "./pages/Cart";
import { Login } from "./components/Auth/Login";
import { Signup } from "./components/Auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
           position="bottom-left"
           autoClose={3000}
           hideProgressBar
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss={false}
           draggable={false}
           pauseOnHover
          />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
