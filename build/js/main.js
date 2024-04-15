"use strict";
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
    constructor(name, music, age, // private - only accessible within class
    lang = 'TypeScript' // Optional | 
    // ^ protected - only accessible within class & subclass
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// console.log(Dave.age) // private - only accessible within class
// console.log(Dave.lang) // protected - only accessible within class
// @NOTE: ^ still legal JS - still have access to values in console!
////////////////////////////////////////////////////////////////////////
// Class Extends //
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
console.log(Sara.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
/////////////////////////////////////////////////////////////////////
// Static Class //
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // increments first ++before
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log('Amy ID: ', Amy.id);
console.log('Steve ID: ', Steve.id);
console.log('John ID: ', John.id);
console.log('Total: ', Peeps.count);
////////////////////////////////////////////////////////////////////
// Class - Getters & Setters //
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['Neil Young', 'Led Zep'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'ZZ Tops'];
console.log(myBands.data);
