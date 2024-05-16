import { useState } from "react"
import axios from "axios"

function Weather() {

    const [city, setcity] = useState()
    const [weather, setweather] = useState("")
    const [desc, setdesc] = useState("")
    const [temp, settemp] = useState("")


    function handleCity(event) {
        setcity(event.target.value)
    }

    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37945542c3c94dec4cc9c4ebf8981d3f`)
        weatherData.then(function (success) {
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)

        }).catch(function () {
            alert("No City found in this name !")
        })
    }

    return (
        <div className=" bg-black p-7 md:p-20">
            <div className=" bg-green-400 p-10 rounded-md">
                <h1 className=" text-black font-medium text-2xl"> Weather Report </h1>
                <p className="">I can give you Weather report abt your city !</p>
                <input onChange={handleCity} placeholder="Enter city name" type="text" className="p-1 rounded-md mt-2 border border-black" /><br />
                <button onClick={getWeather} className=" bg-black text-white p-2 rounded-md mt-2">Get Report</button>

                <div className=" md:mt-5 mt-6">
                    <h1><b>Weather : </b>{weather}</h1>
                    <h1><b>Temperature : </b>{temp} </h1>
                    <h1><b>Description : </b> {desc}</h1>
                </div>
            </div>
        </div>

    )
}

export default Weather