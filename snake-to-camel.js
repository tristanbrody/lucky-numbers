// Python programmers write variable names in snake_case, where each word is lowercased and joined by underscores. JavaScript programmers write variable names in camelCase, where the initial word is lowercase, and other words are capitalized and jammed together.

// Given a variable name in snake_case, return a string with that variable name written in camelCase.

// For example:

// snakeToCamel("awesome_sauce"); // "awesomeSauce"
// snakeToCamel("a_man_a_plan"); // "aManAPlan"
// snakeToCamel("HOW_ABOUT_NOW?"); // "HOWABOUTNOW?"

function snakeToCamel(snake_case) {
	let camelCase = '';
	for (let index = 0; index < snake_case.length; index++) {
		if (snake_case[index] === '_') {
			camelCase += snake_case[index + 1].toUpperCase();
			index++;
		} else {
			camelCase += snake_case[index];
		}
	}
	return camelCase;
}
