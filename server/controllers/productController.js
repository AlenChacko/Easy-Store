import { products } from "../data/products.js";
import handler from "express-async-handler";
import Product from '../models/productModel.js'



export const getProducts = handler(async (req, res) => {
  if (products) {
    return res.status(200).json({ message: "All Products", products });
  } else {
    res.status(404);
    throw new Error("Products not found");
  }
});

export const getProductById = handler(async (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p.id == id);
  if (product) {
    return res.status(200).json({ message: "Product by id", product });
  } else {
    res.status(404);
    throw new Error("Products not found");
  }
});
