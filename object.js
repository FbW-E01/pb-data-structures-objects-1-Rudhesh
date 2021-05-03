const person = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
  }

 let entries = Object.entries(person);
 console.log(entries)

 let values = Object.values(person);
 console.log(values);


//  3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.


let person1 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",

    info() {
        return (`${this.firstName} is a ${this.age} year old ${this.job} in ${this.city}`)
    }
  }
console.log(person1.info());


// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.

const objectToArray = {
    A: 1,
    B: 2,
    C: 3
  };

  entries = Object.entries(objectToArray)
  console.log(entries);

//   2. List keys. Create a function that returns an array of keys of a javascript object.

let student = {
    name: "Mike", 
    class: "4A", 
    course: "English"
  }

  keys = Object.keys(student);
  console.log(keys);


//   3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.


let first = {firstName: "John"}
let last = {lastName: "Smith"}

let fullName = { ...first, ...last}
console.log(fullName);


// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

const objectToArray1 = {
    A: 1,
    B: 2,
    C: 3
  };

  values = Object.values(objectToArray1)
console.log(values)
  keys = Object.keys(objectToArray1);

const combine = [].concat(values, keys)

console.log(combine);


// Create a function to get a copy of an object. The copy must switch the keys and values.


let person2 = {
  name: "John", 
  job: "teacher"
}


function swap(json){
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
  }
  
console.log(swap(person2))