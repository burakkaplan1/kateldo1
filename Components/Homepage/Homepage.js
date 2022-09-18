import { useRecoilState } from "recoil";
import HomepageModal from "./Banner/HomepageBanner";
import Highlighted from "./Highlighted Posts/Highlighted";
import MiddleSearchSection from "./Middle Search/MiddleSearchSection";
import MostCards from "./MostAds/MostCards";
import FinderBoxs from "./Small Finder/FinderBoxs";

function Homepage() {
  return (
    <div className="dark:bg-gray-900 bg-white py-10 z-0">
      <HomepageModal />
      <FinderBoxs />
      <MiddleSearchSection />
      <MostCards />
      <Highlighted />
    </div>
  );
}

export default Homepage;
