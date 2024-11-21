import React, { useState } from 'react'
import { SearchBox } from './SearchBox'
import { InfoBox } from './InfoBox'

export const WeatherApp = () => {
    const [weatherInfo, setweatherInfo] = useState(({
        city:"Delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    }));

    let updateInfo = (result) => {
        setweatherInfo(result);
    }
  return (
    <div>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}
