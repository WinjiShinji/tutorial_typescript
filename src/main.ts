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
