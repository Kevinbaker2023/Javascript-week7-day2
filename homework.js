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