import { type NextPage } from "next";

const GamePage: NextPage = () => {
	return (
		<main className="w-screnn flex h-screen flex-col items-center justify-center bg-[url('/img/themes/default/bg.jpeg')] bg-cover">
			<h1 className="text-center font-sans text-8xl font-black text-white">
				<span className="bg-gradient-to-b from-gray-500 to-default-orange bg-clip-text text-transparent">
					Mythic
				</span>
				AI
			</h1>
			<div className="mt-10 grid aspect-video w-full max-w-[1250px] grid-cols-5 gap-2">
				<div className="h-full rounded border-2 border-default-orange bg-gray-500 bg-opacity-50"></div>
				<div className="col-span-3 row-span-2 h-full rounded border-2 border-default-orange bg-gray-500 bg-opacity-50"></div>
				<div className="h-full rounded border-2 border-default-orange bg-gray-500 bg-opacity-50"></div>
				<div className="h-full rounded border-2 border-default-orange bg-gray-500 bg-opacity-50"></div>
				<div className="h-full rounded border-2 border-default-orange bg-gray-500 bg-opacity-50"></div>
			</div>
		</main>
	);
};

export default GamePage;
