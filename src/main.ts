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
// console.log(typeof myObj) // object type
myObj = bands
myObj = {}
// console.log(typeof myObj) // object type

const exampleObj = {
  prop1: "Dave",
  prop2: true,
}

exampleObj.prop1 = "John"

// type = object template
type GuitaristA = {
  name?: string
  active: boolean // ? before : optional undefined
  albums: (string | number)[] // union type (|) and array []
}

// interface = object template (alternative)
interface GuitaristB {
  name: string
  active?: boolean // ? before : optional undefined
  albums: (string | number)[] // union type (|) and array []
}

// type added to object from type template
let evh: GuitaristA = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
}

// type added to object from type template
let jp: GuitaristA = {
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
// console.log(greetGuitarist(jp))

// Enums //
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
enum Grade {
  U = 1,
  D,
  C,
  B,
  A, // = 5
}
// console.log(Grade.A) // = 5
///////////////////////////////////////////////////////////////////////////

// ---- Type Assertions | Type Casting ---- //

// Original JS code //
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// My Solution TS code //
// const year = document.getElementById("year")! // ! = not null
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
// const year = document.getElementById("year") as HTMLSpanElement
// const thisYear: string = new Date().getFullYear().toString()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
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
  secondLang!: string // not initialized = !

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
// console.log(Dave.getAge())
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
// console.log(Sara.getLang())
// console.log(Sara.getAge())
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
// console.log(Page.play('strums'))

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

// console.log('Amy ID: ',Amy.id)
// console.log('Steve ID: ',Steve.id)
// console.log('John ID: ',John.id)
// console.log('Total: ',Peeps.count)

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
// console.log(myBands.data)
myBands.data = [...myBands.data, 'ZZ Tops']
// console.log(myBands.data)
/////////////////////////////////////////////////////////////////////////////

// ---- Index Signatures & keyof Assertions ---- //

// Index Signatures //

// interface without index:
// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }

// interface with index:
// interface TransactionObj {
//   // key:value|string:number
//   readonly [index: string]: number // index signature
// }

// interface with index & properties
interface TransactionObj {
  readonly [index: string]: number
  Pizza: number,
  Books: number,
  Job: number
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

// console.log(todaysTransactions.Pizza) // Ok
// console.log(todaysTransactions['Pizza']) // Ok

let prop: string = 'Pizza'
// console.log(todaysTransactions[prop]) // Not Ok - no index signature

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction] // Not Ok - no index signature
  }
  return total
}
// console.log(todaysNet(todaysTransactions))
// todaysTransactions.Pizza = 40 // Readonly
// console.log(todaysTransactions['Dave']) // undefined - no TS error!

// keyof Assertions //
interface Student {
  // [key: string]: string | number | number[] | undefined
  name: string
  GPA: number
  classes?: number[]
}

const student: Student =  {
  name: "Doug",
  GPA: 3.5,
  classes: [100,200]
}
// console.log(student.test) // undefined

// for (const  key in student) {
//   console.log(`${key}: ${student[key]}`)
// }

// for (const  key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`)
// }


