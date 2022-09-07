import Card from "./Card";
import { collection, onSnapshot, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  MaxBedroomState,
  MaxBathroomState,
  MaxFloorSizeState,
  MaxGrossState,
  MaxPriceState,
  MaxRoomState,
  MinBedroomState,
  MaxFloorNumberState,
  MinFloorNumberState,
  MinFloorSizeState,
  MinGrossState,
  MinPriceState,
  MinRoomState,
  MinBathroomState,
  FiltersState,
  EnergyLevelState,
  ProvinceState,
  MunicipalityState,
  StatusState,
  BalconyState,
  MinLivingroomState,
  MaxLivingroomState,
  MaxToiletState,
  MinToiletState,
  GarageState,
  GardenState,
  HouseTypeState,
  PostingDateState,
  TownState,
  TaxState,
  WestState,
  EastState,
  NorthState,
  SouthState,
  TerraceState,
  ConstructionState,
  UserStatusState,
} from "../../Components/RealEstate/RealEstateStates";
import { db } from "../../firebase";
import FilterBox from "./FilterBox";
import Select from "react-select";
import { SortingList, UpOrDown } from "../Provinces";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const AllCards = () => {
  const { theme } = useTheme();
  const [houses, setHouses] = useState([]);
  const [SortBy, setSortBy] = useState("PlotArea");
  const [SortBy2, setSortBy2] = useState("down");
  const [listOrMap, setListOrMap] = useState("List");

  const minPrice = MinPriceState();
  const maxPrice = MaxPriceState();
  const minGross = MinGrossState();
  const maxGross = MaxGrossState();
  const minFloorSize = MinFloorSizeState();
  const maxFloorSize = MaxFloorSizeState();
  const minRoom = MinRoomState();
  const maxRoom = MaxRoomState();
  const minBedroom = MinBedroomState();
  const maxBedroom = MaxBedroomState();
  const minLivingroom = MinLivingroomState();
  const maxLivingroom = MaxLivingroomState();
  const minBathroom = MinBathroomState();
  const maxBathroom = MaxBathroomState();
  const minToilet = MinToiletState();
  const maxToilet = MaxToiletState();
  const minFloorNumber = MinFloorNumberState();
  const maxFloorNumber = MaxFloorNumberState();
  const energy = EnergyLevelState();
  const balcony = BalconyState();
  const Garage = GarageState();
  const Garden = GardenState();
  const Terrace = TerraceState();
  const Tax = TaxState();
  const province = ProvinceState();
  const municipality = MunicipalityState();
  const Town = TownState();
  const status = StatusState();
  const HouseType = HouseTypeState();
  const PostingDate = PostingDateState();
  const West = WestState();
  const East = EastState();
  const North = NorthState();
  const South = SouthState();
  const Construction = ConstructionState();

  const UserStatus = UserStatusState();
  const filters = FiltersState();
  const [currentPage, setCurrentPage] = useState(1);

  // ============================================ Firebase ==============================================

  useEffect(() => {
    return onSnapshot(query(collection(db, "houses")), (snapshot) => {
      setHouses(snapshot.docs);
    });
  }, [db]);

  // ============================================ Firebase ==============================================

  var unix = Math.round(+new Date() / 1000); // Timestamp (UNIX)
  var NewUnix = Math.round(+new Date() / 1000) - PostingDate;

  //================================================== SORTING ===========================================

  useEffect(() => {
    if (SortBy.sortItem === "EnergyLevel" && SortBy2.value === "up") {
      houses.sort(
        (a, b) =>
          a.data().EnergyLevel.charCodeAt() - b.data().EnergyLevel.charCodeAt()
      );
    } else if (SortBy.sortItem === "EnergyLevel" && SortBy2.value === "down") {
      houses.sort(
        (a, b) =>
          b.data().EnergyLevel.charCodeAt() - a.data().EnergyLevel.charCodeAt()
      );
    } else if (SortBy.sortItem === "PostingDate" && SortBy2.value === "down") {
      houses.sort((a, b) => b.data().PostingDate - a.data().PostingDate);
    } else if (SortBy.sortItem === "PostingDate" && SortBy2.value === "up") {
      houses.sort((a, b) => a.data().PostingDate - b.data().PostingDate);
    } else if (SortBy2.value === "up") {
      houses.sort(
        (a, b) => b.data()[SortBy.sortItem] - a.data()[SortBy.sortItem]
      );
    } else if (SortBy2.value === "down") {
      houses.sort(
        (a, b) => a.data()[SortBy.sortItem] - b.data()[SortBy.sortItem]
      );
    }
  }, [SortBy, SortBy2]);

  //================================================== SORTING ===========================================

  const displayCards = houses
    .filter((house) =>
      minPrice !== undefined && minPrice !== "" && minPrice !== null
        ? house.data().Price >= minPrice
        : house.data().Price >= 0
    )
    .filter((house) =>
      maxPrice !== undefined && maxPrice !== "" && maxPrice !== null
        ? house.data().Price <= maxPrice
        : house.data().Price <= 9999999999
    )
    .filter((house) =>
      province !== undefined &&
      province !== null &&
      province !== "" &&
      province !== "All"
        ? house.data().Province === province
        : house.data()
    )
    .filter((house) =>
      municipality !== undefined && municipality !== null && municipality !== ""
        ? house.data().Municipality === municipality
        : house.data()
    )
    .filter((house) =>
      Town !== undefined && Town !== null && Town !== ""
        ? house.data().Neighbourhood === Town
        : house.data()
    )
    .filter((house) =>
      HouseType !== undefined &&
      HouseType !== null &&
      HouseType !== NaN &&
      HouseType !== ""
        ? house.data().HouseType === HouseType
        : house.data()
    )
    .filter((house) =>
      minGross !== undefined && minGross !== "" && minGross !== null
        ? house.data().PlotArea >= minGross
        : house.data().PlotArea >= 0
    )
    .filter((house) =>
      maxGross !== undefined && maxGross !== "" && maxGross !== null
        ? house.data().PlotArea <= maxGross
        : house.data().PlotArea <= 999999999
    )
    .filter((house) =>
      minFloorSize !== undefined && minFloorSize !== "" && minFloorSize !== null
        ? house.data().FloorArea >= minFloorSize
        : house.data().FloorArea >= 0
    )
    .filter((house) =>
      maxFloorSize !== undefined && maxFloorSize !== "" && maxFloorSize !== null
        ? house.data().FloorArea <= maxFloorSize
        : house.data().FloorArea <= 999999999
    )
    .filter((house) =>
      minRoom !== undefined && minRoom !== "" && minRoom !== null
        ? house.data().NumberOfRoom >= minRoom
        : house.data().NumberOfRoom >= 0
    )
    .filter((house) =>
      maxRoom !== undefined && maxRoom !== "" && maxRoom !== null
        ? house.data().NumberOfRoom <= maxRoom
        : house.data().NumberOfRoom <= 999999999
    )
    .filter((house) =>
      minBedroom !== undefined && minBedroom !== "" && minBedroom !== null
        ? house.data().NumberOfBedroom >= minBedroom
        : house.data().NumberOfBedroom >= 0
    )
    .filter((house) =>
      maxBedroom !== undefined && maxBedroom !== "" && maxBedroom !== null
        ? house.data().NumberOfBedroom <= maxBedroom
        : house.data().NumberOfBedroom <= 999999999
    )
    .filter((house) =>
      minLivingroom !== undefined &&
      minLivingroom !== "" &&
      minLivingroom !== null
        ? house.data().NumberOfLivingRoom >= minLivingroom
        : house.data().NumberOfLivingRoom >= 0 ||
          house.data().NumberOfLivingRoom === undefined
    )
    .filter((house) =>
      maxLivingroom !== undefined &&
      maxLivingroom !== "" &&
      maxLivingroom !== null
        ? house.data().NumberOfLivingRoom <= maxLivingroom
        : house.data().NumberOfLivingRoom <= 999999999 ||
          house.data().NumberOfLivingRoom === undefined
    )
    .filter((house) =>
      minBathroom !== undefined && minBathroom !== "" && minBathroom !== null
        ? house.data().NumberOfBathroom >= minBathroom
        : house.data().NumberOfBathroom >= 0 ||
          house.data().NumberOfBathroom === undefined
    )
    .filter((house) =>
      maxBathroom !== undefined && maxBathroom !== "" && maxBathroom !== null
        ? house.data().NumberOfBathroom <= maxBathroom
        : house.data().NumberOfBathroom <= 999999999 ||
          house.data().NumberOfBathroom === undefined
    )
    .filter((house) =>
      minToilet !== undefined && minToilet !== "" && minToilet !== null
        ? house.data().NumberOfToilet >= minToilet
        : house.data().NumberOfToilet >= 0 ||
          house.data().NumberOfToilet === undefined
    )
    .filter((house) =>
      maxToilet !== undefined && maxToilet !== "" && maxToilet !== null
        ? house.data().NumberOfToilet <= maxToilet
        : house.data().NumberOfToilet <= 999999999 ||
          house.data().NumberOfToilet === undefined
    )
    .filter((house) =>
      minFloorNumber !== undefined &&
      minFloorNumber !== "" &&
      minFloorNumber !== null
        ? house.data().NumberOfFloor >= minFloorNumber
        : house.data().NumberOfFloor >= 0
    )
    .filter((house) =>
      maxFloorNumber !== undefined &&
      maxFloorNumber !== "" &&
      maxFloorNumber !== null
        ? house.data().NumberOfFloor <= maxFloorNumber
        : house.data().NumberOfFloor <= 999999999
    )
    .filter((house) =>
      energy !== undefined && energy !== null
        ? house.data().EnergyLevel.charCodeAt() <= energy.charCodeAt()
        : house.data().EnergyLevel.charCodeAt() <= 72
    )
    .filter((house) =>
      balcony === true
        ? house.data().NumberOfBalcony >= 1
        : balcony == false || balcony === 0
        ? house.data().NumberOfBalcony < 1 ||
          house.data().NumberOfBalcony === undefined
        : house.data()
    )
    .filter((house) =>
      Garage === true
        ? house.data().NumberOfGarage >= 1
        : Garage === false
        ? house.data().NumberOfGarage < 1 ||
          house.data().NumberOfGarage === undefined
        : house.data()
    )
    .filter((house) =>
      Garden === true
        ? house.data().NumberOfGarden >= 1
        : Garden === false
        ? house.data().NumberOfGarden < 1 ||
          house.data().NumberOfGarden === undefined
        : house.data()
    )
    .filter((house) =>
      Tax === true
        ? house.data().Included === true
        : Tax === false
        ? house.data().Included === false
        : house.data()
    )
    .filter((house) =>
      status === "For Sale"
        ? house.data().RentOrSale === "For Sale"
        : status === "For Rent"
        ? house.data().RentOrSale === "For Rent"
        : house.data()
    )
    .filter((house) =>
      Construction
        ? house.data().ConstructionYear >= Construction
        : house.data()
    )
    .filter((house) =>
      UserStatus !== null && UserStatus !== undefined && UserStatus !== "All"
        ? house.data().UserStatus == UserStatus
        : house.data()
    )
    .filter((house) =>
      unix > PostingDate && PostingDate > 1420070401
        ? house.data().PostingDate?.seconds > PostingDate
        : house.data()
    )
    .filter((house) =>
      West === true ? house.data()?.Fecade?.West === true : house.data()
    )
    .filter((house) =>
      East === true ? house.data()?.Fecade?.East === true : house.data()
    )
    .filter((house) =>
      North === true ? house.data()?.Fecade?.North === true : house.data()
    )
    .filter((house) =>
      South === true ? house.data()?.Fecade?.South === true : house.data()
    );
  //  ================================== PAGINATION ================================================

  const pagination = Math.floor(displayCards.length / 10.0001) + 1;

  const arr = [];

  for (var i = 1; i <= pagination; i++) {
    arr.push(i);
  }
  useEffect(() => {
    // eslint-disable-next-line
    setCurrentPage(1);
  }, [
    minPrice,
    maxPrice,
    minGross,
    maxGross,
    minFloorSize,
    maxFloorSize,
    minRoom,
    maxRoom,
    minBedroom,
    maxBedroom,
    minLivingroom,
    maxLivingroom,
    minBathroom,
    maxBathroom,
    minToilet,
    maxToilet,
    minFloorNumber,
    maxFloorNumber,
    energy,
    balcony,
    Garage,
    Garden,
    Tax,
    province,
    municipality,
    Town,
    status,
    West,
    East,
    South,
    North,
    PostingDate,
    Construction,
    UserStatus,
    SortBy,
    SortBy2,
  ]);

  var gardenBalcony = [filters[20], filters[23], filters[26], filters[27]];
  var fecade = [filters[30], filters[31], filters[32], filters[33]];

  // ==================================REACT-SELECT==================================
  const customSelectTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#495057", // focus ve selected item
        primary25: "#adb5bd", // listedekileri hover'layınca
        neutral0: "#212529", // inputun içi ve yazı rengi
        neutral50: "#fff", // liste'de seleceted item yazı rengi
        neutral80: "#fff", // input'da seleceted item yazı rengi
      },
    };
  };
  // ==================================REACT-SELECT==================================
  // ================================== PAGINATION ================================================
  return (
    <div className="w-full mt-3 h-[90vh] sticky overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600">
      <div className="border-b-4 border-b-orange-500 pb-3 mr-3 w-full h-auto">
        <div className="flex space-x-10">
          <div className="mr-3">
            <h2 className="text-xl dark:text-gray-300 text-gray-700">
              <span className="font-semibold dark:text-blue-200 text-blue-800">
                {displayCards.length}
              </span>{" "}
              houses{" "}
              <span className="dark:text-orange-400 text-orange-500 font-semibold">
                {status !== null && status !== undefined && status !== "All"
                  ? status.toLowerCase()
                  : ""}
              </span>{" "}
              found in
            </h2>
            <h1 className="text-2xl">
              {province === null || province === undefined || province === ""
                ? "the Netherlands"
                : municipality === null ||
                  municipality === undefined ||
                  municipality === ""
                ? province
                : municipality + ", " + province}
            </h1>
          </div>
          <div className="flex space-x-1 space-y-0 flex-wrap">
            {filters
              .filter((item) => item.state !== undefined)
              .filter((item) => item.state !== null)
              .filter((item) => item.state !== "")
              .filter((item) => item.state !== "All")
              .filter((item) => item.state !== PostingDate)
              .filter((item) => item.state !== Garage)
              .filter((item) => item.state !== Garden)
              .filter((item) => item.state !== balcony)
              .filter((item) => item.state !== Tax)
              .filter((item) => item.state !== West)
              .filter((item) => item.state !== East)
              .filter((item) => item.state !== North)
              .filter((item) => item.state !== South)
              .filter((item) => item.state !== UserStatus)
              .map((insideItem) => {
                return (
                  <FilterBox
                    key={insideItem.id}
                    filterContext={insideItem.context}
                    beforeFilterContext={insideItem.beforeContext}
                    afterFilterContext={insideItem.afterContext}
                    removeItem={insideItem.removeFunction}
                    filterValue={
                      insideItem.state !== province &&
                      insideItem.state !== municipality &&
                      insideItem.state !== Town &&
                      insideItem.state !== status &&
                      insideItem.state !== energy &&
                      insideItem.state !== HouseType
                        ? insideItem.state !== Construction
                          ? Intl.NumberFormat("nl-NL").format(insideItem.state)
                          : insideItem.state
                        : insideItem.state.toUpperCase()
                    }
                  />
                );
              })}
            {filters
              .filter((item) => item.state === PostingDate)
              .filter((item) => item.state !== undefined)
              .filter((item) => item.state !== null)
              .filter((item) => item.state !== 0)
              .filter((item) => item.state !== "All")
              .map((insideItem) => {
                return (
                  <FilterBox
                    key={insideItem.id}
                    filterContext={insideItem.context}
                    beforeFilterContext={insideItem.beforeContext}
                    afterFilterContext={insideItem.afterContext}
                    removeItem={insideItem.removeFunction}
                    filterValue={
                      NewUnix <= 86400
                        ? "for 24 hours"
                        : NewUnix <= 259200
                        ? "for 3 days"
                        : NewUnix <= 604800
                        ? "for a week"
                        : NewUnix <= 2592000
                        ? "for a month"
                        : NewUnix <= 7776000
                        ? "for a quarter"
                        : NewUnix <= 31536000 && "for a year"
                    }
                  />
                );
              })}
            {gardenBalcony
              .filter((item) => item.state !== undefined)
              .filter((item) => item.state !== null)
              .filter((item) => item.state !== 0)
              .filter((item) => item.state !== "All")
              .map((insideItem) => {
                return (
                  <FilterBox
                    key={insideItem.id}
                    filterContext={insideItem.context}
                    beforeFilterContext={insideItem.beforeContext}
                    afterFilterContext={insideItem.afterContext}
                    removeItem={insideItem.removeFunction}
                    filterValue={insideItem.state === true ? "" : "not"}
                  />
                );
              })}
            {filters[29].state === true || filters[29].state === false ? (
              <FilterBox
                key={filters[29].id}
                filterContext={filters[29].context}
                beforeFilterContext={filters[29].beforeContext}
                afterFilterContext={filters[29].afterContext}
                removeItem={filters[29].removeFunction}
                filterValue={
                  filters[29].state === true ? "included" : "not included"
                }
              />
            ) : null}
            {filters[35].state !== null &&
            filters[35].state !== undefined &&
            filters[35].state !== "All" ? (
              <FilterBox
                key={filters[35].id}
                filterContext={filters[35].context}
                beforeFilterContext={filters[35].beforeContext}
                afterFilterContext={
                  filters[35].state === "Tenant" ||
                  filters[35].state === "Proprietor"
                    ? " lives"
                    : " to move"
                }
                removeItem={filters[35].removeFunction}
                filterValue={filters[35].state}
              />
            ) : null}
            {fecade
              .filter((item) => item.state !== undefined)
              .filter((item) => item.state !== null)
              .filter((item) => item.state !== 0)
              .filter((item) => item.state !== "All")
              .filter((item) => item.state === true)
              .map((insideItem) => {
                return (
                  <FilterBox
                    key={insideItem.id}
                    filterContext={insideItem.context}
                    beforeFilterContext={insideItem.beforeContext}
                    afterFilterContext={insideItem.afterContext}
                    removeItem={insideItem.removeFunction}
                    filterValue={insideItem.state === true && insideItem.id}
                  />
                );
              })}
          </div>
        </div>
        <div className="flex items-center justify-between mt-8">
          {/* sort */}
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Select
                closeMenuOnSelect={true}
                theme={theme === "dark" && customSelectTheme}
                name="SortList"
                className="md:w-[15vw] w-[20vw]"
                isMulti={false}
                options={SortingList}
                onChange={setSortBy}
                placeholder="Sort by"
                isSearchable={false}
              />
              <Select
                closeMenuOnSelect={true}
                theme={theme === "dark" && customSelectTheme}
                name="SortList"
                className=" w-[10vw]"
                isMulti={false}
                options={UpOrDown}
                onChange={setSortBy2}
                placeholder="Order"
                isSearchable={false}
              />
            </div>
            {/* map */}
            <div className="flex items-center">
              <div
                onClick={() => {
                  setListOrMap("List");
                }}
                className="dark:bg-gray-800 dark:text-gray-100 text-gray-600 py-2 px-3 cursor-pointer bg-white mr-2 border-b-2 border-b-gray-300"
              >
                <p>List view</p>
              </div>
              <div
                onClick={() => setListOrMap("Map")}
                className="py-2 px-3 cursor-pointer dark:text-gray-50 dark:bg-gray-600 bg-blue-200 mr-2 border-b-2 dark:border-b-orange-500 border-b-blue-300"
              >
                <p>Map view</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        {displayCards
          .slice((currentPage - 1) * 10, currentPage * 10)
          .map((house) => (
            <Card
              key={house.id}
              image={
                house.data().ImageURL !== undefined
                  ? house.data().ImageURL
                  : house.data().ImageArray[0]
              }
              title={house.data().title}
              Municipality={house.data().Municipality}
              Province={house.data().Province}
              PostalCode={house.data().PostalCode}
              Town={house.data().Street}
              PlotSize={house.data().PlotArea}
              FloorSize={house.data().FloorArea}
              RoomNumber={house.data().NumberOfRoom}
              BedroomNumber={house.data().NumberOfBedroom}
              SortType={SortBy.sortItem}
              FilterItem={
                SortBy.sortItem &&
                SortBy.sortItem !== "Price" &&
                SortBy.sortItem !== "PlotArea" &&
                SortBy.sortItem !== "FloorArea" &&
                SortBy.sortItem !== "NumberOfRoom" &&
                SortBy.sortItem !== "NumberOfBedroom"
                  ? SortBy.sortItem === "PostingDate"
                    ? house.data().PostingDate?.seconds
                    : SortBy.sortItem === "Furnished"
                    ? ""
                    : `${house.data()[SortBy.sortItem]}`
                  : house.data().NumberOfLivingRoom
              }
              FilterText={
                SortBy.sortItem &&
                SortBy.sortItem !== "Price" &&
                SortBy.sortItem !== "PlotArea" &&
                SortBy.sortItem !== "FloorArea" &&
                SortBy.sortItem !== "NumberOfRoom" &&
                SortBy.sortItem !== "NumberOfBedroom"
                  ? SortBy.sortItem === "Furnished" &&
                    house.data().Furnished === true
                    ? "Furnished"
                    : SortBy.text
                  : " Livingrooms"
              }
              price={house.data().Price}
              id={house.id}
            />
          ))}
        {Math.floor(displayCards.length / 10.001) + 1 >= 2 && (
          <div className="mt-4 flex items-center justify-center relative gap-5 w-full h-10 ">
            <div>
              {currentPage > 1 && (
                <button
                  className="p-1 rounded-full flex items-center justify-center text-orange-500 font-semibold cursor-pointer hover:bg-orange-50 hover:text-orange-800 hover:scale-105 transition-all duration-150 ease-out"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <ChevronLeftIcon className=" w-5 h-5 " />
                </button>
              )}
            </div>
            <div className="flex items-center gap-x-3">
              {arr.map((page) => (
                <span
                  key={page}
                  className={`${
                    page === currentPage
                      ? "dark:bg-gray-700 dark:text-blue-100 bg-blue-100 text-blue-900 font-semibold"
                      : "dark:bg-gray-500 bg-white"
                  } rounded-full flex items-center justify-center w-5 h-5 p-4 cursor-pointer dark:hover:bg-gray-600 hover:bg-blue-50 hover:text-blue-800 dark:hover:text-blue-400 hover:scale-105 transition-all duration-150 ease-out`}
                  value={page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </span>
              ))}
            </div>

            <div>
              {currentPage < displayCards.length / 10 && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="p-1 rounded-full flex items-center justify-center text-orange-500 font-semibold cursor-pointer hover:bg-orange-50 hover:text-orange-800 hover:scale-105 transition-all duration-150 ease-out"
                >
                  <ChevronRightIcon className="w-5 h-5 " />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCards;
