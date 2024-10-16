import { Router } from 'express';
import {
  getAllProducts,
  newProductForm,
  createProduct,
  getProductById,
  editProductForm,
  updateProduct,
  deleteProduct
} from '../controllers/productController';

const router = Router();

// Product routes
router.get('/', getAllProducts);             // Get all products
router.get('/new', newProductForm);          // Show form to create new product
router.post('/', createProduct);             // Create new product
router.get('/:id', getProductById);          // Get product by ID
router.get('/:id/edit', editProductForm);    // Show form to edit product
router.put('/:id', updateProduct);           // Update product
router.delete('/:id', deleteProduct);        // Delete product

export default router;
