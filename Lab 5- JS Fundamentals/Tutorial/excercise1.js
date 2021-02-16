//Q1.
for (let i = 0; i < 100; i++)
    if (i % 2 == 1)
        console.log(i)


let i = 0;
while (i < 100) {
    if (i % 2) console.log(i)
    i++
}

let names = ["Ali", "Faisal", "Mohamed"];

console.log(names)
//add something to the start
names.unshift("to the beginning")
console.log('after unshift', names)

names.push('End of the array')
console.log('after push;', names)

//remove the last element
names.pop()
console.table(names)

//remove the last beginning
names.shift()
console.log('after shift', names)

names.splice(2, 1)
console.log(names)

let x = [1, 2, 3, 4, 5, 6]
console.log(x.filter(x => x > 4))
console.log(x.find(x => x == 0))

let w = [1, [2, 5, 16], 3, 4, 5, 6].flat(2).reduce()
w = w.flat(2)
console.log(w)
