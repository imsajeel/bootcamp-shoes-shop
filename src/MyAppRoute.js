import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import AllProducts, {
  ProductIndex,
  Product,
} from "./Components/Pages/AllProducts";
import NotFound from "./Components/Pages/NotFound";

export default function MyAppRoute() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<AllProducts />}>
          <Route path="/" element={<ProductIndex />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
