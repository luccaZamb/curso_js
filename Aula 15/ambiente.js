let num = [6, 8, 2, 1, 9]
let ind = num.indexOf(2)
console.log(ind)

num[5] = 4

num.push(3)

num.sort()
console.log(num)
console.log(`O array tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`)

// for (let c = 0; c < num.length; c++) {
//     console.log(num[c])
// }

for (let c in num){
    console.log(num[c])
    c++
}