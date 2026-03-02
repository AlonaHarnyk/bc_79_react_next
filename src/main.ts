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
