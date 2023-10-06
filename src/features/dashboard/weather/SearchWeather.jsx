import React, { useState } from "react";
import styled from "styled-components";

import { AsyncPaginate } from "react-select-async-paginate";

const SearchWeather = ({ onSearchChange }) => {
  const [search, setSearch] = useState("warsaw");

  const loadOptions = async (inputValue) => {
    const response = await fetch(
      `http://localhost:3500/weather/search?search=${inputValue}`
    );
    const response_1 = await response.json();
    return {
      options: response_1.data.map((city) => {
        return {
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <Container>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className="location-input"
      />
    </Container>
  );
};

export default SearchWeather;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  .location-input {
    width: 100%;
  }
`;
