import { Router } from 'express';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();


// List categories
router.get('/categories', listCategories );

// Create categoty
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', (req, res) => {
    res.send('ok');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
    res.send('ok');
});

// List orders
router.get('/orders', (req, res) => {
    res.send('ok');
});

// Create order
router.post('/orders', (req, res) => {
    res.send('ok');
});

// Chnge order status
router.patch('/orders/:orderId', (req, res) => {
    res.send('ok');
});

//  Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
    res.send('ok');
});