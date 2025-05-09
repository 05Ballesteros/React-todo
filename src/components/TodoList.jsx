import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
  return (
    <div className="rounded-md bg-white px-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
