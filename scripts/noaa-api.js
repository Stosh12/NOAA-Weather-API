const weatherContainer = document.querySelector(".noaa-weather-01");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'national-weather-service.p.rapidapi.com',
		'X-RapidAPI-Key': '50140ada1dmshfd4b32ee1e9f55cp1abf3fjsnf4fa35bd13c6'
	}
};

// fetch('https://national-weather-service.p.rapidapi.com/alerts/active', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


    fetch('https://national-weather-service.p.rapidapi.com/alerts/active', options)

    // Retrieve the response from the API and convert it to JSON
	.then(function(responseFromApi) {
		// TESTING: Display data directly from API (of type Response)
		console.log(responseFromApi);

		// Set variable equal to the response, which is converted to JSON
		let content = responseFromApi.json();

		// TESTING: Display the JSON Content (Object)
		console.log(content);

		// Returns the Object so that the Js can use it in the next '.then'
		return content;
	})

	// Grab the resulting JSON (converted above and returned as 'content')
	.then(function(resultingJson) {

		// assign the value property from the resulting JSON to a variable called 'randomJoke'
		let noaaWeather = resultingJson.value;

		// For testing purposes, the joke is being output to the console
		console.log(noaaWeather);

		// The innerHTML of 'myJokeContainer' is being set to an h1 followed by a paragraph that contains the
		// content of 'randomJoke'.
		weatherContainer.innerHTML = `
		<h1>NOAA Weather</h1>
		<p>${noaaWeather}</p>`;
	})

	// If there is an error message, it will be displayed in the console.
	.catch(err => console.error(err))