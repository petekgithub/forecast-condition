import Forecast from "./components/Forecast";
import Search from "./components/Search";
import useForecast from "./hooks/useForecast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SetStateAction } from "react";

const App = (): JSX.Element => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast();

  return (
    <BrowserRouter>
      <main className="flex justify-center items-center bg-blue-400 h-[100vh] w-full">
        <Routes>
          <Route
            path="/forecast"
            element={
              <Forecast
                data={forecast}
                term={""}
                setTerm={function (value: SetStateAction<string>): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
          <Route
            path="/"
            element={
              <Search
                term={term}
                options={options}
                onInputChange={onInputChange}
                onOptionSelect={onOptionSelect}
                onSubmit={onSubmit}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
