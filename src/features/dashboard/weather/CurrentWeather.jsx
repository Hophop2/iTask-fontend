import React, { useEffect, useState } from "react";
import { S } from "./weatherStyle";
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
      <S.LeftBox>
        <S.WeatherImg src={weatherImg} alt="weather" />
        <S.InfoBox>
          <S.Temp>{temp}°C</S.Temp>
          <S.Loc>{name}</S.Loc>
        </S.InfoBox>
      </S.LeftBox>

      <S.RightBox>
        <S.DetailsWrapper>
          <S.DetailBox>
            <S.DetailP>{feelsLike}°C</S.DetailP>
            <S.DetailSpan>Feels like</S.DetailSpan>
          </S.DetailBox>
          <S.DetailBox>
            <S.DetailP>{winds}km/h</S.DetailP>
            <S.DetailSpan>Winds</S.DetailSpan>
          </S.DetailBox>
          <S.DetailBox>
            <S.DetailP>{humidity}</S.DetailP>
            <S.DetailSpan>Humidity</S.DetailSpan>
          </S.DetailBox>
        </S.DetailsWrapper>
      </S.RightBox>
    </>
  );
};

export default CurrentWeather;
