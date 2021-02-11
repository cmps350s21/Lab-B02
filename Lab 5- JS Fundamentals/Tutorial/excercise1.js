//Q1.
for (let i = 0; i < 100; i++) if (i % 2) console.log(i)
let i = 0;
while (i < 100) {
    if (i % 2) console.log(i)
    i++
}

let names = ["Ali", "Faisal", "Mohamed"];

console.log(names)
//add something to the start
names.unshift("to the beginning")
console.log('after unshift' , names)

names.push('End of the array')
console.log('after push;' , names)

//remove the last element
names.pop()
console.log('after pop' , names)

//remove the last beginning
names.shift()
console.log('after shift' , names)