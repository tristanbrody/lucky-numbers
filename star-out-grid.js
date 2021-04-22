// If we have a grid like this:

// A B C
// D * E
// F G H
// We should take every row and every column that contains a star (*) and star-out that row and column. So that grid would turn into:

// A * C
// * * *
// F * H
// A grid will be defined as an array-containing-arrays, so that original grid would be represented like this:

const example = [
	['*', 'B', '*'],
	['D', 'A', 'E'],
	['F', 'G', 'H']
];
// Write a function that, given a NxM grid, like the one above, returns a grid with all cells in a column or row originally containing a star turned into stars. Values which have been transformed into stars do not affect their rows and columns. You should do this in-place – by changing the original grid, not by creating a new one. Your function should return the grid.

// For example, for the input above, it should return:

const example2 = [
	['A', '*', 'C'],
	['*', '*', '*'],
	['A', '*', 'H']
];

console.log(
	starOutGrid([
		['*', 'B', 'C'],
		['D', 'E', '*'],
		['G', 'H', 'I'],
		['J', 'K', 'L']
	])
);

function starOutGrid(grid) {
	//create an object that will store coordinates and info on spots we need to update in place on original grid
	const gridMapping = { coordinates: [] };
	const originalRowLength = grid[0].length;
	for (let a = 0; a < grid.length; a++) {
		for (let b = 0; b < grid[a].length; b++) {
			console.log(grid[a][b]);
			if (grid[a][b] === '*') {
				/* if current value is a star, update gridMapping object with coordinates of
                    both vertical axes and horizontal (same-row) axes */
				//need to determine position of current row
				if (a === 0) {
					gridMapping['coordinates'].push(
						[a, b],
						[a + 1, b],
						[a, b - 1],
						[a, b + 1],
						[a, b + 2],
						[a + 3, b],
						[a + 2, b]
					);
				} else {
					gridMapping['coordinates'].push(
						[a, b],
						[a, b - 2],
						[a - 1, b],
						[a + 1, b],
						[a + 2, b],
						[a, b - 1],
						[a, b + 1]
					);
				}
			}
		}
	}
	console.log(gridMapping['coordinates']);
	for (let coordinate of gridMapping['coordinates']) {
		console.log(coordinate);
		let a = coordinate[0];
		let b = coordinate[1];
		console.log([a, b]);
		if (b != '-1' && b < originalRowLength) {
			try {
				grid[a][b] = '*';
				console.log(grid[a][b]);
			} catch (error) {
				console.log(error);
				continue;
			}
		}
	}
	return grid;
}
