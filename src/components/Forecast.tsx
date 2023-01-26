import { forecastType } from "../types";
import Sunrise from "../assets/images/sunrise2.png";
import Sunset from "../assets/images/sunset2.png";
import IconWrapper from "./IconWrapper";

import {
  getHumidityValue,
  getSunTime,
  getWindDirection,
  getPop,
  getVisibilityValue,
} from "../helpers";

type Props = {
  data: forecastType;
};

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>o</sup>
  </span>
);

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];

  return (
    <div
      className="w-full md:max-w-[500px] py-4 md:py-4
    md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls
    rounded drop-shadow-lg"
    >
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name}
            <span className="font-thin"> {data.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p className="text-md">
            {today.weather[0].main} - {today.weather[0].description}
          </p>
        </section>
        <section className="flex overflow-x-scroll scrollbar-thumb-cyan-200 scrollbar-track-blue-900 scrollbar-thin h-32 mt-4 pb-2 mb-5 ">
          {data.list.map((item, i) => (
            <div
              className="inline-block text-center w-[50px] flex-shrink-0"
              key={i}
            >
              <p className="text-sm">
                {i === 0 ? "Now" : `${new Date(item.dt * 1000).getHours()}:00`}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={`weather-icon-${item.weather[0].description}`}
              />
              <p className="text-sm font-bold">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>
        <section className="flex flex-wrap justify-between text-zinc-700">
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <img src={Sunrise} alt="sunrise-img" />
            <span className="mt-2">{getSunTime(data.sunrise)}</span>
            <p className="text-indigo-900">Good Morning</p>
          </div>
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <img src={Sunset} alt="sunset-img" />
            <span className="mt-2">{getSunTime(data.sunset)}</span>
            <p className="text-indigo-900">Good Evening</p>
          </div>
          {/* wind */}
          <IconWrapper
            icon="wind"
            title="Wind"
            info={`${Math.round(today.wind.speed)} km/h`}
            description={`${getWindDirection(
              Math.round(today.wind.deg)
            )}, gusts ${today.wind.gust.toFixed(1)} km/h`}
          />
          {/* feels like */}
          <IconWrapper
            icon="feels"
            title="Feels like"
            info={<Degree temp={Math.round(today.main.feels_like)} />}
            description={`Feels ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? "colder"
                : "warmer"
            }`}
          />
        </section>
      </div>
    </div>
  );
};

export default Forecast;
