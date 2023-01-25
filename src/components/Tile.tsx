// sometimes info can be degree or % for that reason JSX.Element

import Feels from "../assets/Icons/Feels";
import Wind from "../assets/Icons/Wind";
import Humidity from "../assets/Icons/Humidity";
import Visibility from "../assets/Icons/Visibility";

type Props = {
  icon: "wind" | "feels" | "humidity" | "visibility";
  title: string;
  info: string | JSX.Element;
  description: string;
};

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
};

const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon];
  return (
    <article
      className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-1g
    rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between"
    >
      <div className="flex items-center text-sm font-bold">
        <Icon />
        <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg">{info}</h3>
      <p className="text-xs font-bold">{description}</p>
    </article>
  );
};

export default Tile;
