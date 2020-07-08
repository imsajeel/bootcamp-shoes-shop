import React, { useContext } from "react";
import { CartContext } from "../CartContext";

import CartProduct from "./CartProduct";

export default function CartPage() {
  const [cart] = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <h3 style={{ textAlign: "right" }}>Items in cart </h3>
      <table className="tableCart">
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
        {cart.map((product, index) => (
          <CartProduct data={product} index={index} />
        ))}
      </table>

      <h3 style={{ textAlign: "right" }}>Total Price:</h3>
    </div>
  );
}
