export interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isOnline: boolean;
  avatar: string;
}

export interface Dog {
  id: number;
  name: string;
  age: number;
  breed: string;
  isFriendly: boolean;
  avatar: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  country: string;
}
