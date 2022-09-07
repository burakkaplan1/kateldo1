import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  BrandState,
  BrandUpdateState,
  FuelTypeDieselState,
  FuelTypeDieselUpdateState,
  FuelTypeElectricityState,
  FuelTypeElectricityUpdateState,
  FuelTypeGasolineState,
  FuelTypeGasolineUpdateState,
  FuelTypeHybridState,
  FuelTypeHybridUpdateState,
  FuelTypeLPGState,
  FuelTypeLPGUpdateState,
  GearTypeAutoState,
  GearTypeAutoUpdateState,
  GearTypeManualState,
  GearTypeManualUpdateState,
  GearTypeSemiState,
  GearTypeSemiUpdateState,
  GenerationState,
  GenerationUpdateState,
  MaxPriceState,
  MaxPriceUpdateState,
  MaxUsedKMState,
  MaxUsedKMUpdateState,
  MaxYearState,
  MaxYearUpdateState,
  MinPriceState,
  MinPriceUpdateState,
  MinUsedKMState,
  MinUsedKMUpdateState,
  MinYearState,
  MinYearUpdateState,
  ModelState,
  ModelUpdateState,
  VehicleTypeState,
  VehicleTypeUpdateState,
  BodyTypeCabrioState,
  BodyTypeCabrioUpdateState,
  BodyTypeCoupeState,
  BodyTypeCoupeUpdateState,
  BodyTypeHatchback3State,
  BodyTypeHatchback3UpdateState,
  BodyTypeHatchback5State,
  BodyTypeHatchback5UpdateState,
} from "./VehicleStates";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import { BiExpand, BiLeftArrow, BiLeftArrowAlt } from "react-icons/bi";
import {
  CalendarIcon,
  CashIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import { GiGearStick, GiPathDistance } from "react-icons/gi";
import { FaCarSide, FaGasPump } from "react-icons/fa";
import { AiOutlineCar } from "react-icons/ai";
import SidebarInput from "./SidebarInput";
import SidebarCheckbox from "./SidebarCheckbox";

const VehicleSidebar = (props) => {
  const { t } = useTranslation();
  const [VehicleData, setVehicleData] = useState([]);
  const [expanded, setExpanded] = useState(true);
  const [PriceExpanded, setPriceExpanded] = useState(false);
  const [YearExpanded, setYearExpanded] = useState(false);
  const [UsedKMExpanded, setUsedKMExpanded] = useState(false);
  const [FuelTypeExpanded, setFuelTypeExpanded] = useState(false);
  const [GearTypeExpanded, setGearTypeExpanded] = useState(false);
  const [BodyTypeExpanded, setBodyTypeExpanded] = useState(false);
  const [GasolineFuel, setGasolineFuel] = useState(false);
  const [ElectricityFuel, setElectricityFuel] = useState(false);
  const [DieselFuel, setDieselFuel] = useState(false);
  const [HybridFuel, setHybridFuel] = useState(false);
  const [LPGFuel, setLPGFuel] = useState(false);
  const [ManualGear, setManualGear] = useState(false);
  const [SemiGear, setSemiGear] = useState(false);
  const [AutoGear, setAutoGear] = useState(false);
  const [BodyCabrio, setBodyCabrio] = useState(false);
  const [BodyCoupe, setBodyCoupe] = useState(false);
  const [BodyHatchback3, setBodyHatchback3] = useState(false);
  const [BodyHatchback5, setBodyHatchback5] = useState(false);
  const VehicleType = VehicleTypeState();
  const handleVehicleType = VehicleTypeUpdateState();
  const Brand = BrandState();
  const handleBrand = BrandUpdateState();
  const Model = ModelState();
  const handleModel = ModelUpdateState();
  const Generation = GenerationState();
  const handleGeneration = GenerationUpdateState();
  const minPrice = MinPriceState();
  const handleMinPrice = MinPriceUpdateState();
  const maxPrice = MaxPriceState();
  const handleMaxPrice = MaxPriceUpdateState();
  const minYear = MinYearState();
  const handleMinYear = MinYearUpdateState();
  const maxYear = MaxYearState();
  const handleMaxYear = MaxYearUpdateState();
  const minUsedKM = MinUsedKMState();
  const handleMinUsedKM = MinUsedKMUpdateState();
  const maxUsedKM = MaxUsedKMState();
  const handleMaxUsedKM = MaxUsedKMUpdateState();
  const FuelTypeGasoline = FuelTypeGasolineState();
  const handleFuelTypeGasoline = FuelTypeGasolineUpdateState();
  const handleFuelTypeElectricity = FuelTypeElectricityUpdateState();
  const FuelTypeElectricity = FuelTypeElectricityState();
  const handleFuelTypeDiesel = FuelTypeDieselUpdateState();
  const FuelTypeDiesel = FuelTypeDieselState();
  const FuelTypeHybrid = FuelTypeHybridState();
  const handleFuelTypeHybrid = FuelTypeHybridUpdateState();
  const FuelTypeLPG = FuelTypeLPGState();
  const handleFuelTypeLPG = FuelTypeLPGUpdateState();
  const GearTypeManual = GearTypeManualState();
  const handleGearTypeManual = GearTypeManualUpdateState();
  const GearTypeSemi = GearTypeSemiState();
  const handleGearTypeSemi = GearTypeSemiUpdateState();
  const GearTypeAuto = GearTypeAutoState();
  const handleGearTypeAuto = GearTypeAutoUpdateState();
  const BodyTypeCabrio = BodyTypeCabrioState();
  const handleBodyTypeCabrio = BodyTypeCabrioUpdateState();
  const BodyTypeCoupe = BodyTypeCoupeState();
  const handleBodyTypeCoupe = BodyTypeCoupeUpdateState();
  const BodyTypeHatchback3 = BodyTypeHatchback3State();
  const handleBodyTypeHatchback3 = BodyTypeHatchback3UpdateState();
  const BodyTypeHatchback5 = BodyTypeHatchback5State();
  const handleBodyTypeHatchback5 = BodyTypeHatchback5UpdateState();
  // const BodyTypeSedan=;
  // const handleBodyTypeSedan=;
  // const BodyTypeStation=;
  // const handleBodyTypeStation=;
  // const BodyTypeMPV=;
  // const handleBodyTypeMPV=;
  // const BodyTypeRoadster=;
  // const handleBodyTypeRoadster=;
  // const BodyTypeCrossover=;
  // const handleBodyTypeCrossover=;
  // const BodyTypeHardtop=;
  // const handleBodyTypeHardtop=;
  // const BodyTypePickup=;

  useEffect(() => {
    return onSnapshot(query(collection(db, "Vehicles")), (snapshot) => {
      setVehicleData(snapshot.docs);
    });
  }, [db]);

  const FuelType = [
    GasolineFuel,
    ElectricityFuel,
    DieselFuel,
    HybridFuel,
    LPGFuel,
  ];
  const GearType = [ManualGear, SemiGear, AutoGear];
  const BodyType = [BodyCabrio, BodyCoupe, BodyHatchback3, BodyHatchback5];
  //===================================== UNIQUE BRANDS =========================================
  const VehicleTypeCounts = {};
  const BrandCounts = {};
  const ModelCounts = {};
  const GenerationCounts = {};

  VehicleData.filter((car) =>
    minPrice !== "" && minPrice !== null && minPrice !== undefined
      ? car.data().Price >= minPrice
      : car.data()
  )
    .filter((car) =>
      maxPrice !== "" && maxPrice !== null && maxPrice !== undefined
        ? car.data().Price <= maxPrice
        : car.data()
    )
    .filter((car) =>
      minYear !== "" && minYear !== null && minYear !== undefined
        ? car.data().ModelYear >= minYear
        : car.data()
    )
    .filter((car) =>
      maxYear !== "" && maxYear !== null && maxYear !== undefined
        ? car.data().ModelYear <= maxYear
        : car.data()
    )
    .filter((car) =>
      minUsedKM !== "" && minUsedKM !== null && minUsedKM !== undefined
        ? car.data().Kilometers >= minUsedKM
        : car.data()
    )
    .filter((car) =>
      maxUsedKM !== "" && maxUsedKM !== null && maxUsedKM !== undefined
        ? car.data().Kilometers <= maxUsedKM
        : car.data()
    )
    .filter((car) =>
      FuelType.includes(true)
        ? (FuelTypeGasoline === true &&
            car.data().FuelType === "Petrol (Gasoline)") ||
          (FuelTypeDiesel === true &&
            car.data().FuelType === "Petrol (Diesel)") ||
          (FuelTypeElectricity === true &&
            car.data().FuelType === "Electricity") ||
          (FuelTypeHybrid === true && car.data().FuelType === "Hybrid") ||
          (FuelTypeLPG === true && car.data().FuelType === "LPG & Gas")
        : car.data()
    )
    .filter((car) =>
      GearType.includes(true)
        ? (GearTypeManual === true && car.data().GearType === "Manual") ||
          (GearTypeSemi === true && car.data().GearType === "Semi-Automatic") ||
          (GearTypeAuto === true && car.data().GearType === "Automatic")
        : car.data()
    )
    .filter((car) =>
      BodyType.includes(true)
        ? BodyCabrio && car.data().BodyType === "Cabriolet"
        : car.data()
    )
    .map((car) => car.data().GeneralCategory)
    .sort()
    .forEach((x) => {
      VehicleTypeCounts[x] = (VehicleTypeCounts[x] || 0) + 1;
    });

  VehicleData.filter(
    (car) =>
      car.data().GeneralCategory !== "" &&
      car.data().GeneralCategory === VehicleType
  )
    .filter((car) =>
      minPrice !== "" && minPrice !== null && minPrice !== undefined
        ? car.data().Price >= minPrice
        : car.data()
    )
    .filter((car) =>
      maxPrice !== "" && maxPrice !== null && maxPrice !== undefined
        ? car.data().Price <= maxPrice
        : car.data()
    )
    .filter((car) =>
      minYear !== "" && minYear !== null && minYear !== undefined
        ? car.data().ModelYear >= minYear
        : car.data()
    )
    .filter((car) =>
      maxYear !== "" && maxYear !== null && maxYear !== undefined
        ? car.data().ModelYear <= maxYear
        : car.data()
    )
    .filter((car) =>
      minUsedKM !== "" && minUsedKM !== null && minUsedKM !== undefined
        ? car.data().Kilometers >= minUsedKM
        : car.data()
    )
    .filter((car) =>
      maxUsedKM !== "" && maxUsedKM !== null && maxUsedKM !== undefined
        ? car.data().Kilometers <= maxUsedKM
        : car.data()
    )
    .filter((car) =>
      FuelType.includes(true)
        ? (FuelTypeGasoline === true &&
            car.data().FuelType === "Petrol (Gasoline)") ||
          (FuelTypeDiesel === true &&
            car.data().FuelType === "Petrol (Diesel)") ||
          (FuelTypeElectricity === true &&
            car.data().FuelType === "Electricity") ||
          (FuelTypeHybrid === true && car.data().FuelType === "Hybrid") ||
          (FuelTypeLPG === true && car.data().FuelType === "LPG & Gas")
        : car.data()
    )
    .filter((car) =>
      GearType.includes(true)
        ? (GearTypeManual === true && car.data().GearType === "Manual") ||
          (GearTypeSemi === true && car.data().GearType === "Semi-Automatic") ||
          (GearTypeAuto === true && car.data().GearType === "Automatic")
        : car.data()
    )
    .filter((car) =>
      BodyType.includes(true)
        ? BodyCabrio && car.data().BodyType === "Cabriolet"
        : car.data()
    )
    .map((car) => car.data().Brand)
    .sort()
    .forEach((x) => {
      BrandCounts[x] = (BrandCounts[x] || 0) + 1;
    });

  VehicleData.filter(
    (car) =>
      car.data().GeneralCategory !== "" &&
      car.data().GeneralCategory === VehicleType
  )
    .filter((car) => car.data().Brand !== "" && car.data().Brand === Brand)
    .filter((car) =>
      minPrice !== "" && minPrice !== null && minPrice !== undefined
        ? car.data().Price >= minPrice
        : car.data()
    )
    .filter((car) =>
      maxPrice !== "" && maxPrice !== null && maxPrice !== undefined
        ? car.data().Price <= maxPrice
        : car.data()
    )
    .filter((car) =>
      minYear !== "" && minYear !== null && minYear !== undefined
        ? car.data().ModelYear >= minYear
        : car.data()
    )
    .filter((car) =>
      maxYear !== "" && maxYear !== null && maxYear !== undefined
        ? car.data().ModelYear <= maxYear
        : car.data()
    )
    .filter((car) =>
      minUsedKM !== "" && minUsedKM !== null && minUsedKM !== undefined
        ? car.data().Kilometers >= minUsedKM
        : car.data()
    )
    .filter((car) =>
      maxUsedKM !== "" && maxUsedKM !== null && maxUsedKM !== undefined
        ? car.data().Kilometers <= maxUsedKM
        : car.data()
    )
    .filter((car) =>
      FuelType.includes(true)
        ? (FuelTypeGasoline === true &&
            car.data().FuelType === "Petrol (Gasoline)") ||
          (FuelTypeDiesel === true &&
            car.data().FuelType === "Petrol (Diesel)") ||
          (FuelTypeElectricity === true &&
            car.data().FuelType === "Electricity") ||
          (FuelTypeHybrid === true && car.data().FuelType === "Hybrid") ||
          (FuelTypeLPG === true && car.data().FuelType === "LPG & Gas")
        : car.data()
    )
    .filter((car) =>
      GearType.includes(true)
        ? (GearTypeManual === true && car.data().GearType === "Manual") ||
          (GearTypeSemi === true && car.data().GearType === "Semi-Automatic") ||
          (GearTypeAuto === true && car.data().GearType === "Automatic")
        : car.data()
    )
    .filter((car) =>
      BodyType.includes(true)
        ? BodyCabrio && car.data().BodyType === "Cabriolet"
        : car.data()
    )
    .map((car) => car.data().Model)
    .sort()
    .forEach((x) => {
      ModelCounts[x] = (ModelCounts[x] || 0) + 1;
    });

  VehicleData.filter(
    (car) =>
      car.data().GeneralCategory !== "" &&
      car.data().GeneralCategory === VehicleType
  )
    .filter((car) => car.data().Brand !== "" && car.data().Brand === Brand)
    .filter((car) => car.data().Model !== "" && car.data().Model === Model)
    .filter((car) =>
      minPrice !== "" && minPrice !== null && minPrice !== undefined
        ? car.data().Price >= minPrice
        : car.data()
    )
    .filter((car) =>
      maxPrice !== "" && maxPrice !== null && maxPrice !== undefined
        ? car.data().Price <= maxPrice
        : car.data()
    )
    .filter((car) =>
      minYear !== "" && minYear !== null && minYear !== undefined
        ? car.data().ModelYear >= minYear
        : car.data()
    )
    .filter((car) =>
      maxYear !== "" && maxYear !== null && maxYear !== undefined
        ? car.data().ModelYear <= maxYear
        : car.data()
    )
    .filter((car) =>
      minUsedKM !== "" && minUsedKM !== null && minUsedKM !== undefined
        ? car.data().Kilometers >= minUsedKM
        : car.data()
    )
    .filter((car) =>
      maxUsedKM !== "" && maxUsedKM !== null && maxUsedKM !== undefined
        ? car.data().Kilometers <= maxUsedKM
        : car.data()
    )
    .filter((car) =>
      FuelType.includes(true)
        ? (FuelTypeGasoline === true &&
            car.data().FuelType === "Petrol (Gasoline)") ||
          (FuelTypeDiesel === true &&
            car.data().FuelType === "Petrol (Diesel)") ||
          (FuelTypeElectricity === true &&
            car.data().FuelType === "Electricity") ||
          (FuelTypeHybrid === true && car.data().FuelType === "Hybrid") ||
          (FuelTypeLPG === true && car.data().FuelType === "LPG & Gas")
        : car.data()
    )
    .filter((car) =>
      GearType.includes(true)
        ? (GearTypeManual === true && car.data().GearType === "Manual") ||
          (GearTypeSemi === true && car.data().GearType === "Semi-Automatic") ||
          (GearTypeAuto === true && car.data().GearType === "Automatic")
        : car.data()
    )
    .filter((car) =>
      BodyType.includes(true)
        ? BodyCabrio && car.data().BodyType === "Cabriolet"
        : car.data()
    )
    .map((car) => car.data().Generation)
    .sort()
    .forEach((x) => {
      GenerationCounts[x] = (GenerationCounts[x] || 0) + 1;
    });

  var VehicleTypeArray = Object.entries(VehicleTypeCounts);
  var BrandArray = Object.entries(BrandCounts);
  var ModelArray = Object.entries(ModelCounts);
  var GenerationArray = Object.entries(GenerationCounts);

  //===================================== UNIQUE BRANDS =========================================

  // ================================= BackPage ============================================
  const handleBackButton = () => {
    if (Generation !== "") {
      handleGeneration("");
    } else if (Model !== "") {
      handleModel("");
    } else if (Brand !== "") {
      handleBrand("");
    } else if (VehicleType !== "") {
      handleVehicleType("");
    }
  };

  const handleVehicleButton = () => {
    handleVehicleType("");
    handleBrand("");
    handleModel("");
    handleGeneration("");
  };
  const handleVehicleTypeButton = () => {
    handleBrand("");
    handleModel("");
    handleGeneration("");
  };
  const handleBrandButton = () => {
    handleModel("");
    handleGeneration("");
  };
  const handleModelButton = () => {
    handleGeneration("");
  };
  // ================================= BackPage ============================================
  // ======================================= CHECKBOX ======================================

  useEffect(() => {
    handleFuelTypeGasoline(GasolineFuel);
  }, [GasolineFuel]);
  useEffect(() => {
    handleFuelTypeDiesel(DieselFuel);
  }, [DieselFuel]);
  useEffect(() => {
    handleFuelTypeElectricity(ElectricityFuel);
  }, [ElectricityFuel]);
  useEffect(() => {
    handleFuelTypeHybrid(HybridFuel);
  }, [HybridFuel]);
  useEffect(() => {
    handleFuelTypeLPG(LPGFuel);
  }, [LPGFuel]);
  useEffect(() => {
    handleGearTypeManual(ManualGear);
  }, [ManualGear]);
  useEffect(() => {
    handleGearTypeSemi(SemiGear);
  }, [SemiGear]);
  useEffect(() => {
    handleGearTypeAuto(AutoGear);
  }, [AutoGear]);
  useEffect(() => {
    handleBodyTypeHatchback3(BodyHatchback3);
  }, [BodyHatchback3]);
  useEffect(() => {
    handleBodyTypeHatchback5(BodyHatchback5);
  }, [BodyHatchback5]);
  // ======================================= CHECKBOX ======================================
  return (
    <div
      className={`${
        expanded ? "w-[300px]" : "w-[80px]"
      } overflow-hidden h-[85vh] dark:bg-gray-900 border border-l-0 dark:border-gray-400 border-blue-300 rounded-tr-md rounded-br-md mt-3 mr-3 transition-all ease-in-out duration-500`}
    >
      <div className="px-3 pt-8">
        <div
          className={`flex items-center ${
            expanded ? "justify-between" : "justify-center"
          }`}
        >
          {expanded && (
            <button className="dark:bg-gray-500 dark:hover:bg-blue-600 bg-white hover:bg-blue-600 p-0.5 rounded flex justify-center items-center border border-blue-600 dark:border-0">
              <BiLeftArrowAlt
                onClick={handleBackButton}
                className="w-5 h-5 stroke-current hover:text-white text-blue-600 dark:text-gray-200"
              />
            </button>
          )}
          <button
            className="dark:bg-gray-500 dark:hover:bg-blue-600 bg-blue-600 p-0.5 rounded flex justify-center items-center"
            onClick={() => setExpanded(!expanded)}
          >
            <BiExpand className="w-5 h-5 stroke-current text-white dark:text-gray-200" />
          </button>
        </div>
      </div>
      <div className="px-3 pt-4 ">
        {expanded ? (
          <ul className="flex flex-col overflow-y-scroll scrollbar-thin sticky pb-10 h-[30vh] border-b ">
            <li
              onClick={handleVehicleButton}
              className="text-blue-700 dark:text-blue-200 hover:underline decoration-1 cursor-pointer"
            >
              {t("Sidebar:Vehicles")}
            </li>
            <ul className="ml-3 ">
              {VehicleType === "" &&
                VehicleTypeArray.map((i) => (
                  <li
                    className="flex space-x-3 items-center"
                    onClick={() => handleVehicleType(`${i[0]}`)}
                  >
                    <p className="text-blue-700 dark:text-blue-200 hover:underline decoration-1 cursor-pointer">
                      {i[0]}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                      ({i[1]})
                    </p>
                  </li>
                ))}
              {VehicleType !== "" && (
                <li
                  className="text-blue-700 dark:text-blue-200 hover:underline decoration-1 cursor-pointer"
                  onClick={handleVehicleTypeButton}
                >
                  {VehicleType}
                </li>
              )}
              <ul className="ml-3">
                {Brand === "" &&
                  BrandArray.map((i) => (
                    <li
                      className="flex space-x-3 items-center"
                      onClick={() => handleBrand(`${i[0]}`)}
                    >
                      <p className="text-blue-700 dark:text-blue-200 hover:underline decoration-1 cursor-pointer">
                        {i[0]}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-200">
                        ({i[1]})
                      </p>
                    </li>
                  ))}
                {Brand !== "" && (
                  <li
                    className="text-blue-700 dark:text-blue-200 hover:underline decoration-1 cursor-pointer"
                    onClick={handleBrandButton}
                  >
                    {Brand}
                  </li>
                )}
                <ul className="ml-3">
                  {Model === "" &&
                    ModelArray.map((i) => (
                      <li
                        className="flex space-x-3 items-center"
                        onClick={() => handleModel(`${i[0]}`)}
                      >
                        <p className="text-blue-700 dark:text-blue-200 hover:underline decoration-1 cursor-pointer">
                          {i[0]}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-200">
                          ({i[1]})
                        </p>
                      </li>
                    ))}
                  {Model !== "" && (
                    <li
                      className="text-blue-700 dark:text-blue-200 hover:underline decoration-1 cursor-pointer"
                      onClick={handleModelButton}
                    >
                      {Model}
                    </li>
                  )}
                  <ul className="ml-3">
                    {Generation === "" &&
                      GenerationArray.map((i) => (
                        <li
                          className="flex space-x-3 items-center "
                          onClick={() => handleGeneration(`${i[0]}`)}
                        >
                          <p
                            title={i[0]}
                            className="text-blue-700 dark:text-blue-200 hover:underline decoration-1 cursor-pointer truncate hover:text-clip"
                          >
                            {i[0]}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-200">
                            ({i[1]})
                          </p>
                        </li>
                      ))}
                    {Generation !== "" && (
                      <li
                        className="flex space-x-3 items-center "
                        title={Generation}
                      >
                        <p className="text-blue-700 dark:text-blue-200 hover:underline decoration-1 cursor-pointer truncate hover:text-clip">
                          {Generation}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-200">
                          (
                          {Generation !== "" &&
                            VehicleData.filter(
                              (car) =>
                                Brand !== "" && car.data().Brand === Brand
                            )
                              .filter(
                                (car) =>
                                  Model !== "" && car.data().Model === Model
                              )
                              .filter(
                                (car) =>
                                  Generation !== "" &&
                                  car.data().Generation === Generation
                              ).length}
                          )
                        </p>
                      </li>
                    )}
                  </ul>
                </ul>
              </ul>
            </ul>
          </ul>
        ) : (
          <div className="flex items-center justify-center border-b border-t py-1 border-gray-200">
            <div
              title="Categories"
              onClick={() => {
                setExpanded(true);
              }}
              className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
            >
              <AiOutlineCar className="w-5 h-5 stroke-current m-1.5" />
            </div>
          </div>
        )}
      </div>
      <div className="px-3 pt-4 ">
        <ul className="flex flex-col overflow-y-scroll scrollbar-thin sticky pb-10 h-[40vh] ">
          {expanded ? (
            <li>
              <div
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
                onClick={() => setPriceExpanded(!PriceExpanded)}
              >
                <div className="flex items-center w-full hover:font-semibold ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <CashIcon className="w-5 h-5 stroke-current " />
                  </div>
                  <span className=" inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    {t("Sidebar:Price")}
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {PriceExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {PriceExpanded && (
                <SidebarInput
                  Type1="text"
                  id1="PriceLow"
                  placeholder1="Minimum Price"
                  value1={minPrice}
                  setState1={handleMinPrice}
                  type2="text"
                  id2="PriceHigh"
                  placeholder2="Maximum Price"
                  value2={maxPrice}
                  setState2={handleMaxPrice}
                />
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Price filters"
                  onClick={() => {
                    setExpanded(true), setPriceExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <CashIcon className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
                onClick={() => setYearExpanded(!YearExpanded)}
              >
                <div className="flex items-center w-full hover:font-semibold ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <CalendarIcon className="w-5 h-5 stroke-current " />
                  </div>
                  <span className=" inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    {t("Sidebar:ModelYear")}
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {YearExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {YearExpanded && (
                <SidebarInput
                  Type1="year"
                  id1="YearLow"
                  placeholder1="Minimum Year"
                  value1={minYear}
                  setState1={handleMinYear}
                  type2="year"
                  id2="YearHigh"
                  placeholder2="Maximum Year"
                  value2={maxYear}
                  setState2={handleMaxYear}
                />
              )}
            </li>
          ) : (
            <li className="mt-1">
              <div className="flex items-center justify-center">
                <div
                  title="Model year filters"
                  onClick={() => {
                    setExpanded(true), setYearExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <CalendarIcon className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
                onClick={() => setUsedKMExpanded(!UsedKMExpanded)}
              >
                <div className="flex items-center w-full hover:font-semibold ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <GiPathDistance className="w-5 h-5 stroke-current " />
                  </div>
                  <span className=" inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Kilometer
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {UsedKMExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {UsedKMExpanded && (
                <SidebarInput
                  Type1="number"
                  id1="KMLow"
                  placeholder1="Minimum Used KM"
                  value1={minUsedKM}
                  setState1={handleMinUsedKM}
                  type2="number"
                  id2="KMHigh"
                  placeholder2="Maximum Used KM"
                  value2={maxUsedKM}
                  setState2={handleMaxUsedKM}
                />
              )}
            </li>
          ) : (
            <li className="mt-1">
              <div className="flex items-center justify-center">
                <div
                  title="Model year filters"
                  onClick={() => {
                    setExpanded(true), setUsedKMExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <GiPathDistance className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
                onClick={() => setFuelTypeExpanded(!FuelTypeExpanded)}
              >
                <div className="flex items-center w-full hover:font-semibold ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <FaGasPump className="w-5 h-5 stroke-current " />
                  </div>
                  <span className=" inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    {t("Sidebar:FuelType")}
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {FuelTypeExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {FuelTypeExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500 ml-3">
                    <SidebarCheckbox
                      value={GasolineFuel}
                      text="Gasoline"
                      onClick={() => setGasolineFuel(!GasolineFuel)}
                    />
                    <SidebarCheckbox
                      value={DieselFuel}
                      text="Diesel"
                      onClick={() => setDieselFuel(!DieselFuel)}
                    />
                    <SidebarCheckbox
                      value={HybridFuel}
                      text="Hybrid"
                      onClick={() => setHybridFuel(!HybridFuel)}
                    />
                    <SidebarCheckbox
                      value={LPGFuel}
                      text="LPG & Gas"
                      onClick={() => setLPGFuel(!LPGFuel)}
                    />
                    <SidebarCheckbox
                      value={ElectricityFuel}
                      text="Electricity"
                      onClick={() => setElectricityFuel(!ElectricityFuel)}
                    />
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li className="mt-1">
              <div className="flex items-center justify-center">
                <div
                  title="Model year filters"
                  onClick={() => {
                    setExpanded(true), setFuelTypeExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <FaGasPump className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
                onClick={() => setGearTypeExpanded(!GearTypeExpanded)}
              >
                <div className="flex items-center w-full hover:font-semibold ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <GiGearStick className="w-5 h-5 stroke-current " />
                  </div>
                  <span className=" inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    {t("Sidebar:GearType")}
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {GearTypeExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {GearTypeExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500 ml-3">
                    <SidebarCheckbox
                      value={ManualGear}
                      text="Manual"
                      onClick={() => setManualGear(!ManualGear)}
                    />
                    <SidebarCheckbox
                      value={SemiGear}
                      text="Semi-automatic"
                      onClick={() => setSemiGear(!SemiGear)}
                    />
                    <SidebarCheckbox
                      value={AutoGear}
                      text="Automatic"
                      onClick={() => setAutoGear(!AutoGear)}
                    />
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li className="mt-1">
              <div className="flex items-center justify-center">
                <div
                  title="Model year filters"
                  onClick={() => {
                    setExpanded(true), setGearTypeExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <GiGearStick className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
                onClick={() => setGearTypeExpanded(!GearTypeExpanded)}
              >
                <div className="flex items-center w-full hover:font-semibold ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <FaCarSide className="w-5 h-5 stroke-current " />
                  </div>
                  <span className=" inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    {t("Sidebar:CarBodyType")}
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {GearTypeExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {GearTypeExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500 ml-3">
                    <SidebarCheckbox
                      value={BodyCabrio}
                      text="Cabriolet"
                      onClick={() => setBodyCabrio(!BodyCabrio)}
                    />
                    <SidebarCheckbox
                      value={BodyCoupe}
                      text="Coupe"
                      onClick={() => setBodyCoupe(!BodyCoupe)}
                    />
                    <SidebarCheckbox
                      value={BodyHatchback3}
                      text="Hatchback 3"
                      onClick={() => setBodyHatchback3(!BodyHatchback3)}
                    />
                    <SidebarCheckbox
                      value={BodyHatchback5}
                      text="Hatchback 5"
                      onClick={() => setBodyHatchback5(!BodyHatchback5)}
                    />
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li className="mt-1">
              <div className="flex items-center justify-center">
                <div
                  title="Model year filters"
                  onClick={() => {
                    setExpanded(true), setGearTypeExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <FaCarSide className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default VehicleSidebar;
