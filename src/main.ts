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
