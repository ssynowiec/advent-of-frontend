export function calculateTilesNeeded(
	sections: Array<{ width: number; height: number }>,
): number {
	let totalTiles = 0;

	sections.forEach(section => {
		totalTiles += section.height * section.width;
	});

	return totalTiles;
}
