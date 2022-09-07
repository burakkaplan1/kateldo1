import React, { useContext, useEffect, useState } from "react";
import { Adress } from "../Provinces";

// ============================== CONTEXTs ====================================
export const HouseDataContext = React.createContext();
export const HouseDataUpdateContext = React.createContext();

export const FiltersContext = React.createContext();
export const FiltersUpdateContext = React.createContext();
export const FilterRemoveContext = React.createContext();
export const ToggleContext = React.createContext();
export const ToggleUpdateContext = React.createContext();

export const MinPriceContext = React.createContext();
export const MinPriceUpdateContext = React.createContext();

export const MaxPriceContext = React.createContext();
export const MaxPriceUpdateContext = React.createContext();

export const MinGrossContext = React.createContext();
export const MinGrossUpdateContext = React.createContext();
export const MaxGrossContext = React.createContext();
export const MaxGrossUpdateContext = React.createContext();

export const MinFloorSizeContext = React.createContext();
export const MinFloorSizeUpdateContext = React.createContext();
export const MaxFloorSizeContext = React.createContext();
export const MaxFloorSizeUpdateContext = React.createContext();

export const MinRoomContext = React.createContext();
export const MinRoomUpdateContext = React.createContext();
export const MaxRoomContext = React.createContext();
export const MaxRoomUpdateContext = React.createContext();

export const MinBedroomContext = React.createContext();
export const MinBedroomUpdateContext = React.createContext();
export const MaxBedroomContext = React.createContext();
export const MaxBedroomUpdateContext = React.createContext();

export const MinLivingroomContext = React.createContext();
export const MinLivingroomUpdateContext = React.createContext();
export const MaxLivingroomContext = React.createContext();
export const MaxLivingroomUpdateContext = React.createContext();

export const MinBathroomContext = React.createContext();
export const MinBathroomUpdateContext = React.createContext();
export const MaxBathroomContext = React.createContext();
export const MaxBathroomUpdateContext = React.createContext();

export const MinToiletContext = React.createContext();
export const MinToiletUpdateContext = React.createContext();
export const MaxToiletContext = React.createContext();
export const MaxToiletUpdateContext = React.createContext();

export const MinFloorNumberContext = React.createContext();
export const MinFloorNumberUpdateContext = React.createContext();
export const MaxFloorNumberContext = React.createContext();
export const MaxFloorNumberUpdateContext = React.createContext();

export const EnergyLevelContext = React.createContext();
export const EnergyLevelUpdateContext = React.createContext();
export const BalconyContext = React.createContext();
export const BalconyUpdateContext = React.createContext();
export const GarageContext = React.createContext();
export const GarageUpdateContext = React.createContext();
export const GardenContext = React.createContext();
export const GardenUpdateContext = React.createContext();
export const TerraceContext = React.createContext();
export const TerraceUpdateContext = React.createContext();
export const TaxContext = React.createContext();
export const TaxUpdateContext = React.createContext();

export const ProvinceContext = React.createContext();
export const ProvinceUpdateContext = React.createContext();
export const MunicipalityContext = React.createContext();
export const MunicipalityUpdateContext = React.createContext();
export const TownContext = React.createContext();
export const TownUpdateContext = React.createContext();

export const StatusContext = React.createContext();
export const StatusUpdateContext = React.createContext();

export const HouseTypeContext = React.createContext();
export const HouseTypeUpdateContext = React.createContext();

export const PostingDateContext = React.createContext();
export const PostingDateUpdateContext = React.createContext();
export const WestContext = React.createContext();
export const WestUpdateContext = React.createContext();
export const EastContext = React.createContext();
export const EastUpdateContext = React.createContext();
export const NorthContext = React.createContext();
export const NorthUpdateContext = React.createContext();
export const SouthContext = React.createContext();
export const SouthUpdateContext = React.createContext();
export const ConstructionContext = React.createContext();
export const ConstructionUpdateContext = React.createContext();
export const UserStatusContext = React.createContext();
export const UserStatusUpdateContext = React.createContext();

export const SearchContext = React.createContext();
export const SearchUpdateContext = React.createContext();

// ============================== CONTEXTs ====================================
// ============================== STATEs ====================================
export function HouseDataState() {
  return useContext(HouseDataContext);
}
export function HouseDataUpdateState() {
  return useContext(HouseDataUpdateContext);
}

export function FiltersState() {
  return useContext(FiltersContext);
}
export function FiltersUpdateState() {
  return useContext(FiltersUpdateContext);
}
export function FilterRemoveState() {
  return useContext(FilterRemoveContext);
}

export function ToggleState() {
  return useContext(ToggleContext);
}
export function ToggleUpdateState() {
  return useContext(ToggleUpdateContext);
}

export function MinPriceState() {
  return useContext(MinPriceContext);
}
export function MinPriceUpdateState() {
  return useContext(MinPriceUpdateContext);
}

export function MaxPriceState() {
  return useContext(MaxPriceContext);
}
export function MaxPriceUpdateState() {
  return useContext(MaxPriceUpdateContext);
}

export function MinGrossState() {
  return useContext(MinGrossContext);
}
export function MinGrossUpdateState() {
  return useContext(MinGrossUpdateContext);
}
export function MaxGrossState() {
  return useContext(MaxGrossContext);
}
export function MaxGrossUpdateState() {
  return useContext(MaxGrossUpdateContext);
}

export function MinFloorSizeState() {
  return useContext(MinFloorSizeContext);
}
export function MinFloorSizeUpdateState() {
  return useContext(MinFloorSizeUpdateContext);
}
export function MaxFloorSizeState() {
  return useContext(MaxFloorSizeContext);
}
export function MaxFloorSizeUpdateState() {
  return useContext(MaxFloorSizeUpdateContext);
}

