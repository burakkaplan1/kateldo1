import { useState } from "react";
import { Menu } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { DarkModeState, LanguageState } from "../../../atoms/states";
import { ChevronDownIcon, CurrencyEuroIcon } from "@heroicons/react/outline";

function SearchInputArea(props) {
  const [inputValue, setInputValue] = useState("");
  const [lowValue, setLowValue] = useState("");
  const [highValue, setHighValue] = useState("");
  // const [darkMode, setDarkMode] = useRecoilState(DarkModeState);
  const [language, setLanguage] = useRecoilState(LanguageState);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-3">
      {/* Search */}
      <input
        className="lg:w-6/12 w-full dark:border-gray-900 border-blue-300 dark:focus:ring-gray-800 focus:ring-blue-700 focus:border-blue-700 dark:bg-gray-700 dark:text-white dark:placeholder-shown:text-gray-200"
        type="text"
        placeholder={props.placeholder}
        value={inputValue}
        onChange={handleInput}
      />
      {/* Maximim Minimu price */}
      <div className="lg:w-5/12 w-full flex lg:items-center lg:space-x-1">
        {/* Minimum */}
        <div className="w-full mx-auto  ">
          <div className="flex mt-5 lg:mt-0 p-3 rounded-md relative">
            <label
              htmlFor="lowPrice"
              className={`text-xs absolute -top-2 dark:text-white text-blue-700  ${
                lowValue === "" && "hidden"
              }`}
            >
              {language === "Nederlands"
                ? "Minimum prijs "
                : language === "English"
                ? "Minimum price "
                : "En düşük fiyat"}
            </label>
            <div className="absolute inset-y-0 pl-3  items-center hidden lg:inline-flex">
              <CurrencyEuroIcon className=" w-5 dark:text-white  text-gray-500" />
            </div>

            <input
              className="bg-white dark:bg-gray-700 dark:text-white text-black pl-2 lg:pl-10 block w-full sm:text-md border-blue-300  focus:ring-blue-700 focus:border-blue-700 dark:border-black"
              type="number"
              id="lowPrice"
              onChange={(e) => setLowValue(e.target.value)}
              value={lowValue}
              placeholder={
                language === "Nederlands"
                  ? "Minimum prijs "
                  : language === "English"
                  ? "Minimum price "
                  : "En düşük fiyat"
              }
            />
          </div>
        </div>
        {/* Maximum */}
        <div className="w-full lg:mx-auto  ">
          <div className="flex mt-5 lg:mt-0 p-3 rounded-md relative">
            <label
              htmlFor="highPrice"
              className={`text-xs absolute -top-2 text-blue-700  ${
                highValue === "" && "hidden"
              }`}
            >
              {language === "Nederlands"
                ? "Maximale prijs "
                : language === "English"
                ? "Maximum price "
                : "En yüksek fiyat"}
            </label>
            <div className="absolute inset-y-0 pl-3 items-center hidden lg:inline-flex">
              <CurrencyEuroIcon className=" w-5 dark:text-white text-gray-500" />
            </div>
            <input
              id="highValue"
              type="number"
              className="bg-white dark:bg-gray-700 dark:text-white text-black pl-2 lg:pl-10 block w-full sm:text-md border-blue-300  focus:ring-blue-700 focus:border-blue-700 dark:border-black"
              value={highValue}
              onChange={(e) => setHighValue(e.target.value)}
              placeholder={
                language === "Nederlands"
                  ? "Maximale prijs "
                  : language === "English"
                  ? "Maximum price "
                  : "En yüksek fiyat"
              }
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="lg:w-1/12 w-full bg-blue-700 text-white p-2 mx-auto"
      >
        Search
      </button>
    </div>
  );
}

export default SearchInputArea;
