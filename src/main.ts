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

const car: Car = {
  VIN: "EH3432h342jJ32kk",
  engine: "v8",
  color: "red",
  weight: 2000,
  number: "AX8472AA",
};

const carImport: Car = {
  VIN: "EH3432h3das21jJd22kk",
  engine: "v12",
  color: "green",
  number: "PL3676XC",
};

car.color = "blue";

// car.VIN = "asjduiqdqwdqw"; // error , because readonly
interface User {
  name: string;
  email: string;
}

// Union types

let user: null | User = null;

user = {
  name: "Vlad",
  email: "vlados@gmail.com",
};

type Status = "fulfilled" | "rejected" | "pending";

let status: Status = "fulfilled";

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
};

type SuperAnimal = Animal & {
  color: string;
};

const dog: SuperAnimal = {
  name: "Sobaka",
  breed: "Ovcharka",
  color: "brown",
};

// Arrays

const numbers: number[] = [1, 2, 3];

type Values = boolean | string | number;

const arr: Values[] = [true, "hello", 43, false];

const arr1: (string | number)[] = [56, "word", 46];

interface User1 {
  name: string;
  age: number;
}

const arr2: User1[] = [
  { name: "Ivan", age: 21 },
  { name: "Petro", age: 26 },
];

const arr3: (User1 | SuperAnimal)[] = [{ name: "Ivan", age: 21 }, dog];

// * Functions

// 1. Просте додавання чисел

// Умова:
// Напиши функцію add, яка приймає два числа та повертає їх суму.

function add(x: number, y: number): number {
  return x + y;
}

add(4, 8);

// 2. Привітання користувача

// Умова:
// Функція greetUser приймає ім’я (string) і логічне значення isMorning (boolean).
// Повертає рядок "Good morning, {name}" якщо isMorning === true, і "Hello, {name}" якщо false.

function greetUser(name: string, isMorning: boolean): string {
  return isMorning ? `Good morning, ${name}` : `Hello, ${name}`;
}

greetUser("Yuliia", true);

// 3. Перевірка числа

// Умова:
// Функція isPositive приймає будь-яке значення (unknown) і повертає boolean:

// true якщо це число > 0,

// false якщо число ≤ 0 або не число.

function isPositive(value: unknown): boolean {
  if (typeof value !== "number") {
    return false;
  }
  return value > 0;
}

isPositive(5);

// 4. Об’єкт користувача

// Умова:
// Створи інтерфейс User з полями:

// name: string

// age: number

// email?: string (optional)

// Функція getUserSummary приймає об’єкт User та повертає рядок "Name: {name}, Age: {age}, Email: {email}".
// Якщо email немає — виводимо "Email: N/A".

interface User3 {
  name: string;
  age: number;
  email?: string;
}

function getUserSummary(user: User3): string {
  const email = user.email ?? "N/A";
  return `Name: ${user.name}, Age: ${user.age}, Email: ${email}`;
}

getUserSummary({ name: "Ivan", age: 34 });
