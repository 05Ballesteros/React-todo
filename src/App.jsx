import bgImage from "./assets/images/bg-mobile-light.jpg";
import CroosIcon from "./components/croos";
import MoonIcon from "./components/moon";
export default function App() {
  return (
    <div
      className="bg-no-repeat bg-contain bg-gray-100 min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-3xl font-semibold tracking-widest text-white">
            Todo
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-3 flex gap-4 items-center mt-8">
          <span className="ml-3 rounded-full border-2 h-3 w-3 inline-block"></span>
          <input
            type="text"
            placeholder="Create Todo"
            className="w-full text-gray-700 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="rounded-md bg-white px-4">
          <article className="flex justify-between p-4 border-b gap-4">
            <button className="ml-3 rounded-full border-2 h-3 w-3 inline-block flex-none"></button>
            <p className="text-gray-500">complete online curse</p>
            <button>
              <CroosIcon />
            </button>
          </article>
          <article className="flex justify-between p-4 border-b gap-4">
            <button className="ml-3 rounded-full border-2 h-3 w-3 inline-block flex-none"></button>
            <p className="text-gray-500">complete online curse</p>
            <button>
              <CroosIcon />
            </button>
          </article>
          <article className="flex justify-between p-4 border-b gap-4">
            <button className="ml-3 rounded-full border-2 h-3 w-3 inline-block flex-none"></button>
            <p className="text-gray-500">complete online curse</p>
            <button>
              <CroosIcon />
            </button>
          </article>
          <section className="bg-white rounded-md overflow-hidden py-3 flex gap-4 items-center mt-2 justify-between">
            <span className="text-gray-500 ml-2">5 items left</span>
            <button className="text-gray-500 mr-2">Clear completed</button>
          </section>
        </div>
      </main>

      <div className="container mx-auto px-4 mt-8">
        <section className="bg-white rounded-md overflow-hidden py-3 flex gap-4 items-center mt-8 justify-center">
          <button className="font-semibold text-blue-700 ml-2">All</button>
          <button className="font-semibold text-gray-500">Active</button>
          <button className="font-semibold text-gray-500 mr-2">
            Completed
          </button>
        </section>
      </div>

      <p className="text-center mt-9 text-gray-500 font-medium">
        Drag and drop to reorder list
      </p>
    </div>
  );
}
