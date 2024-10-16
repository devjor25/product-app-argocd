import { Request, Response } from 'express';
import { Product } from '../models/product';

// Show all products
export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.render('index', { products });
};

// Show a form to create a new product
export const newProductForm = (req: Request, res: Response) => {
  res.render('new');
};

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, category } = req.body;
  const product = new Product({ name, price, description, category });
  await product.save();
  res.redirect('/products');
};

// Show a single product
export const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  res.render('show', { product });
};

// Show a form to edit a product
export const editProductForm = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  res.render('edit', { product });
};

// Update a product
export const updateProduct = async (req: Request, res: Response) => {
  const { name, price, description, category } = req.body;
  await Product.findByIdAndUpdate(req.params.id, { name, price, description, category });
  res.redirect('/products');
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/products');
};

