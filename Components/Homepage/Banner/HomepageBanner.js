import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { DarkModeState, LanguageState } from "../../../atoms/states";

function HomepageModal() {
  const [darkMode, setDarkMode] = useRecoilState(DarkModeState);
  const [language, setLanguage] = useRecoilState(LanguageState);
  const Router = useRouter();
  return (
    <div className="mx-2 flex space-x-4 z-0 ">
      <div className="relative flex-center-center w-full mx-auto">
        <img
          className={`${
            darkMode && "filter grayscale "
          }  w-full min-h-[50vh] object-cover rounded-lg brightness-50`}
          layout=""
          src="https://media.istockphoto.com/photos/colonial-style-house-picture-id1284097677?b=1&k=20&m=1284097677&s=170667a&w=0&h=1A7BkHG5OU4WCN7m22OOhvVmU21q4UsYVJPrS1kgcKI="
          alt="homepage pic"
        />
        <h1 className="absolute top-10 left-[10%] max-w-sm text-3xl sm:text-6xl font-extrabold text-white cursor-default">
          {language === "Nederlands"
            ? "Vind een"
            : language === "English"
            ? "Find a"
            : "Evlere"}
          <span className=" bg-clip-text bg-gradient-to-br from-purple-500 to-blue-500 ">
            {" "}
            {language === "Nederlands"
              ? "woning"
              : language === "English"
              ? "property"
              : "gözat"}
          </span>
        </h1>
        <div className="absolute bottom-[15%] left-[10%]">
          <button
            onClick={() => Router.push({ pathname: "/realestate/list" })}
            className="p-2 px-2 dark:bg-gray-900 bg-white border-2 border-blue-500 dark:border-gray-800 text-blue-500 dark:text-gray-200 text-sm sm:text-lg rounded-lg hover:bg-blue-500 dark:hover:bg-gray-800 hover:text-gray-100 dark:hover:text-white  focus:border-4 focus:ring-blue-300 dark:focus:ring-white cursor-pointer"
          >
            {language === "Nederlands"
              ? "Ontdek onroerend goed"
              : language === "English"
              ? "Explore real estates"
              : "Gayrimenkulleri keşfet"}
          </button>
        </div>
      </div>

      <div className="relative flex-center-between w-full mx-auto">
        <img
          className={`${
            darkMode && "filter grayscale "
          }  w-full min-h-[50vh] object-cover rounded-lg brightness-50`}
          layout=""
          src="https://media.istockphoto.com/photos/road-trip-with-my-best-friend-picture-id1324380685?b=1&k=20&m=1324380685&s=170667a&w=0&h=T7fFkZmHzvye117esYVj5aRmZ5po_67XbDxIELFkBDg="
          alt="homepage pic"
        />
        <h1 className="absolute top-10 left-[10%] max-w-sm text-3xl sm:text-6xl font-extrabold text-white cursor-default">
          {language === "Nederlands"
            ? "Vind een"
            : language === "English"
            ? "Find a"
            : "Taşıtlara"}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-500 ">
            {" "}
            {language === "Nederlands"
              ? "voertuig"
              : language === "English"
              ? "vehicle"
              : "gözat"}
          </span>
        </h1>
        <div className="absolute bottom-[15%] left-[10%]">
          <button
            role="button"
            className="p-2 px-2 dark:bg-gray-900 bg-white border-2 border-blue-500 dark:border-gray-800 text-blue-500 dark:text-gray-200 text-sm sm:text-lg rounded-lg hover:bg-blue-500 dark:hover:bg-gray-800 hover:text-gray-100 dark:hover:text-white  focus:border-4 focus:ring-blue-300 dark:focus:ring-white cursor-pointer"
            onClick={() => Router.push({ pathname: "/vehicle/list" })}
          >
            {language === "Nederlands"
              ? "Voertuigen verkennen"
              : language === "English"
              ? "Explore vehicles"
              : "Taşıtları keşfet"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomepageModal;
