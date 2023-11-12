import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import SearchWeather from "./SearchWeather";
import { useGetWeatherDataQuery } from "./weatherApiSlice";
import styled from "styled-components";

const Weather = () => {
  const [location, setLocation] = useState("london");
  const { data: weatherData, isLoading } = useGetWeatherDataQuery(location);

  if (isLoading) return <p>Loading...</p>;
  const handleOnSearchChange = (searchData) => {
    const newLabel = searchData.label.split(", ").shift();
    setLocation(newLabel);
  };
  return (
    <S.Container>
      <S.WeatherBox>
        <SearchWeather onSearchChange={handleOnSearchChange} />

        <CurrentWeather weatherData={weatherData} />
      </S.WeatherBox>
    </S.Container>
  );
};

export default Weather;

const S = {
  Container: styled.div`
    width: 50rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    @media (max-width: 1150px) {
      width: 30rem;
      height: 20rem;
    }
  `,
  WeatherBox: styled.div`
    width: 32rem;
    height: 17rem;
    padding: 1.5rem;
    background: rgba(255, 253, 253, 0.7);
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 40px;
    @media (max-width: 700px) {
      width: 14rem;
      height: 17rem;
      justify-content: center;
      align-items: center;
    }
  `,
};
