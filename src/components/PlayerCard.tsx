import React from "react";
import { RxAvatar } from "react-icons/rx";

// type Props = {};

function PlayerCard({}) {
	return (
		<div className="flex h-full w-full flex-col rounded border-2 border-default-orange bg-gray-500 bg-opacity-50 text-center align-middle">
			<RxAvatar scale={500} />
			<div>
				<h2>Character Name</h2>
				<p>Lvl. 4</p>
			</div>
		</div>
	);
}

export default PlayerCard;