const TodoFilter = () => {
  return (
    <section className="container mx-auto px-4 mt-8">
      <div className="bg-white rounded-md overflow-hidden py-3 flex gap-4 items-center mt-8 justify-center">
        <button className="font-semibold text-blue-700 ml-2">All</button>
        <button className="font-semibold text-gray-500">Active</button>
        <button className="font-semibold text-gray-500 mr-2">Completed</button>
      </div>
    </section>
  );
};

export default TodoFilter;