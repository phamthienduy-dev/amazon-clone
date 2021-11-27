import "./App.css";

import Header from "../src/components/Header/Header";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
