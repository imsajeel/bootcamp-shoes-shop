import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

export default ({ data, index }) => {
  const [cart, setCart] = useContext(CartContext);
  const removeProd = (i) => {
    setCart(cart.filter((item) => item.id !== i));
  };

  if (data.name) {
    const { id, name, price, url } = data;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td width="100px">
          <img src={url} alt={name} width="100px" height="100px" />
        </td>
        <td>
          <b>
            <Link to={`/products/${id}`}>{name}</Link>
          </b>
        </td>
        <td>{price}</td>
        <td width="20px">
          <button className="removeBt" onClick={() => removeProd(id)}>
            x
          </button>
        </td>
      </tr>
    );
  } else {
    return <b>Empty Cart</b>;
  }
};
