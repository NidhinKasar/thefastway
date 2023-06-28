import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useEffect } from "react";
import Dropdown from "./dropdown";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header({ onHover, cartNumber }) {
  const [count, setCount] = useState(0);

  const selectorValue = useSelector((state) => {
    return state.market.payload;
  });
  console.log("selectorValue", selectorValue);

  useEffect(() => {
    const cartCount = localStorage.getItem("cartItem") || 0;

    if (cartCount || cartCount === 0) {
      setCount(cartCount);
    }
  }, []);

  return (
    <div className="myNavBar">
      <div className="brandName">
        <Link className="brandLink" to="/home">The Fast Way</Link>
      </div>
      <div className="homecart">
        <Link className="homeMenu" to="/home">Home</Link>
        <Link className="cartSymbol" to="/cart">
          Cart <Icon className="cartIcon" icon={"mdi:cart"} /> {selectorValue}
        </Link>
      </div>
    </div>
  );
}
