import axios from "axios";

// Enums
enum StatusName {
  Pending = "pending",
  Rejected = "rejected",
  Fulfilled = "fulfilled",
}

enum Role {
  Admin = "admin",
  Goest = "goest",
  User = "user",
}

function handleGreetMessage(role: Role, name: string): string {
  switch (role) {
    case Role.Admin:
      return `Hello Admin ${name}`;
    case Role.Goest:
      return `Hello Goest ${name}`;
    case Role.User:
      return `Hello ${name}`;
  }
}

console.log(handleGreetMessage(Role.Admin, "Василь"));

// Generics

// Задача 1. Узагальнена функція wrapInArray
// Умова

// Є функція:

// function wrapInArray(value) {
//   return [value];
// }

// Зараз вона не типізована.

// Завдання

// Зроби функцію узагальненою.

//
function wrapInArray<T>(value: T): T[] {
  return [value];
}

wrapInArray<number>(5);
wrapInArray<string>("qwerty");

interface Getuser {
  name: string;
  age: number;
}

wrapInArray<Getuser>({ name: "", age: 5 });

// Задача 2. Узагальнена функція getLastElement
// Умова

// Створи функцію getLastElement, яка:

// приймає масив будь-якого типу

// повертає останній елемент масиву

// Зроби функцію узагальненою.

function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

getLastElement<number>([1, 4, 4, 5]);
getLastElement<string>(["hello", "Kolya", "Vasya", "hi"]);

// Задача 3. Узагальнена функція pair
// Умова

// Створи функцію pair, яка:

// приймає два значення, які можуть бути різного типу

// повертає їх як масив або кортеж [перший, другий]

// Зроби функцію узагальненою

function pair<T, U>(itemFirst: T, itemSecond: U): [T, U] {
  return [itemFirst, itemSecond];
}

pair<boolean, string>(true, "Admin");
pair<number, string>(13, "User");

// Задача 5. Узагальнена функція firstOrDefault
// Умова

// Створи функцію firstOrDefault, яка:

// приймає масив будь-якого типу

// повертає перший елемент масиву або null, якщо масив порожній

// зроби функцію узагальненою

function firstOrDefault<T>(arr: T[]): T | null {
  return arr.length === 0 ? null : arr[0];
}

firstOrDefault<number>([1, 2, 3, 4]);
firstOrDefault([]);

// Status, msg, data[],{},str

interface Response<T> {
  status: number;
  message: string;
  data: T;
}

interface Todo {
  name: string;
}

const todoResp: Response<Todo[]> = {
  status: 200,
  message: "success",
  data: [{ name: "Alex" }, { name: "Vlad" }],
};

const oneTodoResp: Response<Todo> = {
  status: 200,
  message: "success",
  data: { name: "Alex" },
};

// Задача 7. Узагальнена функція delay з Promise
// Умова

// Створи функцію delay, яка:

// приймає значення будь-якого типу

// приймає час у мілісекундах

// повертає Promise, який після затримки повертає передане значення

// зроби функцію узагальненою

//

function delay<T>(items: T, time: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, time);
  });
}

delay<string>("Hello", 1000).then((result) => {
  console.log(result);
});
delay<number>(34, 1000).then((result) => {
  console.log(result);
});

// Задача 8. Узагальнена функція fetchData з Axios
// Умова

// Створи функцію fetchData, яка:

// приймає URL

// робить GET-запит через axios

// повертає масив об’єктів певного типу, який визначається узагальненням

//

async function fetchData<T>(url: string): Promise<T[]> {
  const res = await axios.get<T[]>(url);
  return res.data;
}

fetchData<string>("http//:dfdsfsfsf").then((data) => {
  console.log(data);
});

// Задача 9. Узагальнена функція zip
// Умова

// Створи функцію zip, яка:

// приймає два масиви різного типу

// повертає масив кортежів

// якщо масиви різної довжини, ігнорує зайві елементи

// зроби функцію узагальненою

// Приклад використання:

// const numbers = [1, 2, 3];
// const strings = ["a", "b"];
// const zipped = zip(numbers, strings); // [[1,"a"], [2,"b"]]

function zip<T, U>(arrOne: T[], arrTwo: U[]): [T, U][] {
  const result: [T, U][] = [];

  const shortArr = Math.min(arrOne.length, arrTwo.length);

  for (let i = 0; i <= shortArr; i++) {
    result.push([arrOne[i], arrTwo[i]]);
  }
  return result;
}

zip([1, 2, 3, 4], ["a", "b", "c"]);

// Задача 10. Узагальнені функції saveToStorage і loadFromStorage
// Умова

// Створи дві функції:

// 1) saveToStorage

// приймає ключ

// приймає значення будь-якого типу

// зберігає його у localStorage у форматі JSON

// 2) loadFromStorage

// приймає ключ

// повертає значення

// Зроби обидві функції узагальненими.

function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

interface User {
  name: string;
  age: number;
}

saveToStorage<User>("name", { name: "Ivan", age: 32 });

function loadFromStorage<T>(key: string): T | null {
  const data = localStorage.getItem(key);

  return data === null ? null : JSON.parse(data);
}

loadFromStorage<User>("name");

function logLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

logLength("3453");
