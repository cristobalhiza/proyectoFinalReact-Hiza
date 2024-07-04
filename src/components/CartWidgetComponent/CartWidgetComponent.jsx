import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
  const CustomStyles = {
    color: "white",
    fontSize: "1.4rem",
  };
  return (
    <div>
      <FontAwesomeIcon icon={faCartArrowDown} style={CustomStyles} />
      <span style={{ ...CustomStyles, marginLeft: "0.6rem" }}>0</span>
    </div>
  );
};

export default CartWidgetComponent;
