import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useRecoilState } from "recoil";
import { HomepageCardsState } from "../../../atoms/states";
import AllCards from "./AllCards";
import TabCardsRealEstate from "./TabCardsRealEstate";
import VehicleCards from "./VehicleCards";

function Highlighted() {
  const [HomepageCards, setHomepageCard] = useRecoilState(HomepageCardsState);
  return (
    <div className="px-2">
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Real Estate</Tab>
          <Tab>Vehicle</Tab>
        </TabList>

        <TabPanel className="">
          <AllCards />
        </TabPanel>
        <TabPanel>
          <TabCardsRealEstate />
        </TabPanel>
        <TabPanel>
          <VehicleCards />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Highlighted;
