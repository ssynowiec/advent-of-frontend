export type BirdObservation = {
	name: string;
	date: string; // YYYY-MM-DD
	coordinates: { latitude: number; longitude: number };
};

export type ProcessedBirdData = {
	[birdName: string]: {
		dates: string[];
		averageCoordinates: { latitude: number; longitude: number };
	};
};

export function processBirdObservations(
	observations: BirdObservation[],
): ProcessedBirdData {
	const groupedObservationsByBird: ProcessedBirdData = {};

	observations.forEach(observation => {
		const birdName = observation.name;
		if (groupedObservationsByBird[birdName]) {
			groupedObservationsByBird[birdName].dates.push(observation.date);
			const avgCoord = {
				latitude:
					(groupedObservationsByBird[birdName].averageCoordinates
						.latitude +
						observation.coordinates.latitude) /
					2,
				longitude:
					(groupedObservationsByBird[birdName].averageCoordinates
						.longitude +
						observation.coordinates.longitude) /
					2,
			};
			groupedObservationsByBird[birdName].averageCoordinates = avgCoord;
		} else {
			groupedObservationsByBird[birdName] = {
				dates: [observation.date],
				averageCoordinates: observation.coordinates,
			};
		}
	});

	return groupedObservationsByBird;
}
