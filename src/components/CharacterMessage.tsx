import React from "react";
import { messageItem } from "~/utils/types";
import { RxAvatar } from "react-icons/rx";

type Props = {
	message: messageItem;
};

function CharacterMessage({ message }: Props) {
	return (
		<>
			{message.name == "Lizzy B" ? (
				<div className="m-8 flex flex-col">
					{/* <img src="" /> */}
					<RxAvatar className="mt-2 h-12 w-12 self-start" />
					<div className="min-h-[2rem] min-w-[50%] rounded-lg bg-default-orange p-4 text-default-orange">
						<p>{message.message}</p>
					</div>
				</div>
			) : (
				<div className="m-8 flex flex-col">
					{/* <img src="" /> */}
					<RxAvatar className="mt-2 h-12 w-12 self-end" />
					<div className="min-h-[2rem] min-w-[50%] rounded-lg bg-blue-500 p-4">
						<p>{message.message}</p>
					</div>
				</div>
			)}
		</>
	);
}

export default CharacterMessage;
