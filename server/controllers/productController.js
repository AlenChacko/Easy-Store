import Product from "../models/productModel.js";
import handler from "express-async-handler";

export const getProducts = handler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

export const getProductbyId = handler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
export const createProduct = handler(async (req, res) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  })

  const createdProduct = product.save()
  res.status(201).json(createdProduct)
})
