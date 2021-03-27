
const pizzaCards = document.querySelector('#pizza-cards')
const mainContent = document.querySelector('#main-content')
const addBtn = document.querySelector('#add-pizza-btn')


//Utilities
function pizzaToHTMLCard(pizza) {
    return `<li class="cards__item">
        <div class="card">
            <img class="card__image" src="images/pizza.jpeg" alt="">
            <div class="card__content">
                <div class="card__title"></div>
                <div id="pizza-topping" class="card__title">Toppings</div>
                <ul id="book-desc" class="card__text">
                   
                </ul>
                <div class="btn--options">
                    <button class="btn btn--update")>Update</button>
                    <button class="btn btn--delete">Delete</button>
                </div>
            </div>
        </div>
    </li>`
}
