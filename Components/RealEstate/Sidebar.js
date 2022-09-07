import { useTheme } from "next-themes";
import {
  ArrowRightIcon,
  CashIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HomeIcon,
  KeyIcon,
  LightningBoltIcon,
} from "@heroicons/react/solid";
import {
  EnergyLevelUpdateState,
  FilterRemoveState,
  FiltersState,
  MaxBedroomUpdateState,
  MaxFloorSizeState,
  MaxFloorSizeUpdateState,
  MaxGrossState,
  MaxGrossUpdateState,
  MaxPriceState,
  MaxPriceUpdateState,
  MaxRoomUpdateState,
  MinBedroomUpdateState,
  MinFloorNumberUpdateState,
  MaxFloorNumberUpdateState,
  MinBathroomUpdateState,
  MaxBathroomUpdateState,
  MinFloorSizeState,
  MinFloorSizeUpdateState,
  MinGrossState,
  MinGrossUpdateState,
  MinPriceState,
  MinPriceUpdateState,
  MinRoomUpdateState,
  MunicipalityUpdateState,
  TownUpdateState,
  ProvinceState,
  ProvinceUpdateState,
  StatusUpdateState,
  BalconyUpdateState,
  MinLivingroomUpdateState,
  MaxLivingroomUpdateState,
  MinToiletUpdateState,
  MaxToiletUpdateState,
  GarageUpdateState,
  HouseTypeUpdateState,
  PostingDateUpdateState,
  GardenUpdateState,
  TerraceUpdateState,
  MunicipalityState,
  TownState,
  TaxUpdateState,
  WestUpdateState,
  EastUpdateState,
  SouthUpdateState,
  NorthUpdateState,
  ConstructionUpdateState,
  UserStatusUpdateState,
} from "./RealEstateStates";
import { GiResize, GiSofa, Gi3DStairs, GiHomeGarage } from "react-icons/gi";
import { MdOutlineMeetingRoom, MdBalcony } from "react-icons/md";
import { BiBed, BiBath, BiMap, BiFullscreen } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FaToilet, FaTree } from "react-icons/fa";
import { useEffect, useState } from "react";
import Select from "react-select";
import {
  BalconyExist,
  BathroomNumbers,
  BedroomNumbers,
  EnergyEfficiency,
  LivingroomNumbers,
  RoomNumbers,
  SidebarRentOrSale,
  StoryNumbers,
  ToiletNumbers,
  Adress,
  SaleHouseTypes,
  Towns,
  TaxExist,
  ConstructionYearList,
  UsingStatus,
} from "../Provinces";
import {
  CalendarIcon,
  FilterIcon,
  ReceiptTaxIcon,
  SunIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  const { theme } = useTheme();
  const [minimumRoom, setMinimumRoom] = useState([]);
  const [maximumRoom, setMaximumRoom] = useState([]);
  const [minimumBedroom, setMinimumBedroom] = useState([]);
  const [maximumBedroom, setMaximumBedroom] = useState([]);
  const [minimumLivingroom, setMinimumLivingroom] = useState([]);
  const [maximumLivingroom, setMaximumLivingroom] = useState([]);
  const [minimumBathroom, setMinimumBathroom] = useState([]);
  const [maximumBathroom, setMaximumBathroom] = useState([]);
  const [minimumToilet, setMinimumToilet] = useState([]);
  const [maximumToilet, setMaximumToilet] = useState([]);
  const [minimumStory, setMinimumStory] = useState([]);
  const [maximumStory, setMaximumStory] = useState([]);
  const [Status, setStatus] = useState([]);
  const [HouseType, setHouseType] = useState([]);
  const [Balcony, setBalcony] = useState([]);
  const [Garage, setGarage] = useState([]);
  const [Garden, setGarden] = useState([]);
  const [Terrace, setTerrace] = useState([]);
  const [Tax, setTax] = useState([]);
  const [Energy, setEnergy] = useState([]);
  const [WestFecade, setWestFecade] = useState(false);
  const [EastFecade, setEastFecade] = useState(false);
  const [NorthFecade, setNorthFecade] = useState(false);
  const [SouthFecade, setSouthFecade] = useState(false);
  const [ConstructionYear, setConstructionYear] = useState([]);
  const [UserStatus, setUserStatus] = useState([]);

  const [expanded, setExpanded] = useState(false);
  const [PriceExpanded, setPriceExpanded] = useState(false);
  const [StatusExpanded, setStatusExpanded] = useState(false);
  const [LocationExpanded, setLocationExpanded] = useState(false);
  const [HouseTypeExpanded, setHouseTypeExpanded] = useState(false);
  const [PlotSizeExpanded, setPlotSizeExpanded] = useState(false);
  const [FloorSizeExpanded, setFloorSizeExpanded] = useState(false);
  const [RoomsExpanded, setRoomsExpanded] = useState(false);
  const [BedroomsExpanded, setBedroomsExpanded] = useState(false);
  const [LivingroomsExpanded, setLivingroomsExpanded] = useState(false);
  const [BathroomsExpanded, setBathroomsExpanded] = useState(false);
  const [ToiletsExpanded, setToiletsExpanded] = useState(false);
  const [StoriesExpanded, setStoriesExpanded] = useState(false);
  const [EfficiencyExpanded, setEfficiencyExpanded] = useState(false);
  const [BalconyExpanded, setBalconyExpanded] = useState(false);
  const [GarageExpanded, setGarageExpanded] = useState(false);
  const [GardenExpanded, setGardenExpanded] = useState(false);
  const [TerraceExpanded, setTerraceExpanded] = useState(false);
  const [TaxExpanded, setTaxExpanded] = useState(false);
  const [DateExpanded, setDateExpanded] = useState(false);
  const [FecadeExpanded, setFecadeExpanded] = useState(false);
  const [ConstructionExpanded, setConstructionExpanded] = useState(false);
  const [UserStatusExpanded, setUserStatusExpanded] = useState(false);

  const filters = FiltersState();

  const removeFilters = FilterRemoveState();

  const minPrice = MinPriceState();
  const handleMinPrice = MinPriceUpdateState();
  const maxPrice = MaxPriceState();
  const handleMaxPrice = MaxPriceUpdateState();

  const minGross = MinGrossState();
  const handleMinGross = MinGrossUpdateState();
  const maxGross = MaxGrossState();
  const handleMaxGross = MaxGrossUpdateState();

  const minFloorSize = MinFloorSizeState();
  const handleMinFloorSize = MinFloorSizeUpdateState();
  const maxFloorSize = MaxFloorSizeState();
  const handleMaxFloorSize = MaxFloorSizeUpdateState();

  const handleEnergy = EnergyLevelUpdateState();
  const handleBalcony = BalconyUpdateState();
  const handleGarage = GarageUpdateState();
  const handleGarden = GardenUpdateState();
  const handleTerrace = TerraceUpdateState();
  const handleTax = TaxUpdateState();

  const handleMinRoom = MinRoomUpdateState();
  const handleMaxRoom = MaxRoomUpdateState();

  const handleMinBedroom = MinBedroomUpdateState();
  const handleMaxBedroom = MaxBedroomUpdateState();

  const handleMinLivingroom = MinLivingroomUpdateState();
  const handleMaxLivingroom = MaxLivingroomUpdateState();

  const handleMinBathroom = MinBathroomUpdateState();
  const handleMaxBathroom = MaxBathroomUpdateState();

  const handleMinToilet = MinToiletUpdateState();
  const handleMaxToilet = MaxToiletUpdateState();

  const handleMinFloorNumber = MinFloorNumberUpdateState();
  const handleMaxFloorNumber = MaxFloorNumberUpdateState();

  const province = ProvinceState();
  const handleProvince = ProvinceUpdateState();
  const handleMunicipality = MunicipalityUpdateState();
  const municipality = MunicipalityState();
  const handleTown = TownUpdateState();

  const handleStatus = StatusUpdateState();
  const handleHouseType = HouseTypeUpdateState();

  const handlePostingDate = PostingDateUpdateState();
  const handleWest = WestUpdateState();
  const handleEast = EastUpdateState();
  const handleNorth = NorthUpdateState();
  const handleSouth = SouthUpdateState();

  const handleConstruction = ConstructionUpdateState();
  const handleUserStatus = UserStatusUpdateState();

  // ====================================Timestamp====================================
  var unix = Math.round(+new Date() / 1000);

  // ====================================Timestamp====================================

  useEffect(() => {
    handleMinRoom(minimumRoom.value);
  }, [minimumRoom]);
  useEffect(() => {
    handleMaxRoom(maximumRoom.value);
  }, [maximumRoom]);
  useEffect(() => {
    handleMinBedroom(minimumBedroom.value);
  }, [minimumBedroom]);
  useEffect(() => {
    handleMaxBedroom(maximumBedroom.value);
  }, [maximumBedroom]);
  useEffect(() => {
    handleMinLivingroom(minimumLivingroom.value);
  }, [minimumLivingroom]);
  useEffect(() => {
    handleMaxLivingroom(maximumLivingroom.value);
  }, [maximumLivingroom]);
  useEffect(() => {
    handleMinBathroom(minimumBathroom.value);
  }, [minimumBathroom]);
  useEffect(() => {
    handleMaxBathroom(maximumBathroom.value);
  }, [maximumBathroom]);

  useEffect(() => {
    handleMinToilet(minimumToilet.value);
  }, [minimumToilet]);
  useEffect(() => {
    handleMaxToilet(maximumToilet.value);
  }, [maximumToilet]);
  useEffect(() => {
    handleMinFloorNumber(minimumStory.value);
  }, [minimumStory]);
  useEffect(() => {
    handleMaxFloorNumber(maximumStory.value);
  }, [maximumStory]);
  useEffect(() => {
    handleStatus(Status.value);
  }, [Status]);
  useEffect(() => {
    handleHouseType(HouseType.value);
  }, [HouseType]);
  useEffect(() => {
    handleBalcony(Balcony.value);
  }, [Balcony]);
  useEffect(() => {
    handleGarage(Garage.value);
  }, [Garage]);
  useEffect(() => {
    handleGarden(Garden.value);
  }, [Garden]);
  useEffect(() => {
    handleTerrace(Terrace.value);
  }, [Terrace]);
  useEffect(() => {
    handleTax(Tax.value);
  }, [Tax]);
  useEffect(() => {
    handleEnergy(Energy.value);
  }, [Energy]);
  useEffect(() => {
    handleConstruction(ConstructionYear.value);
  }, [ConstructionYear]);
  useEffect(() => {
    handleUserStatus(UserStatus.value);
  }, [UserStatus]);

  useEffect(() => {
    handleWest(WestFecade);
  }, [WestFecade]);
  useEffect(() => {
    handleEast(EastFecade);
  }, [EastFecade]);
  useEffect(() => {
    handleNorth(NorthFecade);
  }, [NorthFecade]);
  useEffect(() => {
    handleSouth(SouthFecade);
  }, [SouthFecade]);

  //    ====================================React-Select====================================
  const customSelectTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        neutral0: "#212529", // inputun içi ve yazı rengi
        primary25: "#adb5bd", // listedekileri hover'layınca
        primary: "#495057", // focus ve selected item

        neutral50: "#fff", // liste'de seleceted item yazı rengi
        neutral80: "#fff", // input'da seleceted item yazı rengi
      },
    };
  };
  //    ====================================React-Select====================================

  return (
    <div
      className={`${
        expanded ? "w-[300px]" : "w-[80px]"
      } overflow-hidden h-[85vh] dark:bg-gray-900 border border-l-0 dark:border-gray-400 border-blue-300 rounded-tr-md rounded-br-md mt-3 mr-3`}
    >
      <div className="px-3 pt-8">
        <div
          className={`flex items-center ${
            expanded ? "justify-between" : "justify-center"
          }`}
        >
          {expanded && <span className="w-5 h-5 dark:bg-gray-900"></span>}
          <button
            className="dark:bg-gray-500 dark:hover:bg-blue-600 bg-blue-600 p-0.5 rounded flex justify-center items-center"
            onClick={() => setExpanded(!expanded)}
          >
            <ArrowRightIcon className="w-5 h-5 stroke-current text-white dark:text-gray-200" />
          </button>
        </div>
      </div>
      {expanded ? (
        <div className="px-3 pt-4 flex items-center justify-between">
          <div>
            <span className="text-gray-500">Filters: </span>
            <span>
              {filters
                ? filters
                    .map((filter) => {
                      return (
                        filter.state !== undefined &&
                        filter.state !== "All" &&
                        filter.state !== false
                      );
                    })
                    .filter(Boolean).length
                : 0}
            </span>
          </div>
          <span
            className="text-gray-500 hover:text-gray-300"
            onClick={removeFilters}
          >
            Clear Filters
          </span>
        </div>
      ) : (
        <div className="mt-3 flex items-center justify-center">
          <div className="w-6 h-6 dark:bg-gray-800 border rounded-md flex items-center justify-center">
            <FilterIcon className="w-5 h-5 dark:text-gray-400 text-gray-600 stroke-current" />
            <span className="dark:text-gray-500 text-gray-700">
              {filters
                ? filters
                    .map((filter) => {
                      return (
                        filter.state !== undefined &&
                        filter.state !== "All" &&
                        filter.state !== false
                      );
                    })
                    .filter(Boolean).length
                : 0}
            </span>
          </div>
        </div>
      )}
      <div className="px-3 pt-4">
        <hr className="border-gray-700" />
      </div>
      <div className="px-3 pt-4">
        <ul className="flex flex-col space-y-2 overflow-y-scroll scrollbar-thin   sticky pb-10 h-[65vh]">
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
                    Price
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
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li>
                      <input
                        type="text"
                        id="PriceLow"
                        placeholder="Minimum Price"
                        value={minPrice}
                        onChange={handleMinPrice}
                        className="inline-block w-full px-4 py-2 text-xs rounded text-blue-700 dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800"
                      />
                    </li>
                    <li className="mt-2">
                      <input
                        type="text"
                        id="PriceHigh"
                        placeholder="Maximum Price"
                        value={maxPrice}
                        onChange={handleMaxPrice}
                        className="inline-block w-full px-4 py-2 text-xs rounded text-blue-700 dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800"
                      />
                    </li>
                  </ul>
                </div>
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
                onClick={() => setStatusExpanded(!StatusExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <KeyIcon className="w-5 h-5 stroke-current " />
                  </div>
                  <span className=" inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Status
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {StatusExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {StatusExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li className="mt-1">
                      <Select
                        closeMenuOnSelect={true}
                        theme={theme === "dark" && customSelectTheme}
                        name="MinStory"
                        isMulti={false}
                        options={SidebarRentOrSale}
                        onChange={setStatus}
                        isSearchable={true}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Rent or sale status filter"
                  onClick={() => {
                    setExpanded(true), setStatusExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <KeyIcon className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setLocationExpanded(!LocationExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <BiMap className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Location
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {LocationExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {LocationExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li>
                      <select
                        name="province"
                        id="province"
                        className="w-full"
                        onChange={handleProvince}
                      >
                        <option defaultValue value="All" disabled={true}>
                          Select Province
                        </option>
                        <option value="Drenthe">Drenthe</option>
                        <option value="Flevoland">Flevoland</option>
                        <option value="Friesland">Friesland</option>
                        <option value="Gelderland">Gelderland</option>
                        <option value="Groningen">Groningen</option>
                        <option value="Limburg">Limburg</option>
                        <option value="North-brabant">North-brabant</option>
                        <option value="North-holland">North-holland</option>
                        <option value="Overijssel">Overijssel</option>
                        <option value="South-holland">South-holland</option>
                        <option value="Utrecht">Utrecht</option>
                        <option value="Zeeland">Zeeland</option>
                      </select>
                    </li>
                    <li className="mt-2">
                      <select
                        name="Municipality"
                        id="Municipality"
                        className="w-full"
                        disabled={province === undefined || province === null}
                        onChange={handleMunicipality}
                      >
                        {(province === undefined ||
                          province === null ||
                          province === "") && (
                          <option>Please select province first</option>
                        )}
                        {Adress[0]
                          .filter((z) => z.province === province)
                          .map((i) =>
                            i.cities.sort().map((j) => (
                              <option key={j} value={j}>
                                {j}
                              </option>
                            ))
                          )}
                      </select>
                    </li>
                    <li className="mt-2">
                      <select
                        name="Town"
                        id="Town"
                        className="w-full"
                        disabled={
                          province === undefined ||
                          province === null ||
                          municipality === undefined ||
                          municipality === null
                        }
                        onChange={handleTown}
                      >
                        {(municipality === undefined ||
                          municipality === null ||
                          municipality === "") && (
                          <option>Please select municipality first</option>
                        )}
                        {Towns[0]
                          .filter((z) => z.city === municipality)
                          .map((i) =>
                            i.town.sort().map((j) => (
                              <option key={j} value={j}>
                                {j}
                              </option>
                            ))
                          )}
                      </select>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Location filters"
                  onClick={() => {
                    setExpanded(true), setLocationExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <BiMap className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setHouseTypeExpanded(!HouseTypeExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <HomeIcon className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    House Type
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {HouseTypeExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {HouseTypeExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li className="mt-1">
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="HouseType"
                        isMulti={false}
                        options={SaleHouseTypes}
                        onChange={setHouseType}
                        isSearchable={true}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="House type filters"
                  onClick={() => {
                    setExpanded(true), setHouseTypeExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <HomeIcon className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setPlotSizeExpanded(!PlotSizeExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <BiFullscreen className="w-5 h-5 stroke-current fill-current" />
                  </div>
                  <span
                    href="#PlotLow"
                    className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs"
                  >
                    Plot Size
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {PlotSizeExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {PlotSizeExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li>
                      <input
                        type="text"
                        id="PlotLow"
                        placeholder="Minimum Plot Size"
                        value={minGross}
                        onChange={handleMinGross}
                        className="inline-block w-full px-4 py-2 text-xs rounded text-blue-700 dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800"
                      />
                    </li>
                    <li className="mt-2">
                      <input
                        type="text"
                        id="PlotHigh"
                        placeholder="Maximum Plot Size"
                        value={maxGross}
                        onChange={handleMaxGross}
                        className="inline-block w-full px-4 py-2 text-xs rounded text-blue-700 dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800"
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Plot size (gross area) filters"
                  onClick={() => {
                    setExpanded(true), setPlotSizeExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <BiFullscreen className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setFloorSizeExpanded(!FloorSizeExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <GiResize className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Floor Size
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {FloorSizeExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {FloorSizeExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li>
                      <input
                        type="text"
                        placeholder="Minimum Floor Size"
                        value={minFloorSize}
                        onChange={handleMinFloorSize}
                        className="inline-block w-full px-4 py-2 text-xs rounded text-blue-700 dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800"
                      />
                    </li>
                    <li className="mt-2">
                      <input
                        type="text"
                        placeholder="Maximum Floor Size "
                        value={maxFloorSize}
                        onChange={handleMaxFloorSize}
                        className="inline-block w-full px-4 py-2 text-xs rounded text-blue-700 dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800"
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Floor size filters"
                  onClick={() => {
                    setExpanded(true), setFloorSizeExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <GiResize className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setRoomsExpanded(!RoomsExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <MdOutlineMeetingRoom className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Number of Rooms
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {RoomsExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {RoomsExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li>
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MinRoom"
                        className="reactSelect"
                        // components={animatedComponents}
                        isMulti={false}
                        options={RoomNumbers}
                        onChange={setMinimumRoom}
                        placeholder="From"
                        isSearchable={true}
                      />
                    </li>
                    <li className="mt-2">
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MaxRoom"
                        // components={animatedComponents}
                        isMulti={false}
                        options={RoomNumbers}
                        onChange={setMaximumRoom}
                        placeholder="To"
                        isSearchable={true}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Number of rooms filters"
                  onClick={() => {
                    setExpanded(true), setRoomsExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <MdOutlineMeetingRoom className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setBedroomsExpanded(!BedroomsExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <BiBed className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Number of Bedrooms
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {BedroomsExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {BedroomsExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li>
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MinBedroom"
                        // components={animatedComponents}
                        isMulti={false}
                        options={BedroomNumbers}
                        onChange={setMinimumBedroom}
                        isSearchable={true}
                      />
                    </li>
                    <li className="mt-2">
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MaxBedroom"
                        // components={animatedComponents}
                        isMulti={false}
                        options={BedroomNumbers}
                        onChange={setMaximumBedroom}
                        isSearchable={true}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Number of bedroom filters"
                  onClick={() => {
                    setExpanded(true), setBedroomsExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <BiBed className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setLivingroomsExpanded(!LivingroomsExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <GiSofa className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Number of Livingrooms
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {LivingroomsExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {LivingroomsExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li>
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MinLivingroom"
                        // components={animatedComponents}
                        isMulti={false}
                        options={LivingroomNumbers}
                        onChange={setMinimumLivingroom}
                        isSearchable={true}
                      />
                    </li>
                    <li className="mt-2">
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MaxLivingroom"
                        // components={animatedComponents}
                        isMulti={false}
                        options={LivingroomNumbers}
                        onChange={setMaximumLivingroom}
                        isSearchable={true}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Number of livingroom filters"
                  onClick={() => {
                    setExpanded(true), setLivingroomsExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <GiSofa className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setBathroomsExpanded(!BathroomsExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <BiBath className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Number of Bathrooms
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {BathroomsExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {BathroomsExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li>
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MinBathroom"
                        // components={animatedComponents}
                        isMulti={false}
                        options={BathroomNumbers}
                        onChange={setMinimumBathroom}
                        isSearchable={true}
                      />
                    </li>
                    <li className="mt-2">
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MaxBathroom"
                        // components={animatedComponents}
                        isMulti={false}
                        options={BathroomNumbers}
                        onChange={setMaximumBathroom}
                        isSearchable={true}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Number of bathroom filters"
                  onClick={() => {
                    setExpanded(true), setBathroomsExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <BiBath className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setToiletsExpanded(!ToiletsExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <FaToilet className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Number of Toilets
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {ToiletsExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {ToiletsExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li>
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MinToilet"
                        // components={animatedComponents}
                        isMulti={false}
                        options={ToiletNumbers}
                        onChange={setMinimumToilet}
                        isSearchable={true}
                      />
                    </li>
                    <li className="mt-2">
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MaxToilet"
                        // components={animatedComponents}
                        isMulti={false}
                        options={ToiletNumbers}
                        onChange={setMaximumToilet}
                        isSearchable={true}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Number of toilet filters"
                  onClick={() => {
                    setExpanded(true), setToiletsExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <FaToilet className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setStoriesExpanded(!StoriesExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <Gi3DStairs className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Number of Stories
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {StoriesExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {StoriesExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li>
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MinStory"
                        // components={animatedComponents}
                        isMulti={false}
                        options={StoryNumbers}
                        onChange={setMinimumStory}
                        isSearchable={true}
                      />
                    </li>
                    <li className="mt-2">
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="MaxStory"
                        // components={animatedComponents}
                        isMulti={false}
                        options={StoryNumbers}
                        onChange={setMaximumStory}
                        isSearchable={true}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Number of story filters"
                  onClick={() => {
                    setExpanded(true), setStoriesExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <Gi3DStairs className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setEfficiencyExpanded(!EfficiencyExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <LightningBoltIcon className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Energy Efficiency
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {EfficiencyExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {EfficiencyExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li className="mt-2">
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="EnergyEfficiency"
                        // components={animatedComponents}
                        isMulti={false}
                        options={EnergyEfficiency}
                        onChange={setEnergy}
                        isSearchable={true}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Energy efficiency filter"
                  onClick={() => {
                    setExpanded(true), setEfficiencyExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <LightningBoltIcon className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setBalconyExpanded(!BalconyExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <MdBalcony className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Balcony
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {BalconyExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {BalconyExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li className="mt-2">
                      <Select
                        theme={theme === "dark" && customSelectTheme}
                        closeMenuOnSelect={true}
                        name="BalconyExist"
                        // components={animatedComponents}
                        isMulti={false}
                        options={BalconyExist}
                        onChange={setBalcony}
                        isSearchable={false}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Balcony filter"
                  onClick={() => {
                    setExpanded(true), setBalconyExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <MdBalcony className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setGarageExpanded(!GarageExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <GiHomeGarage className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Garage
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {GarageExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {GarageExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li className="mt-2">
                      <Select
                        closeMenuOnSelect={true}
                        theme={theme === "dark" && customSelectTheme}
                        name="GarageExist"
                        // components={animatedComponents}
                        isMulti={false}
                        options={BalconyExist}
                        onChange={setGarage}
                        isSearchable={false}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Garage filter"
                  onClick={() => {
                    setExpanded(true), setGarageExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <GiHomeGarage className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setGardenExpanded(!GardenExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <FaTree className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Garden
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {GardenExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {GardenExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li className="mt-2">
                      <Select
                        closeMenuOnSelect={true}
                        theme={theme === "dark" && customSelectTheme}
                        name="GardenExist"
                        // components={animatedComponents}
                        isMulti={false}
                        options={BalconyExist}
                        onChange={setGarden}
                        isSearchable={false}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Garden filter"
                  onClick={() => {
                    setExpanded(true), setGardenExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <FaTree className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setTerraceExpanded(!TerraceExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <MdBalcony className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Terrace
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {TerraceExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {TerraceExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li className="mt-2">
                      <Select
                        closeMenuOnSelect={true}
                        theme={theme === "dark" && customSelectTheme}
                        name="TerraceExist"
                        // components={animatedComponents}
                        isMulti={false}
                        options={BalconyExist}
                        onChange={setTerrace}
                        isSearchable={false}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Terrace filter"
                  onClick={() => {
                    setExpanded(true), setTerraceExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <MdBalcony className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setTaxExpanded(!TaxExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <ReceiptTaxIcon className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Tax
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {TaxExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {TaxExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li className="mt-2">
                      <Select
                        closeMenuOnSelect={true}
                        theme={theme === "dark" && customSelectTheme}
                        name="TaxExist"
                        // components={animatedComponents}
                        isMulti={false}
                        options={TaxExist}
                        onChange={setTax}
                        isSearchable={false}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Tax and service cost filter"
                  onClick={() => {
                    setExpanded(true), setTaxExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <ReceiptTaxIcon className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setDateExpanded(!DateExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <CalendarIcon className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Posting Date
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {DateExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {DateExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col">
                    <li className="ml-3 ">
                      <div className="flex items-center space-x-3 text-sm dark:text-gray-400 dark:hover:text-gray-200 text-gray-600 hover:text-blue-700">
                        <input
                          type="radio"
                          value={0}
                          placeholder="All times"
                          id="option1"
                          name="Date"
                          onChange={handlePostingDate}
                        />
                        <label htmlFor="option1">All Times</label>
                      </div>
                    </li>
                    <li className="ml-3 mt-1">
                      <div className="flex items-center space-x-3 text-sm dark:text-gray-400 dark:hover:text-gray-200 text-gray-600 hover:text-blue-700">
                        <input
                          type="radio"
                          value={unix - 86300}
                          placeholder="Today"
                          id="option2"
                          name="Date"
                          onChange={handlePostingDate}
                        />
                        <label htmlFor="option2">Last 24 hours</label>
                      </div>
                    </li>
                    <li className="ml-3 mt-1">
                      <div className="flex items-center space-x-3 text-sm dark:text-gray-400 dark:hover:text-gray-200 text-gray-600 hover:text-blue-700">
                        <input
                          type="radio"
                          value={unix - 258000}
                          placeholder="Today"
                          id="option3"
                          name="Date"
                          onChange={handlePostingDate}
                        />
                        <label htmlFor="option3">Last 3 days</label>
                      </div>
                    </li>
                    <li className="ml-3 mt-1">
                      <div className="flex items-center space-x-3 text-sm dark:text-gray-400 dark:hover:text-gray-200 text-gray-600 hover:text-blue-700">
                        <input
                          type="radio"
                          value={unix - 604000}
                          placeholder="Today"
                          id="option4"
                          name="Date"
                          onChange={handlePostingDate}
                        />
                        <label htmlFor="option4">Last week</label>
                      </div>
                    </li>
                    <li className="ml-3 mt-1">
                      <div className="flex items-center space-x-3 text-sm dark:text-gray-400 dark:hover:text-gray-200 text-gray-600 hover:text-blue-700">
                        <input
                          type="radio"
                          value={unix - 2591000}
                          placeholder="Today"
                          id="option5"
                          name="Date"
                          onChange={handlePostingDate}
                        />
                        <label htmlFor="option5">Last month</label>
                      </div>
                    </li>
                    <li className="ml-3 mt-1">
                      <div className="flex items-center space-x-3 text-sm dark:text-gray-400 dark:hover:text-gray-200 text-gray-600 hover:text-blue-700">
                        <input
                          type="radio"
                          value={unix - 7775000}
                          placeholder="Today"
                          id="option6"
                          name="Date"
                          onChange={handlePostingDate}
                        />
                        <label htmlFor="option6">Last quarter</label>
                      </div>
                    </li>
                    <li className="ml-3 mt-1">
                      <div className="flex items-center space-x-3 text-sm dark:text-gray-400 dark:hover:text-gray-200 text-gray-600 hover:text-blue-700">
                        <input
                          type="radio"
                          value={unix - 31535000}
                          placeholder="Today"
                          id="option7"
                          name="Date"
                          onChange={handlePostingDate}
                        />
                        <label htmlFor="option7">Last year</label>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Posting date filter"
                  onClick={() => {
                    setExpanded(true), setDateExpanded(true);
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
                onClick={() => setConstructionExpanded(!ConstructionExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <BsCalendarDate className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Construction Year
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {ConstructionExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {ConstructionExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li className="mt-2">
                      <Select
                        closeMenuOnSelect={true}
                        theme={theme === "dark" && customSelectTheme}
                        name="TaxExist"
                        // components={animatedComponents}
                        isMulti={false}
                        options={ConstructionYearList}
                        onChange={setConstructionYear}
                        isSearchable={false}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Construction year filter"
                  onClick={() => {
                    setExpanded(true), setConstructionExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <BsCalendarDate className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}

          {expanded ? (
            <li>
              <div
                onClick={() => setUserStatusExpanded(!UserStatusExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <UserIcon className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Availability
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {UserStatusExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {UserStatusExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500">
                    <li className="mt-1">
                      <Select
                        closeMenuOnSelect={true}
                        theme={theme === "dark" && customSelectTheme}
                        name="TaxExist"
                        // components={animatedComponents}
                        isMulti={false}
                        options={UsingStatus}
                        onChange={setUserStatus}
                        isSearchable={false}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Availability (Current user status) filter"
                  onClick={() => {
                    setExpanded(true), setUserStatusExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <UserIcon className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
          {expanded ? (
            <li>
              <div
                onClick={() => setFecadeExpanded(!FecadeExpanded)}
                className="relative dark:hover:bg-gray-600 hover:bg-blue-50 text-gray-500 dark:hover:text-white  hover:text-blue-800 flex justify-between"
              >
                <div className="flex items-center w-full hover:font-semibold">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-event-none">
                    <SunIcon className="w-5 h-5 stroke-current " />
                  </div>
                  <span className="inline-block w-full pl-8 pr-4 py-2 rounded text-xs">
                    Fecade
                  </span>
                </div>
                <button className="absolute right-0 p-1 flex items-center">
                  {FecadeExpanded ? (
                    <ChevronUpIcon className="w-4 h-4 stroke-current" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  )}
                </button>
              </div>
              {FecadeExpanded && (
                <div className="py-2 pl-1">
                  <ul className="flex flex-col text-gray-500 ml-6">
                    <li className=" flex items-center space-x-1">
                      <input
                        type="checkbox"
                        className="rounded-sm checked:bg-orange-500 checked:hover:bg-orange-600 focus:ring-orange-300 focus:checked:bg-orange-500 checked:border-transparent appearance-none cursor-pointer"
                        defaultChecked={WestFecade}
                        checked={WestFecade}
                        onClick={() => setWestFecade(!WestFecade)}
                        placeholder="West"
                        indeterminate={!WestFecade}
                      />
                      <span
                        onClick={() => setWestFecade(!WestFecade)}
                        className={`${
                          WestFecade &&
                          "text-blue-500 font-semibold cursor-pointer"
                        } text-sm`}
                      >
                        West
                      </span>
                    </li>
                    <li className=" flex items-center space-x-1">
                      <input
                        type="checkbox"
                        className="rounded-sm checked:bg-orange-500 checked:hover:bg-orange-600 focus:ring-orange-300 focus:checked:bg-orange-500 checked:border-transparent appearance-none cursor-pointer"
                        defaultChecked={EastFecade}
                        checked={EastFecade}
                        onClick={() => setEastFecade(!EastFecade)}
                        placeholder="East"
                      />
                      <span
                        onClick={() => setEastFecade(!EastFecade)}
                        className={`${
                          EastFecade &&
                          "text-blue-500 font-semibold cursor-pointer"
                        } text-sm`}
                      >
                        East
                      </span>
                    </li>
                    <li className=" flex items-center space-x-1">
                      <input
                        type="checkbox"
                        className="cursor-pointer rounded-sm checked:bg-orange-500 checked:hover:bg-orange-600 focus:ring-orange-300 focus:checked:bg-orange-500 checked:border-transparent appearance-none"
                        defaultChecked={NorthFecade}
                        checked={NorthFecade}
                        onClick={() => setNorthFecade(!NorthFecade)}
                        placeholder="North"
                      />
                      <span
                        onClick={() => setNorthFecade(!NorthFecade)}
                        className={`${
                          NorthFecade &&
                          "text-blue-500 font-semibold cursor-pointer"
                        } text-sm`}
                      >
                        North
                      </span>
                    </li>
                    <li className=" flex items-center space-x-1">
                      <input
                        type="checkbox"
                        className="rounded-sm checked:bg-orange-500 checked:hover:bg-orange-600 focus:ring-orange-300 focus:checked:bg-orange-500 checked:border-transparent appearance-none cursor-pointer"
                        defaultChecked={SouthFecade}
                        checked={SouthFecade}
                        onChange={() => setSouthFecade(!SouthFecade)}
                        placeholder="South"
                      />
                      <span
                        onClick={() => setSouthFecade(!SouthFecade)}
                        className={`${
                          SouthFecade && "text-blue-500 font-semibold"
                        } text-sm cursor-pointer`}
                      >
                        South
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="flex items-center justify-center">
                <div
                  title="Fecade filter"
                  onClick={() => {
                    setExpanded(true), setFecadeExpanded(true);
                  }}
                  className="flex items-center justify-center bg-blue-100 text-blue-600 hover:text-blue-200 hover:bg-blue-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-800 rounded-md cursor-pointer transition-all duration-150"
                >
                  <SunIcon className="w-5 h-5 stroke-current m-1.5" />
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
