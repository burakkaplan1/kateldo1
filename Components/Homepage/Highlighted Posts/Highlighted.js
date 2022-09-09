import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllCards from "./AllCards";
import TabCardsRealEstate from "./TabCardsRealEstate";
import VehicleCards from "./VehicleCards";

function Highlighted() {
  const [tab, setTab] = useState("All");
  return (
    <div className="px-2">
      <Tabs onChange={(e) => console.log(e)}>
        <TabList>
          <Tab onClick={(e) => setTab("All")}>All</Tab>
          <Tab onClick={(e) => setTab("RealEstate")}>Real Estate</Tab>
          <Tab onClick={(e) => setTab("Vehicle")}>Vehicle</Tab>
        </TabList>

        <TabPanel>
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
