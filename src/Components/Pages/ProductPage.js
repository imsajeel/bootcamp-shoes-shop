import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button } from "baseui/button";
import { StyledAction } from "baseui/card";

import SimpleImageSlider from "react-simple-image-slider";

import products from "../../database/products";

import { CartContext } from "../CartContext";

export default function ProductPage() {
  const [cart, setCart] = useContext(CartContext);

  const { id } = useParams();
  const result = products.filter((prod) => prod.id.includes(id));
  if (!result[0]) {
    return (
      <div>
        <h1>No Product Found</h1>
      </div>
    );
  }
  const { name, category, price, description, images } = result[0];

  const addToCart = () => {
    const shoes = { id, name, price, url: images };
    setCart([...cart, shoes]);
  };

  return (
    <div className="productPage">
      <div className="myFlex">
        <div className="flexAutoMargin">
          <div className="prodImages">
            <MySlider urls={images} />
          </div>
        </div>

        <div className="prodInfo">
          <h1>{name}</h1>
          <label>{category}</label>
          <h3 style={{ color: "red" }}>{price}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />

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
        </div>
      </div>
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h1>More Images</h1>

        {images.map((url, index) => (
          <img
            src={url}
            alt={url + index}
            width="500pxpx"
            className="bigImage"
          />
        ))}
      </div>
    </div>
  );
}

function MySlider({ urls }) {
  const images = urls.map((url) => ({ url }));

  return (
    <div>
      <SimpleImageSlider width={300} height={400} images={images} />
    </div>
  );
}
