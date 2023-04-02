import React from "react";
import { messageItem } from "~/utils/types";
import { RxAvatar } from "react-icons/rx";

type Props = {
	message: messageItem;
};

function AIMessage({ message }: Props) {
	return (
		<div className="m-8 flex flex-col rounded border-2 border-default-orange">
			<div className="min-h-[2rem] min-w-[50%] p-4 text-default-orange">
				<p>{message.message}</p>
			</div>
		</div>
	);
}

export default AIMessage;
