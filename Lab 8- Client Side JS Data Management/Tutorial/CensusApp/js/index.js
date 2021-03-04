
const formElement = document.querySelector("#form")
const countriesTable = document.querySelector("#countries")

formElement.addEventListener('submit', addCensus)

//database //indexedDB
//Localbase

const db = new Localbase('b02.census.db')
showCensusData()
let censusToEditId;
let isEdit = false;

function form2Object(formElement) {
    const formData = new FormData(formElement) //key value
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }
    console.log(data)
    return data
}

async function addCensus(event) {
    event.preventDefault() //do not reload the page

    const newCensus = form2Object(formElement)

    if (isEdit) { //editing
        await db.collection('census').doc({id: censusToEditId}).update(newCensus)
    } else { //adding
        newCensus.id = Date.now().toString()
        await db.collection('census').add(newCensus)
    }

    await showCensusData()
    formElement.reset()
}

async function deleteCensus(cid) {
    await db.collection('census').doc({id: cid}).delete()
    await showCensusData()
}

async function editCensus(cid) {
    const censusToEdit = await db.collection('census').doc({id: cid}).get()
    const countryInputBox = document.querySelector("#country")
    const populationInputBox = document.querySelector("#population")
    countryInputBox.value = censusToEdit.country
    populationInputBox.value = censusToEdit.population
    censusToEditId = censusToEdit.id
    isEdit = true

}

function censusToHTMLTRow(c) {
    return `
         <tr>
            <td>${c.country}</td>
            <td>${c.population}</td>
            <td>
                <i class="fa fa-edit"  onclick="editCensus('${c.id}')">Edit</i>
                <i class="fa fa-trash" onclick="deleteCensus('${c.id}')">Delete</i>
            </td>
        </tr>
    `
}

async function showCensusData(noOfRows) {
    let census;
    if (noOfRows)
        census = await db.collection('census')
            .limit(parseInt(noOfRows))
            .orderBy("country", "asc")
            .get()
    else
        census = await db.collection('census')
            .orderBy("country", "asc").get()

    //we will convert this collection data into html table
    if (census.length > 0) {
        const censusHTMLRows = census.map(c => censusToHTMLTRow(c))
        countriesTable.innerHTML = `
        <thead> 
            <tr>
                <th>Country</th>
                <th>Population</th>
                <th>Action</th>
            </tr>
        </thead>
        ${censusHTMLRows.join('')}
    `
    }
}




