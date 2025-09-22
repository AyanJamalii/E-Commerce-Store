import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer";
import Home from "./Pages/Home.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Junior from "./Pages/Junior.jsx";
import { CartProvider } from "./Context/CartContext.js";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Checkout from "./Pages/Checkout.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      easing: "ease-out-cubic", 
      once: true,    // animate only once per scroll
    });
  }, []);

  return (
    <CartProvider>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/junior" element={<Junior />} />
        <Route path="/checkout" element={<Checkout />} />   
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
