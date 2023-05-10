import { counter, add } from "../store";
import { useStore } from "@nanostores/solid";
import { createEffect } from "solid-js";

export default function Countshow() {
  const store = useStore(counter);

  createEffect(() => {
    console.log(counter.get());
  });

  return (
    <h1>
      {" "}
      Counted {store()} times!{" "}
      <button
        onClick={() => {
          add();
          console.log(store());
        }}
      >
        Incr
      </button>
    </h1>
  );
}
