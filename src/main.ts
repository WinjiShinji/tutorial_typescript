// ---- Basics ---- //
let myName: string = "Dave"
let meaningOfLife: number
let isLoading: boolean
let album: any // any data type, overrides ts
let postId: string | number // union data type, multiple types
let isActive: number | boolean | string
let re: RegExp = /\w+/g // regex data type

myName = "John"
meaningOfLife = 42
isLoading = true
album = 1984

const sum = (a: number, b: number) => {
  return a + b
}
///////////////////////////////////////////////////////////////////////

// ---- Tuples, Objects, Functions, Enums ---- //
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

// Tuple //
let myTuple: [string, number, boolean] = ["Dave", 42, true] // tuple = template

let mixed = ["John", 21, false]
myTuple[1] = 42

// Objects  //
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

type GuitaristA = {
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

let evh: GuitaristA = {
  // type added to object from type template
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
}

let jp: GuitaristA = {
  // type added to object from type template
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
}
evh = jp

// Functions //
const greetGuitarist = (guitarist: GuitaristA) => {
  // parameter type
  if (guitarist.name) {
    // narrowing
    return `Hello ${guitarist.name?.toUpperCase()}!` // ? possible undefined
  }
  return "Hello!"
}
console.log(greetGuitarist(jp))

// Enums //
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
enum Grade {
  U = 1,
  D,
  C,
  B,
  A, // = 5
}
console.log(Grade.A) // = 5
///////////////////////////////////////////////////////////////////////////

// ---- Type Assertions | Type Casting ---- //
// Original JS code //
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// My Solution TS code //
// const year = document.getElementById("year")!
// const thisYear: number = new Date().getFullYear()
// year.setAttribute("datetime", thisYear.toString())
// year.textContent = (thisYear as unknown) as string

// 1st variation //
// let year: HTMLElement | null
// year = document.getElementById("year")
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//   year.setAttribute("datetime", thisYear)
//   year.textContent = thisYear
// }

// 2nd variation //
const year = document.getElementById("year") as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear
///////////////////////////////////////////////////////////////////////////

//  ---- CLASSES ---- //
// Default //
// class Coder {
//   name: string
//   music: string
//   age: number
//   lang: string

//   constructor(
//     name: string, 
//     music: string, 
//     age: number, 
//     lang: string
//   ) {
//     this.name = name
//     this.music = music
//     this.age = age
//     this.lang = lang
//   }
// }

// Class with visible modifiers //
class Coder {
  secondLang!: string // not initialized

  constructor(
    public readonly name: string, 
    public music: string, 
    private age: number, // private - only accessible within class
    protected lang: string = 'TypeScript' // Optional | 
    // ^ protected - only accessible within class & subclass
  ) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }
  public getAge() {
    return  `Hello, I'm ${this.age}`
  }
}
const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge())
// console.log(Dave.age) // private - only accessible within class
// console.log(Dave.lang) // protected - only accessible within class
// @NOTE: ^ still legal JS - still have access to values in console!

// Class Extends //
class WebDev extends Coder {

  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age)
    this.computer = computer
  }
  public getLang() {
    return `I write ${this.lang}`
  }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(Sara.getLang())
console.log(Sara.getAge())
// console.log(Sara.age) // private - only accessible within class
// console.log(Sara.lang) // protected - only accessible within class
// @NOTE: ^ still legal JS - still have access to values in console!

// Class implements Interface //
interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Guitarist implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }
  play(action: string){
    return `${this.name} ${action} the ${this.instrument}`
  }
}
const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))

// Static Class //
class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }
  public id: number
  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count // increments first ++before
  }
}
const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log('Amy ID: ',Amy.id)
console.log('Steve ID: ',Steve.id)
console.log('John ID: ',John.id)
console.log('Total: ',Peeps.count)

// Class - Getters & Setters //
class Bands {
  private dataState: string[]
  
  constructor(){
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(el => typeof el === 'string')){
      this.dataState = value
      return 
    } else throw new Error('Param is not an array of strings')
  }
}

const myBands = new Bands()
myBands.data = ['Neil Young', 'Led Zep']
console.log(myBands.data)
myBands.data = [...myBands.data, 'ZZ Tops']
console.log(myBands.data)
/////////////////////////////////////////////////////////////////////////////

