import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Footer from "./Comoponents/Footer";
import Sidebar from "./Comoponents/Sidebar";
import Header from "./Comoponents/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </>
  );
}

export default App;
