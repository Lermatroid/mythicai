import { type NextPage } from "next";
import { useRouter } from "next/router";
import { IoProvider, useSocket, useSocketEvent } from "socket.io-react-hook";
import { env } from "../../env.mjs";
import { type FunctionComponent, useEffect, useState } from "react";

const Enter: NextPage = () => {
	return (
		<IoProvider>
			<Wrapped />
		</IoProvider>
	);
};

const Wrapped: FunctionComponent = () => {
	const { socket } = useSocket(env.NEXT_PUBLIC_SOCKET_URL);
	const router = useRouter();
	const [textInput, setTextInput] = useState("");

	useEffect(() => {
		if (socket) {
			socket.on("gameCreated", (roomId) => {
				alert("Game created! Joining...");
				router.push(`/game/${roomId}`);
			});
		}
		return () => {
			socket.off("gameCreated");
		};
	}, [socket]);

	const doCreateGame = () => {
		socket.emit("createGame");
	};

	const doJoinGame = () => {
		router.push("/game/" + textInput);
	};
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
					onChange={(e) => setTextInput(e.target.value)}
				></input>
				<button
					className="mt-2 max-w-[200px] rounded bg-white p-2 font-bold"
					onClick={() => doJoinGame()}
				>
					Join Room
				</button>
				<button
					className="mt-2 max-w-[200px] rounded bg-white p-2 font-bold"
					onClick={() => doCreateGame()}
				>
					Create Room
				</button>
			</div>
		</main>
	);
};

export default Enter;
