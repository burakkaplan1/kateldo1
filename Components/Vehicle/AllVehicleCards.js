import VehicleCard from "./VehicleCard";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useTheme } from "next-themes";
import Select from "react-select";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import {
  BrandState,
  GenerationState,
  MaxPriceState,
  MaxYearState,
  MinPriceState,
  MinYearState,
  ModelState,
  VehicleTypeState,
  MaxUsedKMState,
  MinUsedKMState,
  FuelTypeGasolineState,
  FuelTypeElectricityState,
  FuelTypeDieselState,
  FuelTypeLPGState,
  FuelTypeHybridState,
  GearTypeAutoState,
  GearTypeSemiState,
  GearTypeManualState,
} from "./VehicleStates";
const AllVehicleCards = () => {
  const { theme } = useTheme();
  const [Vehicles, setVehicles] = useState([]);
  const [SortBy, setSortBy] = useState("Price");
  const [SortBy2, setSortBy2] = useState("down");
  const [currentPage, setCurrentPage] = useState(1);
  const VehicleType = VehicleTypeState();
  const Brand = BrandState();
  const Model = ModelState();
  const Generation = GenerationState();
  const minPrice = MinPriceState();
  const maxPrice = MaxPriceState();
  const minYear = MinYearState();
  const maxYear = MaxYearState();
  const minUsedKM = MinUsedKMState();
  const maxUsedKM = MaxUsedKMState();
  const FuelTypeGasoline = FuelTypeGasolineState();
  const FuelTypeElectricity = FuelTypeElectricityState();
  const FuelTypeDiesel = FuelTypeDieselState();
  const FuelTypeHybrid = FuelTypeHybridState();
  const FuelTypeLPG = FuelTypeLPGState();
  const GearTypeManual = GearTypeManualState();
  const GearTypeSemi = GearTypeSemiState();
  const GearTypeAuto = GearTypeAutoState();
  const FuelType = [
    FuelTypeElectricity,
    FuelTypeGasoline,
    FuelTypeDiesel,
    FuelTypeHybrid,
    FuelTypeLPG,
  ];
  const GearType = [GearTypeManual, GearTypeSemi, GearTypeAuto];

  useEffect(() => {
    return onSnapshot(query(collection(db, "Vehicles")), (snapshot) => {
      setVehicles(snapshot.docs);
      console.log(Vehicles.map((v) => v.data()));
    });
  }, [db]);

  return (
    <div className="dark:bg-gray-900 w-full">
      {Vehicles.filter((car) =>
        VehicleType !== "" && VehicleType !== null && VehicleType !== undefined
          ? car.data().GeneralCategory === VehicleType
          : car.data()
      )
        .filter((car) =>
          Brand !== "" && Brand !== null && Brand !== undefined
            ? car.data().Brand == Brand
            : car.data()
        )
        .filter((car) =>
          Model !== "" && Model !== null && Model !== undefined
            ? car.data().Model == Model
            : car.data()
        )
        .filter((car) =>
          Generation !== "" && Generation !== null && Generation !== undefined
            ? car.data().Generation == Generation
            : car.data()
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
              (GearTypeSemi === true &&
                car.data().GearType === "Semi-Automatic") ||
              (GearTypeAuto === true && car.data().GearType === "Automatic")
            : car.data()
        )
        .map((car) => (
          <VehicleCard
            key={car.id}
            id={car.id}
            image={car.data().ImageArray[0]}
            title={car.data().Title}
            Model={car.data().Model}
            Brand={car.data().Brand}
            Kilometers={car.data().Kilometers}
            FuelType={car.data().FuelType}
            Gear={car.data().GearType}
            EngineDisplacement={car.data().EngineDisplacement}
            EVRange={car.data().ElectricRange}
            HorsePower={car.data().Power?.Engine1?.HorsePower}
            MaxSpeed={car.data().MaxSpeed}
            ZeroToHundred={car.data().ZeroToHundred}
            Torque={car.data().Torque?.Engine1?.Value}
            color={car.data().ExteriorColor}
            IntColor={car.data().InteriorColor}
            Price={car.data().Price}
            FilterItem={
              car.data().WLTPfuel?.Low
                ? car.data().WLTPfuel.Low
                : "Not available"
            }
            FilterText={car.data().WLTPfuel?.Low && "l/100km"}
          />
        ))}
    </div>
  );
};

export default AllVehicleCards;
