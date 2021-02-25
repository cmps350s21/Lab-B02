const searchBar = document.querySelector('#search-bar')
const universityDD = document.querySelector('#universities')
const searchBtn = document.querySelector('#search-btn')
const website = document.querySelector('#website')
const logo = document.querySelector('#logo')

const baseURL = 'http://universities.hipolabs.com/search?country='

//Step 1 - listen to user search button click
searchBtn.onclick = () => {
    const url = `${baseURL}${searchBar.value}`
    getUniversities(url)
}

//Step 2. download university data from the server
async function getUniversities(url){
    const data = await fetch(url)  //get you all the data [45] ->Promise
    const universities = await data.json()  //parsing
    //to inject the data
    loadUniversityDD(universities)
}

//Step 3 -> load all the universities into the dropdown
function loadUniversityDD(universities) {
    const universitiesHTML = universities.map(uni => uniToHTMLOptions(uni)).join('')
    universityDD.innerHTML = universitiesHTML
}

//Step 3.X -> Change univesity into an option
function uniToHTMLOptions(uni) {
    return `<option value="${uni.web_pages[0]}" selected> ${uni.name}</option>`
}

//Step 4 load the website
universityDD.onchange = ()=>{
    website.src = universityDD.value
}