export function MinRoomState() {
  return useContext(MinRoomContext);
}
export function MinRoomUpdateState() {
  return useContext(MinRoomUpdateContext);
}
export function MaxRoomState() {
  return useContext(MaxRoomContext);
}
export function MaxRoomUpdateState() {
  return useContext(MaxRoomUpdateContext);
}
export function MinBedroomState() {
  return useContext(MinBedroomContext);
}
export function MinBedroomUpdateState() {
  return useContext(MinBedroomUpdateContext);
}
export function MaxBedroomState() {
  return useContext(MaxBedroomContext);
}
export function MaxBedroomUpdateState() {
  return useContext(MaxBedroomUpdateContext);
}

export function MinLivingroomState() {
  return useContext(MinLivingroomContext);
}
export function MinLivingroomUpdateState() {
  return useContext(MinLivingroomUpdateContext);
}
export function MaxLivingroomState() {
  return useContext(MaxLivingroomContext);
}

export function MaxLivingroomUpdateState() {
  return useContext(MaxLivingroomUpdateContext);
}

export function MinBathroomState() {
  return useContext(MinBathroomContext);
}
export function MinBathroomUpdateState() {
  return useContext(MinBathroomUpdateContext);
}
export function MaxBathroomState() {
  return useContext(MaxBathroomContext);
}
export function MaxBathroomUpdateState() {
  return useContext(MaxBathroomUpdateContext);
}

export function MinToiletState() {
  return useContext(MinToiletContext);
}
export function MinToiletUpdateState() {
  return useContext(MinToiletUpdateContext);
}
export function MaxToiletState() {
  return useContext(MaxToiletContext);
}
export function MaxToiletUpdateState() {
  return useContext(MaxToiletUpdateContext);
}

export function MinFloorNumberState() {
  return useContext(MinFloorNumberContext);
}
export function MinFloorNumberUpdateState() {
  return useContext(MinFloorNumberUpdateContext);
}
export function MaxFloorNumberState() {
  return useContext(MaxFloorNumberContext);
}
export function MaxFloorNumberUpdateState() {
  return useContext(MaxFloorNumberUpdateContext);
}

export function EnergyLevelState() {
  return useContext(EnergyLevelContext);
}
export function EnergyLevelUpdateState() {
  return useContext(EnergyLevelUpdateContext);
}

export function BalconyState() {
  return useContext(BalconyContext);
}
export function BalconyUpdateState() {
  return useContext(BalconyUpdateContext);
}

export function GarageState() {
  return useContext(GarageContext);
}
export function GarageUpdateState() {
  return useContext(GarageUpdateContext);
}
export function GardenState() {
  return useContext(GardenContext);
}
export function GardenUpdateState() {
  return useContext(GardenUpdateContext);
}
export function TerraceState() {
  return useContext(TerraceContext);
}
export function TerraceUpdateState() {
  return useContext(TerraceUpdateContext);
}

export function TaxState() {
  return useContext(TaxContext);
}
export function TaxUpdateState() {
  return useContext(TaxUpdateContext);
}

export function ProvinceState() {
  return useContext(ProvinceContext);
}
export function ProvinceUpdateState() {
  return useContext(ProvinceUpdateContext);
}
export function MunicipalityState() {
  return useContext(MunicipalityContext);
}
export function MunicipalityUpdateState() {
  return useContext(MunicipalityUpdateContext);
}
export function TownState() {
  return useContext(TownContext);
}
export function TownUpdateState() {
  return useContext(TownUpdateContext);
}

export function StatusState() {
  return useContext(StatusContext);
}
export function StatusUpdateState() {
  return useContext(StatusUpdateContext);
}

export function HouseTypeState() {
  return useContext(HouseTypeContext);
}
export function HouseTypeUpdateState() {
  return useContext(HouseTypeUpdateContext);
}

export function PostingDateState() {
  return useContext(PostingDateContext);
}
export function PostingDateUpdateState() {
  return useContext(PostingDateUpdateContext);
}
export function ConstructionState() {
  return useContext(ConstructionContext);
}
export function ConstructionUpdateState() {
  return useContext(ConstructionUpdateContext);
}
export function UserStatusState() {
  return useContext(UserStatusContext);
}
export function UserStatusUpdateState() {
  return useContext(UserStatusUpdateContext);
}

export function WestState() {
  return useContext(WestContext);
}
export function WestUpdateState() {
  return useContext(WestUpdateContext);
}
export function EastState() {
  return useContext(EastContext);
}
export function EastUpdateState() {
  return useContext(EastUpdateContext);
}
export function NorthState() {
  return useContext(NorthContext);
}
export function NorthUpdateState() {
  return useContext(NorthUpdateContext);
}
export function SouthState() {
  return useContext(SouthContext);
}
export function SouthUpdateState() {
  return useContext(SouthUpdateContext);
}

