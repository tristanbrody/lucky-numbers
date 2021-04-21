// /** processForm: get data from form and make AJAX call to our API. */

// async function processForm(e) {
// 	e.preventDefault();

// 	const data = new FormData(e.target);
// 	const formData = Object.fromEntries(data.entries());

// 	const resp = await fetch('/api/get-lucky-num', {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	});
// 	console.log(resp);
// 	const parsedResp = JSON.parse(resp.data);
// 	if (parsedResp.errors) {
// 		for (const [key, value] of parsedResp.errors) {
// 			document.querySelector(`#${key}-err`).append('Invalid response');
// 		}
// 	}
// }

// /** handleResponse: deal with response from our lucky-num API. */

// function handleResponse(resp) {}

// const form = document.querySelector('#lucky-form').addEventListener('submit', processForm);
