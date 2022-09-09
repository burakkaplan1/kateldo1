import { BsTextarea } from "react-icons/Bs";
import { TbStairsUp, TbResize } from "react-icons/tb";
import { MdMeetingRoom } from "react-icons/Md";
import { BiBed } from "react-icons/Bi";
import { FaCouch } from "react-icons/Fa";
import { useEffect } from "react";

function RealEstateCard(props) {
  const infoItems = {
    RealEstate: {
      plotArea: [
        props.PlotSize,
        <BsTextarea className="icon-md" />,
        Intl.NumberFormat("nl-NL", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(props.PlotSize),
        "m²",
      ],
      floorArea: [
        props.FloorSize,
        <TbResize className="icon-md" />,
        Intl.NumberFormat("nl-NL", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(props.FloorSize),
        "m²",
      ],
      numberOfFloor: [
        props.numberOfFloor,
        <TbStairsUp className="icon-md" />,
        props.numberOfFloor,
        props.numberOfFloor ? "Floors" : "Floor",
      ],
      numberOfRoom: [
        props.RoomNumber,
        <MdMeetingRoom className="icon-md" />,
        props.RoomNumber,
        props.RoomNumber > 1 ? "Rooms" : "Room",
      ],
      numberOfLivingroom: [
        props.LivingroomNumber,
        <FaCouch className="icon-md" />,
        props.LivingroomNumber,
        props.LivingroomNumber > 1 ? "Livingrooms" : "Livingroom",
      ],
      numberOfBedroom: [
        props.BedroomNumber,
        <BiBed className="icon-md" />,
        props.BedroomNumber,
        props.BedroomNumber > 1 ? "Bedrooms" : "Bedroom",
      ],
    },
    Vehicle: {},
  };

  return (
    <div className="flex flex-col md:w-full w-4/5 min-h-96 mb-3 dark:border-white dark:bg-transparent border-gray-100 border-2 rounded-md transition-all duration-200 ease-out cursor-pointer homepage-card">
      <div className="relative overflow-hidden h-full">
        <img
          className="rounded-md w-full h-full card-image object-contain"
          layout="cover"
          src={props.image}
          alt=""
        />
        <span className="absolute top-4 -right-7 px-7 font-semibold text-white bg-indigo-700 rotate-45 ">
          {props.RentOrSale}
        </span>

        <div className="h-0 w-full bottom-[-50%] absolute flex items-center card-info">
          <div className="grid grid-cols-3 grid-rows-2 p-2 w-full h-full">
            {Object.values(infoItems.RealEstate)
              .filter((i) => i[0])
              .map((values, index) => (
                <div key={index} className="flex-center-center flex-col">
                  <span>{values[1]}</span>
                  <p className="font-semibold text-sm">{values[2]}</p>
                  <p className="text-sm">{values[3]}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="relative overflow-hidden flex-center-between">
          <div>
            <p>
              {props.Province}, {props.Municipality}
            </p>
          </div>
          <p className="dark:text-white text-blue-900 font-bold ">
            {new Intl.NumberFormat("nl-NL", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(props.Price)}
          </p>
        </div>
      </div>
      <div className="text-sm mt-0 px-4 pb-2">
        <p>
          {props.Street}, {props.PostalCode}
        </p>
      </div>
    </div>
  );
}

export default RealEstateCard;
