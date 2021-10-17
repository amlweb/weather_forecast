import React from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherResults from "../components/WeatherResults";
import WeatherPopular from "../components/WeatherPopular";

const Weather = () => (
  <>
    <WeatherForm />
    <WeatherResults />
    <WeatherPopular />
  </>
);

export default Weather;
