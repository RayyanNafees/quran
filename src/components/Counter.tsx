// import { createSignal, createEffect } from 'solid-js';
import { useStore } from "@nanostores/solid";
import { add, counter } from "../store";
export default function Counter() {

  const store = useStore(counter);

  return (
    <>
      <nav class="bg-gray-800 text-white">
        <div class="flex items-center justify-between px-4 py-2">
          <div class="flex items-center">
            <a href="/" class="text-white font-bold text-lg">
              My App
            </a>
          </div>
          <div class="md:block hidden">
            <ul class="flex items-center">
              <li>
                <a href="/page1" class="px-4 py-2 hover:bg-gray-700">
                  Page 1
                </a>
              </li>
              <li>
                <a href="/page2" class="px-4 py-2 hover:bg-gray-700">
                  Page 2
                </a>
              </li>
              <li>
                <a href="/page3" class="px-4 py-2 hover:bg-gray-700">
                  Page 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="my-3">
        <button class="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold" onClick={add}>
          Counter: {store()}
        </button>
      </div>
    </>
  );
}
