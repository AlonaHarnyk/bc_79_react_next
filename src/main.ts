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
