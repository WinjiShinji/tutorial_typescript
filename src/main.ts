let stringArr = ["one", "hey", "Dave"]
let guitars = ["Strat", "les Paul", 5150]
let mixedData = ["evh", 1984, true]

stringArr[0] = "john"
stringArr.push("hey")

guitars[0] = 1984
guitars.unshift("Jim")

guitars = stringArr
mixedData = guitars

let test = [] // any
let bands: string[] = [] // data type string array
bands.push("Van Halen")

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true] // tuple = template

let mixed = ["John", 21, false]
myTuple[1] = 42

// Objects
let myObj: object

myObj = []
console.log(typeof myObj) // object type
myObj = bands
myObj = {}

const exampleObj = {
  prop1: "Dave",
  prop2: true,
}

exampleObj.prop1 = "John"

type Guitarist = {
  // type = object template
  name?: string
  active: boolean // ? before : optional undefined
  albums: (string | number)[] // union type (|) and array []
}

// Alternate template
// interface Guitarist {
//   // type = object template
//   name: string
//   active?: boolean // ? before : optional undefined
//   albums: (string | number)[] // union type (|) and array []
// }

let evh: Guitarist = {
  // type added to object from type template
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
}

let jp: Guitarist = {
  // type added to object from type template
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
}
evh = jp

// Function
const greetGuitarist = (guitarist: Guitarist) => {
  // parameter type
  if (guitarist.name) {
    // narrowing
    return `Hello ${guitarist.name?.toUpperCase()}!` // ? possible undefined
  }
  return "Hello!"
}
console.log(greetGuitarist(jp))

// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A, // = 5
}

console.log(Grade.A) // = 5
