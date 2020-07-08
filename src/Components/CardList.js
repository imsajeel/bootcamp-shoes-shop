import React from "react";
import MyCard from "./MyCard";
import products from "../database/products";
import { Spinner } from "baseui/spinner";

export default function CardList() {
  //   const products = [];
  if (!products[0]) {
    return (
      <div className="centeredForced">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((prod) => (
          <MyCard
            key={prod.id}
            id={prod.id}
            name={prod.name}
            price={prod.price}
            url={prod.images[0]}
          />
        ))}
      </div>
    );
  }
}
