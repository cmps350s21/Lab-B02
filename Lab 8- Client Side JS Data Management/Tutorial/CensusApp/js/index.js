const countryInputBox = document.querySelector("#country")
const populationInputBox = document.querySelector("#population")
const formElement = document.querySelector("#form")

formElement.addEventListener('submit', addCensus)

//database
const db = new Localbase('b02.census.db')
async function addCensus(event) {
    event.preventDefault() //do not reload the page

    const newCensus = {
        country: countryInputBox.value,
        population: populationInputBox.value
    }

    const message = await db.collection('census').add(newCensus)
    console.log(message)
}



