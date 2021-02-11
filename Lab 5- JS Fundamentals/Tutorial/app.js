// // // variables
// let y = 20
// const z = 50.0
//
// let name = 'Abdulahi'
// let numbers = [1, 2, 3, 4, 5, 6]
// let student = {
//     name: 'Abdulahi',
//     age: 100,
//     gender: 'Male'
// }
// console.log(typeof numbers)
//
// y = y + 10;
// // console.log(x,y,z)
//
// //the as c++ and java +,- , / . %
// //if else , do , for , do-while , switch
// for (let i = 0; i < ; i++) {
//
// }

//Functions

// function display() {
//     console.log('Hello from the function')
// }
//
// display()

// function add(x , y){
//     return x + y
// }
// function mult(x , y){
//     return x * y
// }
//
// let x = 10;
// let y = 20;
//
// const result = add(x,y)
// const result2 = mult(x,y)
//
// console.log(x, '+' , y , '=' , result)
// console.log(x, '*' , y , '=' , result2)

//Passing function (first class citizens)

// let x = 10;
//
// let add = function (x, y) {
//     return x + y
// }
// let mult = function(x , y){
//     return x * y
// }
//
// function multiplyAndAdd(x, y , add1 , mult1){
//     let m = add1(x , y);
//     let a = mult1(x , y);
//     console.log(m , a)
// }
//
// multiplyAndAdd(2,3,add ,mult)


// let display1 = function(result){
//     console.log('The result is', result)
// }
// let display2 = function(result , x , y){
//     console.log(x , y , result)
// }
// let display3 = function(result){
//     console.log('The calculated result is ' , result)
// }
//
// function addAndDisplay(x , y, callback){
//     const result = x + y;
//     callback(result , x , y)
// }
//
// addAndDisplay(4,5, display1)
// addAndDisplay(4,5, display2)
// addAndDisplay(4,5, display3)

//
// let display1 = function(result){
//     console.log('The result is', result)
// }
// let display2 = function(result , x , y){
//     console.log(x , y , result)
// }
//

// function addAndDisplay(x, y, callback) {
//     const result = x + y;
//     callback(result)
// }
//
// addAndDisplay(10, 20, result => console.log('The calculated result is ', result))
//
// function add(x, y) {
//     return x + y
// }
//
// function square(x) {
//     return x ** 2
// }
//


// //arrow functions
// function display(result) {
//     console.log('The calculated result is ', result)
// }
//
// //reduce it
// result => console.log('The calculated result is ', result)


// const mixed = [1, 2, 3, 4, 'text', 'other tex']
// const cmixed = [1, 2, 3, 4, 'text', 'other tex', [1, 2, 3, 4, 5]]
//
// // function display(x){
// //     console.log(x)
// // }
// // numbers.forEach(display)
//
// numbers.forEach(x => console.log(x ** 2))
//
// //sort

const numbers = [11, 22, 13, 41, 15, 6]
numbers.forEach(function (x){
    console.log(x)
})
numbers.forEach( x=> console.log(x))
numbers.sort()  // -1 1 0
console.log('sorted' , numbers)

const mappedArray = numbers.map(x => x ** 2)
console.log('squared ' , mappedArray)

const max = mappedArray.reduce((acc , x)=>acc > x ? acc : x)
console.log('max ' , max)


let names =  [ 'Abdulahi', 'Ahmed', 'Omar', 'ahmed' ]

names.sort((x,y)=> x.localeCompare(y))  //-1 : 0 or 1
console.log(names)










