interface User {
    id: number;
    name: string;
    email?: string; // необов'язкове поле
}

/* ---------- Partial<T> ---------- */
// Робить усі поля необов'язковими

type PartialUser = Partial<User>;

const user1:PartialUser = {
    name: "John"
}

/* ---------- Required<T> ---------- */
// Робить усі поля обов'язковими

type RequiredUser = Required<User>;

const user2: RequiredUser = {
    name: "John2",
    email: "shshhs@gmail.com",
    id: 2
}

/* ---------- Readonly<T> ---------- */
// Робить усі поля тільки для читання

type ReadOnlyUser = Readonly<User>;

const user3: ReadOnlyUser = {
    name: "John3",
    email: "shdqwdqhs@gmail.com",
    id: 2
}

/* ---------- Pick<T, K> ---------- */
// Pick<T, K> вибирає підмножину полів

type PickUser = Pick<User, "id" | "email">;

const user4: PickUser = {
    id: 5,
    email: "dasudhwiq1@gmail.com"
}

/* ---------- Omit<T, K> ---------- */
// Проти Pick — виключає наведені поля

type OmitUser = Omit<User, "name">

const user5:OmitUser = {
    email: "shdqwdqhs@gmail.com",
    id: 2
}

/* ---------- Exclude<T, U> ---------- */
// Exclude<T, U> — прибирає з об'єднання ті підтипи, які сумісні з U

type All = "a" | "b" | "c";
type Some = Exclude<All,"b" | "c" >

let some: Some = "a";

/* ---------- Extract<T, U> ---------- */
// Extract<T, U> — залишає тільки ті підтипи з T, які сумісні з U

type Only = Extract<All, "a" | "b">

let only: Only = "a";