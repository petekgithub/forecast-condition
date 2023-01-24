import { optionType, forecastType } from "./../types/index";
import { ChangeEvent, useState, useEffect } from "react";

const useForecast = () => {
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);
  const [options, setOptions] = useState<[]>([]);

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          switch (res.status) {
            case 400:
              break;
            case 401:
              break;
            case 404:
              break;
            case 500:
              break;
          }
        }
        return res.json();
      })
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };
        setForecast(forecastData);
      });
    //.catch((e) => console.log(e));
  };

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => {
        if (!res.ok) {
          switch (res.status) {
            case 400:
              break;
            case 401:
              break;
            case 404:
              break;
            case 500:
              break;
          }
        }
        return res.json();
      })
      .then((data) => setOptions(data));
    //.catch((e) => console.log(e));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    if (value === "") return;
    getSearchOptions(value);
  };

  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    term,
    options,
    forecast,
    onOptionSelect,
    onSubmit,
    onInputChange,
  };
};

export default useForecast;
