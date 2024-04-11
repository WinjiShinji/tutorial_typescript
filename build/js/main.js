"use strict";
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
// Tuple
let myTuple = ["Dave", 42, true]; // tuple = template
let mixed = ["John", 21, false];
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj); // object type
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "John";
// Alternate template
// interface Guitarist {
//   // type = object template
//   name: string
//   active?: boolean // ? before : optional undefined
//   albums: (string | number)[] // union type (|) and array []
// }
let evh = {
    // type added to object from type template
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    // type added to object from type template
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
evh = jp;
// Function
const greetGuitarist = (guitarist) => {
    var _a;
    // parameter type
    if (guitarist.name) {
        // narrowing
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`; // ? possible undefined
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A); // = 5
