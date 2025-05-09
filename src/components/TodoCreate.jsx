import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("");
    }
    createTodo(title);
    setTitle("");
  };
  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="bg-white rounded-md overflow-hidden py-3 flex gap-4 items-center mb-8"
    >
      <span className="ml-3 rounded-full border-2 h-3 w-3 inline-block"></span>
      <input
        type="text"
        placeholder="Create Todo"
        className="w-full text-gray-700 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
