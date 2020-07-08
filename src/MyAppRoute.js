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
import Cart from "./Components/Cart";
import CartPage from "./Components/Pages/CartPage";

export default function MyAppRoute() {
  return (
    <Router>
      <TopNav />
      <Cart />
      <div className="pageDiv">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<AllProducts />}>
            <Route path="/" element={<ProductIndex />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
