const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key":
            "7ff15ec68dmsh55659d635378d53p192394jsn82795d7b3e8c",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

const weather = (city) => {
    cityName.innerHTML = city;
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
        city,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);

            // cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            // feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            // min_temp.innerHTML = response.min_temp;
            // max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
    e.preventDefault();
    weather(city.value);
});
weather("Siliguri");






// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '7ff15ec68dmsh55659d635378d53p192394jsn82795d7b3e8c',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };
// const weather = (city) => {
//     cityName.innerHTML = city;
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city', options)
//         .then(response => response.json())
//         .then(response => console.log(response))

//      // cloud_pct.innerHTML = response.cloud_pct;
//      temp.innerHTML = response.temp;
//     // feels_like.innerHTML = response.feels_like;
//     humidity.innerHTML = response.humidity;
//     // min_temp.innerHTML = response.min_temp;
//     // max_temp.innerHTML = response.max_temp;
//     wind_speed.innerHTML = response.wind_speed;
//     wind_degrees.innerHTML = response.wind_degrees;
//     sunrise.innerHTML = response.sunrise;
//     sunset.innerHTML = response.sunset;
// 	.catch (err => console.error(err));
// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     weather(city.value);
// });
// weather("Siliguri");