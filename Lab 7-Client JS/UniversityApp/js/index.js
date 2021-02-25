const searchBar = document.querySelector('#search-bar')
const universityDD = document.querySelector('#universities')
const searchBtn = document.querySelector('#search-btn')
const website = document.querySelector('#website')
const logo = document.querySelector('#logo')

const baseURL = 'http://universities.hipolabs.com/search?country='

async function getUniversities(url){
    const data = await fetch(url)  //get you all the data [45] ->Promise
    const universities = await data.json()
    loadUniversityDD(universities)
}

searchBtn.onclick = () => {
    const url = `${baseURL}${searchBar.value}`
    getUniversities(url)
}

universityDD.onchange = ()=>{
    website.src = universityDD.value
}

function uniToHTML(uni) {
    return `<option value="${uni.web_pages[0]}" selected> ${uni.name}</option>`
}

function loadUniversityDD(universities) {
    const universitiesHTML = universities.map(uni => uniToHTML(uni)).join('')
    universityDD.innerHTML = universitiesHTML
}

