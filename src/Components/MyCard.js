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
      <Card key={id} style={{ width: "250px", height: "420px" }}>
        <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
          <StyledBody style={{ textAlign: "center" }}>
            <div className="cardImageBox">
              <img src={url} alt={name} />
              <label>{price}</label>
            </div>
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
