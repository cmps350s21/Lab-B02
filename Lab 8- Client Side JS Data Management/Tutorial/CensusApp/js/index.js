const countryInputBox = document.querySelector("#country")
const populationInputBox = document.querySelector("#population")
const formElement = document.querySelector("#form")
const countriesTable = document.querySelector("#countries")

formElement.addEventListener('submit', addCensus)

//database //indexedDB
//Localbase

const db = new Localbase('b02.census.db')
showCensusData()

async function deleteCensus(cid) {
    await db.collection('census').doc({id: cid}).delete()
    await showCensusData()
}

function censusToHTMLTRow(c) {
    return `
         <tr>
            <td>${c.country}</td>
            <td>${c.population}</td>
            <td>
                <i class="fa fa-edit">Edit</i>
                <i class="fa fa-trash" onclick="deleteCensus('${c.id}')">Delete</i>
            </td>
        </tr>
    `
}

async function showCensusData(noOfRows) {
    let census;
    if(noOfRows)
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

async function addCensus(event) {
    event.preventDefault() //do not reload the page

    const newCensus = {
        id: Date.now().toString(),
        country: countryInputBox.value,
        population: populationInputBox.value
    }
    const message = await db.collection('census').add(newCensus)
    await showCensusData()
    formElement.reset()
}