// Object.keys(student).map(key => {
//   console.log(student[key as keyof typeof student])
// })

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`)
}
// logStudentKey(student, 'GPA')
// @NOTE: keyof creates union type of object keys

// Utility type Record //
// interface Incomes {
//   [key: string]: number
// }

type  Streams = 'salary' | 'bonus' | 'side'
type Incomes = Record<Streams,number>

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  side: 250
}

// for (const revenue in monthlyIncomes) {
//   console.log(monthlyIncomes[revenue as keyof Incomes])
// }
//////////////////////////////////////////////////////////////////

// ---- TS Generics ---- //

const stringEcho = (arg: string): string => arg

// Utility <> //
const echo = <T>(arg: T): T => arg // type variable - generic

const isObj = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}
// types
// console.log(isObj(true)) // false
// console.log(isObj('john')) // false
// console.log(isObj([1,2,3])) // false
// console.log(isObj({ name: 'John' })) // true
// console.log(isObj(null)) // false

// isTrue function without interface //
// const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
//   if (Array.isArray(arg) && !arg.length) {
//     return { arg, is: false }
//   }
//   if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//     return { arg, is: false }
//   }
//   return { arg, is: !!arg } // !!double bang :)
// }
// // type check
// console.log(isTrue(false)) // false
// console.log(isTrue(0)) // false
// console.log(isTrue(true)) // true
// console.log(isTrue(1)) // true
// console.log(isTrue('Dave')) // true
// console.log(isTrue('')) // false
// console.log(isTrue(null)) // false
// console.log(isTrue(undefined)) // false
// console.log(isTrue({})) // false
// console.log(isTrue([])) // false
// console.log(isTrue({ name: 'dave' })) // true
// console.log(isTrue([1,2,3])) // true
// console.log(isTrue(NaN)) // false

// isTrue function with interface //
interface BoolCheck<T> {
  value: T,
  is: boolean,
}

const isTrue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false }
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false }
  }
  return { value: arg, is: !!arg } // !!double bang :)
}
// // type check
// console.log(isTrue(false)) // false
// console.log(isTrue(0)) // false
// console.log(isTrue(true)) // true
// console.log(isTrue(1)) // true
// console.log(isTrue('Dave')) // true
// console.log(isTrue('')) // false
// console.log(isTrue(null)) // false
// console.log(isTrue(undefined)) // false
// console.log(isTrue({})) // false
// console.log(isTrue([])) // false
// console.log(isTrue({ name: 'dave' })) // true
// console.log(isTrue([1,2,3])) // true
// console.log(isTrue(NaN)) // false

// processUser function with extends //
interface HasID {
  id: number
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here
  return user
}
// console.log(processUser({ id: 1, name: 'Dave'}))

// Complex extends example //
const getUsersProp = <T extends HasID, K extends keyof T>(
  users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
  }

const usersArr = [
  {
    "id": 1,
    "name": 'Leanne',
  },
  {
    "id": 2,
    "name": 'Alice'
  }
]
// console.log(getUsersProp(usersArr, "name"))

// Class generics //
class StateObj<T> {
  private data: T

  constructor(value: T) {
    this.data = value
  }
  get state(): T {
    return this.data
  }

  set state(value: T) {
    this.data = value
  }
}
const store = new StateObj("John")
// console.log(store.state)
store.state = "Dave"
// store.state = 12

const myState = new StateObj<(string|number|boolean)[]>([15])
myState.state = (['Dave',54,true])
// console.log(myState.state)
//////////////////////////////////////////////////////////////////

// ---- Utility Types ---- //

// Partial Utility //
interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment> // Partial - make props optional
): Assignment => {
  return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
  studentId: "comp23",
  title: "Final Project",
  grade: 0,
}

// console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })

// Required & Readonly Utilities //

const recordAssignment = (
  assign: Required<Assignment> // Required - make props required
): Assignment => {
  // send to database, etc
  return assign
}

const assignVerified: Readonly<Assignment> = { // Readonly - make props readonly
  ...assignGraded,
  verified: true,
}

recordAssignment({ ...assignGraded, verified: true })

// Record Utility //

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
}

interface Grades {
  assign1: number,
  assign2: number
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93},
  Kelly: { assign1: 76, assign2: 15 }
}

// Pick & Omit Utility //

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
}

// Exclude & Extract Utility //

type adjGrade = Exclude<LetterGrades, "U">
type highGrade = Extract<LetterGrades, "A" | "B">

// Nonnullable Utility //

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// Return Utility //

// type newAssign = { title: string, points: number }
// const createNewAssign = (title: string, points: number): newAssign => {
//   return { title, points }
// }

const createNewAssign = (title: string, points: number) => {
  return { title, points }
}
type NewAssign = ReturnType<typeof createNewAssign>
// Return type - updates based on function return :)

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
// console.log(tsAssign)

// Parameter Utility //

type AssignParams = Parameters<typeof createNewAssign>// tuple
const assignArgs: AssignParams = [
  "Generics",
  100,
]
const tsAssign2: NewAssign = createNewAssign(...assignArgs)
// console.log(tsAssign2)

// Awaited Utility //
// Awaited helps us with the ReturnType of a Promise

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then(res => {
    return res.json()
  }).catch(err => {
    if (err instanceof Error) console.log(err.message)
  })
  return data
}

// Non-Awaited - Promise<User[]>
type FetchUsersReturnType1 = ReturnType<typeof fetchUsers>

// Awaited - User[]
type FetchUsersReturnType2 = Awaited<ReturnType<typeof fetchUsers>>

// fetchUsers().then(users => console.log(users))
/////////////////////////////////////////////////////////////////