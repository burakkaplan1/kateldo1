import { BsTextarea, BsSpeedometer2 } from "react-icons/Bs";
import {
  TbStairsUp,
  TbResize,
  TbEngine,
  TbManualGearbox,
} from "react-icons/tb";
import { MdMeetingRoom } from "react-icons/Md";
import { BiBed, BiGasPump } from "react-icons/Bi";
import { FaCouch, FaHorseHead } from "react-icons/Fa";
import { GiF1Car, GiPathDistance } from "react-icons/Gi";
import { useEffect } from "react";

function HomepageCard(props) {
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
    Vehicle: {
      fuelType: [
        props.FuelType,
        <BiGasPump className="icon-md" />,
        props.FuelType,
      ],
      gearType: [
        props.GearType,
        <TbManualGearbox className="icon-md" />,
        props.GearType,
        "Gear",
      ],
      EVRange: [
        props.EVRange,
        <GiPathDistance className="icon-md" />,
        props.EVRange,
        "Km",
      ],
      engineSize: [
        props.EngineSize,
        <TbEngine className="icon-md" />,
        Intl.NumberFormat("nl-NL", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(props.EngineSize),
        "cc",
      ],
      horsePower: [
        props.Horsepower,
        <FaHorseHead className="icon-md" />,
        props.Horsepower,
        "HP",
      ],
      torque: [
        props.Torque,
        <GiF1Car className="icon-md" />,
        Intl.NumberFormat("nl-NL", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(props.Torque),
        "Nm",
      ],
      maximumSpeed: [
        props.MaximumSpeed,
        <BsSpeedometer2 className="icon-md" />,
        props.MaximumSpeed,
        "Km/h",
      ],
      color: [
        props.Color,
        <div
          style={{ backgroundColor: props.Color }}
          className="icon-md "
        ></div>,
        props.Color,
        "Exterior",
      ],
    },
  };

  return (
    <div className="flex flex-col md:w-full w-4/5 min-h-96 mb-3 dark:border-white dark:bg-transparent border-gray-100 border-2 rounded-md transition-all duration-200 ease-out cursor-pointer homepage-card">
      <div className="relative overflow-hidden h-80 min-h-full">
        <img
          className="rounded-md w-full h-full card-image"
          layout="cover"
          src={props.image}
          alt=""
        />
        <span className="absolute text-center top-5 -right-8 px-10 font-semibold text-white bg-indigo-700 rotate-45 ">
          {props.cardType == "RealEstate"
            ? props.RentOrSale
            : props.cardType == "Vehicle" && props.VehicleType}
        </span>

        <div className="h-0 w-full bottom-[-50%] absolute flex items-center card-info">
          <div className="grid grid-cols-3 items-center p-2 w-full h-full">
            {Object.values(
              props.cardType == "RealEstate"
                ? infoItems.RealEstate
                : infoItems.Vehicle
            )
              .filter((i) => i[0])
              .map((values, index) => (
                <div key={index} className="flex-center-center flex-col">
                  <span className="">{values[1]}</span>
                  <p className="font-semibold text-sm">{values[2]}</p>
                  <p className="text-xs ">{values[3]}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="relative overflow-hidden flex-center-between font-semibold">
          <div>
            <p>
              {props.firstItem}, {props.secondItem}
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
          {props.thirdItem}, {props.fourthItem}
        </p>
      </div>
      <span className="hidden"> {props.cardType}</span>
    </div>
  );
}

export default HomepageCard;
