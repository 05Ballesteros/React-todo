import bgImage from "./assets/images/bg-mobile-light.jpg";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";
const initialStateTodo = [
  { id: 1, title: "Completed task", completed: false },
  { id: 2, title: "Go to gym", completed: true },
  { id: 3, title: "Go to school", completed: false },
];
export default function App() {
  const [todos, setTodos] = useState(initialStateTodo);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div
      className="bg-no-repeat bg-contain bg-gray-100 min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Header */}
      <Header />
      <main className="container mx-auto px-4 mt-8">
        {/* TodoCreate */}
        <TodoCreate createTodo={createTodo} />

        {/* TodoList */}
        <TodoList todos={todos} />

        {/* TodoComputed */}
        <TodoComputed />
        {/* TodoFilter */}
        <TodoFilter />
      </main>

      <footer className="text-center mt-9 text-gray-500 font-medium">
        Drag and drop to reorder list
      </footer>
    </div>
  );
}
