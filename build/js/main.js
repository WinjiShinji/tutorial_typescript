"use strict";
// ---- Basics ---- //
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let myName = "Dave";
let meaningOfLife;
let isLoading;
let album; // any data type, overrides ts
let postId; // union data type, multiple types
let isActive;
let re = /\w+/g; // regex data type
myName = "John";
meaningOfLife = 42;
isLoading = true;
album = 1984;
const sum = (a, b) => {
    return a + b;
};
///////////////////////////////////////////////////////////////////////
// ---- Tuples, Objects, Functions, Enums ---- //
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "les Paul", 5150];
let mixedData = ["evh", 1984, true];
stringArr[0] = "john";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
guitars = stringArr;
mixedData = guitars;
let test = []; // any
let bands = []; // data type string array
bands.push("Van Halen");
// Tuple //
let myTuple = ["Dave", 42, true]; // tuple = template
let mixed = ["John", 21, false];
myTuple[1] = 42;
// Objects  //
let myObj;
myObj = [];
// console.log(typeof myObj) // object type
myObj = bands;
myObj = {};
// console.log(typeof myObj) // object type
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "John";
// type added to object from type template
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
// type added to object from type template
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
evh = jp;
// Functions //
const greetGuitarist = (guitarist) => {
    var _a;
    // parameter type
    if (guitarist.name) {
        // narrowing
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`; // ? possible undefined
    }
    return "Hello!";
};
// console.log(greetGuitarist(jp))
// Enums //
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
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
// console.log(Dave.getAge())
// console.log(Dave.age) // private - only accessible within class
// console.log(Dave.lang) // protected - only accessible within class
// @NOTE: ^ still legal JS - still have access to values in console!
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
// console.log(Page.play('strums'))
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
// console.log('Amy ID: ',Amy.id)
// console.log('Steve ID: ',Steve.id)
// console.log('John ID: ',John.id)
// console.log('Total: ',Peeps.count)
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
// console.log(myBands.data)
myBands.data = [...myBands.data, 'ZZ Tops'];
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
// console.log(todaysTransactions.Pizza) // Ok
// console.log(todaysTransactions['Pizza']) // Ok
let prop = 'Pizza';
// console.log(todaysTransactions[prop]) // Not Ok - no index signature
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; // Not Ok - no index signature
    }
    return total;
};
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
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
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    side: 250
};
// for (const revenue in monthlyIncomes) {
//   console.log(monthlyIncomes[revenue as keyof Incomes])
// }
//////////////////////////////////////////////////////////////////
// ---- TS Generics ---- //
const stringEcho = (arg) => arg;
// Utility <> //
const echo = (arg) => arg; // type variable - generic
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg }; // !!double bang :)
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
// console.log(processUser({ id: 1, name: 'Dave'}))
// Complex extends example //
const getUsersProp = (users, key) => {
    return users.map(user => user[key]);
};
const usersArr = [
    {
        "id": 1,
        "name": 'Leanne',
    },
    {
        "id": 2,
        "name": 'Alice'
    }
];
// console.log(getUsersProp(usersArr, "name"))
// Class generics //
class StateObj {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObj("John");
// console.log(store.state)
store.state = "Dave";
// store.state = 12
const myState = new StateObj([15]);
myState.state = (['Dave', 54, true]);
const updateAssignment = (assign, propsToUpdate // Partial - make props optional
) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "comp23",
    title: "Final Project",
    grade: 0,
};
// console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required & Readonly Utilities //
const recordAssignment = (assign // Required - make props required
) => {
    // send to database, etc
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record Utility //
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 }
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
// Return Utility //
// type newAssign = { title: string, points: number }
// const createNewAssign = (title: string, points: number): newAssign => {
//   return { title, points }
// }
const createNewAssign = (title, points) => {
    return { title, points };
};
// Return type - updates based on function return :)
const tsAssign = createNewAssign("Utility Types", 100);
const assignArgs = [
    "Generics",
    100,
];
const tsAssign2 = createNewAssign(...assignArgs);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
// fetchUsers().then(users => console.log(users))
/////////////////////////////////////////////////////////////////
