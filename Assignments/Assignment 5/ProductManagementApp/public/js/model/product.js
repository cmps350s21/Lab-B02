export default class Product {
    constructor(id, name, description, price) {
        this.pid = id
        this.name = name
        this.description = description
        this.price = price
    }

    toHTMLRow() {
        return ` <tr>
                <td>${this.name}</td>
                <td>${this.description}</td>
                <td>${this.price}</td>
                <td class="actions">
                    <button class="btn small-btn read" onclick="readProduct(${this.pid})">Read</button> 
                    <button class="btn small-btn" onclick="editProduct(${this.pid})">Edit</button> 
                    <button class="btn small-btn red-btn" onclick="deleteProduct(${this.pid})">Delete</button>
                </td>
         </tr>`
    }

    toCard() {
        return `
            <div class="card">
                <ul><h1>Product Information</h1></ul>
                <h2>Product Id : ${this.pid}</h2>
                <h2>Name : ${this.name}</h2>
                <h2>Description : ${this.description}</h2>
                <h2>Price : ${this.price}</h2>
                <button class="btn small-btn" onclick="editProduct(${this.pid})">Edit</button> 
                <button class="btn small-btn red-btn" onclick="deleteProduct(${this.pid})">Delete</button>
            </div>   
        `
    }
}
