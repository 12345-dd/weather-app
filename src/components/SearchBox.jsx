import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const SearchBox = ({updateInfo}) => {
    const [city, setcity] = useState("")
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e31109d3ef831040311cbb2ecfce3c3e";

    let getWeatherInfo = async() => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };
        updateInfo(result);
    }

    const handleChange = (e) => {
        setcity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        setcity("");
    }
  return (
    <div className='searchBox'>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            &nbsp;&nbsp;
            <Button variant="contained" size='large' type='submit' onClick={getWeatherInfo}>Search</Button>
        </form>
    </div>
  )
}
