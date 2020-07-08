import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const [cart] = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, crr) => acc + Number(crr.price.substr(1)),
    0
  );

  return (
    <div>
      <span>items in cart: {cart.length}</span>
      <br />
      <span>total price: {"$" + totalPrice}</span>
    </div>
  );
}
