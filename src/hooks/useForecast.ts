import { optionType, forecastType } from "./../types/index";
import { useState } from "react";

const useForecast = () => {
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const getForecast = (city: optionType) => {
    fetch(``);
  };

  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  return {
    onSubmit,
  };
};

export default useForecast;
