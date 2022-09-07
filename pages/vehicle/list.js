import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Vehicles from "../../Components/Vehicle/Vehicles";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Sidebar", "Colours"])),
    },
  };
}
const vehicle = (props) => {
  return (
    <div>
      <Header />
      <Vehicles />
      <Footer />
    </div>
  );
};

export default vehicle;
