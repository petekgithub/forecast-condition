import React, { ChangeEvent } from "react";
import { optionType } from "../types";

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
  return <div></div>;
};

export default Search;

// weather condiiton
// Write the city you are curious about and find out the current weather
