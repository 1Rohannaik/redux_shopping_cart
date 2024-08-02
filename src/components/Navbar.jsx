import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const product = useSelector((rohan) => rohan.cart);
  return (
    <div className="flex justify-between bg-neutral-700 p-4  text-zinc-50 sticky  top-0">
      <NavLink to="/">REDUX</NavLink>
      <NavLink to="/cart">
        Cart:
        <span className="bg-red-600 p-1 rounded-2xl">{product.length}</span>
          </NavLink>
    </div>
  );
};

export default Navbar;
