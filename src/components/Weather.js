import React, { useState, useEffect } from "react"
import { Loader } from "../components"
import axios from "axios"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { parentVariants, ChildVariants } from "../animations/animations"

const Forecast = () => {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState({})

  const today = new Date()
  const tomorrow = new Date(today)
  const resultDate = tomorrow.setDate(tomorrow.getDate() + 1)
  const dtNew = new Date(resultDate).toDateString()
  const temperature = weather.day
  const limitTemp = {
    deg: 10,
    less: " less ",
    more: " more ",
  }

  const searchData = async () => {
    setLoading(true)

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.5074&lon=0.1278&exclude=minutely,hourly&units=metric&appid=${process.env.GATSBY_WEATHER_API}`

    try {
      const response = await axios.get(url)

      setWeather(response.data.daily[1].temp)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    searchData()
  }, [])

  return (
    <motion.div
      variants={parentVariants}
      initial="from"
      animate="to"
      exit="exit"
      className="forecast container"
    >
      <h3>
        You might need to consider tomorrow's weather forecast before you
        proceed with your product orders
      </h3>

      {loading ? (
        <Loader />
      ) : (
        weather && (
          <motion.div variants={ChildVariants} className="weather-data">
            <div className="weather__tagline">
              <p>Weather forecast for London on {dtNew}:</p>
            </div>

            <div className="weather-data__box">
              <span className="weather-data__property">
                <p className="weather-data__title">Temperature:</p>
                <p className="weather-data__value">{weather.day}°C</p>
              </span>
            </div>
            <div className="tips">
              <p>*Tip:</p>
              <p>
                Temperature for tomorrow is
                {temperature < limitTemp.deg ? limitTemp.less : limitTemp.more}
                than {limitTemp.deg}°C
              </p>
              {temperature < 10 ? (
                <p>Please make sure that you'll order more hot food</p>
              ) : (
                <p>Order more salads and yogurts </p>
              )}
            </div>
          </motion.div>
        )
      )}
      <Link to="/stock">
        <button>Check Inventory & Place Orders</button>
      </Link>
    </motion.div>
  )
}

export default Forecast
