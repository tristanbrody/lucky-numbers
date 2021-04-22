/** processForm: get data from form and make AJAX call to our API. */

async function processForm(e) {
	e.preventDefault();
	//clear out text from previous submissions
	document.getElementById('lucky-results').innerText = '';
	let errorContainers = document.querySelectorAll(`[id$="err"]`);
	for (error of errorContainers) {
		error.innerText = '';
	}

	//get data from post request
	const data = new FormData(e.target);
	const formData = Object.fromEntries(data.entries());

	//make call to our endpoint
	const resp = await fetch('/api/get-lucky-num', {
		method: 'post',
		body: JSON.stringify(formData)
	}).then(response => response.json());
	if ('errors' in resp) {
		for (const [key, value] of Object.entries(resp.errors)) {
			document.querySelector(`#${key}-err`).append('Invalid response');
		}
	} else if (resp === false) document.append('Please try again later');
	//append data for successful API call
	else {
		let normalizedResponse = `
        <ul>
            <li>${resp.num['fact']}</li>
            <li>${resp.year['fact']}</li>
        </ul>
        `;
		document.getElementById('lucky-results').innerHTML += normalizedResponse;
	}
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {}

const form = document.querySelector('#lucky-form').addEventListener('submit', processForm);
