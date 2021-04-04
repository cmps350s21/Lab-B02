import Product from "../model/product.js";
//Todo : replace the database with calls to the API

class ProductRepo {
    constructor() {
        this.db = new Localbase('products.db');
    }

    async addProduct(product){
        return await this.db.collection('products').add(product);
    }
    async  updateProduct(updatedProduct) {
        console.log(`this is from here` , updatedProduct)
        return await this.db.collection('products').doc({pid: updatedProduct.pid}).update(updatedProduct);
    }

    async  deleteProduct(pid) {
        return await this.db.collection('products').doc({pid}).delete();
    }

    async  getProducts() {
        const products = await this.db.collection('products').get()
        for (const product of products) {
            Object.setPrototypeOf(product , Product.prototype)
        }
        return products
    }

    async  getProduct(pid) {
        const product = await this.db.collection('products').doc({pid}).get()
        Object.setPrototypeOf(product , Product.prototype)
        return product
    }

    async  deleteAllProducts() {
        return await this.db.collection('products').delete()
    }
}

export default new ProductRepo()