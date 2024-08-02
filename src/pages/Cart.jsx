import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/Cartslice";

const Cart = () => {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handelRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <div className="flex flex-wrap justify-evenly p-4">
        {product.map((data) => (
          <div
            key={data.id}
            className="bg-white rounded-lg shadow-lg p-4 m-4 w-64"
          >
            <ul>
              <li className="mb-4">
                <span className="font-bold">Category:</span> {data.category}
              </li>
              <li className="mb-4">
                <img src={data.image} alt="Product" className="w-full h-48 " />
              </li>
              <li className="text-lg font-semibold">Price: ${data.price}</li>
              <button
                onClick={() => handelRemove(data.id)}
                className="bg-neutral-700 text-zinc-50 p-2 rounded-3xl text-sm m-2"
              >
                Remove
              </button>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
