import { type NextPage } from "next";

const Enter: NextPage = () => {
  return (
    <main className="w-screnn flex h-screen flex-col items-center justify-center bg-[url('/img/themes/default/bg.jpeg')] bg-cover">
      <h1 className="text-center font-sans text-8xl font-black text-white">
        <span className="bg-gradient-to-b from-gray-500 to-default-orange bg-clip-text text-transparent">
          Mythic
        </span>
        AI
      </h1>
      <div className="mt-10 flex aspect-video w-full max-w-[750px] flex-col items-center justify-center rounded border-2 border-default-orange bg-gray-500 bg-opacity-50">
        <input
          className="max-w-[200px] rounded p-2"
          placeholder="Game Code"
        ></input>
        <button className="mt-2 max-w-[200px] rounded bg-white p-2 font-bold">
          Join Room
        </button>
        <button className="mt-2 max-w-[200px] rounded bg-white p-2 font-bold">
          Create Room
        </button>
      </div>
    </main>
  );
};

export default Enter;
