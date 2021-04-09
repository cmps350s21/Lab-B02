import express from 'express'
import productService from "./service/product-service.js";

const router = express.Router()

router.route('/products')
    .get(productService.getProducts)
    .post(productService.addProduct)
    .put(productService.updateProduct)
    .delete(productService.deleteAllProducts)

router.route('/products/:pid')
    .delete(productService.deleteProduct)

router.route('/products/stats')
    .get(productService.getStatistics)

router.route('/products/top/:limit')
    .get(productService.getTopExpensiveProducts)

export default router
