const searchBar = document.querySelector('#search-bar')
const universityDD = document.querySelector('#universities')
const searchBtn = document.querySelector('#search-btn')
const website = document.querySelector('#website')

let fakeData = ['QU' , 'HBKU' , 'Harvard']

searchBtn.onclick = ()=>{
    fakeData.push(searchBar.value)
    console.log(fakeData)
}

