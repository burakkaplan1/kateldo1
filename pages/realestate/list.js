import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import Realestate from "../../Components/RealEstate/Realestate";

const list = () => {
  return (
    <div className="dark:bg-gray-500">
      <Header />
      <Realestate />
      <Footer />
    </div>
  );
};

export default list;
