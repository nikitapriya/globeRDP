import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Footer from "./components/Footer";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />  
       <ScrollToTop />         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms-and-conditions" element={<Terms />} />
              <Route path="/cancellation-Refund-policy" element={<Refund />} />
              <Route path="/FAQs" element={<FAQ />} />
          </Routes>
      <Footer />
    </>
  );
}

export default App;
