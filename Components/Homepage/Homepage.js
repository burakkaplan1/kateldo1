import { useRecoilState } from "recoil";
import { DarkModeState, LanguageState } from "../../atoms/states";
import HomepageModal from "./Banner/HomepageBanner";
import Highlighted from "./Highlighted Posts/Highlighted";
import MiddleSearchSection from "./Middle Search/MiddleSearchSection";
import FinderBoxs from "./Small Finder/FinderBoxs";

function Homepage() {
  const [language, setLanguage] = useRecoilState(LanguageState);
  // const [darkMode, setDarkMode] = useRecoilState(DarkModeState);
  return (
    <div className="dark:bg-gray-900 bg-white py-10 z-0">
      <HomepageModal />
      <FinderBoxs />
      <MiddleSearchSection />
      <Highlighted />
    </div>
  );
}

export default Homepage;
