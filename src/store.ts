import { atom } from "nanostores";

export const counter = atom(0);

export const add = () => {
  console.log("Hello world");
  counter.set(counter.get() + 1);
  console.log(counter.get());
};


