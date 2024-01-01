import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data.products);
      } catch (error) {
        console.log("Error in fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products?.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
