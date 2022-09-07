import { ArrowsExpandIcon } from "@heroicons/react/outline";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { BiArea, BiBed, BiBath } from "react-icons/bi";
const InfoParagraph = (props) => {
  return (
    <div className="pb-5 border-b-2 border-blue-200">
      <h1 className="text-xl md:text-3xl font-semibold dark:text-gray-200 text-gray-900 mb-3">
        {props.Municipality}, {props.Province}
      </h1>
      <h2 className="text-sm md:text-md dark:text-gray-50 text-gray-500 mb-3">
        {props.PostalCode}, {props.Street}
      </h2>
      <h3 className="text-xl md:text-xl font-semibold dark:text-white text-gray-700 mb-6">
        {new Intl.NumberFormat("nl-NL", {
          style: "currency",
          currency: "EUR",
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
        }).format(props.Price)}
      </h3>

      <div className="flex items-center justify-between text-sm ">
        <div className="flex items-center ">
          <ArrowsExpandIcon className="h-4 w-4 md:h-5 md:w-5 mr-2 dark:text-gray-300 text-gray-500" />
          <p className="dark:text-gray-300 text-gray-600 font-semibold ">
            {new Intl.NumberFormat("nl-NL", {
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
            }).format(props.PlotSize)}
            m² Plot Area
          </p>
        </div>
        <div className=" items-center hidden lg:inline-flex ">
          <BiArea className="h-4 w-4 md:h-5 md:w-5 mr-2 dark:text-gray-300 text-gray-500" />
          <p className="text-gray-600 dark:text-gray-300 font-semibold ">
            {new Intl.NumberFormat("nl-NL", {
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
            }).format(props.FloorSize)}
            m² Floor Area
          </p>
        </div>
        <div className="flex items-center ">
          <MdOutlineMeetingRoom className="h-4 w-4 md:h-5 md:w-5 mr-2 text-gray-500 dark:text-gray-300" />
          <p className="text-gray-600 dark:text-gray-300 font-semibold ">
            {props.RoomNumber} Rooms
          </p>
        </div>
        <div className="flex items-center justify-evenly">
          <BiBed className="h-4 w-4 md:h-5 md:w-5 mr-2 text-gray-500 dark:text-gray-300" />
          <p className="text-gray-600 dark:text-gray-300 font-semibold ">
            {props.BedroomNumber} Bedrooms
          </p>
        </div>
        <div className=" items-center justify-evenly hidden lg:inline-flex ">
          <BiBath className="h-4 w-4 md:h-5 md:w-5 mr-2 text-gray-500 dark:text-gray-300" />
          <p className="text-gray-600 dark:text-gray-300 font-semibold  ">
            {props.BathNumber} Bathrooms
          </p>
        </div>
        <div className="flex items-center justify-evenly"></div>
      </div>
    </div>
  );
};

export default InfoParagraph;
