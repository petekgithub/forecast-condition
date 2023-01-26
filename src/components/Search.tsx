import { ChangeEvent } from "react";
import { optionType } from "../types";
import Graphic from "../assets/Icons/Weather-rafiki.svg";

type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <main className="min-h-screen flex items-stretch text-black ">
      <div className="lg:flex w-1/2 hidden bg-teal-200 bg-no-repeat bg-cover relative items-center">
        <img className="scale-200" src={Graphic} alt="SVG as an img" />
      </div>
      <section className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
        <div className="flex-col">
          <h1 className="text-8xl text-neutral-800">Weather Condition</h1>
          <p className="text-neutral-900 mt-4 text-lg">
            Write the city you are curious about and find out the current
            weather.
          </p>
        </div>

        <div className="relative flex mt-20 md:mt-8">
          <input
            type="text"
            value={term}
            className="px-14 py-1 rounded-l-md border-2 border-blue-400"
            onChange={onInputChange}
          />
          <ul className="absolute top-10 bg-blue-200 ml-1 rounded-b-md">
            {options.map((option: optionType, index: number) => (
              <li key={option.name + "-" + index}>
                <button
                  className="text-left text-sm w-full hover:bg-blue-100 hover:text-black px-2 py-1 cursor-pointer"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}, {option.country}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="rounded-r-md border-2 z-50 border-zinc-800 hover:border-blue-900 hover:text-black text-zinc-200 px-2 py-2 cursor-pointer"
            onClick={onSubmit}
          >
            Search
          </button>
        </div>
      </section>
    </main>
  );
};

export default Search;
