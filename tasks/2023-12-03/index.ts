export interface Lokalizacja {
	x: number;
	y: number;
	z: number;
	czas: number;
}

export type MapaCzasoprzestrzenna = (
	x: number,
	y: number,
	z: number,
	czas: number,
) => number;

export function znajdzWorek(
	lokalizacje: Lokalizacja[],
	mapa: MapaCzasoprzestrzenna,
): Lokalizacja | null {
	if (lokalizacje.length === 0) {
		return null;
	}

	const x = lokalizacje.map(lokalizacja => {
		return {
			value: mapa(
				lokalizacja.x,
				lokalizacja.y,
				lokalizacja.z,
				lokalizacja.czas,
			),
			location: lokalizacja,
		};
	});

	x.sort((a, b) => b.value - a.value);

	if (isNaN(x[0].value)) {
		return null;
	}

	return x[0].location;

	return null;
}
