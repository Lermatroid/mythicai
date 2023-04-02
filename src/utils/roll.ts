export function rollDice(rollString: string): number {
	const [numDice, diceRange] = rollString.split("d");
	let total = 0;
	for (let i = 0; i < Number(numDice); i++) {
		total += Math.floor(Math.random() * (Number(diceRange) - 1)) + 1;
	}
	return total;
}
