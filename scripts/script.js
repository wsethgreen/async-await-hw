
/*
Write an asynchronous function and call it with async/await
    Write function called getRandomNumber that returns a promise
    In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
    Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
    Invoke your async function
*/

async function getRandomNumber() {

    let randomNumber = Math.floor(Math.random() * 1000);

    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(randomNumber), 500);
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // logs the random number to the console
};

getRandomNumber();


/*
Fetch remote data using async/await

Write an asynchronous function that accepts 1 parameter:
    A city name
When invoked, this function should use geocode.xyz's API 
to retrieve the city data, which uses a URL formatted as follows:

https://geocode.xyz/seattle?json=1

Once retrieved, print to the console the latitude and longitude.
Invoke your async function with a few cities as a test.
*/

async function getCoords(city) {
    // Set the api in variable
    const apiURL = `https://geocode.xyz/${city}?json=1`;

    // Await both the fetch and json calls
    const response = await fetch(apiURL);
    const jsonData = await response.json();

    // *** Below console.log is for testing purposes ***
    // console.log(jsonData);

    // save the latitude and longitude coordinates in variables
    const latitude = jsonData.latt;
    const longitude = jsonData.longt;
    const cityName = jsonData.standard.city;

    // Log the city, latitude, and longitude to console
    console.log(`${cityName} has a latitude of ${latitude} and longitude of ${longitude}.`);

};

getCoords("columbus");


