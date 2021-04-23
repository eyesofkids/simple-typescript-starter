//console.log('Hello world!')

const big = 100n

const list: bigint[] = []
//const list3: number[] = [1, '1']
// console.log('0' !== 0)
// console.log(big === 100)

// 正確宣告
// let person: [string, number] = ['Eddy', 2021]
// // 錯誤宣告
// //let person2: [string, number] = [2018, 'Eddy']
// let [name ,year] = person
// // person.length
// // person[0].substring(1)
// person.push("Bill", 1999 )
// person.push(2020)
// person.unshift('Amy','Johnny')
// //person.push(true)
// //person[person.length] = 123
// //person[1].substring(1)
// // person[1] = '123'
// // person[2] = 111

// let employees: [number, string][]
// employees = [
//   [1, 'Steve'],
//   [2, 'Bill'],
//   [3, 'Jeff'],
// ]

// console.log(person)

// console.log(person.pop())
// console.log(person.pop())

// console.log(person)

enum Color {
  Red,
  Green,
  Blue,
}

const c: Color = Color.Green

console.log(c)
console.log(Color.Blue)
console.log(Color['Red'])
console.log(Color[0])

const oneHundred: bigint = BigInt(100)