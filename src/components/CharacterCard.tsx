import React from "react";
import { RxAvatar } from "react-icons/rx";
import type { Character } from "~/utils/types";

type Props = {
	char?: Character;
};

function CharacterCard({ char }: Props) {
	return (
		<div className="flex h-full w-full flex-col justify-center rounded border-2 border-default-orange bg-gray-500 bg-opacity-50 p-4 py-6 text-center align-middle md:py-8">
			<RxAvatar className="m-auto h-max w-full" />
			{char && (
				<div>
					<h2 className="font-semibold">{char?.name || "Unknown"}</h2>
					<p>
						Lvl. {char?.lvl ?? 0} | {char?.race ?? "Unknown"}
					</p>
				</div>
			)}
		</div>
	);
}

export default CharacterCard;
