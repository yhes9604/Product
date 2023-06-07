<script setup>
import { ref, onMounted } from "vue";
const api_key = import.meta.env.VITE_WEATHER_KEY;
const base_url = "https://api.openweathermap.org/data/2.5/";
const query = ref("Taipei");

const weather = ref({});
const date = ref("");
const day_list = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day_date = new Date().getDay();
const getDay = ref(day_list[day_date]);
const dataforecast = ref("");
const forecastweather = ref({});
const B = ref([]);
const fetchWeather = async () => {
  console.log(query);
  const data = await fetch(
    `${base_url}weather?q=${query.value}&units=metric&APPID=${api_key}`
  );
  const dataforecast = await fetch(
    `${base_url}forecast/?q=${query.value}&units=metric&appid=${api_key}`
  );
  weather.value = await data.json();

  forecastweather.value = await dataforecast.json();
  date.value = new Date().toLocaleDateString();
  console.log(weather.value);
  console.log(forecastweather.value);
};

onMounted(() => {
  fetchWeather();
});
</script>
<template>
  <div class="container">
    <div class="weather-side">
      <div class="weather-gradient"></div>
      <div class="date-container">
        <h2 class="date-dayname">{{ getDay }}</h2>
        <span class="date-day">{{ date }}</span>
        <i class="fa fa-map-pin location-icon"></i>
        <span class="location">{{ weather.name }}</span>
      </div>
      <div class="weather-container" v-if="weather.main">
        <i class="fa-regular fa-sun weather-icon"></i>
        <h1 class="weather-temp">{{ weather.main.temp }}°C</h1>
        <h3 class="weather-desc">{{ weather.weather[0].main }}</h3>
      </div>
    </div>

    <div class="info-side">
      <div class="today-info-container">
        <div class="today-info" v-if="weather.main">
          <div class="precipitation">
            <span class="title">Feels_like</span>
            <span class="value">{{ weather.main.feels_like }}</span>
            <div class="clear"></div>
          </div>
          <div class="humidity">
            <span class="title">HUMIDITY</span
            ><span class="value">{{ weather.main.humidity }}</span>
            <div class="clear"></div>
          </div>
          <div class="wind">
            <span class="title">WIND</span
            ><span class="value">{{ weather.wind.speed }}km/h</span>
            <div class="clear"></div>
          </div>
        </div>
        <div class="week-container">
          <ul class="week-list">
            <li class="active">
              <i class="day-icon fa-regular fa-sun"></i
              ><span class="day-name">Tue</span
              ><span class="day-temp">29°C</span>
            </li>
            <li>
              <i class="day-icon fa fa-cloud"></i>
              <span class="day-name">Wed</span
              ><span class="day-temp">21°C</span>
            </li>
            <li>
              <i class="day-icon fa fa-cloud"></i>

              <span class="day-name">Thu</span
              ><span class="day-temp">08°C</span>
            </li>
            <li>
              <i class="day-icon fa fa-cloud"></i>

              <span class="day-name">Fry</span
              ><span class="day-temp">19°C</span>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="location-container">
          <button class="location-button">
            <i class="fa fa-map-pin"></i>
            <span class="search-box">
              <input
                type="text"
                class="search-bar"
                placeholder="Change location"
                v-model="query"
                @keyup.enter="fetchWeather"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap");
:root {
  --gradient: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
}
* {
  box-sizing: border-box;
  line-height: 1.25rem;
}
.clear {
  clear: both;
}
body {
  margin: 0;
  width: 100%;
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  background-color: #343d4b;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  border-radius: 25px;
  box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  background-color: #222831;
  color: #ffffff;
  height: 400px;
}
.weather-side {
  position: relative;
  height: 100%;
  border-radius: 25px;
  background-image: url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
  width: 300px;
  margin-left: -10px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  transition: transform 300ms ease;
  transform: translateZ(0) scale(1.02) perspective(1000px);
  float: left;
}
.weather-side:hover {
  transform: scale(1.1) perspective(1500px) rotateY(10deg);
}
.weather-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: var(--gradient);
  border-radius: 25px;
  opacity: 0.8;
}
.date-container {
  position: absolute;
  top: 25px;
  left: 25px;
}
.date-dayname {
  margin: 0;
}
.date-day {
  display: block;
}
.location {
  display: inline-block;
  margin-top: 10px;
}
.location-icon {
  display: inline-block;
  height: 0.8em;
  width: auto;
  margin-right: 5px;
}
.weather-container {
  position: absolute;
  bottom: 25px;
  left: 25px;
  text-align: left;
}
.weather-icon {
  height: 60px;
  width: auto;
}
.weather-temp {
  margin: 0;
  font-weight: 700;
  font-size: 4em;
}
.weather-desc {
  margin: 0;
}

.info-side {
  position: relative;
  float: left;
  height: 100%;
  padding-top: 25px;
}
.today-info {
  padding: 15px;
  margin: 0 25px 25px 25px;
  border-radius: 10px;
}
.today-info > div:not(:last-child) {
  margin: 0 0 10px 0;
}
.today-info > div .title {
  float: left;
  font-weight: 700;
}
.today-info > div .value {
  float: right;
}
.week-list {
  list-style-type: none;
  padding: 0;
  margin: 10px 35px;
  box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.week-list > li {
  float: left;
  padding: 15px;
  cursor: pointer;
  transition: 200ms ease;
  border-radius: 10px;
}
.week-list > li:hover {
  transform: scale(1.1);
  background: #fff;
  color: #222831;
  box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
}
.active {
  background: #fff;
  color: #222831;
  border-radius: 10px;
}
.week-list > li .day-name {
  display: block;
  margin: 10px 0 0 0;
  text-align: center;
}
.week-list > li .day-icon {
  display: block;
  height: 30px;
  width: auto;
  margin: 0 auto;
}
.week-list > li .day-temp {
  display: block;
  text-align: center;
  margin: 10px 0 0 0;
  font-weight: 700;
}
.location-container {
  padding: 25px 35px;
}
.location-button {
  outline: none;
  width: 100%;
  border: none;
  border-radius: 25px;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  background-image: var(--gradient);
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  transition: transform 200ms ease;
}
.location-button:hover {
  transform: scale(1.1);
}
.search-bar {
  border: none;
  border-radius: 3px;
  margin-left: 8px;
  background: none;
}
::placeholder {
  color: #ffffff;
}
.search-bar:focus {
  outline: 0;
  border: 1px solid rgba(107, 104, 104, 0.399);
}
</style>
