import { Filho } from "./filho";

export default function App() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-blue-600 font-semibold text-2xl">Hello World</h1>

      <hr />

      <Filho text="Hi, I'm Hello World Jr!">
        <p className="text-green-600 font-semibold text-xl">Hello Worldson</p>
      </Filho>
    </div>
  );
}