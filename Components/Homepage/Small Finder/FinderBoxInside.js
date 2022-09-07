import { useRecoilState } from "recoil";
import { DarkModeState, LanguageState } from "../../../atoms/states";

function FinderBoxInside(props) {
  // const [darkMode, setDarkMode] = useRecoilState(DarkModeState);
  const [language, setLanguage] = useRecoilState(LanguageState);
  return (
    <div
      className="dark:bg-blue-900 dark:text-white bg-white text-blue-700
      flex-center-between mx-1 my-2 py-1 px-2 w-[95%] sm:w-64 border-2 border-blue-500 rounded-sm cursor-pointer hover:scale-105 lg:hover:scale-110 transition-all duration-150 ease-out"
    >
      <h1 className="font-semibold lg:text-base md:text-xs text-sm">
        {language === "Nederlands"
          ? props.NederlandsText
          : language === "English"
          ? props.EnglishText
          : props.TurkceText}
      </h1>
      <img
        className="lg:w-16 lg:h-16 w-14 h-14 "
        src={props.image}
        alt="illustration"
      />
    </div>
  );
}

export default FinderBoxInside;
