import CheckIcon from "./icons/IconCheck";
import CroosIcon from "./icons/IconCroos";
const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex justify-between p-4 border-b gap-4">
      <button className="rounded-full border-2 h-5 w-5 justify-center items-center flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <CheckIcon />
      </button>
      <p className="text-gray-500">{title}</p>
      <button>
        <CroosIcon />
      </button>
    </article>
  );
};

export default TodoItem;
