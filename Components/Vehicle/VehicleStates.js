import React, { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

export const VehicleContext = React.createContext();
export const VehicleUpdateContext = React.createContext();
export const FiltersContext = React.createContext();
export const FiltersUpdateContext = React.createContext();
export const FilterRemoveContext = React.createContext();

export const VehicleTypeContext = React.createContext();
export const VehicleTypeUpdateContext = React.createContext();
export const BrandContext = React.createContext();
export const BrandUpdateContext = React.createContext();
export const ModelContext = React.createContext();
export const ModelUpdateContext = React.createContext();
export const GenerationContext = React.createContext();
export const GenerationUpdateContext = React.createContext();

export const MinPriceContext = React.createContext();
export const MinPriceUpdateContext = React.createContext();
export const MaxPriceContext = React.createContext();
export const MaxPriceUpdateContext = React.createContext();
export const MinYearContext = React.createContext();
export const MinYearUpdateContext = React.createContext();
export const MaxYearContext = React.createContext();
export const MaxYearUpdateContext = React.createContext();
export const MinUsedKMContext = React.createContext();
export const MinUsedKMUpdateContext = React.createContext();
export const MaxUsedKMContext = React.createContext();
export const MaxUsedKMUpdateContext = React.createContext();
export const FuelTypeGasolineContext = React.createContext();
export const FuelTypeGasolineUpdateContext = React.createContext();
export const FuelTypeElectricityContext = React.createContext();
export const FuelTypeElectricityUpdateContext = React.createContext();
export const FuelTypeDieselContext = React.createContext();
export const FuelTypeDieselUpdateContext = React.createContext();
export const FuelTypeHybridContext = React.createContext();
export const FuelTypeHybridUpdateContext = React.createContext();
export const FuelTypeLPGContext = React.createContext();
export const FuelTypeLPGUpdateContext = React.createContext();
export const GearTypeManualContext = React.createContext();
export const GearTypeManualUpdateContext = React.createContext();
export const GearTypeSemiContext = React.createContext();
export const GearTypeSemiUpdateContext = React.createContext();
export const GearTypeAutoContext = React.createContext();
export const GearTypeAutoUpdateContext = React.createContext();
export const BodyTypeCabrioContext = React.createContext();
export const BodyTypeCabrioUpdateContext = React.createContext();
export const BodyTypeCoupeContext = React.createContext();
export const BodyTypeCoupeUpdateContext = React.createContext();
export const BodyTypeHatchback3Context = React.createContext();
export const BodyTypeHatchback3UpdateContext = React.createContext();
export const BodyTypeHatchback5Context = React.createContext();
export const BodyTypeHatchback5UpdateContext = React.createContext();
export const BodyTypeSedanContext = React.createContext();
export const BodyTypeSedanUpdateContext = React.createContext();
export const BodyTypeStationContext = React.createContext();
export const BodyTypeStationUpdateContext = React.createContext();
export const BodyTypeMPVContext = React.createContext();
export const BodyTypeMPVUpdateContext = React.createContext();
export const BodyTypeRoadsterContext = React.createContext();
export const BodyTypeRoadsterUpdateContext = React.createContext();
export const BodyTypeCrossoverContext = React.createContext();
export const BodyTypeCrossoverUpdateContext = React.createContext();
export const BodyTypeHardtopContext = React.createContext();
export const BodyTypeHardtopUpdateContext = React.createContext();
export const BodyTypePickupContext = React.createContext();
export const BodyTypePickupUpdateContext = React.createContext();
export const BodyTypeSUVContext = React.createContext();
export const BodyTypeSUVUpdateContext = React.createContext();

export function VehicleState() {
  return useContext(VehicleContext);
}
export function VehicleUpdateState() {
  return useContext(VehicleUpdateContext);
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

export function VehicleTypeState() {
  return useContext(VehicleTypeContext);
}
export function VehicleTypeUpdateState() {
  return useContext(VehicleTypeUpdateContext);
}
export function BrandState() {
  return useContext(BrandContext);
}
export function BrandUpdateState() {
  return useContext(BrandUpdateContext);
}
export function ModelState() {
  return useContext(ModelContext);
}
export function ModelUpdateState() {
  return useContext(ModelUpdateContext);
}
export function GenerationState() {
  return useContext(GenerationContext);
}
export function GenerationUpdateState() {
  return useContext(GenerationUpdateContext);
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
export function MinYearState() {
  return useContext(MinYearContext);
}
export function MinYearUpdateState() {
  return useContext(MinYearUpdateContext);
}
export function MaxYearState() {
  return useContext(MaxYearContext);
}
export function MaxYearUpdateState() {
  return useContext(MaxYearUpdateContext);
}
export function MinUsedKMState() {
  return useContext(MinUsedKMContext);
}
export function MinUsedKMUpdateState() {
  return useContext(MinUsedKMUpdateContext);
}
export function MaxUsedKMState() {
  return useContext(MaxUsedKMContext);
}
export function MaxUsedKMUpdateState() {
  return useContext(MaxUsedKMUpdateContext);
}
export function FuelTypeGasolineState() {
  return useContext(FuelTypeGasolineContext);
}
export function FuelTypeGasolineUpdateState() {
  return useContext(FuelTypeGasolineUpdateContext);
}
export function FuelTypeElectricityState() {
  return useContext(FuelTypeElectricityContext);
}
export function FuelTypeElectricityUpdateState() {
  return useContext(FuelTypeElectricityUpdateContext);
}
export function FuelTypeDieselState() {
  return useContext(FuelTypeDieselContext);
}
export function FuelTypeDieselUpdateState() {
  return useContext(FuelTypeDieselUpdateContext);
}
export function FuelTypeHybridState() {
  return useContext(FuelTypeHybridContext);
}
export function FuelTypeHybridUpdateState() {
  return useContext(FuelTypeHybridUpdateContext);
}
export function FuelTypeLPGState() {
  return useContext(FuelTypeLPGContext);
}
export function FuelTypeLPGUpdateState() {
  return useContext(FuelTypeLPGUpdateContext);
}
export function GearTypeManualState() {
  return useContext(GearTypeManualContext);
}
export function GearTypeManualUpdateState() {
  return useContext(GearTypeManualUpdateContext);
}
export function GearTypeSemiState() {
  return useContext(GearTypeSemiContext);
}
export function GearTypeSemiUpdateState() {
  return useContext(GearTypeSemiUpdateContext);
}
export function GearTypeAutoState() {
  return useContext(GearTypeAutoContext);
}
export function GearTypeAutoUpdateState() {
  return useContext(GearTypeAutoUpdateContext);
}
export function BodyTypeCabrioState() {
  return useContext(BodyTypeCabrioContext);
}
export function BodyTypeCabrioUpdateState() {
  return useContext(BodyTypeCabrioUpdateContext);
}
export function BodyTypeCoupeState() {
  return useContext(BodyTypeCoupeContext);
}
export function BodyTypeCoupeUpdateState() {
  return useContext(BodyTypeCoupeUpdateContext);
}
export function BodyTypeHatchback3State() {
  return useContext(BodyTypeHatchback3Context);
}
export function BodyTypeHatchback3UpdateState() {
  return useContext(BodyTypeHatchback3UpdateContext);
}
export function BodyTypeHatchback5State() {
  return useContext(BodyTypeHatchback5Context);
}
export function BodyTypeHatchback5UpdateState() {
  return useContext(BodyTypeHatchback5UpdateContext);
}
export function BodyTypeSedanState() {
  return useContext(BodyTypeSedanContext);
}
export function BodyTypeSedanUpdateState() {
  return useContext(BodyTypeSedanUpdateContext);
}
export function BodyTypeStationState() {
  return useContext(BodyTypeStationContext);
}
export function BodyTypeStationUpdateState() {
  return useContext(BodyTypeStationUpdateContext);
}
export function BodyTypeMPVState() {
  return useContext(BodyTypeMPVContext);
}
export function BodyTypeMPVUpdateState() {
  return useContext(BodyTypeMPVUpdateContext);
}
export function BodyTypeRoadsterState() {
  return useContext(BodyTypeRoadsterContext);
}
export function BodyTypeRoadsterUpdateState() {
  return useContext(BodyTypeRoadsterUpdateContext);
}
export function BodyTypeCrossoverState() {
  return useContext(BodyTypeCrossoverContext);
}
export function BodyTypeCrossoverUpdateState() {
  return useContext(BodyTypeCrossoverUpdateContext);
}
export function BodyTypeHardtopState() {
  return useContext(BodyTypeHardtopContext);
}
export function BodyTypeHardtopUpdateState() {
  return useContext(BodyTypeHardtopUpdateContext);
}
export function BodyTypePickupState() {
  return useContext(BodyTypePickupContext);
}
export function BodyTypePickupUpdateState() {
  return useContext(BodyTypePickupUpdateContext);
}
export function BodyTypeSUVState() {
  return useContext(BodyTypeSUVContext);
}
export function BodyTypeSUVUpdateState() {
  return useContext(BodyTypeSUVUpdateContext);
}

export function VehicleStates({ children }) {
  const [VehicleData, setVehicleData] = useState([]);
  const [VehicleType, setVehicleType] = useState("");
  const [Brand, setBrand] = useState("");
  const [Model, setModel] = useState("");
  const [Generation, setGeneration] = useState("");
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [minYear, setMinYear] = useState();
  const [maxYear, setMaxYear] = useState();
  const [minUsedKM, setMinUsedKM] = useState();
  const [maxUsedKM, setMaxUsedKM] = useState();
  const [FuelTypeGasoline, setFuelTypeGasoline] = useState(false);
  const [FuelTypeElectricity, setFuelTypeElectricity] = useState(false);
  const [FuelTypeDiesel, setFuelTypeDiesel] = useState(false);
  const [FuelTypeHybrid, setFuelTypeHybrid] = useState(false);
  const [FuelTypeLPG, setFuelTypeLPG] = useState(false);
  const [GearTypeManual, setGearTypeManual] = useState(false);
  const [GearTypeSemi, setGearTypeSemi] = useState(false);
  const [GearTypeAuto, setGearTypeAuto] = useState(false);
  const [BodyTypeCabrio, setBodyTypeCabrio] = useState(false);
  const [BodyTypeCoupe, setBodyTypeCoupe] = useState(false);
  const [BodyTypeHatchback3, setBodyTypeHatchback3] = useState(false);
  const [BodyTypeHatchback5, setBodyTypeHatchback5] = useState(false);
  const [BodyTypeSedan, setBodyTypeSedan] = useState(false);
  const [BodyTypeStation, setBodyTypeStation] = useState(false);
  const [BodyTypeMPV, setBodyTypeMPV] = useState(false);
  const [BodyTypeRoadster, setBodyTypeRoadster] = useState(false);
  const [BodyTypeCrossover, setBodyTypeCrossover] = useState(false);
  const [BodyTypeHardtop, setBodyTypeHardtop] = useState(false);
  const [BodyTypePickup, setBodyTypePickup] = useState(false);
  const [BodyTypeSUV, setBodyTypeSUV] = useState(false);

  const [filters, setFilters] = useState([
    {
      state: VehicleType,
      context: "",
      beforeContext: "",
      afterContext: "",
      removeFunction: removeVehicleType,
      id: "VehicleType",
    },
    {
      state: Brand,
      context: "",
      beforeContext: "",
      afterContext: "",
      removeFunction: removeBrand,
      id: "Brand",
    },
    {
      state: Model,
      context: "",
      beforeContext: "",
      afterContext: "",
      removeFunction: removeModel,
      id: "Model",
    },
    {
      state: Generation,
      context: "",
      beforeContext: "",
      afterContext: "",
      removeFunction: removeGeneration,
      id: "Generation",
    },
    {
      state: minPrice,
      context: "Vehicles more than ",
      beforeContext: "€ ",
      removeFunction: removeMinPrice,
      id: "minPrice",
    },
    {
      state: maxPrice,
      context: "Vehicles less than ",
      beforeContext: "€ ",
      removeFunction: removeMaxPrice,
      id: "maxPrice",
    },
    {
      state: minYear,
      context: "Vehicles after than ",
      beforeContext: "",
      removeFunction: removeMinYear,
      id: "minYear",
    },
    {
      state: maxYear,
      context: "Vehicles before than ",
      beforeContext: "",
      removeFunction: removeMaxYear,
      id: "maxYear",
    },
    {
      state: minUsedKM,
      context: "Used less than ",
      beforeContext: " KM",
      removeFunction: removeMinUsedKM,
      id: "minUsedKM",
    },
    {
      state: maxUsedKM,
      context: "Used more than ",
      beforeContext: " KM",
      removeFunction: removeMaxUsedKM,
      id: "maxUsedKM",
    },
    {
      state: FuelTypeGasoline,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeFuelTypeGasoline,
      id: "FuelTypeGasoline",
    },
    {
      state: FuelTypeElectricity,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeFuelTypeElectricity,
      id: "FuelTypeElectricity",
    },
    {
      state: FuelTypeDiesel,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeFuelTypeDiesel,
      id: "FuelTypeDiesel",
    },
    {
      state: FuelTypeHybrid,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeFuelTypeHybrid,
      id: "FuelTypeHybrid",
    },
    {
      state: FuelTypeLPG,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeFuelTypeLPG,
      id: "FuelTypeLPG",
    },
    {
      state: GearTypeManual,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeGearTypeManual,
      id: "GearTypeManual",
    },
    {
      state: GearTypeSemi,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeGearTypeSemi,
      id: "GearTypeSemi",
    },
    {
      state: GearTypeAuto,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeGearTypeAuto,
      id: "GearTypeAuto",
    },
    {
      state: BodyTypeCabrio,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypeCabrio,
      id: "BodyTypeCabrio",
    },
    {
      state: BodyTypeCoupe,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypeCoupe,
      id: "BodyTypeCoupe",
    },
    {
      state: BodyTypeHatchback3,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypeHatchback3,
      id: "BodyTypeHatchback3",
    },
    {
      state: BodyTypeHatchback5,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypeHatchback5,
      id: "BodyTypeHatchback5",
    },
    {
      state: BodyTypeSedan,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypeSedan,
      id: "BodyTypeSedan",
    },
    {
      state: BodyTypeStation,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypeStation,
      id: "BodyTypeStation",
    },
    {
      state: BodyTypeMPV,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypeMPV,
      id: "BodyTypeMPV",
    },
    {
      state: BodyTypeRoadster,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypeRoadster,
      id: "BodyTypeRoadster",
    },
    {
      state: BodyTypeCrossover,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypeCrossover,
      id: "BodyTypeCrossover",
    },
    {
      state: BodyTypeHardtop,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypeHardtop,
      id: "BodyTypeHardtop",
    },
    {
      state: BodyTypePickup,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypePickup,
      id: "BodyTypePickup",
    },
    {
      state: BodyTypeSUV,
      context: "Vehicle use ",
      beforeContext: "",
      removeFunction: removeBodyTypeSUV,
      id: "BodyTypeSUV",
    },
  ]);

  const getVehicleData = () =>
    useEffect(() => {
      onSnapshot(query(collection(db, "Vehicles")), (snapshot) => {
        setVehicleData(snapshot.docs);
      });
    }, [db]);

  function handleVehicleType(e) {
    setVehicleType(e);
  }

  function handleBrand(e) {
    setBrand(e);
  }

  function handleModel(e) {
    setModel(e);
  }

  function handleGeneration(e) {
    setGeneration(e);
  }
  function handleMinPrice(e) {
    setMinPrice(e.target.value);
  }
  function handleMaxPrice(e) {
    setMaxPrice(e.target.value);
  }
  function handleMinYear(e) {
    setMinYear(e.target.value);
  }
  function handleMaxYear(e) {
    setMaxYear(e.target.value);
  }
  function handleMinUsedKM(e) {
    setMinUsedKM(e.target.value);
  }
  function handleMaxUsedKM(e) {
    setMaxUsedKM(e.target.value);
  }
  function handleFuelTypeGasoline(e) {
    setFuelTypeGasoline(e);
  }
  function handleFuelTypeElectricity(e) {
    setFuelTypeElectricity(e);
  }
  function handleFuelTypeDiesel(e) {
    setFuelTypeDiesel(e);
  }
  function handleFuelTypeHybrid(e) {
    setFuelTypeHybrid(e);
  }
  function handleFuelTypeLPG(e) {
    setFuelTypeLPG(e);
  }
  function handleGearTypeManual(e) {
    setGearTypeManual(e);
  }
  function handleGearTypeSemi(e) {
    setGearTypeSemi(e);
  }
  function handleGearTypeAuto(e) {
    setGearTypeAuto(e);
  }
  function handleBodyTypeCabrio(e) {
    setBodyTypeCabrio(e);
  }
  function handleBodyTypeCoupe(e) {
    setBodyTypeCoupe(e);
  }
  function handleBodyTypeHatchback3(e) {
    setBodyTypeHatchback3(e);
  }
  function handleBodyTypeHatchback5(e) {
    setBodyTypeHatchback5(e);
  }
  function handleBodyTypeSedan(e) {
    setBodyTypeSedan(e);
  }
  function handleBodyTypeStation(e) {
    setBodyTypeStation(e);
  }
  function handleBodyTypeMPV(e) {
    setBodyTypeMPV(e);
  }
  function handleBodyTypeRoadster(e) {
    setBodyTypeRoadster(e);
  }
  function handleBodyTypeCrossover(e) {
    setBodyTypeCrossover(e);
  }
  function handleBodyTypeHardtop(e) {
    setBodyTypeHardtop(e);
  }
  function handleBodyTypePickup(e) {
    setBodyTypePickup(e);
  }
  function handleBodyTypeSUV(e) {
    setBodyTypeSUV(e);
  }

  useEffect(() => {
    setFilters([...filters], (filters[0]["state"] = VehicleType));
    // eslint-disable-next-line
  }, [VehicleType]);

  useEffect(() => {
    setFilters([...filters], (filters[1]["state"] = Brand));
    // eslint-disable-next-line
  }, [Brand]);
  useEffect(() => {
    setFilters([...filters], (filters[2]["state"] = Model));
    // eslint-disable-next-line
  }, [Model]);
  useEffect(() => {
    setFilters([...filters], (filters[3]["state"] = Generation));
    // eslint-disable-next-line
  }, [Generation]);

  useEffect(() => {
    setFilters([...filters], (filters[4]["state"] = minPrice));
    // eslint-disable-next-line
  }, [minPrice]);
  useEffect(() => {
    setFilters([...filters], (filters[5]["state"] = maxPrice));
    // eslint-disable-next-line
  }, [maxPrice]);
  useEffect(() => {
    setFilters([...filters], (filters[6]["state"] = minYear));
    // eslint-disable-next-line
  }, [minYear]);
  useEffect(() => {
    setFilters([...filters], (filters[7]["state"] = maxYear));
    // eslint-disable-next-line
  }, [maxYear]);
  useEffect(() => {
    setFilters([...filters], (filters[8]["state"] = minUsedKM));
  }, [minUsedKM]);
  useEffect(() => {
    setFilters([...filters], (filters[9]["state"] = maxUsedKM));
  }, [maxUsedKM]);
  useEffect(() => {
    setFilters([...filters], (filters[10]["state"] = FuelTypeGasoline));
  }, [FuelTypeGasoline]);
  useEffect(() => {
    setFilters([...filters], (filters[11]["state"] = FuelTypeElectricity));
  }, [FuelTypeElectricity]);
  useEffect(() => {
    setFilters([...filters], (filters[12]["state"] = FuelTypeDiesel));
  }, [FuelTypeDiesel]);
  useEffect(() => {
    setFilters([...filters], (filters[13]["state"] = FuelTypeHybrid));
  }, [FuelTypeHybrid]);
  useEffect(() => {
    setFilters([...filters], (filters[14]["state"] = FuelTypeLPG));
  }, [FuelTypeLPG]);
  useEffect(() => {
    setFilters([...filters], (filters[15]["state"] = GearTypeManual));
  }, [GearTypeManual]);
  useEffect(() => {
    setFilters([...filters], (filters[16]["state"] = GearTypeSemi));
  }, [GearTypeSemi]);
  useEffect(() => {
    setFilters([...filters], (filters[17]["state"] = GearTypeAuto));
  }, [GearTypeAuto]);
  useEffect(() => {
    setFilters([...filters], (filters[18]["state"] = BodyTypeCabrio));
  }, [BodyTypeCabrio]);
  useEffect(() => {
    setFilters([...filters], (filters[19]["state"] = BodyTypeCoupe));
  }, [BodyTypeCoupe]);
  useEffect(() => {
    setFilters([...filters], (filters[20]["state"] = BodyTypeHatchback3));
  }, [BodyTypeHatchback3]);
  useEffect(() => {
    setFilters([...filters], (filters[21]["state"] = BodyTypeHatchback5));
  }, [BodyTypeHatchback5]);
  useEffect(() => {
    setFilters([...filters], (filters[22]["state"] = BodyTypeSedan));
  }, [BodyTypeSedan]);
  useEffect(() => {
    setFilters([...filters], (filters[23]["state"] = BodyTypeStation));
  }, [BodyTypeStation]);
  useEffect(() => {
    setFilters([...filters], (filters[24]["state"] = BodyTypeMPV));
  }, [BodyTypeMPV]);
  useEffect(() => {
    setFilters([...filters], (filters[25]["state"] = BodyTypeRoadster));
  }, [BodyTypeRoadster]);
  useEffect(() => {
    setFilters([...filters], (filters[26]["state"] = BodyTypeCrossover));
  }, [BodyTypeCrossover]);
  useEffect(() => {
    setFilters([...filters], (filters[27]["state"] = BodyTypeHardtop));
  }, [BodyTypeHardtop]);
  useEffect(() => {
    setFilters([...filters], (filters[28]["state"] = BodyTypePickup));
  }, [BodyTypePickup]);
  useEffect(() => {
    setFilters([...filters], (filters[29]["state"] = BodyTypeSUV));
  }, [BodyTypeSUV]);

  function removeVehicleType() {
    setVehicleType("");
    setFilters([...filters], (filters[0]["state"] = VehicleType));
  }
  function removeBrand() {
    setBrand("");
    setFilters([...filters], (filters[1]["state"] = Brand));
  }
  function removeModel() {
    setModel("");
    setFilters([...filters], (filters[2]["state"] = Model));
  }

  function removeGeneration() {
    setGeneration("");
    setFilters([...filters], (filters[3]["state"] = Generation));
  }

  function removeMinPrice() {
    setMinPrice();
    setFilters([...filters], (filters[4]["state"] = minPrice));
  }
  function removeMaxPrice() {
    setMaxPrice();
    setFilters([...filters], (filters[5]["state"] = maxPrice));
  }
  function removeMinYear() {
    setMinYear();
    setFilters([...filters], (filters[6]["state"] = minYear));
  }
  function removeMaxYear() {
    setMaxYear();
    setFilters([...filters], (filters[7]["state"] = maxYear));
  }
  function removeMinUsedKM() {
    setMinUsedKM();
    setFilters([...filters], (filters[8]["state"] = minUsedKM));
  }
  function removeMaxUsedKM() {
    setMaxUsedKM();
    setFilters([...filters], (filters[9]["state"] = maxUsedKM));
  }
  function removeFuelTypeGasoline() {
    setFuelTypeGasoline(false);
    setFilters([...filters], (filters[10]["state"] = FuelTypeGasoline));
  }
  function removeFuelTypeElectricity() {
    setFuelTypeElectricity(false);
    setFilters([...filters], (filters[11]["state"] = FuelTypeElectricity));
  }
  function removeFuelTypeDiesel() {
    setFuelTypeDiesel(false);
    setFilters([...filters], (filters[12]["state"] = FuelTypeDiesel));
  }
  function removeFuelTypeHybrid() {
    setFuelTypeHybrid(false);
    setFilters([...filters], (filters[13]["state"] = FuelTypeHybrid));
  }
  function removeFuelTypeLPG() {
    setFuelTypeLPG(false);
    setFilters([...filters], (filters[14]["state"] = FuelTypeLPG));
  }
  function removeGearTypeManual() {
    setGearTypeManual(false);
    setFilters([...filters], (filters[15]["state"] = GearTypeManual));
  }
  function removeGearTypeSemi() {
    setGearTypeSemi(false);
    setFilters([...filters], (filters[16]["state"] = GearTypeSemi));
  }
  function removeGearTypeAuto() {
    setGearTypeAuto(false);
    setFilters([...filters], (filters[17]["state"] = GearTypeAuto));
  }
  function removeBodyTypeCabrio() {
    setBodyTypeCabrio(false);
    setFilters([...filters], (filters[18]["state"] = BodyTypeCabrio));
  }
  function removeBodyTypeCoupe() {
    setBodyTypeCoupe(false);
    setFilters([...filters], (filters[19]["state"] = BodyTypeCoupe));
  }
  function removeBodyTypeHatchback3() {
    setBodyTypeHatchback3(false);
    setFilters([...filters], (filters[20]["state"] = BodyTypeHatchback3));
  }
  function removeBodyTypeHatchback5() {
    setBodyTypeHatchback5(false);
    setFilters([...filters], (filters[21]["state"] = BodyTypeHatchback5));
  }
  function removeBodyTypeSedan() {
    setBodyTypeSedan(false);
    setFilters([...filters], (filters[22]["state"] = BodyTypeSedan));
  }
  function removeBodyTypeStation() {
    setBodyTypeStation(false);
    setFilters([...filters], (filters[23]["state"] = BodyTypeStation));
  }
  function removeBodyTypeMPV() {
    setBodyTypeMPV(false);
    setFilters([...filters], (filters[24]["state"] = BodyTypeMPV));
  }
  function removeBodyTypeRoadster() {
    setBodyTypeRoadster(false);
    setFilters([...filters], (filters[25]["state"] = BodyTypeRoadster));
  }
  function removeBodyTypeCrossover() {
    setBodyTypeCrossover(false);
    setFilters([...filters], (filters[26]["state"] = BodyTypeCrossover));
  }
  function removeBodyTypeHardtop() {
    setBodyTypeHardtop(false);
    setFilters([...filters], (filters[27]["state"] = BodyTypeHardtop));
  }
  function removeBodyTypePickup() {
    setBodyTypePickup(false);
    setFilters([...filters], (filters[28]["state"] = BodyTypePickup));
  }
  function removeBodyTypeSUV() {
    setBodyTypeSUV(false);
    setFilters([...filters], (filters[29]["state"] = BodyTypeSUV));
  }

  function removeFilters() {
    setVehicleType("");
    setBrand("");
    setGeneration("");
    setMinPrice();
    setMaxPrice();
    setMinYear();
    setMaxYear();
    setMinUsedKM();
    setMaxUsedKM();
    setFuelTypeGasoline(false);
    setFuelTypeElectricity(false);
    setFuelTypeDiesel(false);
    setFuelTypeHybrid(false);
    setFuelTypeLPG(false);
    setGearTypeManual(false);
    setGearTypeSemi(false);
    setGearTypeAuto(false);
    setBodyTypeCabrio(false);
    setBodyTypeCoupe(false);
    setBodyTypeHatchback3(false);
    setBodyTypeHatchback5(false);
    setBodyTypeSedan(false);
    setBodyTypeStation(false);
    setBodyTypeMPV(false);
    setBodyTypeRoadster(false);
    setBodyTypeCrossover(false);
    setBodyTypeHardtop(false);
    setBodyTypePickup(false);
    setBodyTypeSUV(false);
  }

  return (
    <VehicleContext.Provider value={VehicleData}>
      <VehicleUpdateContext.Provider value={getVehicleData}>
        <FiltersContext.Provider value={filters}>
          <VehicleTypeContext.Provider value={VehicleType}>
            <VehicleTypeUpdateContext.Provider value={handleVehicleType}>
              <BrandContext.Provider value={Brand}>
                <BrandUpdateContext.Provider value={handleBrand}>
                  <ModelContext.Provider value={Model}>
                    <ModelUpdateContext.Provider value={handleModel}>
                      <GenerationContext.Provider value={Generation}>
                        <GenerationUpdateContext.Provider
                          value={handleGeneration}
                        >
                          <MinPriceContext.Provider value={minPrice}>
                            <MinPriceUpdateContext.Provider
                              value={handleMinPrice}
                            >
                              <MaxPriceContext.Provider value={maxPrice}>
                                <MaxPriceUpdateContext.Provider
                                  value={handleMaxPrice}
                                >
                                  <MinYearContext.Provider value={minYear}>
                                    <MinYearUpdateContext.Provider
                                      value={handleMinYear}
                                    >
                                      <MaxYearContext.Provider value={maxYear}>
                                        <MaxYearUpdateContext.Provider
                                          value={handleMaxYear}
                                        >
                                          <MinUsedKMContext.Provider
                                            value={minUsedKM}
                                          >
                                            <MinUsedKMUpdateContext.Provider
                                              value={handleMinUsedKM}
                                            >
                                              <MaxUsedKMContext.Provider
                                                value={maxUsedKM}
                                              >
                                                <MaxUsedKMUpdateContext.Provider
                                                  value={handleMaxUsedKM}
                                                >
                                                  <FuelTypeGasolineContext.Provider
                                                    value={FuelTypeGasoline}
                                                  >
                                                    <FuelTypeGasolineUpdateContext.Provider
                                                      value={
                                                        handleFuelTypeGasoline
                                                      }
                                                    >
                                                      <FuelTypeElectricityContext.Provider
                                                        value={
                                                          FuelTypeElectricity
                                                        }
                                                      >
                                                        <FuelTypeElectricityUpdateContext.Provider
                                                          value={
                                                            handleFuelTypeElectricity
                                                          }
                                                        >
                                                          <FuelTypeDieselContext.Provider
                                                            value={
                                                              FuelTypeDiesel
                                                            }
                                                          >
                                                            <FuelTypeDieselUpdateContext.Provider
                                                              value={
                                                                handleFuelTypeDiesel
                                                              }
                                                            >
                                                              <FuelTypeHybridContext.Provider
                                                                value={
                                                                  FuelTypeHybrid
                                                                }
                                                              >
                                                                <FuelTypeHybridUpdateContext.Provider
                                                                  value={
                                                                    handleFuelTypeHybrid
                                                                  }
                                                                >
                                                                  <FuelTypeLPGContext.Provider
                                                                    value={
                                                                      FuelTypeLPG
                                                                    }
                                                                  >
                                                                    <FuelTypeLPGUpdateContext.Provider
                                                                      value={
                                                                        handleFuelTypeLPG
                                                                      }
                                                                    >
                                                                      <GearTypeManualContext.Provider
                                                                        value={
                                                                          GearTypeManual
                                                                        }
                                                                      >
                                                                        <GearTypeManualUpdateContext.Provider
                                                                          value={
                                                                            handleGearTypeManual
                                                                          }
                                                                        >
                                                                          <GearTypeSemiContext.Provider
                                                                            value={
                                                                              GearTypeSemi
                                                                            }
                                                                          >
                                                                            <GearTypeSemiUpdateContext.Provider
                                                                              value={
                                                                                handleGearTypeSemi
                                                                              }
                                                                            >
                                                                              <GearTypeAutoContext.Provider
                                                                                value={
                                                                                  GearTypeAuto
                                                                                }
                                                                              >
                                                                                <GearTypeAutoUpdateContext.Provider
                                                                                  value={
                                                                                    handleGearTypeAuto
                                                                                  }
                                                                                >
                                                                                  <BodyTypeCabrioContext.Provider
                                                                                    value={
                                                                                      BodyTypeCabrio
                                                                                    }
                                                                                  >
                                                                                    <BodyTypeCabrioUpdateContext.Provider
                                                                                      value={
                                                                                        handleBodyTypeCabrio
                                                                                      }
                                                                                    >
                                                                                      <BodyTypeCoupeContext.Provider
                                                                                        value={
                                                                                          BodyTypeCoupe
                                                                                        }
                                                                                      >
                                                                                        <BodyTypeCoupeUpdateContext.Provider
                                                                                          value={
                                                                                            handleBodyTypeCoupe
                                                                                          }
                                                                                        >
                                                                                          <BodyTypeHatchback3Context.Provider
                                                                                            value={
                                                                                              BodyTypeHatchback3
                                                                                            }
                                                                                          >
                                                                                            <BodyTypeHatchback3UpdateContext.Provider
                                                                                              value={
                                                                                                handleBodyTypeHatchback3
                                                                                              }
                                                                                            >
                                                                                              <BodyTypeHatchback5Context.Provider
                                                                                                value={
                                                                                                  BodyTypeHatchback5
                                                                                                }
                                                                                              >
                                                                                                <BodyTypeHatchback5UpdateContext.Provider
                                                                                                  value={
                                                                                                    handleBodyTypeHatchback5
                                                                                                  }
                                                                                                >
                                                                                                  <BodyTypeSedanContext.Provider
                                                                                                    value={
                                                                                                      BodyTypeSedan
                                                                                                    }
                                                                                                  >
                                                                                                    <BodyTypeSedanUpdateContext.Provider
                                                                                                      value={
                                                                                                        handleBodyTypeSedan
                                                                                                      }
                                                                                                    >
                                                                                                      <BodyTypeStationContext.Provider
                                                                                                        value={
                                                                                                          BodyTypeStation
                                                                                                        }
                                                                                                      >
                                                                                                        <BodyTypeStationUpdateContext.Provider
                                                                                                          value={
                                                                                                            handleBodyTypeStation
                                                                                                          }
                                                                                                        >
                                                                                                          <BodyTypeMPVContext.Provider
                                                                                                            value={
                                                                                                              BodyTypeMPV
                                                                                                            }
                                                                                                          >
                                                                                                            <BodyTypeMPVUpdateContext.Provider
                                                                                                              value={
                                                                                                                handleBodyTypeMPV
                                                                                                              }
                                                                                                            >
                                                                                                              <BodyTypeRoadsterContext.Provider
                                                                                                                value={
                                                                                                                  BodyTypeRoadster
                                                                                                                }
                                                                                                              >
                                                                                                                <BodyTypeRoadsterUpdateContext.Provider
                                                                                                                  value={
                                                                                                                    handleBodyTypeRoadster
                                                                                                                  }
                                                                                                                >
                                                                                                                  <BodyTypeCrossoverContext.Provider
                                                                                                                    value={
                                                                                                                      BodyTypeCrossover
                                                                                                                    }
                                                                                                                  >
                                                                                                                    <BodyTypeCrossoverUpdateContext.Provider
                                                                                                                      value={
                                                                                                                        handleBodyTypeCrossover
                                                                                                                      }
                                                                                                                    >
                                                                                                                      <BodyTypeHardtopContext.Provider
                                                                                                                        value={
                                                                                                                          BodyTypeHardtop
                                                                                                                        }
                                                                                                                      >
                                                                                                                        <BodyTypeHardtopUpdateContext.Provider
                                                                                                                          value={
                                                                                                                            handleBodyTypeHardtop
                                                                                                                          }
                                                                                                                        >
                                                                                                                          <BodyTypePickupContext.Provider
                                                                                                                            value={
                                                                                                                              BodyTypePickup
                                                                                                                            }
                                                                                                                          >
                                                                                                                            {
                                                                                                                              children
                                                                                                                            }
                                                                                                                          </BodyTypePickupContext.Provider>
                                                                                                                        </BodyTypeHardtopUpdateContext.Provider>
                                                                                                                      </BodyTypeHardtopContext.Provider>
                                                                                                                    </BodyTypeCrossoverUpdateContext.Provider>
                                                                                                                  </BodyTypeCrossoverContext.Provider>
                                                                                                                </BodyTypeRoadsterUpdateContext.Provider>
                                                                                                              </BodyTypeRoadsterContext.Provider>
                                                                                                            </BodyTypeMPVUpdateContext.Provider>
                                                                                                          </BodyTypeMPVContext.Provider>
                                                                                                        </BodyTypeStationUpdateContext.Provider>
                                                                                                      </BodyTypeStationContext.Provider>
                                                                                                    </BodyTypeSedanUpdateContext.Provider>
                                                                                                  </BodyTypeSedanContext.Provider>
                                                                                                </BodyTypeHatchback5UpdateContext.Provider>
                                                                                              </BodyTypeHatchback5Context.Provider>
                                                                                            </BodyTypeHatchback3UpdateContext.Provider>
                                                                                          </BodyTypeHatchback3Context.Provider>
                                                                                        </BodyTypeCoupeUpdateContext.Provider>
                                                                                      </BodyTypeCoupeContext.Provider>
                                                                                    </BodyTypeCabrioUpdateContext.Provider>
                                                                                  </BodyTypeCabrioContext.Provider>
                                                                                </GearTypeAutoUpdateContext.Provider>
                                                                              </GearTypeAutoContext.Provider>
                                                                            </GearTypeSemiUpdateContext.Provider>
                                                                          </GearTypeSemiContext.Provider>
                                                                        </GearTypeManualUpdateContext.Provider>
                                                                      </GearTypeManualContext.Provider>
                                                                    </FuelTypeLPGUpdateContext.Provider>
                                                                  </FuelTypeLPGContext.Provider>
                                                                </FuelTypeHybridUpdateContext.Provider>
                                                              </FuelTypeHybridContext.Provider>
                                                            </FuelTypeDieselUpdateContext.Provider>
                                                          </FuelTypeDieselContext.Provider>
                                                        </FuelTypeElectricityUpdateContext.Provider>
                                                      </FuelTypeElectricityContext.Provider>
                                                    </FuelTypeGasolineUpdateContext.Provider>
                                                  </FuelTypeGasolineContext.Provider>
                                                </MaxUsedKMUpdateContext.Provider>
                                              </MaxUsedKMContext.Provider>
                                            </MinUsedKMUpdateContext.Provider>
                                          </MinUsedKMContext.Provider>
                                        </MaxYearUpdateContext.Provider>
                                      </MaxYearContext.Provider>
                                    </MinYearUpdateContext.Provider>
                                  </MinYearContext.Provider>
                                </MaxPriceUpdateContext.Provider>
                              </MaxPriceContext.Provider>
                            </MinPriceUpdateContext.Provider>
                          </MinPriceContext.Provider>
                        </GenerationUpdateContext.Provider>
                      </GenerationContext.Provider>
                    </ModelUpdateContext.Provider>
                  </ModelContext.Provider>
                </BrandUpdateContext.Provider>
              </BrandContext.Provider>
            </VehicleTypeUpdateContext.Provider>
          </VehicleTypeContext.Provider>
        </FiltersContext.Provider>
      </VehicleUpdateContext.Provider>
    </VehicleContext.Provider>
  );
}
