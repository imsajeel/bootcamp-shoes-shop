import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const [cart] = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, crr) => acc + Number(crr.price.substr(1)),
    0
  );

  if (cart.length) {
    return (
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          textAlign: "center",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <span>items in cart: {cart.length}</span>
        &emsp;
        <span>total price: {"$" + totalPrice}</span>
      </div>
    );
  } else {
    return <div></div>;
  }
}
