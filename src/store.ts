// store.ts
import { action, atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";
import { encrypt, decrypt } from "./encryption";

// Atom Store
export const counterP = persistentAtom<number>("counter", 0,
 {
  encode: encrypt,
  decode: decrypt,
}
);

export const counterL = persistentAtom<number>("counter", 0,
 {
  encode: JSON.stringify,
  decode: JSON.parse,
}
);

export const counter = atom<number>(0);

// Actions
export const add = action(counterL, "add", (store) => {
  store.set(store.get() + 1);
});
