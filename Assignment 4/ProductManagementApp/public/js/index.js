import productRepo from '../js/repository/product-repo.js'

window.onload = async () => {
    window.deleteProduct = deleteProduct
    window.addProduct = addProduct
    window.editProduct = editProduct
    window.readProduct = readProduct
    await loadProductsTable()
}

const appContainer = document.querySelector('#container');
const productsTable = document.querySelector('#products-table');
const productTableBody = document.querySelector('.products-table-body');
const createProductBtn = document.querySelector('#create-product-btn');
const deleteProductsBtn = document.querySelector('#delete-products-btn');
const addProductLink = document.querySelector('#add-product-link');

createProductBtn.addEventListener('click', loadProductForm)
deleteProductsBtn.addEventListener('click', deleteAllProducts)
addProductLink.addEventListener('click', loadProductForm)

let isEdit = false;
let productToBeUpdated = null;

async function loadProductsTable() {
    const products = await productRepo.getProducts()
    const productToHTMl = products.map(p => p.toHTMLRow()).join('')
    if (productToHTMl.length > 0)
        productTableBody.innerHTML = productToHTMl
    else
        productsTable.innerHTML = '<h1>No Products to show</h1>'
    console.log(products)
}

async function readProduct(pid) {
    const product = await productRepo.getProduct(pid)
    appContainer.innerHTML = product.toCard()
}

async function deleteProduct(pid) {
    const confirmed = confirm(`Are you sure you want to delete Product #${pid}?`);
    if (confirmed) {
        await productRepo.deleteProduct(pid)
        location.reload();
    }
}

async function deleteAllProducts() {
    const confirmed = confirm(`Are you sure you want to delete all the products?`);
    if (confirmed) {
        await productRepo.deleteAllProducts()
        location.reload();
    }
}

//will be used for both edit and add
async function loadProductForm() {
    const url = 'partial-views/product-form.html';
    const response = await fetch(url);
    appContainer.innerHTML =  await response.text();

    document.querySelector('#add-product-link').style.backgroundColor = '#352323';
    document.querySelector('.product_form').addEventListener('submit', addProduct);
    document.querySelector('#back-btn').addEventListener('click', () => {
        location.reload();
    })

}

//if edit we need to populate the data into the form
async function editProduct(pid) {
    isEdit = true;
    productToBeUpdated = await productRepo.getProduct(pid);
    await loadProductForm();
    document.querySelector('#update-title').innerText = 'Update Product';
    document.querySelector('.submit-btn').value = 'Update';
    document.querySelector('#name').value = productToBeUpdated.name;
    document.querySelector('#description').value = productToBeUpdated.description;
    document.querySelector('#price').value = productToBeUpdated.price;

}
async function addProduct(event) {
    event.preventDefault();
    const form = event.target
    if (!form.checkValidity()) return;

    const newProduct = await formToObject(form);

    if (isEdit) {
        productToBeUpdated = {...productToBeUpdated, ...newProduct}
        await productRepo.updateProduct(productToBeUpdated)
    } else {
        newProduct.pid = Date.now();
        const response = await productRepo.addProduct(newProduct)
        form.reset();
    }
    await location.reload();
}


function formToObject(formElement) {
    const formData = new FormData(formElement);
    const data = {};
    for (const [key, value] of formData) {
        data[key] = value;
    }
    return data;
}

