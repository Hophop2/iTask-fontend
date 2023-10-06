import React, { useEffect, useState } from "react";
import {
  DetailBox,
  DetailP,
  DetailSpan,
  DetailsWrapper,
  InfoBox,
  LeftBox,
  Loc,
  RightBox,
  Temp,
  WeatherImg,
} from "./weatherStyle";
import Sun from "../../../img/weather img/sunny.png";
import Clouds from "../../../img/weather img/cloudy.png";
import Rain from "../../../img/weather img/rainy.png";
import Snow from "../../../img/weather img/snow.png";
import Winds from "../../../img/weather img/wind.png";
import Storm from "../../../img/weather img/storm.png";
import Moon from "../../../img/weather img/moon.svg";

import _debounce from "lodash/debounce";

const CurrentWeather = ({ weatherData }) => {
  const [weatherImg, setWeatherImg] = useState(Sun);
  const { main, wind, name } = weatherData;

  useEffect(() => {
    if (weatherData) {
      let weatherIcon = weatherData?.weather[0].icon;
      if (weatherIcon === "01d") {
        setWeatherImg(Sun);
      } else if (weatherIcon === "01n") {
        setWeatherImg(Moon);
      } else if (
        weatherIcon === "02d" ||
        weatherIcon === "02n" ||
        weatherIcon === "03d" ||
        weatherIcon === "03n" ||
        weatherIcon === "04d" ||
        weatherIcon === "04n"
      ) {
        setWeatherImg(Clouds);
      } else if (
        weatherIcon === "09d" ||
        weatherIcon === "09n" ||
        weatherIcon === "10d" ||
        weatherIcon === "10n"
      ) {
        setWeatherImg(Rain);
      } else if (weatherIcon === "11d" || weatherIcon === "11n") {
        setWeatherImg(Storm);
      } else if (weatherIcon === "13d" || weatherIcon === "13n") {
        setWeatherImg(Snow);
      } else if (weatherIcon === "50d" || weatherIcon === "50n") {
        setWeatherImg(Winds);
      }
    }
  }, [weatherData]);

  let temp = main.temp.toFixed();
  let feelsLike = main.feels_like.toFixed();
  let humidity = wind.speed.toFixed();
  let winds = wind.speed.toFixed();

  return (
    <>
      <LeftBox>
        <WeatherImg src={weatherImg} alt="weather" />
        <InfoBox>
          <Temp>{temp}°C</Temp>
          <Loc>{name}</Loc>
        </InfoBox>
      </LeftBox>

      <RightBox>
        <DetailsWrapper>
          <DetailBox>
            <DetailP>{feelsLike}°C</DetailP>
            <DetailSpan>Feels like</DetailSpan>
          </DetailBox>
          <DetailBox>
            <DetailP>{winds}km/h</DetailP>
            <DetailSpan>Winds</DetailSpan>
          </DetailBox>
          <DetailBox>
            <DetailP>{humidity}</DetailP>
            <DetailSpan>Humidity</DetailSpan>
          </DetailBox>
        </DetailsWrapper>
      </RightBox>
    </>
  );
};

export default CurrentWeather;
