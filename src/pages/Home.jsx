import React, { useEffect, useState } from "react";
import { add } from "../Redux/Cartslice";
import { useDispatch } from "react-redux";
import Loader from "./Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handelAdd = (data) => {
    dispatch(add(data));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap justify-evenly p-4">
            {products.map((data) => (
              <div
                key={data.id}
                className="bg-white rounded-lg shadow-lg p-4 m-4 w-64"
              >
                <ul>
                  <li className="mb-4">
                    <span className="font-bold">Category:</span> {data.category}
                  </li>
                  <li className="mb-4">
                    <img
                      src={data.image}
                      alt="Product"
                      className="w-full h-48 "
                    />
                  </li>
                  <li className="text-lg font-semibold">
                    Price: ${data.price}
                  </li>
                  <button
                    onClick={() => handelAdd(data)}
                    className="bg-neutral-700  text-zinc-50 p-2 rounded-3xl  text-sm m-2"
                  >
                    add to cart
                  </button>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default Home;
