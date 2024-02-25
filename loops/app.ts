const fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
    console.log(fruit);
}

interface Person  {
  name: string,
  age: number,
  city: string
}

const person : Person = {
  name: "John", 
  age: 30, 
  city: "New York"
};

for (let key in person) {
  console.log(key, person[key as keyof typeof person]);
}