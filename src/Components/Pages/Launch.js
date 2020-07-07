import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import products from "../../database/products";

export default function Launch() {
  return (
    <div>
      <h1>Launch</h1>
      <Outlet />
    </div>
  );
}

export function LaunchIndex() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/launch/${product.id}`}>
            <h1>{product.name}</h1>
            <img key={product.id} src={product.images[0]} alt={product.name} />
            <label>{product.price}</label>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function LaunchShoe() {
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
  return (
    <div>
      <h1>{name}</h1>
      <label>{category}</label>
      <h3 style={{ color: "red" }}>{price}</h3>
      <img src={images[0]} alt={name} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <hr />
      <br />
      <br />
      <h1>More Images</h1>
      {images.map((url, index) => (
        <img src={url} alt={name + index} key={index} />
      ))}
    </div>
  );
}