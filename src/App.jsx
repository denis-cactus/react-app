import "./App.css";
import { BookList } from "./components/BookList.jsx";
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Clicked {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click +
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Click -
      </button>
    </>
  );
}

const favBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  {
    id: "id-3",
    name: "React Router overview",
  },
];

export default function MyApp() {
  return (
    <div>
      <h1>Books of the week</h1>
      <BookList books={favBooks} />
      <MyButton />
    </div>
  );
}
