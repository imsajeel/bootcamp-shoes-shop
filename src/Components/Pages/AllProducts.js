import React from "react";
import { Outlet } from "react-router-dom";
import CardList from "../CardList";

import ProductPage from "./ProductPage";

export default function AllProducts() {
  return (
    <div>
      <h1>Products Page</h1>
      <Outlet />
    </div>
  );
}

export function ProductIndex() {
  return (
    <div>
      <CardList />
    </div>
  );
}

export function Product() {
  return <ProductPage />;
}
