import React from "react";
import { forecastType } from "../types";

type Props = {
  data: forecastType;
};

const Forecast = ({ data }: Props) => {
  const today = data.list[0];

  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-green-300 bg-opacity-30 backdrop-blur-ls rounded drop-shadow-lg">
      <div></div>
    </div>
  );
};

export default Forecast;
