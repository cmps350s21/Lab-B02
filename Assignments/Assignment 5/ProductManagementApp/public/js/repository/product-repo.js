import Product from "../model/product.js";

class ProductRepo {
    async getProducts() {
        let url = `/api/products`
        const response = await fetch(url)
        const products = await response.json()
        for (const product of products) {
            Object.setPrototypeOf(product, Product.prototype)
        }
        return products
    }

    async getProduct(pid) {
        let url = `/api/products?pid=${pid}`
        const response = await fetch(url)
        const product = await response.json()
        Object.setPrototypeOf(product, Product.prototype)
        return product
    }

    async addProduct(product) {
        let url = `/api/products`
        const configs = {method: 'POST', headers: {'Content-type': 'application/json'}, body: JSON.stringify(product)}
        return await fetch(url, configs)
    }

    async updateProduct(updatedProduct) {
        let url = `/api/products`
        const configs = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(updatedProduct)
        }
        return await fetch(url, configs)
    }

    async deleteProduct(pid) {
        let url = `/api/products/${pid}`
        return await fetch(url, {method: 'DELETE'})
    }

    async deleteAllProducts() {
        let url = `/api/products`
        return await fetch(url, {method: 'DELETE'})
    }
}

export default new ProductRepo()
