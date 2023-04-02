import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState, type FunctionComponent } from "react";
import CharacterCard from "~/components/CharacterCard";
import AIMessage from "~/components/AIMessage";
import CharacterMessage from "~/components/CharacterMessage";
// import { Character } from "~/utils/character";
import { IoProvider, useSocket, useSocketEvent } from "socket.io-react-hook";
import { env } from "../../env.mjs";
import type { messageItem, gameState } from "~/utils/types";
import { RiQuillPenLine } from "react-icons/ri";

const GamePage: NextPage = () => {
	return (
		<IoProvider>
			<Wrapped />
		</IoProvider>
	);
};

const Wrapped: FunctionComponent = () => {
	const { socket } = useSocket(env.NEXT_PUBLIC_SOCKET_URL);
	const [state, setState] = useState<gameState>({
		allowMessageSending: false,
		hasStarted: false,
		players: [],
	});
	const { lastMessage: messages } = useSocketEvent(socket, "updatedMessages");
	const [textInput, setTextInput] = useState("");
	const router = useRouter();

	useEffect(() => {
		if (socket) {
			console.log("Joining game with id: ", router.query.id);
			socket.on("gameJoined", (game: gameState) => {
				setState(game);
			});
			socket.emit("joinGame", router.query.id);
		}

		return () => {
			socket.off("gameJoined");
		};
	}, [socket]);

	const doStartGame = () => {
		socket.on("gameStarted", (state: gameState) => {
			setState(state);
		});
		socket.emit("startGame");
	};

	const handleSubmit = () => {
		socket.emit("postNewMessageToGPT", {
			message: textInput,
			gameID: router.query.id,
		});
	};

	return (
		<main className="flex h-screen max-h-[80%] w-screen flex-col items-center justify-center bg-[url('/img/themes/default/bg.jpeg')] bg-cover">
			<h1 className="text-center font-sans text-8xl font-black text-white">
				<span className="bg-gradient-to-b from-gray-500 to-default-orange bg-clip-text text-transparent">
					Mythic
				</span>
				AI
			</h1>
			<div className="h-max-[500px] mt-10 grid aspect-video w-full max-w-[1250px] grid-cols-5 gap-2">
				<CharacterCard
					char={{
						name: "Lizzy B",
						lvl: 5,
						race: "Goblin",
					}}
				/>
				<div className="relative col-span-3 row-span-2 rounded border-2 border-default-orange bg-gray-500 bg-opacity-50">
					<div className="absolute bottom-16 left-0 right-0 top-0 overflow-y-scroll">
						{messages?.map(
							(message: messageItem) =>
								!message.isSystemMessage &&
								(message.isFromAI ? (
									<AIMessage message={message} />
								) : (
									<CharacterMessage message={message} />
								))
						)}
					</div>
					<div className="absolute bottom-0 left-0 right-0 flex h-16 max-h-full border-t-2 border-default-orange">
						<input
							className="h-full flex-grow px-2 text-2xl focus:outline-none"
							type="text"
							value={textInput}
							onChange={(e) => setTextInput(e.target.value)}
						></input>
						<div
							className="h-full w-auto bg-default-orange p-2 hover:cursor-pointer hover:bg-[#a65b42]"
							onClick={() => handleSubmit()}
						>
							<RiQuillPenLine className="h-max w-12" />
						</div>
					</div>
					{/* <>
							<div className="h-full w-full">
								<button
									className="m-auto flex items-center justify-center rounded-md bg-default-orange p-4"
									onClick={() => doStartGame()}
								>
									Start Game
								</button>
							</div>
						</> */}
				</div>
				<CharacterCard
					char={{
						name: "Fredico The Noble",
						lvl: 10,
						race: "Warlock",
					}}
				/>
				<CharacterCard
					char={{
						name: "Lizzy B",
						lvl: 11,
						race: "Goblin",
					}}
				/>
				<CharacterCard
					char={{
						name: "Lizzy B",
						lvl: 5,
						race: "Goblin",
					}}
				/>
			</div>
		</main>
	);
};

export default GamePage;