export function SearchState() {
  return useContext(SearchContext);
}
export function SearchUpdateState() {
  return useContext(SearchUpdateContext);
}
// ============================== STATEs ====================================
// ============================== ADSTATE ====================================
export function RealEstateStates({ children }) {
  const [houseData, setHouseData] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [minGross, setMinGross] = useState();
  const [maxGross, setMaxGross] = useState();
  const [minFloorSize, setMinFloorSize] = useState();
  const [maxFloorSize, setMaxFloorSize] = useState();
  const [minRoom, setMinRoom] = useState();
  const [maxRoom, setMaxRoom] = useState();
  const [minBedroom, setMinBedroom] = useState();
  const [maxBedroom, setMaxBedroom] = useState();
  const [minLivingroom, setMinLivingroom] = useState();
  const [maxLivingroom, setMaxLivingroom] = useState();
  const [minBathroom, setMinBathroom] = useState();
  const [maxBathroom, setMaxBathroom] = useState();
  const [minToilet, setMinToilet] = useState();
  const [maxToilet, setMaxToilet] = useState();
  const [minFloorNumber, setMinFloorNumber] = useState();
  const [maxFloorNumber, setMaxFloorNumber] = useState();
  const [energy, setEnergy] = useState();
  const [balcony, setBalcony] = useState("All");
  const [Garage, setGarage] = useState("All");
  const [Garden, setGarden] = useState("All");
  const [Terrace, setTerrace] = useState("All");
  const [Tax, setTax] = useState("All");
  const [UserStatus, setUserStatus] = useState("All");
  const [province, setProvince] = useState();
  const [municipality, setMunicipality] = useState();
  const [Town, setTown] = useState();
  const [status, setStatus] = useState();
  const [HouseType, setHouseType] = useState();
  const [PostingDate, setPostingDate] = useState();
  const [West, setWest] = useState(false);
  const [East, setEast] = useState(false);
  const [North, setNorth] = useState(false);
  const [South, setSouth] = useState(false);
  const [Construction, setConstruction] = useState();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState([
    {
      state: minPrice,
      context: "Houses more than ",
      beforeContext: "€ ",
      removeFunction: removeMinPrice,
      id: "minPrice",
    },
    {
      state: maxPrice,
      context: "Houses less than ",
      beforeContext: "€ ",
      removeFunction: removeMaxPrice,
      id: "maxPrice",
    },
    {
      state: minGross,
      context: "Houses larger than ",
      afterContext: " m² gross size",
      removeFunction: removeMinGross,
      id: "minGross",
    },
    {
      state: maxGross,
      context: "Houses smaller than ",
      afterContext: " m² gross size",
      removeFunction: removeMaxGross,
      id: "maxGross",
    },
    {
      state: minFloorSize,
      context: "Houses larger than ",
      afterContext: " m² floor size",
      removeFunction: removeMinFloorSize,
      id: "minFloorSize",
    },
    {
      state: maxFloorSize,
      context: "Houses smaller than ",
      afterContext: " m² floor size",
      removeFunction: removeMaxFloorSize,
      id: "maxFloorSize",
    },
    {
      state: minRoom,
      context: "Houses have more than ",
      afterContext: " rooms",
      removeFunction: removeMinRoom,
      id: "minRoom",
    },
    {
      state: maxRoom,
      context: "Houses have less than ",
      afterContext: " rooms",
      removeFunction: removeMaxRoom,
      id: "maxRoom",
    },
    {
      state: minBedroom,
      context: "Houses have more than ",
      afterContext: " bedrooms",
      removeFunction: removeMinBedroom,
      id: "minBedroom",
    },
    {
      state: maxBedroom,
      context: "Houses have less than ",
      afterContext: " bedrooms",
      removeFunction: removeMaxBedroom,
      id: "maxBedroom",
    },
    {
      state: minLivingroom,
      context: "Houses have more than ",
      afterContext: " livingrooms",
      removeFunction: removeMinLivingroom,
      id: "minLivingroom",
    },
    {
      state: maxLivingroom,
      context: "Houses have less than ",
      afterContext: " livingrooms",
      removeFunction: removeMaxLivingroom,
      id: "maxLivingroom",
    },
    {
      state: energy,
      context: "Houses have energy level ",
      afterContext: " or better",
      removeFunction: removeEnergy,
      id: "energy",
    },
    {
      state: province,
      context: "Houses in ",
      afterContext: " province",
      removeFunction: removeProvince,
      id: "province",
    },
    {
      state: municipality,
      context: "Houses in ",
      afterContext: " municipality",
      removeFunction: removeMunicipality,
      id: "municipality",
    },
    {
      state: status,
      context: "Houses ",
      removeFunction: removeStatus,
      id: "status",
    },
    {
      state: minFloorNumber,
      context: "Houses have more than ",
      afterContext: " floors",
      removeFunction: removeMinFloorNumber,
      id: "minFloorNumber",
    },
    {
      state: maxFloorNumber,
      context: "Houses have less than ",
      afterContext: " floors",
      removeFunction: removeMaxFloorNumber,
      id: "maxFloorNumber",
    },
    {
      state: minBathroom,
      context: "Houses have more than ",
      afterContext: " bathrooms",
      removeFunction: removeMinBathroom,
      id: "minBathroom",
    },
    {
      state: maxBathroom,
      context: "Houses have less than ",
      afterContext: " bathrooms",
      removeFunction: removeMaxBathroom,
      id: "maxBathroom",
    },
    {
      state: balcony,
      context: "Houses have ",
      afterContext: " balcony",
      removeFunction: removeBalcony,
      id: "balcony",
    },
    {
      state: minToilet,
      context: "Houses have more than ",
      afterContext: " Toilets",
      removeFunction: removeMinToilet,
      id: "minToilet",
    },
    {
      state: maxToilet,
      context: "Houses have less than ",
      afterContext: " Toilets",
      removeFunction: removeMaxToilet,
      id: "maxToilet",
    },
    {
      state: Garage,
      context: "Houses have ",
      afterContext: " garage",
      removeFunction: removeGarage,
      id: "garage",
    },
    {
      state: HouseType,
      context: "",
      afterContext: "s",
      removeFunction: removeHouseType,
      id: "HouseType",
    },
    {
      state: PostingDate,
      context: "On air ",
      afterContext: "",
      removeFunction: removePostingDate,
      id: "PostingDate",
    },
    {
      state: Garden,
      context: "Houses have ",
      afterContext: " garden",
      removeFunction: removeGarden,
      id: "garden",
    },
    {
      state: Terrace,
      context: "Houses have ",
      afterContext: " terrace",
      removeFunction: removeTerrace,
      id: "terrace",
    },
    {
      state: Town,
      context: "Houses in ",
      afterContext: " town",
      removeFunction: removeTown,
      id: "town",
    },
    {
      state: Tax,
      context: "Service charges",
      afterContext: "",
      removeFunction: removeTax,
      id: "tax",
    },
    {
      state: West,
      context: "",
      afterContext: " fecade",
      removeFunction: removeWest,
      id: "West",
    },
    {
      state: East,
      context: "",
      afterContext: " fecade",
      removeFunction: removeEast,
      id: "East",
    },
    {
      state: North,
      context: "",
      afterContext: " fecade",
      removeFunction: removeNorth,
      id: "North",
    },
    {
      state: South,
      context: "",
      afterContext: " fecade",
      removeFunction: removeSouth,
      id: "South",
    },
    {
      state: Construction,
      context: "Built after",
      afterContext: " ",
      removeFunction: removeConstruction,
      id: "Construction",
    },
    {
      state: UserStatus,
      context: "",
      afterContext: "",
      removeFunction: removeUserStatus,
      id: "UserStatus",
    },
  ]);

  function handleToggle() {
    setIsToggle(!isToggle);
  }

  function handleMinPrice(e) {
    setMinPrice(e.target.value);
  }

  function handleMaxPrice(e) {
    setMaxPrice(e.target.value);
  }
  function handleMinGross(e) {
    setMinGross(e.target.value);
  }
  function handleMaxGross(e) {
    setMaxGross(e.target.value);
  }
  function handleMinFloorSize(e) {
    setMinFloorSize(e.target.value);
  }
  function handleMaxFloorSize(e) {
    setMaxFloorSize(e.target.value);
  }
  function handleMinRoom(e) {
    setMinRoom(e);
  }
  function handleMaxRoom(e) {
    setMaxRoom(e);
  }
  function handleMinBedroom(e) {
    setMinBedroom(e);
  }
  function handleMaxBedroom(e) {
    setMaxBedroom(e);
  }
  function handleMinLivingroom(e) {
    setMinLivingroom(e);
  }
  function handleMaxLivingroom(e) {
    setMaxLivingroom(e);
  }

  function handleMinBathroom(e) {
    setMinBathroom(e);
  }
  function handleMaxBathroom(e) {
    setMaxBathroom(e);
  }

  function handleMinToilet(e) {
    setMinToilet(e);
  }
  function handleMaxToilet(e) {
    setMaxToilet(e);
  }

  function handleMinFloorNumber(e) {
    setMinFloorNumber(e);
  }
  function handleMaxFloorNumber(e) {
    setMaxFloorNumber(e);
  }

  function handleEnergy(e) {
    setEnergy(e);
  }
  function handleBalcony(e) {
    setBalcony(e);
  }
  function handleGarage(e) {
    setGarage(e);
  }
  function handleGarden(e) {
    setGarden(e);
  }
  function handleTerrace(e) {
    setTerrace(e);
  }
  function handleTax(e) {
    setTax(e);
  }

  function handleProvince(e) {
    setProvince(e.target.value);
    setMunicipality();
    setTown();
  }

  function handleMunicipality(e) {
    setMunicipality(e.target.value);
    setTown();
  }
  function handleTown(e) {
    setTown(e.target.value);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
    var found = false;

    if (e.target.value < 1) {
      setProvince();
      setMunicipality();
    }

    for (var i = 0; i < Adress[0].length; i++) {
      if (Adress[0][i].province === e.target.value) {
        found = true;
        if (found) {
          setProvince(e.target.value);
        }
      }
    }
    for (var j = 0; j < Adress[0].length; j++) {
      for (var z = 0; z < Adress[0][j].cities.length; z++) {
        if (Adress[0][j].cities[z] === e.target.value) {
          found = true;
          if (found) {
            setMunicipality(e.target.value);
            setProvince(Adress[0][j].province);
          }
        }
      }
    }
  }

  function handleStatus(e) {
    setStatus(e);
  }

  function handleHouseType(e) {
    setHouseType(e);
  }

  function handlePostingDate(e) {
    setPostingDate(e.target.value);
  }
  function handleWest(e) {
    setWest(e);
  }
  function handleEast(e) {
    setEast(e);
  }
  function handleNorth(e) {
    setNorth(e);
  }
  function handleSouth(e) {
    setSouth(e);
  }
  function handleConstruction(e) {
    setConstruction(e);
  }
  function handleUserStatus(e) {
    setUserStatus(e);
  }

  function handleForm(e) {
    filters
      .filter((i, index) => i[index] !== undefined)
      .map((i) => filters.push(i));
    e.preventDefault();
  }

  useEffect(() => {
    setFilters([...filters], (filters[0]["state"] = minPrice));
    // eslint-disable-next-line
  }, [minPrice]);
  useEffect(() => {
    setFilters([...filters], (filters[1]["state"] = maxPrice));
    //eslint-disable-next-line
  }, [maxPrice]);
  useEffect(() => {
    setFilters([...filters], (filters[2]["state"] = minGross));
    //eslint-disable-next-line
  }, [minGross]);
  useEffect(() => {
    setFilters([...filters], (filters[3]["state"] = maxGross));
    //eslint-disable-next-line
  }, [maxGross]);
  useEffect(() => {
    setFilters([...filters], (filters[4]["state"] = minFloorSize));
    //eslint-disable-next-line
  }, [minFloorSize]);
  useEffect(() => {
    setFilters([...filters], (filters[5]["state"] = maxFloorSize));
    //eslint-disable-next-line
  }, [maxFloorSize]);
  useEffect(() => {
    setFilters([...filters], (filters[6]["state"] = minRoom));
    //eslint-disable-next-line
  }, [minRoom]);
  useEffect(() => {
    setFilters([...filters], (filters[7]["state"] = maxRoom));
    //eslint-disable-next-line
  }, [maxRoom]);
  useEffect(() => {
    setFilters([...filters], (filters[8]["state"] = minBedroom));
    //eslint-disable-next-line
  }, [minBedroom]);
  useEffect(() => {
    setFilters([...filters], (filters[9]["state"] = maxBedroom));
    //eslint-disable-next-line
  }, [maxBedroom]);
  useEffect(() => {
    setFilters([...filters], (filters[10]["state"] = minLivingroom));
    //eslint-disable-next-line
  }, [minLivingroom]);
  useEffect(() => {
    setFilters([...filters], (filters[11]["state"] = maxLivingroom));
    //eslint-disable-next-line
  }, [maxLivingroom]);

  useEffect(() => {
    setFilters([...filters], (filters[12]["state"] = energy));
    //eslint-disable-next-line
  }, [energy]);

  useEffect(() => {
    setFilters([...filters], (filters[13]["state"] = province));
    //eslint-disable-next-line
  }, [province]);
  useEffect(() => {
    setFilters([...filters], (filters[14]["state"] = municipality));
    //eslint-disable-next-line
  }, [municipality]);

  useEffect(() => {
    setFilters([...filters], (filters[15]["state"] = status));
    //eslint-disable-next-line
  }, [status]);

  useEffect(() => {
    setFilters([...filters], (filters[16]["state"] = minFloorNumber));
    //eslint-disable-next-line
  }, [minFloorNumber]);
  useEffect(() => {
    setFilters([...filters], (filters[17]["state"] = maxFloorNumber));
    //eslint-disable-next-line
  }, [maxFloorNumber]);

  useEffect(() => {
    setFilters([...filters], (filters[18]["state"] = minBathroom));
    //eslint-disable-next-line
  }, [minBathroom]);
  useEffect(() => {
    setFilters([...filters], (filters[19]["state"] = maxBathroom));
    //eslint-disable-next-line
  }, [maxBathroom]);
  useEffect(() => {
    setFilters([...filters], (filters[20]["state"] = balcony));
    //eslint-disable-next-line
  }, [balcony]);
  useEffect(() => {
    setFilters([...filters], (filters[21]["state"] = minToilet));
  }, [minToilet]);
  useEffect(() => {
    setFilters([...filters], (filters[22]["state"] = maxToilet));
  }, [maxToilet]);
  useEffect(() => {
    setFilters([...filters], (filters[23]["state"] = Garage));
    //eslint-disable-next-line
  }, [Garage]);
  useEffect(() => {
    setFilters([...filters], (filters[24]["state"] = HouseType));
    //eslint-disable-next-line
  }, [HouseType]);

  useEffect(() => {
    setFilters([...filters], (filters[25]["state"] = PostingDate));
    //eslint-disable-next-line
  }, [PostingDate]);
  useEffect(() => {
    setFilters([...filters], (filters[26]["state"] = Garden));
    //eslint-disable-next-line
  }, [Garden]);
  useEffect(() => {
    setFilters([...filters], (filters[27]["state"] = Terrace));
    //eslint-disable-next-line
  }, [Terrace]);
  useEffect(() => {
    setFilters([...filters], (filters[28]["state"] = Town));
    //eslint-disable-next-line
  }, [Town]);
  useEffect(() => {
    setFilters([...filters], (filters[29]["state"] = Tax));
    //eslint-disable-next-line
  }, [Tax]);
  useEffect(() => {
    setFilters([...filters], (filters[30]["state"] = West));
    //eslint-disable-next-line
  }, [West]);
  useEffect(() => {
    setFilters([...filters], (filters[31]["state"] = East));
    //eslint-disable-next-line
  }, [East]);
  useEffect(() => {
    setFilters([...filters], (filters[32]["state"] = North));
    //eslint-disable-next-line
  }, [North]);
  useEffect(() => {
    setFilters([...filters], (filters[33]["state"] = South));
    //eslint-disable-next-line
  }, [South]);
  useEffect(() => {
    setFilters([...filters], (filters[34]["state"] = Construction));
    //eslint-disable-next-line
  }, [Construction]);
  useEffect(() => {
    setFilters([...filters], (filters[35]["state"] = UserStatus));
    //eslint-disable-next-line
  }, [UserStatus]);

  useEffect(() => {
    setSearch(search);
  }, [search]);

  function removeMinPrice() {
    setMinPrice();
    setFilters([...filters], (filters[0]["state"] = minPrice));
  }

  function removeMaxPrice() {
    setMaxPrice();
    setFilters([...filters], (filters[1]["state"] = maxPrice));
  }
  function removeMinGross() {
    setMinGross();
    setFilters([...filters], (filters[2]["state"] = minGross));
  }

  function removeMaxGross() {
    setMaxGross();
    setFilters([...filters], (filters[3]["state"] = maxGross));
  }
  function removeMinFloorSize() {
    setMinFloorSize();
    setFilters([...filters], (filters[4]["state"] = minFloorSize));
  }

  function removeMaxFloorSize() {
    setMaxFloorSize();
    setFilters([...filters], (filters[5]["state"] = maxFloorSize));
  }
  function removeMinRoom() {
    setMinRoom();
    setFilters([...filters], (filters[6]["state"] = minRoom));
  }

  function removeMaxRoom() {
    setMaxRoom();
    setFilters([...filters], (filters[7]["state"] = maxRoom));
  }
  function removeMinBedroom() {
    setMinBedroom();
    setFilters([...filters], (filters[8]["state"] = minBedroom));
  }

  function removeMaxBedroom() {
    setMaxBedroom();
    setFilters([...filters], (filters[9]["state"] = maxBedroom));
  }
  function removeMinLivingroom() {
    setMinLivingroom();
    setFilters([...filters], (filters[10]["state"] = minLivingroom));
  }

  function removeMaxLivingroom() {
    setMaxLivingroom();
    setFilters([...filters], (filters[11]["state"] = maxLivingroom));
  }
  function removeMinBathroom() {
    setMinBathroom();
    setFilters([...filters], (filters[18]["state"] = minBathroom));
  }

  function removeMaxBathroom() {
    setMaxBathroom();
    setFilters([...filters], (filters[19]["state"] = maxBathroom));
  }

  function removeMinToilet() {
    setMinToilet();
    setFilters([...filters], (filters[21]["state"] = minToilet));
  }

  function removeMaxToilet() {
    setMaxToilet();
    setFilters([...filters], (filters[22]["state"] = maxToilet));
  }

  function removeMinFloorNumber() {
    setMinFloorNumber();
    setFilters([...filters], (filters[16]["state"] = minFloorNumber));
  }

  function removeMaxFloorNumber() {
    setMaxFloorNumber();
    setFilters([...filters], (filters[17]["state"] = maxFloorNumber));
  }

  function removeEnergy() {
    setEnergy();
    setFilters([...filters], (filters[12]["state"] = energy));
  }
  function removeBalcony() {
    setBalcony("All");
    setFilters([...filters], (filters[20]["state"] = balcony));
  }

  function removeGarage() {
    setGarage("All");
    setFilters([...filters], (filters[23]["state"] = Garage));
  }
  function removeProvince() {
    setMunicipality();
    setProvince();
    setTown();
    setSearch("");
    setFilters([...filters], (filters[11]["state"] = province));
  }
  function removeMunicipality() {
    setMunicipality();
    setTown();
    setSearch("");
    setFilters([...filters], (filters[12]["state"] = municipality));
  }

  function removeStatus() {
    setStatus();
    setFilters([...filters], (filters[13]["state"] = status));
  }
  function removeHouseType() {
    setHouseType();
    setFilters([...filters], (filters[24]["state"] = HouseType));
  }
  function removePostingDate() {
    setPostingDate();
    setFilters([...filters], (filters[25]["state"] = PostingDate));
  }
  function removeGarden() {
    setGarage("All");
    setFilters([...filters], (filters[26]["state"] = Garden));
  }
  function removeTerrace() {
    setTerrace("All");
    setFilters([...filters], (filters[26]["state"] = Terrace));
  }
  function removeTown() {
    setTown();
    setFilters([...filters], (filters[27]["state"] = Town));
  }
  function removeTax() {
    setTax("All");
    setFilters([...filters], (filters[29]["state"] = Tax));
  }
  function removeWest() {
    setWest(false);
    setFilters([...filters], (filters[30]["state"] = West));
  }
  function removeEast() {
    setEast(false);
    setFilters([...filters], (filters[31]["state"] = East));
  }
  function removeNorth() {
    setNorth(false);
    setFilters([...filters], (filters[32]["state"] = North));
  }
  function removeSouth() {
    setSouth(false);
    setFilters([...filters], (filters[33]["state"] = South));
  }
  function removeConstruction() {
    setConstruction();
    setFilters([...filters], (filters[34]["state"] = Construction));
  }
  function removeUserStatus() {
    setUserStatus();
    setFilters([...filters], (filters[35]["state"] = UserStatus));
  }

  function removeFilters() {
    setMinPrice();
    setMaxPrice();
    setMinGross();
    setMaxGross();
    setMinFloorSize();
    setMaxFloorSize();
    setMinRoom();
    setMaxRoom();
    setMinBedroom();
    setMaxBedroom();
    setMinLivingroom();
    setMaxLivingroom();
    setMinBathroom();
    setMaxBathroom();
    setMinToilet();
    setMaxToilet();
    setMinFloorNumber();
    setMaxFloorNumber();
    setEnergy();
    setProvince();
    setStatus("All");
    setMunicipality();
    setTown();
    setBalcony("All");
    setGarage("All");
    setGarden("All");
    setTerrace("All");
    setTax("All");
    setWest(false);
    setEast(false);
    setNorth(false);
    setSouth(false);
    setHouseType();
    setPostingDate();
    setConstruction();
    setUserStatus();
  }

  return (
    <HouseDataContext.Provider value={houseData}>
      <FiltersContext.Provider value={filters}>
        <FiltersUpdateContext.Provider value={handleForm}>
          <ToggleContext.Provider value={isToggle}>
            <ToggleUpdateContext.Provider value={handleToggle}>
              <MinPriceContext.Provider value={minPrice}>
                <MinPriceUpdateContext.Provider value={handleMinPrice}>
                  <MaxPriceContext.Provider value={maxPrice}>
                    <MaxPriceUpdateContext.Provider value={handleMaxPrice}>
                      <MinGrossContext.Provider value={minGross}>
                        <MinGrossUpdateContext.Provider value={handleMinGross}>
                          <MaxGrossContext.Provider value={maxGross}>
                            <MaxGrossUpdateContext.Provider
                              value={handleMaxGross}
                            >
                              <MinFloorSizeContext.Provider
                                value={minFloorSize}
                              >
                                <MinFloorSizeUpdateContext.Provider
                                  value={handleMinFloorSize}
                                >
                                  <MaxFloorSizeContext.Provider
                                    value={maxFloorSize}
                                  >
                                    <MaxFloorSizeUpdateContext.Provider
                                      value={handleMaxFloorSize}
                                    >
                                      <MinRoomContext.Provider value={minRoom}>
                                        <MinRoomUpdateContext.Provider
                                          value={handleMinRoom}
                                        >
                                          <MaxRoomContext.Provider
                                            value={maxRoom}
                                          >
                                            <MaxRoomUpdateContext.Provider
                                              value={handleMaxRoom}
                                            >
                                              <MinBedroomContext.Provider
                                                value={minBedroom}
                                              >
                                                <MinBedroomUpdateContext.Provider
                                                  value={handleMinBedroom}
                                                >
                                                  <MaxBedroomContext.Provider
                                                    value={maxBedroom}
                                                  >
                                                    <MaxBedroomUpdateContext.Provider
                                                      value={handleMaxBedroom}
                                                    >
                                                      <MinLivingroomContext.Provider
                                                        value={minLivingroom}
                                                      >
                                                        <MinLivingroomUpdateContext.Provider
                                                          value={
                                                            handleMinLivingroom
                                                          }
                                                        >
                                                          <MaxLivingroomContext.Provider
                                                            value={
                                                              maxLivingroom
                                                            }
                                                          >
                                                            <MaxLivingroomUpdateContext.Provider
                                                              value={
                                                                handleMaxLivingroom
                                                              }
                                                            >
                                                              <MinFloorNumberContext.Provider
                                                                value={
                                                                  minFloorNumber
                                                                }
                                                              >
                                                                <MinFloorNumberUpdateContext.Provider
                                                                  value={
                                                                    handleMinFloorNumber
                                                                  }
                                                                >
                                                                  <MaxFloorNumberContext.Provider
                                                                    value={
                                                                      maxFloorNumber
                                                                    }
                                                                  >
                                                                    <MaxFloorNumberUpdateContext.Provider
                                                                      value={
                                                                        handleMaxFloorNumber
                                                                      }
                                                                    >
                                                                      <EnergyLevelContext.Provider
                                                                        value={
                                                                          energy
                                                                        }
                                                                      >
                                                                        <EnergyLevelUpdateContext.Provider
                                                                          value={
                                                                            handleEnergy
                                                                          }
                                                                        >
                                                                          <ProvinceContext.Provider
                                                                            value={
                                                                              province
                                                                            }
                                                                          >
                                                                            <ProvinceUpdateContext.Provider
                                                                              value={
                                                                                handleProvince
                                                                              }
                                                                            >
                                                                              <MunicipalityContext.Provider
                                                                                value={
                                                                                  municipality
                                                                                }
                                                                              >
                                                                                <MunicipalityUpdateContext.Provider
                                                                                  value={
                                                                                    handleMunicipality
                                                                                  }
                                                                                >
                                                                                  <StatusContext.Provider
                                                                                    value={
                                                                                      status
                                                                                    }
                                                                                  >
                                                                                    <StatusUpdateContext.Provider
                                                                                      value={
                                                                                        handleStatus
                                                                                      }
                                                                                    >
                                                                                      <FilterRemoveContext.Provider
                                                                                        value={
                                                                                          removeFilters
                                                                                        }
                                                                                      >
                                                                                        <MinBathroomContext.Provider
                                                                                          value={
                                                                                            minBathroom
                                                                                          }
                                                                                        >
                                                                                          <MinBathroomUpdateContext.Provider
                                                                                            value={
                                                                                              handleMinBathroom
                                                                                            }
                                                                                          >
                                                                                            <MaxBathroomContext.Provider
                                                                                              value={
                                                                                                maxBathroom
                                                                                              }
                                                                                            >
                                                                                              <MaxBathroomUpdateContext.Provider
                                                                                                value={
                                                                                                  handleMaxBathroom
                                                                                                }
                                                                                              >
                                                                                                <MinToiletContext.Provider
                                                                                                  value={
                                                                                                    minToilet
                                                                                                  }
                                                                                                >
                                                                                                  <MinToiletUpdateContext.Provider
                                                                                                    value={
                                                                                                      handleMinToilet
                                                                                                    }
                                                                                                  >
                                                                                                    <MaxToiletContext.Provider
                                                                                                      value={
                                                                                                        maxToilet
                                                                                                      }
                                                                                                    >
                                                                                                      <MaxToiletUpdateContext.Provider
                                                                                                        value={
                                                                                                          handleMaxToilet
                                                                                                        }
                                                                                                      >
                                                                                                        <SearchContext.Provider
                                                                                                          value={
                                                                                                            search
                                                                                                          }
                                                                                                        >
                                                                                                          <SearchUpdateContext.Provider
                                                                                                            value={
                                                                                                              handleSearch
                                                                                                            }
                                                                                                          >
                                                                                                            <BalconyContext.Provider
                                                                                                              value={
                                                                                                                balcony
                                                                                                              }
                                                                                                            >
                                                                                                              <BalconyUpdateContext.Provider
                                                                                                                value={
                                                                                                                  handleBalcony
                                                                                                                }
                                                                                                              >
                                                                                                                <GarageContext.Provider
                                                                                                                  value={
                                                                                                                    Garage
                                                                                                                  }
                                                                                                                >
                                                                                                                  <GarageUpdateContext.Provider
                                                                                                                    value={
                                                                                                                      handleGarage
                                                                                                                    }
                                                                                                                  >
                                                                                                                    <HouseTypeContext.Provider
                                                                                                                      value={
                                                                                                                        HouseType
                                                                                                                      }
                                                                                                                    >
                                                                                                                      <HouseTypeUpdateContext.Provider
                                                                                                                        value={
                                                                                                                          handleHouseType
                                                                                                                        }
                                                                                                                      >
                                                                                                                        <PostingDateContext.Provider
                                                                                                                          value={
                                                                                                                            PostingDate
                                                                                                                          }
                                                                                                                        >
                                                                                                                          <PostingDateUpdateContext.Provider
                                                                                                                            value={
                                                                                                                              handlePostingDate
                                                                                                                            }
                                                                                                                          >
                                                                                                                            <GardenContext.Provider
                                                                                                                              value={
                                                                                                                                Garden
                                                                                                                              }
                                                                                                                            >
                                                                                                                              <GardenUpdateContext.Provider
                                                                                                                                value={
                                                                                                                                  handleGarden
                                                                                                                                }
                                                                                                                              >
                                                                                                                                <TerraceContext.Provider
                                                                                                                                  value={
                                                                                                                                    Terrace
                                                                                                                                  }
                                                                                                                                >
                                                                                                                                  <TerraceUpdateContext.Provider
                                                                                                                                    value={
                                                                                                                                      handleTerrace
                                                                                                                                    }
                                                                                                                                  >
                                                                                                                                    <TownContext.Provider
                                                                                                                                      value={
                                                                                                                                        Town
                                                                                                                                      }
                                                                                                                                    >
                                                                                                                                      <TownUpdateContext.Provider
                                                                                                                                        value={
                                                                                                                                          handleTown
                                                                                                                                        }
                                                                                                                                      >
                                                                                                                                        <TaxContext.Provider
                                                                                                                                          value={
                                                                                                                                            Tax
                                                                                                                                          }
                                                                                                                                        >
                                                                                                                                          <TaxUpdateContext.Provider
                                                                                                                                            value={
                                                                                                                                              handleTax
                                                                                                                                            }
                                                                                                                                          >
                                                                                                                                            <WestContext.Provider
                                                                                                                                              value={
                                                                                                                                                West
                                                                                                                                              }
                                                                                                                                            >
                                                                                                                                              <WestUpdateContext.Provider
                                                                                                                                                value={
                                                                                                                                                  handleWest
                                                                                                                                                }
                                                                                                                                              >
                                                                                                                                                <EastContext.Provider
                                                                                                                                                  value={
                                                                                                                                                    East
                                                                                                                                                  }
                                                                                                                                                >
                                                                                                                                                  <EastUpdateContext.Provider
                                                                                                                                                    value={
                                                                                                                                                      handleEast
                                                                                                                                                    }
                                                                                                                                                  >
                                                                                                                                                    <NorthContext.Provider
                                                                                                                                                      value={
                                                                                                                                                        North
                                                                                                                                                      }
                                                                                                                                                    >
                                                                                                                                                      <NorthUpdateContext.Provider
                                                                                                                                                        value={
                                                                                                                                                          handleNorth
                                                                                                                                                        }
                                                                                                                                                      >
                                                                                                                                                        <SouthContext.Provider
                                                                                                                                                          value={
                                                                                                                                                            South
                                                                                                                                                          }
                                                                                                                                                        >
                                                                                                                                                          <SouthUpdateContext.Provider
                                                                                                                                                            value={
                                                                                                                                                              handleSouth
                                                                                                                                                            }
                                                                                                                                                          >
                                                                                                                                                            <ConstructionContext.Provider
                                                                                                                                                              value={
                                                                                                                                                                Construction
                                                                                                                                                              }
                                                                                                                                                            >
                                                                                                                                                              <ConstructionUpdateContext.Provider
                                                                                                                                                                value={
                                                                                                                                                                  handleConstruction
                                                                                                                                                                }
                                                                                                                                                              >
                                                                                                                                                                <UserStatusContext.Provider
                                                                                                                                                                  value={
                                                                                                                                                                    UserStatus
                                                                                                                                                                  }
                                                                                                                                                                >
                                                                                                                                                                  <UserStatusUpdateContext.Provider
                                                                                                                                                                    value={
                                                                                                                                                                      handleUserStatus
                                                                                                                                                                    }
                                                                                                                                                                  >
                                                                                                                                                                    {
                                                                                                                                                                      children
                                                                                                                                                                    }
                                                                                                                                                                  </UserStatusUpdateContext.Provider>
                                                                                                                                                                </UserStatusContext.Provider>
                                                                                                                                                              </ConstructionUpdateContext.Provider>
                                                                                                                                                            </ConstructionContext.Provider>
                                                                                                                                                          </SouthUpdateContext.Provider>
                                                                                                                                                        </SouthContext.Provider>
                                                                                                                                                      </NorthUpdateContext.Provider>
                                                                                                                                                    </NorthContext.Provider>
                                                                                                                                                  </EastUpdateContext.Provider>
                                                                                                                                                </EastContext.Provider>
                                                                                                                                              </WestUpdateContext.Provider>
                                                                                                                                            </WestContext.Provider>
                                                                                                                                          </TaxUpdateContext.Provider>
                                                                                                                                        </TaxContext.Provider>
                                                                                                                                      </TownUpdateContext.Provider>
                                                                                                                                    </TownContext.Provider>
                                                                                                                                  </TerraceUpdateContext.Provider>
                                                                                                                                </TerraceContext.Provider>
                                                                                                                              </GardenUpdateContext.Provider>
                                                                                                                            </GardenContext.Provider>
                                                                                                                          </PostingDateUpdateContext.Provider>
                                                                                                                        </PostingDateContext.Provider>
                                                                                                                      </HouseTypeUpdateContext.Provider>
                                                                                                                    </HouseTypeContext.Provider>
                                                                                                                  </GarageUpdateContext.Provider>
                                                                                                                </GarageContext.Provider>
                                                                                                              </BalconyUpdateContext.Provider>
                                                                                                            </BalconyContext.Provider>
                                                                                                          </SearchUpdateContext.Provider>
                                                                                                        </SearchContext.Provider>
                                                                                                      </MaxToiletUpdateContext.Provider>
                                                                                                    </MaxToiletContext.Provider>
                                                                                                  </MinToiletUpdateContext.Provider>
                                                                                                </MinToiletContext.Provider>
                                                                                              </MaxBathroomUpdateContext.Provider>
                                                                                            </MaxBathroomContext.Provider>
                                                                                          </MinBathroomUpdateContext.Provider>
                                                                                        </MinBathroomContext.Provider>
                                                                                      </FilterRemoveContext.Provider>
                                                                                    </StatusUpdateContext.Provider>
                                                                                  </StatusContext.Provider>
                                                                                </MunicipalityUpdateContext.Provider>
                                                                              </MunicipalityContext.Provider>
                                                                            </ProvinceUpdateContext.Provider>
                                                                          </ProvinceContext.Provider>
                                                                        </EnergyLevelUpdateContext.Provider>
                                                                      </EnergyLevelContext.Provider>
                                                                    </MaxFloorNumberUpdateContext.Provider>
                                                                  </MaxFloorNumberContext.Provider>
                                                                </MinFloorNumberUpdateContext.Provider>
                                                              </MinFloorNumberContext.Provider>
                                                            </MaxLivingroomUpdateContext.Provider>
                                                          </MaxLivingroomContext.Provider>
                                                        </MinLivingroomUpdateContext.Provider>
                                                      </MinLivingroomContext.Provider>
                                                    </MaxBedroomUpdateContext.Provider>
                                                  </MaxBedroomContext.Provider>
                                                </MinBedroomUpdateContext.Provider>
                                              </MinBedroomContext.Provider>
                                            </MaxRoomUpdateContext.Provider>
                                          </MaxRoomContext.Provider>
                                        </MinRoomUpdateContext.Provider>
                                      </MinRoomContext.Provider>
                                    </MaxFloorSizeUpdateContext.Provider>
                                  </MaxFloorSizeContext.Provider>
                                </MinFloorSizeUpdateContext.Provider>
                              </MinFloorSizeContext.Provider>
                            </MaxGrossUpdateContext.Provider>
                          </MaxGrossContext.Provider>
                        </MinGrossUpdateContext.Provider>
                      </MinGrossContext.Provider>
                    </MaxPriceUpdateContext.Provider>
                  </MaxPriceContext.Provider>
                </MinPriceUpdateContext.Provider>
              </MinPriceContext.Provider>
            </ToggleUpdateContext.Provider>
          </ToggleContext.Provider>
        </FiltersUpdateContext.Provider>
      </FiltersContext.Provider>
    </HouseDataContext.Provider>
  );
}
