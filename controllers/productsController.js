import Product from "../models/product.model.js";

// @desc Get all products
// @route GET /api/products
// @access Public
// @returns {Array} products - List of products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// @desc Get a product by id
// @route GET /api/products/:id
// @access Public
// @returns {Object} product - The product with the given id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// @desc Create a new product
// @route POST /api/products
// @access Public
// @returns {Object} product - The newly created product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// @desc Update a product
// @route PUT /api/products/:id
// @access Public
// @returns {Object} product - The updated product
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Public
// @returns {Object} product - The deleted product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
