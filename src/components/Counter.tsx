import { createSignal } from 'solid-js';

export default function Counter() {
  const [count, setCount] = createSignal(0);

  function increment() {
    setCount(count() + 1);
  }

  function decrement() {
    setCount(count() - 1);
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div>Counter: {count()}</div>
    </div>
  );
}
