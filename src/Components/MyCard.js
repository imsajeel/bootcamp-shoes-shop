import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";

const MyCard = ({ id, name, url }) => {
  return (
    <Card
      key={id}
      style={{
        width: "250px",
        height: "400px",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <StyledBody style={{ textAlign: "center" }}>
        <img src={url} alt="productname" style={{ borderRadius: "10px" }} />
        <br />
        <b>{name}</b>
      </StyledBody>
      <StyledAction style={{ display: "flex" }}>
        <Button
          overrides={{
            BaseButton: { style: { width: "100%" } },
          }}
        >
          + Wishlist
        </Button>
        <Button
          overrides={{
            BaseButton: { style: { width: "100%" } },
          }}
        >
          + Cart
        </Button>
      </StyledAction>
    </Card>
  );
};

export default MyCard;
