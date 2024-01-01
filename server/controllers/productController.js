import { products } from "../data/products.js";
import handler from "express-async-handler";

export const getProducts = handler(async (req, res) => {
  try {
    return res.status(200).json({ message: "All Products", products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export const getProductById = handler(async (req, res) => {
  try {
    const id = req.params.id;
    const product = products.find(p=>p.id==id)
    console.log(product)
    return res.status(200).json({ message: "Product by id", product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
