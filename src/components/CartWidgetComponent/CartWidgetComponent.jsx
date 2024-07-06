import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import CartComponent from "../CartComponent/CartComponent";
import { useCart } from "../../context/CartContext";

const CartWidgetComponent = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

  const CustomStyles = {
    color: "white",
    fontSize: "1.4rem",
  };

  return (
    <div>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        <FontAwesomeIcon icon={faCartArrowDown} style={CustomStyles} />
        <span style={{ ...CustomStyles, marginLeft: "0.6rem" }}>{totalItems}</span>
      </div>
      <CartComponent open={open} setOpen={setOpen} />
    </div>
  );
};

export default CartWidgetComponent;
