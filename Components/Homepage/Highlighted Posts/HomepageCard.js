import { LightningBoltIcon } from "@heroicons/react/solid";
import { BsTextarea, BsSpeedometer2 } from "react-icons/Bs";
import {
  TbStairsUp,
  TbResize,
  TbEngine,
  TbManualGearbox,
} from "react-icons/tb";
import { MdMeetingRoom } from "react-icons/Md";
import { BiBed, BiBath, BiGasPump } from "react-icons/Bi";
import { FaCouch, FaHorseHead } from "react-icons/Fa";
import { GiF1Car, GiPathDistance } from "react-icons/Gi";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function HomepageCard(props, { locale }) {
  const { t } = useTranslation("Colours");
  const Router = useRouter();

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
        props.numberOfFloor
          ? t("Floors", { ns: "realestate" })
          : t("Floor", { ns: "realestate" }),
      ],
      numberOfRoom: [
        props.RoomNumber,
        <MdMeetingRoom className="icon-md" />,
        props.RoomNumber,
        props.RoomNumber > 1
          ? t("Rooms", { ns: "realestate" })
          : t("Room", { ns: "realestate" }),
      ],
      numberOfLivingroom: [
        props.LivingroomNumber,
        <FaCouch className="icon-md" />,
        props.LivingroomNumber,
        props.LivingroomNumber > 1
          ? t("Livingrooms", { ns: "realestate" })
          : t("Livingroom", { ns: "realestate" }),
      ],
      numberOfBedroom: [
        props.BedroomNumber,
        <BiBed className="icon-md" />,
        props.BedroomNumber,
        props.BedroomNumber > 1
          ? t("Bedrooms", { ns: "realestate" })
          : t("Bedroom", { ns: "realestate" }),
      ],
      numberOfBathroom: [
        props.BathroomNumber,
        <BiBath className="icon-md" />,
        props.BathroomNumber,
        props.BathroomNumber > 1
          ? t("Bathrooms", { ns: "realestate" })
          : t("Bathroom", { ns: "realestate" }),
      ],
      energy: [
        props.EnergyLevel,
        <LightningBoltIcon className="icon-md" />,
        props.EnergyLevel,
        t("Level", { ns: "realestate" }),
      ],
    },
    Vehicle: {
      fuelType: [
        props.FuelType,
        <BiGasPump className="icon-md" />,
        t(`${props.FuelType}`, { ns: "VehicleGeneral" }),
        t("Fuel", { ns: "VehicleGeneral" }),
      ],
      gearType: [
        props.GearType,
        <TbManualGearbox className="icon-md" />,
        t(`${props.GearType}`, { ns: "VehicleGeneral" }),
        t("Gear", { ns: "VehicleGeneral" }),
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
      exteriorColor: [
        props.Color,
        <div
          style={{ backgroundColor: props.Color }}
          className="icon-md border"
        ></div>,
        t(`${props.Color}`),
        t("Exterior", { ns: "VehicleGeneral" }),
      ],
      interiorColor: [
        props.InteriorColor,
        <div
          style={{ backgroundColor: props.InteriorColor }}
          className="icon-md border"
        ></div>,
        t(`${props.InteriorColor}`),
        t("Interior", { ns: "VehicleGeneral" }),
      ],
    },
  };
  return (
    <div
      onClick={() => {
        Router.push({
          pathname: `/${props.cardType}/post/${props.id}`,
        });
      }}
      className="flex flex-col md:w-full w-4/5 min-h-96 mb-3 dark:border-white dark:bg-transparent border-gray-100 border-2 rounded-md transition-all duration-200 ease-out cursor-pointer homepage-card"
    >
      <p>{locale}</p>
      <div className="relative overflow-hidden h-80 min-h-full">
        <img
          className="rounded-md w-full h-full card-image"
          layout="cover"
          src={props.image}
          alt=""
        />
        <span className="absolute text-center top-5 -right-8 px-10 font-semibold text-white bg-indigo-700 rotate-45 ">
          {props.cardType == "realestate"
            ? t(`${props.RentOrSale}`, { ns: "Common" })
            : props.cardType == "vehicle" &&
              t(`${props.VehicleType}`, { ns: "VehicleGeneral" })}
        </span>

        <div className="h-0 w-full bottom-[-50%] absolute flex items-center card-info">
          <div className="grid grid-cols-3 items-center p-2 w-full h-full">
            {Object.values(
              props.cardType == "realestate"
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
