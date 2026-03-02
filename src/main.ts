//Primitives

let a: string = "word";
let b: number = 5;
let c: boolean = true;

let d: null = null;
let e: undefined = undefined;

let f: any = 5;

f.toFixed(2);
f.toLowerCase(); // не існує, але помилки не буде

let g: unknown;

g = 5;

// g.toFixed(2); // error

if (typeof g === "number") {
  g.toFixed(2);
}

// Objects

interface Car {
  readonly VIN: string;
  engine: string;
  color: string;
  weight?: number;
  number: string;
}

const car:Car = {
  VIN:"EH3432h342jJ32kk",
  engine: "v8",
  color: "red",
  weight: 2000,
  number: "AX8472AA",
}


const carImport:Car = {
  VIN:"EH3432h3das21jJd22kk",
  engine: "v12",
  color: "green",
  number: "PL3676XC",
}

car.color = "blue";

// car.VIN = "asjduiqdqwdqw"; // error , because readonly
interface User {
  name: string;
  email: string;
}
let user:null | User = null;

user = {
  name: "Vlad",
  email:"vlados@gmail.com",
}

type Status = "fulfilled" | "rejected" | "pending";

let status:Status = "fulfilled";

status = "rejected";

// interface Animal {
//   name: string;
//   breed: string;
// }
//
// interface Animal {
//   color: string;
// }

type Animal = {
  name: string;
  breed: string;
}

type SuperAnimal = Animal & {
  color: string;
};

const dog: SuperAnimal = {
  name: "Sobaka",
  breed: "Ovcharka",
  color: "brown",
}


