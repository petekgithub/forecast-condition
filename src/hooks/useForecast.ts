import { optionType, forecastType } from "./../types/index";
import { ChangeEvent, useState, useEffect } from "react";

const useForecast = () => {
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);
  const [options, setOptions] = useState<[]>([]);
  const apiKey = process.env.API_KEY;

  //first fetch
  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${apiKey}`
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

  // 2nd fetch
  const getForecast = (city: optionType) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${apiKey}`
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
    setTerm,
    options,
    forecast,
    onOptionSelect,
    onSubmit,
    onInputChange,
  };
};

export default useForecast;
