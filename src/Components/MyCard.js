import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";

import { CartContext } from "./CartContext";

const MyCard = ({ id, name, price, url }) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const shoes = { id, name, price, url };
    setCart([...cart, shoes]);
  };

  return (
    <div className="myCard">
      <Card key={id} style={{ width: "250px", height: "400px" }}>
        <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
          <StyledBody style={{ textAlign: "center" }}>
            <img
              src={url}
              alt="productname"
              style={{ border: "1px solid lightgrey", borderRadius: "10px" }}
            />
            <br />
            <b>{name}</b>
          </StyledBody>
        </Link>
        <StyledAction style={{ display: "flex" }}>
          <Button
            overrides={{
              BaseButton: { style: { width: "100%" } },
            }}
            onClick={addToCart}
          >
            Add to Cart
          </Button>
        </StyledAction>
      </Card>
    </div>
  );
};

export default MyCard;
