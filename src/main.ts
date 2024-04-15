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
////////////////////////////////////////////////////////////////////////

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
///////////////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////////////////////

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
////////////////////////////////////////////////////////////////////

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
