import React, { useContext } from "react";
import { StyledAction } from "baseui/card";
import { Button } from "baseui/button";

import { CartContext } from "../CartContext";

import CartProduct from "./CartProduct";

export default function CartPage() {
  const [cart] = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, crr) => acc + Number(crr.price.substr(1)),
    0
  );

  return (
    <div>
      <h1>Cart</h1>
      <h3 style={{ textAlign: "right" }}>
        Items in cart: {cart.length} &emsp;
      </h3>
      <table className="tableCart">
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
        {cart.length === 0 ? (
          <tr>
            <td>-</td>
            <td>-</td>
            <b>
              <br />
              - cart is empty -
              <br />
              <br />
            </b>
            <td>-</td>
            <td>-</td>
          </tr>
        ) : (
          cart.map((product, index) => (
            <CartProduct data={product} index={index} />
          ))
        )}
      </table>

      <h3 style={{ textAlign: "right" }}>
        Total Price: {"$" + totalPrice} &emsp;
      </h3>

      <br />
      <br />
      <StyledAction style={{ display: "flex" }}>
        <div style={{ flex: "1" }}></div>
        <Button
          overrides={{
            BaseButton: { style: { width: "150px", marginRight: "20px" } },
          }}
          onClick={() =>
            alert(
              "Sorry! Somthing went wrong. You can't checkout at the movement."
            )
          }
        >
          {"Checkout  >"}
        </Button>
      </StyledAction>
    </div>
  );
}
