import productRepo from "../repository/product-repo.js"

class ProductService {
    async getProducts(req, res) {
        try {
            if (req.query.pid) {
                const product = await productRepo.getProduct(req.query.pid)
                if (product)
                    res.status(200).json(product)
                else
                    res.status(404).send(`No Product with id: ${req.query.pid} was founded`)
            } else {
                const products = await productRepo.getProducts()
                res.status(200).json(products)
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }
    async addProduct(req, res) {
        try {
            const product = req.body
            await productRepo.addProduct(product)
            res.status(201).send('Product added Successfully')
        } catch (error) {
            res.status(500).send(error)
        }
    }
    async updateProduct(req, res) {
        try {
            const product = req.body
            await productRepo.updateProduct(product)
            res.status(200).send('Product updated Successfully')
        } catch (error) {
            res.status(500).send(error)
        }
    }
    async deleteProduct(req, res) {
        try {
            const pid = req.params.pid
            await productRepo.deleteProduct(pid)
            res.status(200).send('Product deleted Successfully')
        } catch (error) {
            res.status(500).send(error)
        }
    }
    async deleteAllProducts(req, res) {
        try {
            await productRepo.deleteAllProducts()
            res.status(200).send('All Products have been deleted Successfully')
        } catch (error) {
            res.status(500).send(error)
        }
    }
    async getStatistics(req, res) {
        try {
            const statistics = await productRepo.getStatistics()
            res.status(200).json(statistics)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async getTopExpensiveProducts(req, res) {
        try {
            const topProducts = await productRepo.getTopExpensiveProducts(req.params.limit)
            res.status(200).json(topProducts)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export default new ProductService()
