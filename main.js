console.log('testing')

// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default:
        // code block
} 
*/
let num = 11
switch(num % 2 == 0){
  case true:
    console.log('even')
    break;
  default:
    console.log('odd')
}

// JS Objects (Python Dicts)
const person = {
  name: 'dylan',
  age: 999,
  location: 'USA'
}

// access data in objects (using bracket or dot notation)
console.log(person['age'])
console.log(person.age)

// Inclass Exercise #1 (Get the Value 'Manchester United')
const person2 = {
    name: "Max",
    age: 31,
    prog_languages: ["JavaScript", "Python", "C++", "Java"],
    fav_color: "Blue",
    teams: [
      {
        baseball: "Chicago White Sox",
        football: "Chicago Bears",
        hockey: "Chicago Blackhawks",
        basketball: ["Chicago Bulls", "Chicago Sky"],
        soccer: ["Chicago Fire", "Naperville Yellowjacks"],
      },
      {
        baseball: "Toronto Bluejays",
        football: "LA Rams",
        basketball: "Milwalkee Bucks",
        soccer: ["Manchester United", "Liverpool"],
      },
    ],
  };

// Solution Here:
console.log(person2.teams[1].soccer[0])

// JS Object methods ((Object.keys(object), Object.values(object))
console.log(Object.keys(person2))
console.log(Object.values(person2))

// looping an object using for in
// for in: iterates over keys in object or indices in an array
for(let key in person2){
  console.log(person2[key])
}



// ---------- Creating a JS Class ----------
class Team {
  constructor(city, name){
    this.city = city
    this.name = name
  }

  printInfo(){
    return `The ${this.name} are from ${this.city}!`
  }
}

// Creating an instance
const team1 = new Team('LA', 'Lakers')


// Inheriting from a class using 'extends'
class Player extends Team {
  constructor(city, name, playerName){
    super(city, name)
    this.playerName = playerName
  }

  printInfo2(){
    return `${this.playerName} plays for the ${this.city} ${this.name}!`
  }
}

const player1 = new Player('Chicago', 'Bulls', 'Michael Jordan')
console.log(player1.printInfo())
console.log(team1.printInfo())


// ---------- JS Closures ----------
let grandpa = 'grandpa'
function a(){
  let father = 'father'
  return function b(){
    let son = 'son'
    return `${grandpa} -> ${father} -> ${son}`
  }
}

console.log(a()())

// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

// returns a pending promise
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject)
// handle pending promise with .then(), .catch()
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((response) => {
  console.log(response.status)
  return response.json()
})
.then((data) => {
  console.log(data)
})
.catch((error) => {
  console.error(error)
})

// viewing our data if promise resolved: 200 status code

// Second way: Using async/await (ES6)
const pokemonData = async () => {
  try{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json()
    console.log(data)
  }
  catch (error) {
    console.error(`there was a problem: ${error}`)
  }
}

pokemonData()
console.log('testing')

//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/


let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
 console.log(Object.values(person3) + Object.values(person3.shakes[0]))
//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

// Use an arrow to create the printInfo method
    printInfo = () => {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }

    addAge = (age=1) => {
        this.age += age;
    }
}

const new_person = new Person('Joe', 100);
const person1 = new Person('Larry', 1000)

console.log(new_person.printInfo())
new_person.addAge()
console.log(new_person.printInfo())

console.log(person1.printInfo())
person1.addAge(3)
console.log(person1.printInfo())
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const driverData = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json');
    const data = await response.json()
    console.log(data)
}

driverData()


// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

function rentalCarCost(d) {
    // Your solution here
    if (d < 3) {
      return (d * 40);
    } else if (d >= 3 && d < 7) {
      return ((d * 40) - 20);
    } else {
      return ((d * 40) - 50);
    }
  }


//   https://www.codewars.com/kata/560ecf0cb040de130e00007d/train/javascript
  function orderOperations () {
    return (2 + 2) * (2 + 2) * 2
  }