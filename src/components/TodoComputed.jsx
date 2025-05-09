const TodoComputed = () => {
  return (
    <section className="bg-white rounded-sm overflow-hidden py-3 flex gap-4 items-center justify-between font-semibold">
      <span className="text-gray-500 ml-2">5 items left</span>
      <button className="text-gray-500 mr-2">Clear completed</button>
    </section>
  );
};

export default TodoComputed;