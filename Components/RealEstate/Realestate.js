import AllCards from "./AllCards";

import { RealEstateStates } from "./RealEstateStates";
import Sidebar from "./Sidebar";

const Realestate = () => {
  return (
    <div>
      <RealEstateStates>
        <div className="dark:bg-gray-900 flex justify-between space-x-1 pb-10">
          <Sidebar />
          <AllCards />
        </div>
      </RealEstateStates>
    </div>
  );
};

export default Realestate;
