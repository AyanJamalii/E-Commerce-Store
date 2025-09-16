import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer";
import Home from "./Pages/Home.jsx";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Junior from "./Pages/Junior.jsx";
import { CartProvider } from "./Context/CartContext.js";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/junior" element={<Junior />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
