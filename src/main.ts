type One = string
type Two = string | number
type Three = "hello"

// convert to more or less specific
let a: One = "hello"
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>"world"
let e = <string | number>"world"

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b
  return "" + a + b
}

let myVal: string = addOrConcat(2, 2, "concat") as string // assertion

// Be careful!  TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number // assertion

// 10 as string // incorrect assertion
10 as unknown as string // double casting | two assertions

// The DOM
const img = document.querySelector("img") as HTMLImageElement
// const img = document.querySelector('img')! // ! = not null
const myImg = document.getElementById("#img") as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById("#img")
// ^ alternate way <> - does not work with React .tsx

img.src
myImg.src
