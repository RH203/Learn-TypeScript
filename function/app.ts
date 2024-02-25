function add(a: number, b:number) {
  return a + b;
}

function evenOrOdd(a: number): string {
  return a % 2 == 0 ? "Genap" : "Ganjil"
}

let checkNumber = (a: number) => {return a % 2 == 0 ? "Genap" :  "Ganjil" }

console.log(add(10, 29))

console.log(evenOrOdd(10))

console.log(checkNumber(33))

console.log(checkNumber(35))
