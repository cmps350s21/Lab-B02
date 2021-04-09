import fs from 'fs-extra'
import {fileURLToPath} from 'url';

const url = new URL('../data/products.json', import.meta.url);
const filePath = fileURLToPath(url);

class ProductRepo {
    async getProducts() {
        return await fs.readJson(filePath)
    }

    async getProduct(pid) {
        const products = await fs.readJson(filePath)
        return products.find(pr => pr.pid == pid)
    }

    async addProduct(newProduct) {
        const products = await fs.readJson(filePath)
        products.push(newProduct)
        return await fs.writeJson(filePath, products)
    }

    async updateProduct(updatedProduct) {
        const products = await fs.readJson(filePath)
        const index = products.findIndex(product => product.pid == updatedProduct.pid)
        if (index >= 0) {
            console.log(index)
            products[index] = updatedProduct
            return await fs.writeJson(filePath, products)
        }
        return null
    }

    async deleteProduct(pid) {
        const products = await fs.readJson(filePath)
        const filteredProducts = products.filter(pr => pr.pid != pid)
        return await fs.writeJson(filePath, filteredProducts)
    }

    async deleteAllProducts() {
        return await fs.writeJson(filePath, [])
    }

    async getStatistics() {
        const products = await fs.readJson(filePath)
        const totalProduct = products.length
        const totalPrice = products.reduce((num, sum) => +num + +sum.price, 0)
        return {
            "totalNumberOfProducts": totalProduct,
            "totalPrice": totalPrice
        }
    }

    async getTopExpensiveProducts(limit) {
        const products = await fs.readJson(filePath)
        const topThree = products.sort((a, b) => b.price - a.price).splice(0, limit)
        return topThree
    }
}

export default new ProductRepo()
