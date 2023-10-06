import React, { useState } from "react";
import { Container, WeatherBox } from "./weatherStyle";
import CurrentWeather from "./CurrentWeather";
import SearchWeather from "./SearchWeather";
import { useGetWeatherDataQuery } from "./weatherApiSlice";

const Weather = () => {
  const [location, setLocation] = useState("london");
  const { data: weatherData, isLoading } = useGetWeatherDataQuery(location);

  if (isLoading) return <p>Loading...</p>;
  const handleOnSearchChange = (searchData) => {
    const newLabel = searchData.label.split(", ").shift();
    setLocation(newLabel);
  };
  return (
    <Container>
      <WeatherBox>
        <SearchWeather onSearchChange={handleOnSearchChange} />

        <CurrentWeather weatherData={weatherData} />
      </WeatherBox>
    </Container>
  );
};

export default Weather;
