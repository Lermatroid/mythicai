import React from "react";
import { RxAvatar } from "react-icons/rx";
import type { Character } from "~/utils/character";

type Props = {
	char?: Character;
};

function CharacterCard({ char }: Props) {
	return (
		<div className="flex h-full w-full flex-col rounded border-2 border-default-orange bg-gray-500 bg-opacity-50 text-center align-middle">
			<RxAvatar className="m-auto" />
			<div>
				<h2>{char?.name || "Unknown"}</h2>
				<p>
					Lvl. {char?.lvl ?? 0} | {char?.race ?? "Unknown"}
				</p>
			</div>
		</div>
	);
}

export default CharacterCard;
