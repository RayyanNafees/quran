import { atom } from "nanostores";

export const counter = atom(0);

export const add = () => {
  console.log("Hi");
  counter.set(counter.get() + 1);
  console.log(counter.get());
};
