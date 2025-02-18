import React, { useState } from "react";

function WeatherDashboard() {

  const [searchQuery , setSearchQuery] = useState()
  const [selectedCity , setSelectedCity] = useState({})
  const [previousSearches , setPreviousSearches] = useState([])
  const [errorMsg , setErrorMsg] = useState([])

  

  // Mock weather data
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    "London": {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  const handleSearchQuery = (e) =>{
    setSearchQuery(e.target.value)
  }

  const handleSearch = () =>{
    console.log(mockWeatherData[searchQuery])
   
    if(mockWeatherData?.[searchQuery]){
      setPreviousSearches(...previousSearches, mockWeatherData[searchQuery])
      setSelectedCity(mockWeatherData[searchQuery])
    }else{
      setSelectedCity({})
      setErrorMsg('City Not Found')
    }
  }

  return (
    <div>
      <input type="text" onChange={handleSearchQuery} id="citySearch" placeholder="Search for a city..." />
      <button onClick={handleSearch} id="searchButton">Search</button>
      <div id="weatherData">
        <div>Temperature: {selectedCity?.temperature}</div>
        <div>Humidity: {selectedCity?.humidity}</div>
        <div>Wind Speed: {selectedCity?.windSpeed}</div>
        <div>{errorMsg}</div>
      </div>
      <div id="previousSearches"></div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;
