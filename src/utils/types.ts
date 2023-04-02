export interface messageItem {
	name: string;
	message: string;
	isSystemMessage: boolean;
	isFromAI: boolean;
}

export interface gameState {
	allowMessageSending: boolean;
	hasStarted: boolean;
	players: string[];
}

export type Character = {
	name: string;
	lvl: number;
	race: string;
};
