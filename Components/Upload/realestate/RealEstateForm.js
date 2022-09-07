import {
  addDoc,
  collection,
  serverTimestamp,
  GeoPoint,
  doc,
  updateDoc,
} from "@firebase/firestore";
import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { db, storage } from "../../../firebase";
import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import ImageUploading from "react-images-uploading";
import { useDropzone } from "react-dropzone";
import TextEditor from "./TextEditor";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import ReactHtmlParser from "react-html-parser";
import {
  Adress,
  HeatingSystems,
  Insulation,
  WaterHeater,
  KitchenStove,
  AirConditioner,
  UnderFloorHeating,
  RenewableEnergy,
  EVCharger,
  ElectricGenerator,
  SaleOrRent,
  SaleHouseTypes,
  RentHouseTypes,
  SaleCondition,
  UsingStatus,
  FurnishedList,
  OpenningHour,
  ClosingHour,
  OpenningDay,
  ClosingDay,
  Towns,
} from "../../Provinces";
import Checkbox from "./Checkbox";
import { AnimatedSelect } from "./AnimatedSelect";
import { useRecoilState } from "recoil";
import { LanguageState } from "../../../atoms/states";
import {
  InputComponent,
  MaskInputComponent,
  InsideLabelInput,
  InputWithCheckBox,
} from "./InputComponent";

const RealEstateForm = (props) => {
  const { data: session } = useSession();
  const [languageState, setLanguageState] = useRecoilState(LanguageState);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [videoURLs, setVideoURLs] = useState([]);
  const [RentOrSale, setRentOrSale] = useState([]);
  const [HouseType, setHouseType] = useState([]);
  const [Title, setTitle] = useState("");
  const [Price, setPrice] = useState("");
  const [text, setText] = useState("");
  const [PlotArea, setPlotArea] = useState(null);
  const [FloorArea, setFloorArea] = useState(null);
  const [HouseVolume, setHouseVolume] = useState(null);
  const [numberOfRoom, setNumberOfRoom] = useState(null);
  const [numberOfBedroom, setNumberOfBedroom] = useState("");

  const [BedroomSize, setBedroomSize] = useState([
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);
  const [numberOfLivingroom, setNumberOfLivingroom] = useState("");
  const [LivingroomSize, setLivingroomSize] = useState([
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);
  const [numberOfKitchen, setNumberOfKitchen] = useState("");
  const [KitchenSize, setKitchenSize] = useState([
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);
  const [numberOfBathroom, setNumberOfBathroom] = useState("");
  const [numberOfToilet, setNumberOfToilet] = useState("");
  const [numberOfBalcony, setNumberOfBalcony] = useState("");
  const [BalconySize, setBalconySize] = useState([
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);
  const [numberOfTerrace, setNumberOfTerrace] = useState("");
  const [TerraceSize, setTerraceSize] = useState([
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);
  const [numberOfGarden, setNumberOfGarden] = useState("");
  const [GardenSize, setGardenSize] = useState([
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);
  const [numberOfStorage, setNumberOfStorage] = useState("");
  const [StorageSize, setStorageSize] = useState([
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);

  const [numberOfShed, setNumberOfShed] = useState("");
  const [ShedSize, setShedSize] = useState([
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);

  const [numberOfGarage, setNumberOfGarage] = useState("");
  const [GarageSize, setGarageSize] = useState([
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);
  const [AtticArea, setAtticArea] = useState(null);
  const [HouseStorey, setHouseStorey] = useState("");
  const [Furnished, setFurnished] = useState([]);

  const [shareBedroom, setShareBedroom] = useState(false);
  const [shareLivingroom, setShareLivingroom] = useState(false);
  const [shareKitchen, setShareKitchen] = useState(false);
  const [shareBalcony, setShareBalcony] = useState(false);
  const [shareTerrace, setShareTerrace] = useState(false);
  const [shareGarden, setShareGarden] = useState(false);
  const [shareStorage, setShareStorage] = useState(false);
  const [shareShed, setShareShed] = useState(false);
  const [shareGarage, setShareGarage] = useState(false);

  const [province, setProvince] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [Neighbourhood, setNeighbourhood] = useState("");
  const [Street, setStreet] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [HouseNumber, setHouseNumber] = useState("");
  const [ApartmentFloor, setApartmentFloor] = useState("");
  const [TotalApartmentFloor, setTotalApartmentFloor] = useState("");
  const [Coordinate, setCoordinate] = useState([0, 0]);
  const [ConstructionYear, setConstructionYear] = useState("");
  const [ConstructionType, setConstructionType] = useState([]);
  const [UserStatus, setUserStatus] = useState([]);
  const [AreaDescription, setAreaDescription] = useState([]);

  const [EnergyEfficiency, setEnergyEfficiency] = useState("A");
  const [HeatingSystemState, setHeatingSystemState] = useState([]);
  const [InsulationSystemState, setInsulationSystemState] = useState([]);
  const [WaterHeaterState, setWaterHeaterState] = useState([]);
  const [KitchenStoveSystemState, setKitchenStoveSystemState] = useState([]);
  const [AirConditionerSystemState, setAirConditionerSystemState] = useState(
    []
  );
  const [UnderfloorHeatingSystemState, setUnderfloorHeatingSystemState] =
    useState([]);
  const [RenewableEnergySystemState, setRenewableEnergySystemState] = useState(
    []
  );
  const [EVChargerSystemState, setEVChargerSystemState] = useState([]);
  const [ElectricGeneratorSystemState, setElectricGeneratorSystemState] =
    useState([]);

  const [RealtorContribution, setRealtorContribution] = useState("");
  const [Deposit, setDeposit] = useState("");
  const [Dues, setDues] = useState("");
  const [Included, setIncluded] = useState(false);
  const [ElectricBill, setElectricBill] = useState("");
  const [GasBill, setGasBill] = useState("");
  const [WaterBill, setWaterBill] = useState("");

  const [Fecade, setFecade] = useState([]);
  const [FeatureHouseType, setFeatureHouseType] = useState([]);
  const [Transportation, setTransportation] = useState([]);
  const [View, setView] = useState([]);
  const [Nearby, setNearby] = useState([]);
  const [Accessible, setAccessible] = useState([]);

  const [RealtorName, setRealtorName] = useState(session?.user?.name);
  const [RealtorPhone, setRealtorPhone] = useState("");
  const [RealtorEmail, setRealtorEmail] = useState(session?.user?.email);
  const [RealtorOpenningHour, setRealtorOpenningHour] = useState([]);
  const [RealtorClosingHour, setRealtorClosingHour] = useState([]);
  const [RealtorOpenningDay, setRealtorOpenningDay] = useState([]);
  const [RealtorClosingDay, setRealtorClosingDay] = useState([]);
  const [RealtorImage, setRealtorImage] = useState([]);
  const [RealtorImageURLs, setRealtorImageURLs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fRentOrSale = RentOrSale.value;
    const fHouseType = HouseType.value;
    const fTitle = Title;
    const fPrice = Price;
    const fDescription = text;
    const fPlotArea = PlotArea;
    const fFloorArea = FloorArea;
    const fHouseVolume = HouseVolume;
    const fNumberOfRoom = numberOfRoom;
    const fNumberOfBedroom = numberOfBedroom;
    const fNumberOfLivingroom = numberOfLivingroom;
    const fNumberOfKitchen = numberOfKitchen;
    const fBedroomSize = BedroomSizeFiltered;
    const fLivingroomSize = LivingroomSizeFiltered;
    const fKitchenSize = KitchenSizeFiltered;
    const fNumberOfBathroom = numberOfBathroom;
    const fNumberOfToilet = numberOfToilet;
    const fNumberOfBalcony = numberOfBalcony;
    const fBalconySize = BalconySizeFiltered;
    const fNumberOfTerrace = numberOfTerrace;
    const fTerraceSize = TerraceSizeFiltered;
    const fNumberOfGarden = numberOfGarden;
    const fGardenSize = GardenSizeFiltered;
    const fNumberOfStorage = numberOfStorage;
    const fStorageSize = StorageSizeFiltered;
    const fNumberOfShed = numberOfShed;
    const fShedSize = ShedSizeFiltered;
    const fNumberOfGarage = numberOfGarage;
    const fGarageSize = GarageSizeFiltered;
    const fAtticArea = AtticArea;
    const fHouseStorey = HouseStorey;
    const fFurnished = Furnished.value;
    const fProvince = province;
    const fMunicipality = municipality;
    const fNeighbourhood = Neighbourhood;
    const fStreet = Street;
    const fPostalCode = PostalCode;
    const fHouseNumber = HouseNumber;
    const fFloorOfApartment = ApartmentFloor;
    const fStoreyOfBuilding = TotalApartmentFloor;
    const fConstructionYear = ConstructionYear;
    const fConstructionType = ConstructionType.value;
    const fUserStatus = UserStatus.value;
    const fAreaDescription = AreaDescription;
    const fEnergyEfficiency = EnergyEfficiency;
    const fHeatingSystemState = HeatingSystemState.map((i) => i.value);
    const fInsulationSystemState = InsulationSystemState.map((i) => i.value);
    const fWaterHeaterState = WaterHeaterState.map((i) => i.value);
    const fKitchenStoveSystemState = KitchenStoveSystemState.map(
      (i) => i.value
    );
    const fAirConditionerSystemState = AirConditionerSystemState.map(
      (i) => i.value
    );
    const fUnderfloorHeatingSystemState = UnderfloorHeatingSystemState.map(
      (i) => i.value
    );
    const fRenewableEnergySystemState = RenewableEnergySystemState.map(
      (i) => i.value
    );
    const fEVChargerSystemState = EVChargerSystemState.map((i) => i.value);
    const fElectricGeneratorSystemState = ElectricGeneratorSystemState.map(
      (i) => i.value
    );

    const fRealtorContribution = RealtorContribution;
    const fDeposit = Deposit;
    const fDues = Dues;
    const fIncluded = Included;
    const fElectricBill = ElectricBill;
    const fGasBill = GasBill;
    const fWaterBill = WaterBill;

    const fFecade = Fecade;
    const fFeatureHouseType = FeatureHouseType;
    const fTransportation = Transportation;
    const fView = View;
    const fNearby = Nearby;
    const fAccessible = Accessible;

    const fRealtorName = RealtorName;
    const fRealtorPhone = RealtorPhone;
    const fRealtorEmail = RealtorEmail;
    const fRealtorOpenningHour = RealtorOpenningHour.value;
    const fRealtorClosingHour = RealtorClosingHour.value;
    const fRealtorOpenningDay = RealtorOpenningDay.value;
    const fRealtorClosingDay = RealtorClosingDay.value;

    const docRef = await addDoc(collection(db, "houses"), {
      RentOrSale: fRentOrSale,
      HouseType: fHouseType,
      title: fTitle,
      Price: parseInt(fPrice),
      Description: fDescription,
      PlotArea: parseInt(fPlotArea),
      FloorArea: parseInt(fFloorArea),
      HouseVolume: parseInt(fHouseVolume),
      NumberOfRoom: parseInt(fNumberOfRoom),
      NumberOfBedroom: parseInt(fNumberOfBedroom),
      NumberOfLivingRoom: parseInt(fNumberOfLivingroom),
      NumberOfKitchen: parseInt(fNumberOfKitchen),
      NumberOfBathroom: parseInt(fNumberOfBathroom),
      NumberOfToilet: parseInt(fNumberOfToilet),
      NumberOfBalcony: parseInt(fNumberOfBalcony),
      NumberOfTerrace: parseInt(fNumberOfTerrace),
      NumberOfGarden: parseInt(fNumberOfGarden),
      NumberOfStorage: parseInt(fNumberOfStorage),
      NumberOfShed: parseInt(fNumberOfShed),
      NumberOfGarage: parseInt(fNumberOfGarage),
      OtherBedroomSize: fBedroomSize,
      LivingRoomArea: fLivingroomSize,
      KitchenArea: fKitchenSize,
      BalconySize: fBalconySize,
      TerraceSize: fTerraceSize,
      GardenSize: fGardenSize,
      StorageArea: fStorageSize,
      ShedArea: fShedSize,
      GarageSize: fGarageSize,
      AtticArea: parseInt(fAtticArea),
      NumberOfFloor: parseInt(fHouseStorey),
      Furnished: fFurnished,
      Province: fProvince,
      Municipality: fMunicipality,
      Neighbourhood: fNeighbourhood,
      PostalCode: fPostalCode,
      Street: fStreet,
      HouseNumber: fHouseNumber,
      FloorNumber: parseInt(fFloorOfApartment),
      BuildingStorey: parseInt(fStoreyOfBuilding),
      Location: new GeoPoint(Coordinate[0], Coordinate[1]),
      LocationDescription: fAreaDescription,
      ConstructionYear: parseInt(fConstructionYear),
      BuildingType: fConstructionType,
      UserStatus: fUserStatus,
      EnergyLevel: fEnergyEfficiency,
      HeatingSystem: fHeatingSystemState,
      InsulationType: fInsulationSystemState,
      HotWater: fWaterHeaterState,
      OvenSupplier: fKitchenStoveSystemState,
      AirConditionerType: fAirConditionerSystemState,
      UnderfloorHeating: fUnderfloorHeatingSystemState,
      RenewableEnergy: fRenewableEnergySystemState,
      EVCharger: fEVChargerSystemState,
      ElectricGenerator: fElectricGeneratorSystemState,
      RealtorContribution: parseInt(fRealtorContribution),
      Deposit: parseInt(fDeposit),
      Dues: parseInt(fDues),
      Included: fIncluded,
      ElectricBill: parseInt(fElectricBill),
      GasBill: parseInt(fGasBill),
      WaterBill: parseInt(fWaterBill),
      Fecade: fFecade,
      FeatureHouseType: fFeatureHouseType,
      Transportation: fTransportation,
      View: fView,
      Nearby: fNearby,
      Accessible: fAccessible,
      PostingDate: serverTimestamp(),
      ImageArray: [],
    });
    console.log("New doc added with ID", docRef.id);

    const RealtorDoc = await addDoc(
      collection(db, "houses", docRef.id, "Realtor"),
      {
        ClosingDay: fRealtorClosingDay,
        ClosingHour: fRealtorClosingHour,
        OpenningHour: fRealtorOpenningHour,
        OpenningDay: fRealtorOpenningDay,
        Name: fRealtorName,
        Email: fRealtorEmail,
        PhoneNumber: fRealtorPhone,
        id: session?.user?.uid,
        RealtorImage: "",
      }
    );

    setImageURLs([]);
    const imagesToFirestore = [];

    for (let i = 0; i < images.length; i++) {
      const imageRef = ref(storage, `houses/${docRef.id}/image` + i);

      imageURLs.push(images[i].data_url);
      await uploadString(imageRef, imageURLs[i], "data_url").then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef);
          imagesToFirestore.push(downloadURL);
        }
      );
    }
    console.log(imagesToFirestore);
    await updateDoc(doc(db, "houses", docRef.id), {
      ImageArray: imagesToFirestore,
    });

    setRealtorImageURLs([]); // RealtorImage
    const RealtorImageToFirestore = [];

    for (let i = 0; i < RealtorImage.length; i++) {
      const imageRef = ref(storage, `houses/${docRef.id}/realtor` + i);

      RealtorImageURLs.push(RealtorImage[i].data_url);
      await uploadString(imageRef, RealtorImageURLs[i], "data_url").then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef);
          RealtorImageToFirestore.push(downloadURL);
        }
      );
    }
    console.log(RealtorImageToFirestore);
    await updateDoc(doc(db, "houses", docRef.id, "Realtor", RealtorDoc.id), {
      RealtorImage: RealtorImageToFirestore[0],
    });

    const videosToFirestore = [];

    for (let i = 0; i < videos.length; i++) {
      const videoRef = ref(storage, `houses/${docRef.id}/video` + i);

      await uploadString(videoRef, videos[i], "data_url").then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(videoRef);
          videosToFirestore.push(downloadURL);
        }
      );
    }

    await updateDoc(doc(db, "houses", docRef.id), {
      VideoArray: videosToFirestore,
    });
    console.log("update is done ");
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setText(data);
  };

  const BedroomSizes = [];
  for (let i = 0; i < numberOfBedroom; i++) {
    BedroomSizes.push(<div className="flex items-center relative gap-3"></div>);
  }
  const BedroomSizeFiltered = BedroomSize.filter((v) => v.value !== null).map(
    (i) => Number(i)
  );
  const LivingroomSizes = [];
  for (let i = 0; i < numberOfLivingroom; i++) {
    LivingroomSizes.push(
      <div className="flex items-center relative gap-3"></div>
    );
  }
  const LivingroomSizeFiltered = LivingroomSize.filter(
    (v) => v.value !== null
  ).map((i) => Number(i));

  const KitchenSizes = [];
  for (let i = 0; i < numberOfKitchen; i++) {
    KitchenSizes.push(<div className="flex items-center relative gap-3"></div>);
  }
  const KitchenSizeFiltered = KitchenSize.filter((v) => v.value !== null).map(
    (i) => Number(i)
  );
  const BalconySizes = [];
  for (let i = 0; i < numberOfBalcony; i++) {
    BalconySizes.push(<div className="flex items-center relative gap-3"></div>);
  }
  const BalconySizeFiltered = BalconySize.filter((v) => v.value !== null).map(
    (i) => Number(i)
  );

  const TerraceSizes = [];
  for (let i = 0; i < numberOfTerrace; i++) {
    TerraceSizes.push(<div className="flex items-center relative gap-3"></div>);
  }
  const TerraceSizeFiltered = TerraceSize.filter((v) => v.value !== null).map(
    (i) => Number(i)
  );

  const GardenSizes = [];
  for (let i = 0; i < numberOfGarden; i++) {
    GardenSizes.push(<div className="flex items-center relative gap-3"></div>);
  }
  const GardenSizeFiltered = GardenSize.filter((v) => v.value !== null).map(
    (i) => Number(i)
  );

  const StorageSizes = [];
  for (let i = 0; i < numberOfStorage; i++) {
    StorageSizes.push(<div className="flex items-center relative gap-3"></div>);
  }
  const StorageSizeFiltered = StorageSize.filter((v) => v.value !== null).map(
    (i) => Number(i)
  );
  const ShedSizes = [];
  for (let i = 0; i < numberOfShed; i++) {
    ShedSizes.push(<div className="flex items-center relative gap-3"></div>);
  }
  const ShedSizeFiltered = ShedSize.filter((v) => v.value !== null).map((i) =>
    Number(i)
  );
  const GarageSizes = [];
  for (let i = 0; i < numberOfGarage; i++) {
    GarageSizes.push(<div className="flex items-center relative gap-3"></div>);
  }
  const GarageSizeFiltered = GarageSize.filter((v) => v.value !== null).map(
    (i) => Number(i)
  );

  function handleProvince(e) {
    setProvince(e.target.value);
  }
  function handleMunicipality(e) {
    setMunicipality(e.target.value);
  }

  function handleAreaDecription(e) {
    console.log(e.target.checked);
    if (e.target.checked) {
      AreaDescription.push(e.target.name);
    }
    if (!e.target.checked) {
      const index = AreaDescription.indexOf(e.target.name);
      if (index > -1) {
        AreaDescription.splice(index, 1);
      }
    }
    console.log(AreaDescription);
  }

  function handleEnergyEfficiency(e) {
    setEnergyEfficiency(e.target.value);
    console.log(EnergyEfficiency);
  }

  function handleFecade(e) {
    const { name, checked } = e.target;
    setFecade((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    console.log(Fecade);
  }
  function handleFeatureHouseType(e) {
    const { name, checked } = e.target;
    setFeatureHouseType((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    console.log(FeatureHouseType);
  }
  function handleTransportation(e) {
    const { name, checked } = e.target;
    setTransportation((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    console.log(Transportation);
  }

  function handleView(e) {
    const { name, checked } = e.target;
    setView((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    console.log(View);
  }
  function handleNearby(e) {
    const { name, checked } = e.target;
    setNearby((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    console.log(Nearby);
  }
  function handleAccessible(e) {
    const { name, checked } = e.target;
    setAccessible((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    console.log(Accessible);
  }

  const handleImage = (imageList, addUpdateIndex, e) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const handleRealtorImage = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setRealtorImage(imageList);
    console.log(RealtorImage);
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
          // Do whatever you want with the file contents
          const binaryStr = reader.result;
          setVideos([binaryStr]);
          // videos.push(binaryStr);
          // console.log(videos);
        };
        reader.readAsDataURL(file);
        // console.log(videos);
      });
    },
    [videos]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    accept: "video/*",
  });

  return (
    <div className="dark:bg-gray-900 bg-blue-50">
      <form className="w-[80%] px-10 py-8 mx-auto" action="">
        <h1 className="text-xl font-semibold">Post Details</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md">
          <AnimatedSelect
            name="Status"
            title="Sale / Rent"
            List={SaleOrRent}
            isMulti={false}
            onChange={setRentOrSale}
          />
          <AnimatedSelect
            name="HouseType"
            title="House Type"
            List={
              RentOrSale !== [] && RentOrSale.value === "For Sale"
                ? SaleHouseTypes
                : RentHouseTypes
            }
            isMulti={false}
            onChange={setHouseType}
          />
          <div className="relative w-[80%] mt-12">
            <label
              htmlFor="title"
              className=" absolute -top-5 text-sm font-semibold"
            >
              Post Title<span className="text-red-600">*</span>
            </label>
            <input
              id="title"
              placeholder="Post Title"
              value={Title}
              className="w-full rounded-md dark:bg-gray-800 border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <InputComponent
            id="Price"
            Title="Price"
            required={true}
            placeholder="Price"
            value={Price}
            type="text"
            maxLength={9}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="relative w-[80%] mt-10">
            <label
              htmlFor="description"
              className=" absolute -top-5 text-sm font-semibold"
            >
              Post Description
            </label>

            <TextEditor
              id="description"
              handleEditorChange={handleEditorChange}
            />
            <div className="w-full bg-white rounded-2xl mt-10">
              <Disclosure defaultOpen="true">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-sm hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>Post Description (PREVIEW)</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180 " : ""
                        } w-5 h-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-800 border-2 border-t-0 border-gray-400 rounded-b-md">
                      {ReactHtmlParser(text)}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
        {/* =========================================================================== */}
        {/* =========================================================================== */}
        {/* =========================================================================== */}

        <h1 className="text-xl font-semibold mt-16">Features</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md">
          {/* ======================================================================== */}
          {/* ======================================================================== */}

          <div className="flex flex-wrap items-center gap-10 relative w-full">
            <div className="relative">
              <label
                htmlFor="plot"
                className=" absolute -top-5 text-sm font-semibold"
              >
                Plot Area (m²)<span className="text-red-600">*</span>
              </label>

              <div className="flex w-full items-center justify-between rounded-md border border-gray-400 focus:ring-blue-700 focus:border-blue-700">
                <input
                  id="plot"
                  placeholder="Plot Area"
                  value={PlotArea}
                  type="number"
                  onChange={(e) => setPlotArea(e.target.value)}
                  required
                  className="w-[50%] rounded-md border-0 focus:ring-0 dark:bg-gray-800  border-gray-300 dark:text-white  py-2 px-2 dark:border-gray-200"
                />
                <p className="mr-3 pl-3 border-l-2 font-semibold">m²</p>
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="floorArea"
                className=" absolute -top-5 text-sm font-semibold"
              >
                Floor Area (m²)<span className="text-red-600">*</span>
              </label>
              <div className="flex w-full items-center justify-between rounded-md border border-gray-400 focus:ring-blue-700 focus:border-blue-700">
                <input
                  id="floorArea"
                  placeholder="Floor Area"
                  value={FloorArea}
                  type="number"
                  onChange={(e) => setFloorArea(e.target.value)}
                  required
                  className="w-[50%] rounded-md border-0 focus:ring-0 dark:bg-gray-800 dark:text-white border-gray-300  py-2 px-2 dark:border-gray-200"
                />
                <p className="mr-3 pl-3 border-l-2 font-semibold">m²</p>
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="Volume"
                className=" absolute -top-5 text-sm font-semibold"
              >
                House Volume (m³)
              </label>
              <div className="flex w-full items-center justify-between rounded-md border border-gray-400 focus:ring-blue-700 focus:border-blue-700">
                <input
                  id="Volume"
                  placeholder="Volume of the house"
                  value={HouseVolume}
                  type="number"
                  onChange={(e) => setHouseVolume(e.target.value)}
                  className="w-[90%] rounded-md border-0 focus:ring-0 dark:bg-gray-800 dark:text-white border-gray-300  py-2 px-2 dark:border-gray-200"
                />
                <p className="mr-3 pl-3 border-l-2 font-semibold">m³</p>
              </div>
            </div>
          </div>
          {/* ======================================================================== */}
          {/* ======================================================================== */}
          <InsideLabelInput
            name="NumberOfRoom"
            title="Number of Room"
            required={true}
            type="text"
            maxLength={3}
            onChange={(e) => setNumberOfRoom(e.target.value)}
            plural="Rooms"
            singular="Room"
            value={numberOfRoom}
          />
          {/* ======================================================================== */}
          {/* ======================================================================== */}

          <InputWithCheckBox
            name="NumberOfBedroom"
            title="Number of Bedroom"
            type="text"
            required={true}
            value={numberOfBedroom}
            maxLength={2}
            onChange={(e) => setNumberOfBedroom(e.target.value)}
            plural="Bedrooms"
            singular="Bedroom"
            CheckboxOnChange={() => setShareBedroom(!shareBedroom)}
            CheckboxTitle="Bedroom sizes are not known"
          />
          <div className="relative w-[100%] mt-8 flex items-center flex-wrap">
            {shareBedroom !== true &&
              BedroomSizes.map((x, i) => (
                <div className="flex items-center relative mr-3 mb-8 " key={i}>
                  <label
                    htmlFor={`Bedroom${i}`}
                    className="absolute -top-5 text-sm font-semibold"
                  >{`Bedroom Size ${i + 1} (m²)`}</label>
                  <input
                    key={i}
                    type="number"
                    value={BedroomSize[i].value}
                    placeholder={`Area of Bedroom ${i + 1}`}
                    onChange={(e) => (BedroomSize[i] = e.target.value)}
                    className="rounded-md border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200 dark:bg-gray-800"
                  />
                </div>
              ))}
          </div>
          {/* ======================================================================== */}
          {/* ======================================================================== */}
          <InputWithCheckBox
            name="NumberOfLivingroom"
            title="Number of Livingroom"
            type="text"
            required={true}
            value={numberOfLivingroom}
            maxLength={2}
            onChange={(e) => setNumberOfLivingroom(e.target.value)}
            plural="Livingrooms"
            singular="Livingroom"
            CheckboxOnChange={() => setShareLivingroom(!shareLivingroom)}
            CheckboxTitle="Livingroom sizes are not known"
          />
          <div className="relative w-[100%] mt-8 flex items-center flex-wrap">
            {shareLivingroom !== true &&
              LivingroomSizes.map((x, i) => (
                <div className="flex items-center relative mr-3 mb-8 " key={i}>
                  <label
                    htmlFor={`Livingroom${i}`}
                    className="absolute -top-5 text-sm font-semibold"
                  >{`Livingroom Size ${i + 1} (m²)`}</label>
                  <input
                    key={i}
                    type="number"
                    value={LivingroomSize[i].value}
                    placeholder={`Area of Livingroom ${i + 1}`}
                    onChange={(e) => (LivingroomSize[i] = e.target.value)}
                    className="rounded-md border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200 dark:bg-gray-800"
                  />
                </div>
              ))}
          </div>
          {/* ======================================================================== */}
          {/* ======================================================================== */}

          <InputWithCheckBox
            name="NumberOfKitchen"
            title="Number of Kitchen"
            type="text"
            required={true}
            value={numberOfKitchen}
            maxLength={2}
            onChange={(e) => setNumberOfKitchen(e.target.value)}
            plural="Kitchens"
            singular="Kitchen"
            CheckboxOnChange={() => setShareKitchen(!shareKitchen)}
            CheckboxTitle="Kitchen sizes are not known"
          />
          <div className="relative w-[100%] mt-8 flex items-center flex-wrap">
            {shareKitchen !== true &&
              KitchenSizes.map((x, i) => (
                <div className="flex items-center relative mr-3 mb-8 " key={i}>
                  <label
                    htmlFor={`Kitchen${i}`}
                    className="absolute -top-5 text-sm font-semibold"
                  >{`Kitchen Size ${i + 1} (m²)`}</label>
                  <input
                    key={i}
                    type="number"
                    value={KitchenSize[i].value}
                    placeholder={`Area of Kitchen ${i + 1}`}
                    onChange={(e) => (KitchenSize[i] = e.target.value)}
                    className="rounded-md border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200 dark:bg-gray-800"
                  />
                </div>
              ))}
          </div>
          {/* ======================================================================== */}
          {/* ======================================================================== */}
          <div className="relative flex gap-5 w-[80%] mt-10">
            <div className="relative w-full">
              <label
                htmlFor="NumberOfBathroom"
                className=" absolute -top-5 text-sm font-semibold"
              >
                Number of Bathroom <span className="text-red-600">*</span>
              </label>
              <div className="flex w-full items-center justify-between rounded-md border border-gray-400 focus:ring-blue-700 focus:border-blue-700">
                <input
                  type="number"
                  id="NumberOfBathroom"
                  className="w-[50%] rounded-md focus:ring-0 dark:bg-gray-800 border-gray-300 dark:text-white border-0 py-2 px-2 dark:border-gray-200"
                  onChange={(e) => setNumberOfBathroom(e.target.value)}
                />
                <p className="mr-3 pl-3 border-l-2 font-semibold">
                  {numberOfBathroom > 1 ? "Bathrooms" : "Bathroom"}
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <label
                htmlFor="NumberOfBathroom"
                className=" absolute -top-5 text-sm font-semibold"
              >
                Number of Toilet <span className="text-red-600">*</span>
              </label>
              <div className="flex w-full items-center justify-between rounded-md border border-gray-400 focus:ring-blue-700 focus:border-blue-700">
                <input
                  type="number"
                  id="NumberOfToilet"
                  className="w-[50%] rounded-md focus:ring-0 dark:bg-gray-800 border-gray-300 dark:text-white border-0 py-2 px-2 dark:border-gray-200"
                  onChange={(e) => setNumberOfToilet(e.target.value)}
                />
                <p className="mr-3 pl-3 border-l-2 font-semibold">
                  {numberOfToilet > 1 ? "Toilets" : "Toilet"}
                </p>
              </div>
            </div>
          </div>
          {/* ======================================================================== */}
          {/* ======================================================================== */}

          <InputWithCheckBox
            name="NumberOfBalcony"
            title="Number of Balcony"
            type="text"
            required={true}
            value={numberOfBalcony}
            maxLength={2}
            onChange={(e) => setNumberOfBalcony(e.target.value)}
            plural="Balconies"
            singular="Balcony"
            CheckboxOnChange={() => setShareBalcony(!shareBalcony)}
            CheckboxTitle="Balcony sizes are not known"
          />
          <div className="relative w-[100%] mt-10 flex items-center flex-wrap">
            {shareBalcony !== true &&
              BalconySizes.map((x, i) => (
                <div className="flex items-center relative mr-3 mb-8 " key={i}>
                  <label
                    htmlFor={`Balcony${i}`}
                    className="absolute -top-5 text-sm font-semibold"
                  >{`Balcony Size ${i + 1} (m²)`}</label>
                  <input
                    key={i}
                    type="number"
                    value={BalconySize[i].value}
                    placeholder={`Area of Balcony ${i + 1}`}
                    onChange={(e) => (BalconySize[i] = e.target.value)}
                    className="rounded-md border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200 dark:bg-gray-800"
                  />
                </div>
              ))}
          </div>

          {/* ======================================================================== */}
          {/* ======================================================================== */}

          <InputWithCheckBox
            name="NumberOfTerrace"
            title="Number of Terrace"
            type="text"
            required={true}
            value={numberOfTerrace}
            maxLength={2}
            onChange={(e) => setNumberOfTerrace(e.target.value)}
            plural="Terraces"
            singular="Terrace"
            CheckboxOnChange={() => setShareTerrace(!shareTerrace)}
            CheckboxTitle="Terrace sizes are not known"
          />
          <div className="relative w-[100%] mt-10 flex items-center flex-wrap">
            {shareTerrace !== true &&
              TerraceSizes.map((x, i) => (
                <div className="flex items-center relative mr-3 mb-8 " key={i}>
                  <label
                    htmlFor={`Terrace${i}`}
                    className="absolute -top-5 text-sm font-semibold"
                  >{`Terrace Size ${i + 1} (m²)`}</label>
                  <input
                    key={i}
                    type="number"
                    value={TerraceSize[i].value}
                    placeholder={`Area of Terrace ${i + 1}`}
                    onChange={(e) => (TerraceSize[i] = e.target.value)}
                    className="rounded-md border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200 dark:bg-gray-800"
                  />
                </div>
              ))}
          </div>
          {/* ===================================================== */}

          <InputWithCheckBox
            name="NumberOfGarden"
            title="Number of Garden"
            type="text"
            required={true}
            value={numberOfGarden}
            maxLength={2}
            onChange={(e) => setNumberOfGarden(e.target.value)}
            plural="Gardens"
            singular="Garden"
            CheckboxOnChange={() => setShareGarden(!shareGarden)}
            CheckboxTitle="Garden sizes are not known"
          />
          <div className="relative  w-[100%] mt-10 flex items-center flex-wrap">
            {shareGarden !== true &&
              GardenSizes.map((x, i) => (
                <div className="flex items-center relative mr-3 mb-8 " key={i}>
                  <label
                    htmlFor={`Garden${i}`}
                    className="absolute -top-5 text-sm font-semibold"
                  >{`Garden Size ${i + 1} (m²)`}</label>
                  <input
                    key={i}
                    type="number"
                    value={GardenSize[i].value}
                    placeholder={`Area of Garden ${i + 1}`}
                    onChange={(e) => (GardenSize[i] = e.target.value)}
                    className="rounded-md border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200 dark:bg-gray-800"
                  />
                </div>
              ))}
          </div>
          {/* ===================================================== */}
          <InputWithCheckBox
            name="NumberOfStorage"
            title="Number of Storage Space"
            type="text"
            required={true}
            value={numberOfStorage}
            maxLength={2}
            onChange={(e) => setNumberOfStorage(e.target.value)}
            plural="Storages"
            singular="Storage"
            CheckboxOnChange={() => setShareStorage(!shareStorage)}
            CheckboxTitle="Storage sizes are not known"
          />

          <div className="relative w-[100%] mt-10 flex items-center flex-wrap">
            {shareStorage !== true &&
              StorageSizes.map((x, i) => (
                <div className="flex items-center relative mr-3 mb-8 " key={i}>
                  <label
                    htmlFor={`Storage${i}`}
                    className="absolute -top-5 text-sm font-semibold"
                  >{`Storage Size ${i + 1} (m²)`}</label>
                  <input
                    key={i}
                    type="number"
                    value={StorageSize[i].value}
                    placeholder={`Area of Storage ${i + 1}`}
                    onChange={(e) => (StorageSize[i] = e.target.value)}
                    className="rounded-md border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200 dark:bg-gray-800"
                  />
                </div>
              ))}
          </div>
          {/* ===================================================== */}
          <InputWithCheckBox
            name="NumberOfShed"
            title="Number of Shed"
            type="text"
            required={true}
            value={numberOfShed}
            maxLength={2}
            onChange={(e) => setNumberOfShed(e.target.value)}
            plural="Sheds"
            singular="Shed"
            CheckboxOnChange={() => setShareShed(!shareShed)}
            CheckboxTitle="Shed sizes are not known"
          />
          <div className="relative w-[100%] mt-10 flex items-center flex-wrap">
            {shareShed !== true &&
              ShedSizes.map((x, i) => (
                <div className="flex items-center relative mr-3 mb-8 " key={i}>
                  <label
                    htmlFor={`Shed${i}`}
                    className="absolute -top-5 text-sm font-semibold"
                  >{`Shed Size ${i + 1} (m²)`}</label>
                  <input
                    key={i}
                    type="number"
                    value={ShedSize[i].value}
                    placeholder={`Area of Shed ${i + 1}`}
                    onChange={(e) => (ShedSize[i] = e.target.value)}
                    className="rounded-md border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200 dark:bg-gray-800"
                  />
                </div>
              ))}
          </div>
          {/* ===================================================== */}
          <InputWithCheckBox
            name="NumberOfGarage"
            title="Number of Garage"
            type="text"
            required={true}
            value={numberOfGarage}
            maxLength={2}
            onChange={(e) => setNumberOfGarage(e.target.value)}
            plural="Garage"
            singular="Garage"
            CheckboxOnChange={() => setShareSGarage(!shareGarage)}
            CheckboxTitle="Garage sizes are not known"
          />
          <div className="relative w-[100%] mt-10 flex items-center flex-wrap">
            {shareGarage !== true &&
              GarageSizes.map((x, i) => (
                <div className="flex items-center relative mr-3 mb-8 " key={i}>
                  <label
                    htmlFor={`Garage${i}`}
                    className="absolute -top-5 text-sm font-semibold"
                  >{`Garage Size ${i + 1} (m²)`}</label>
                  <input
                    key={i}
                    type="number"
                    value={GarageSize[i].value}
                    placeholder={`Area of Garage ${i + 1}`}
                    onChange={(e) => (GarageSize[i] = e.target.value)}
                    className="rounded-md border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200 dark:bg-gray-800"
                  />
                </div>
              ))}
          </div>
          {/* ===================================================================================== */}

          <InsideLabelInput
            name="AtticSize"
            title="Area of Attic"
            required={false}
            type="text"
            maxLength={4}
            onChange={(e) => setAtticArea(e.target.value)}
            plural="m²"
            singular="m²"
            value={AtticArea}
          />
          {/* ===================================================================================== */}

          <InsideLabelInput
            name="HouseStorey"
            title="Number of House's Storey"
            required={false}
            type="text"
            maxLength={1}
            onChange={(e) => setHouseStorey(e.target.value)}
            plural="Stories"
            singular="Story"
            value={HouseStorey}
          />
          <AnimatedSelect
            isMulti={false}
            name="Furnished"
            title="Furnished"
            List={FurnishedList}
            onChange={setFurnished}
          />
        </div>
        {/* ============================================================================== */}
        {/* ============================================================================== */}
        {/* ============================================================================== */}
        <h1 className="text-xl font-semibold mt-16">Adress Details</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md">
          <div className="flex items-center justify-between flex-wrap">
            <div className="relative w-full md:w-[45%] lg:w-[25%] md:mr-5">
              <label
                htmlFor="province"
                className=" absolute -top-5 text-sm font-semibold"
              >
                Province <span className="text-red-600">*</span>
              </label>
              <select
                name="province"
                id="province"
                className="w-full dark:bg-gray-800 p-2 border border-gray-300 rounded-sm"
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
            </div>
            <div className="relative w-full md:w-[45%] lg:w-[30%] md:mr-5 mt-10 md:mt-0">
              <label
                htmlFor="Municipality"
                className=" absolute -top-5 text-sm font-semibold"
              >
                Municipality <span className="text-red-600">*</span>
              </label>
              <select
                name="Municipality"
                id="Municipality"
                className="w-full dark:bg-gray-800 p-2 border border-gray-300 rounded-sm"
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
            </div>
            <div className="relative w-full lg:w-[30%] mt-10 lg:mt-0">
              <label
                htmlFor="Town"
                className=" absolute -top-5 text-sm font-semibold"
              >
                Town (City) <span className="text-red-600">*</span>
              </label>
              <select
                name="Town"
                id="Town"
                className="w-full dark:bg-gray-800 p-2 border border-gray-300 rounded-sm"
                disabled={municipality === undefined || municipality === null}
                onChange={(e) => setNeighbourhood(e.target.value)}
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
            </div>
          </div>

          <InputComponent
            type="text"
            id="Street"
            Title="Street Name"
            value={Street}
            required={true}
            placeholder="Please enter the Street Name"
            onChange={(e) => setStreet(e.target.value)}
          />

          <MaskInputComponent
            Title="Postal Code"
            required={true}
            id="PostalCode"
            placeholder="Example: 1111 AA"
            value={PostalCode.toUpperCase()}
            mask="9999 aa"
            onChange={(e) => setPostalCode(e.target.value)}
          />

          <InputComponent
            Title="House Number"
            required={true}
            type="text"
            id="HouseNumber"
            placeholder="House Number"
            value={HouseNumber}
            maxLength={7}
            onChange={(e) => setHouseNumber(e.target.value)}
          />

          {HouseType.value === "Apartment" && (
            <div className="relative flex items-center w-[90%] gap-5 mt-12">
              <div className="relative w-[40%] ">
                <label
                  htmlFor="NumberOfApartmentFloor"
                  className=" absolute -top-5 text-sm font-semibold"
                >
                  Floor of the Apartment
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="NumberOfApartmentFloor"
                  className="w-[90%] rounded-md p-2 dark:bg-gray-800  border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200 "
                  value={ApartmentFloor}
                  maxLength={3}
                  onChange={(e) => setApartmentFloor(e.target.value)}
                />
              </div>
              <div className="relative w-[40%]">
                {" "}
                <label
                  htmlFor="NumberOfBuildingFloor"
                  className=" absolute -top-5 text-sm font-semibold"
                >
                  Total Storey Number of the Building
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="NumberOfBuildingFloor"
                  className="w-[90%] rounded-md p-2 dark:bg-gray-800  border-gray-300 dark:text-white border py-2 px-2 dark:border-gray-200 "
                  value={TotalApartmentFloor}
                  maxLength={3}
                  onChange={(e) => setTotalApartmentFloor(e.target.value)}
                />
              </div>
            </div>
          )}

          <MaskInputComponent
            Title="Latitude"
            required={true}
            id="Latitude"
            placeholder="Latitude"
            mask="99.99999"
            onChange={(e) => (Coordinate[0] = parseFloat(e.target.value))}
          />

          <MaskInputComponent
            Title="Longitude"
            required={true}
            id="Longitude"
            placeholder="Longitude"
            mask="9.99999"
            onChange={(e) => (Coordinate[1] = parseFloat(e.target.value))}
          />

          <InputComponent
            id="ConsructionYear"
            Title="Construction Year of the Building"
            required={false}
            placeholder="Construction Year"
            value={ConstructionYear}
            onChange={(e) => setConstructionYear(e.target.value)}
            type="text"
            maxLength={4}
          />
          {RentOrSale.value === "For Sale" && (
            <AnimatedSelect
              isMulti={false}
              name="TypeOfConstruction"
              title="Construction Type"
              List={SaleCondition}
              onChange={setConstructionType}
            />
          )}
          {RentOrSale.value === "For Sale" && (
            <AnimatedSelect
              isMulti={false}
              name="UserStatus"
              title="Using Status"
              List={UsingStatus}
              onChange={setUserStatus}
            />
          )}
          <div className="relative flex flex-col  w-[90%] gap-1 mt-12">
            <h1 className="text-sm font-semibold">Area description</h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Checkbox
                item="Quite neighbourhood"
                value="Quite neighbourhood"
                onChange={handleAreaDecription}
              />

              <Checkbox
                item="Quite road"
                value="Quite road"
                onChange={handleAreaDecription}
              />
              <Checkbox
                item="Child friendly"
                value="Child friendly"
                onChange={handleAreaDecription}
              />
              <Checkbox
                item="Disabled friendly"
                value="Disabled friendly"
                onChange={handleAreaDecription}
              />
              <Checkbox
                item="Elderly friendly"
                value="Elderly friendly"
                onChange={handleAreaDecription}
              />

              <Checkbox
                item="Pet friendly"
                value="Pet friendly"
                onChange={handleAreaDecription}
              />
            </div>
          </div>
        </div>
        {/* =========================================================================================== */}
        {/* =========================================================================================== */}
        {/* =========================================================================================== */}
        <h1 className="text-xl font-semibold mt-16">Energy</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md">
          <div className="relative w-[70%] mt-6">
            <label
              htmlFor="EnergyEfficiency"
              className=" absolute -top-5 text-sm font-semibold"
            >
              Energy Efficiency <span className="text-red-600">*</span>
            </label>
            <select
              name="EnergyEfficiency"
              id="EnergyEfficiency"
              className="w-[50%]  dark:bg-gray-800 p-2 border border-gray-300 rounded-sm"
              onChange={handleEnergyEfficiency}
            >
              <option defaultValue value="All" disabled={true}>
                Select Energy Level
              </option>
              <option value="A">A-level</option>
              <option value="B">B-level</option>
              <option value="C">C-level</option>
              <option value="D">D-level</option>
              <option value="E">E-level</option>
              <option value="F">F-level</option>
              <option value="G">G-level</option>
            </select>
          </div>

          <AnimatedSelect
            name="HeatingSystem"
            List={HeatingSystems}
            onChange={setHeatingSystemState}
            title="Heating System"
            isMulti={true}
          />
          <AnimatedSelect
            name="Insulation"
            List={Insulation}
            onChange={setInsulationSystemState}
            title="Insulation"
            isMulti={true}
          />
          <AnimatedSelect
            name="WaterHeater"
            List={WaterHeater}
            onChange={setWaterHeaterState}
            title="Water Heater"
            isMulti={true}
          />
          <AnimatedSelect
            name="KitchenStove"
            title="Kitchen Stove Supplier"
            List={KitchenStove}
            onChange={setKitchenStoveSystemState}
            isMulti={true}
          />
          <AnimatedSelect
            name="AirConditioner"
            title="Air Conditioner (A/C)"
            List={AirConditioner}
            onChange={setAirConditionerSystemState}
            isMulti={true}
          />
          <AnimatedSelect
            name="UnderfloorHeating"
            title="Underfloor Heating Type"
            List={UnderFloorHeating}
            onChange={setUnderfloorHeatingSystemState}
            isMulti={true}
          />
          <AnimatedSelect
            name="RenewableEnergy"
            title="Renewable Energy"
            List={RenewableEnergy}
            onChange={setRenewableEnergySystemState}
            isMulti={true}
          />
          <AnimatedSelect
            name="EVCharger"
            title="Electric Vehicle Charger"
            List={EVCharger}
            onChange={setEVChargerSystemState}
            isMulti={true}
          />
          <AnimatedSelect
            name="ElectricGenerator"
            title="Electric Generator"
            List={ElectricGenerator}
            onChange={setElectricGeneratorSystemState}
            isMulti={true}
          />
        </div>
        {/* ============================================================================== */}
        {/* ============================================================================== */}
        {/* ============================================================================== */}
        <h1 className="text-xl font-semibold mt-16">Pricing</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md">
          <InputComponent
            id="RealtorContribution"
            Title="Contribution of the Realtor"
            required={true}
            type="Number"
            placeholder="Contribution of the realtor"
            onChange={(e) => setRealtorContribution(e.target.value)}
          />
          {RentOrSale.value === "For Rent" && (
            <InputComponent
              id="Deposit"
              Title="Deposit"
              required={true}
              type="Number"
              placeholder="Deposit amount"
              onChange={(e) => setDeposit(e.target.value)}
            />
          )}
          <InputComponent
            id="Dues"
            Title="Dues"
            required={true}
            type="Number"
            placeholder="Monthly Dues"
            onChange={(e) => setDues(e.target.value)}
          />
          {RentOrSale.value === "For Rent" && (
            <div className="mt-12">
              <Checkbox
                item="Bills are included to rent"
                value="Bills are included to rent"
                onChange={(e) => setIncluded(e.target.checked)}
              />
            </div>
          )}
          <InputComponent
            id="ElectricBill"
            Title="Average Electric Bill"
            required={true}
            type="Number"
            placeholder="Average Electric Bill"
            onChange={(e) => setElectricBill(e.target.value)}
          />
          <InputComponent
            id="GasBill"
            Title="Average Gas Bill"
            required={true}
            type="Number"
            placeholder="Average Gas Bill"
            onChange={(e) => setGasBill(e.target.value)}
          />
          <InputComponent
            id="WaterBill"
            Title="Average Water Bill"
            required={true}
            type="Number"
            placeholder="Average Water Bill"
            onChange={(e) => setWaterBill(e.target.value)}
          />
        </div>

        <h1 className="text-xl font-semibold mt-16">Fecade</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <Checkbox item="West" value="West" onChange={handleFecade} />
          <Checkbox item="East" value="East" onChange={handleFecade} />
          <Checkbox item="North" value="North" onChange={handleFecade} />
          <Checkbox item="South" value="South" onChange={handleFecade} />
        </div>

        <h1 className="text-xl font-semibold mt-8">House Type</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <Checkbox
            item="Detached"
            value="Detached"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="Duplex"
            value="Duplex"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="SemiDetached"
            value="Semi Detached"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="RowHouse"
            value="Row House"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="ApartmentHouse"
            value="Apartment House"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="CanalHouse"
            value="Canal House"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="BoatHouse"
            value="Boat House"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="Mezzanine"
            value="Mezzanine"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="Penthouse"
            value="Penthouse"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="Villa"
            value="Villa"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="StudioApartment"
            value="Studio Apartment"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="Triplex"
            value="Triplex"
            onChange={handleFeatureHouseType}
          />
          <Checkbox
            item="Quadruplex"
            value="Quadruplex"
            onChange={handleFeatureHouseType}
          />
        </div>

        <h1 className="text-xl font-semibold mt-8">Transportation</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <Checkbox
            item="Airport"
            value="Airport"
            onChange={handleTransportation}
          />
          <Checkbox
            item="BusStop"
            value="Bus Stop"
            onChange={handleTransportation}
          />
          <Checkbox
            item="BicyclePath"
            value="Bicycle Path"
            onChange={handleTransportation}
          />
          <Checkbox
            item="CarSharing"
            value="Car Sharing"
            onChange={handleTransportation}
          />
          <Checkbox
            item="Ferry"
            value="Ferry Line"
            onChange={handleTransportation}
          />
          <Checkbox
            item="Highway"
            value="Highway"
            onChange={handleTransportation}
          />
          <Checkbox
            item="Metro"
            value="Metro"
            onChange={handleTransportation}
          />
          <Checkbox
            item="TrainStation"
            value="Train Station"
            onChange={handleTransportation}
          />
          <Checkbox
            item="Tram"
            value="Tram Line"
            onChange={handleTransportation}
          />
          <Checkbox
            item="SeaPort"
            value="Sea Port"
            onChange={handleTransportation}
          />
        </div>
        <h1 className="text-xl font-semibold mt-8">View</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <Checkbox item="CanalView" value="Canal" onChange={handleView} />
          <Checkbox item="PolderView" value="Polder" onChange={handleView} />
          <Checkbox
            item="WindmillView"
            value="Windmill"
            onChange={handleView}
          />
          <Checkbox item="SeaView" value="Sea" onChange={handleView} />
          <Checkbox item="LakeView" value="Lake" onChange={handleView} />
          <Checkbox item="ForestView" value="Forest" onChange={handleView} />
          <Checkbox item="ParkView" value="Park" onChange={handleView} />
          <Checkbox item="SquareView" value="Square" onChange={handleView} />
          <Checkbox item="NatureView" value="Nature" onChange={handleView} />
          <Checkbox
            item="HouseView"
            value="Other Houses"
            onChange={handleView}
          />
        </div>

        <h1 className="text-xl font-semibold mt-8">Nearby Locations</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Checkbox
            item="ShoppingMall"
            value="Shopping Mall"
            onChange={handleNearby}
          />
          <Checkbox
            item="BusinessDistrictNearby"
            value="Business District"
            onChange={handleNearby}
          />
          <Checkbox
            item="ShoppingStreet"
            value="Shopping Street"
            onChange={handleNearby}
          />
          <Checkbox
            item="MunicapilityBuilding"
            value="Municipality Building"
            onChange={handleNearby}
          />
          <Checkbox item="Church" value="Church" onChange={handleNearby} />
          <Checkbox item="Mosque" value="Mosque" onChange={handleNearby} />
          <Checkbox
            item="Synagogue"
            value="Synagogue"
            onChange={handleNearby}
          />
          <Checkbox item="Canal" value="Canal" onChange={handleNearby} />
          <Checkbox item="Hospital" value="Hospital" onChange={handleNearby} />
          <Checkbox
            onChange={handleNearby}
            item="FamilyPracticeCenter"
            value="Family Practice Center"
          />
          <Checkbox
            item="PoliceStation"
            value="Police Station"
            onChange={handleNearby}
          />
          <Checkbox
            item="Kindergarten"
            value="Kindergarten"
            onChange={handleNearby}
          />
          <Checkbox
            item="ElemantarySchool"
            value="Elementary School"
            onChange={handleNearby}
          />
          <Checkbox
            item="VMO"
            value="Preparatory Scientific Education (VMO)"
            onChange={handleNearby}
          />
          <Checkbox
            onChange={handleNearby}
            item="HAVO"
            value="Higher General Continued Education (HAVO)"
          />
          <Checkbox
            onChange={handleNearby}
            item="VMBO"
            value="Pre-vocational Secondary Education (WMBO)"
          />
          <Checkbox
            item="MBO"
            value="Middle-level Applied Education (MBO)"
            onChange={handleNearby}
          />
          <Checkbox item="HBO" value="Collage (HBO)" onChange={handleNearby} />
          <Checkbox
            item="WO"
            value="Research University (WO)"
            onChange={handleNearby}
          />
          <Checkbox
            item="Supermarket"
            value="Supermarket"
            onChange={handleNearby}
          />
          <Checkbox
            item="MarketPlace"
            value="Marketplace"
            onChange={handleNearby}
          />
          <Checkbox
            item="FoodMarket"
            value="Market Hall"
            onChange={handleNearby}
          />
          <Checkbox
            item="FitnessCenter"
            value="Fitness Center"
            onChange={handleNearby}
          />
          <Checkbox
            item="SwimmingPoolNearby"
            value="Public Swimming Pool"
            onChange={handleNearby}
          />
          <Checkbox
            item="FootballField"
            value="Football Field"
            onChange={handleNearby}
          />
          <Checkbox
            item="BasketballCourt"
            value="Basketball Court"
            onChange={handleNearby}
          />
          <Checkbox
            item="TennisCourt"
            value="Tennis Court"
            onChange={handleNearby}
          />
          <Checkbox item="IceRink" value="Ice Rink" onChange={handleNearby} />
          <Checkbox
            item="HorseRidingClub"
            value="Horse Riding Club"
            onChange={handleNearby}
          />
          <Checkbox
            item="SkatePark"
            value="Skate Park"
            onChange={handleNearby}
          />
          <Checkbox item="Museum" value="Museum" onChange={handleNearby} />
          <Checkbox item="Theatre" value="Theatre" onChange={handleNearby} />
          <Checkbox
            item="MovieTheatre"
            value="Movie Theatre"
            onChange={handleNearby}
          />
          <Checkbox
            item="ConcertArea"
            value="Concert Area"
            onChange={handleNearby}
          />
          <Checkbox
            item="ArtCenter"
            value="Art Center"
            onChange={handleNearby}
          />
          <Checkbox
            item="PublicLibrary"
            value="Public Library"
            onChange={handleNearby}
          />
          <Checkbox item="Cafes" value="Café" onChange={handleNearby} />
          <Checkbox
            item="Restaurants"
            value="Restaurant"
            onChange={handleNearby}
          />
          <Checkbox item="Bars" value="Bar" onChange={handleNearby} />
          <Checkbox
            item="Nightclubs"
            value="Nightclub"
            onChange={handleNearby}
          />
          <Checkbox item="Pubs" value="Pub" onChange={handleNearby} />
          <Checkbox
            item="Coffeeshops"
            value="Coffeeshop"
            onChange={handleNearby}
          />
          <Checkbox item="Parks" value="Park" onChange={handleNearby} />
        </div>
        <h1 className="text-xl font-semibold mt-8">
          Accessible For Handicapped
        </h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <Checkbox
            item="BathAccess"
            value="Bathroom"
            onChange={handleAccessible}
          />
          <Checkbox
            item="BrailAccess"
            value="Braille"
            onChange={handleAccessible}
          />
          <Checkbox
            item="DoorHandleAccess"
            value="Door Handles"
            onChange={handleAccessible}
          />
          <Checkbox
            item="ElevatorAccess"
            value="Elevator"
            onChange={handleAccessible}
          />
          <Checkbox
            item="EntranceAccess"
            value="Building Entrance"
            onChange={handleAccessible}
          />
          <Checkbox
            item="GardenAccess"
            value="Garden"
            onChange={handleAccessible}
          />
          <Checkbox
            item="HallwayAccess"
            value="Hallway"
            onChange={handleAccessible}
          />
          <Checkbox
            item="HandRailsAccess"
            value="Handrail"
            onChange={handleAccessible}
          />
          <Checkbox
            item="ParkingAccess"
            value="Parking Spot"
            onChange={handleAccessible}
          />
          <Checkbox
            item="PavementAccess"
            value="Pavement"
            onChange={handleAccessible}
          />
          <Checkbox
            item="PlugAccess"
            value="Plug-ins"
            onChange={handleAccessible}
          />
          <Checkbox
            item="RampAccess"
            value="Ramp"
            onChange={handleAccessible}
          />
          <Checkbox
            item="KitchenAccess"
            value="Kitchen"
            onChange={handleAccessible}
          />
          <Checkbox
            item="PoolAccess"
            value="Swimming Pool"
            onChange={handleAccessible}
          />
          <Checkbox
            item="SwitchAccess"
            value="Light Switch"
            onChange={handleAccessible}
          />
        </div>
        {/* ================================ IMAGES ========================================= */}
        {/* ================================ IMAGES ========================================= */}
        {/* ================================ IMAGES ========================================= */}
        <h1 className="text-xl font-semibold mt-8">Images</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md ">
          <ImageUploading
            multiple
            value={images}
            onChange={handleImage}
            maxNumber={150}
            acceptType={["jpg", "jpeg", "png"]}
            dataURLKey="data_url"
            className="w-full h-full"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper w-full ">
                <div className="flex justify-between items-center">
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                    className=" border-dashed border-2 px-4 py-2 text-blue-800 font-semibold"
                  >
                    Click or Drop here
                  </button>

                  <button
                    onClick={onImageRemoveAll}
                    className="border border-red-500 text-red-500 rounded-sm px-2 py-1 hover:bg-red-500 hover:text-white"
                  >
                    Remove all images
                  </button>
                </div>

                <div className="flex flex-wrap justify-evenly gap-5 w-full h-full mt-12">
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className="image-item w-64 mt-4 border-2 border-blue-300 px-2 py-1"
                    >
                      <img
                        src={image["data_url"]}
                        alt=""
                        className="w-full h-40"
                        layout="cover"
                      />
                      <div className="image-item__btn-wrapper flex justify-evenly mt-1 gap-x-3">
                        <button
                          onClick={() => onImageUpdate(index)}
                          className="px-2 py-1 border text-blue-800 font-semibold border-blue-400 rounded-md hover:text-white hover:bg-blue-500"
                        >
                          Change
                        </button>
                        <button
                          onClick={() => onImageRemove(index)}
                          className="px-2 py-1 border text-red-800 font-semibold border-red-400 rounded-md hover:text-white hover:bg-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ImageUploading>
        </div>
        {/* ================================ VIDEO ========================================= */}
        {/* ================================ VIDEO ========================================= */}
        {/* ================================ VIDEO ========================================= */}
        <h1 className="text-xl font-semibold mt-8">Videos</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md ">
          <div className="container">
            <div
              {...getRootProps()}
              className="border-2 border-dashed p-5 items-center justify-center text-center font-semibold text-blue-700"
            >
              <input {...getInputProps()} />
              <p>Drag and drop video file here, or click to select files</p>
            </div>
            {videos.map((video) => (
              <div className="relative mt-3">
                <video className="w-full" controls>
                  <source src={video} type="video/mp4" />
                </video>
                <button
                  onClick={() => setVideos([])}
                  className="absolute top-0 right-2 text-gray-400 hover:text-white"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================== Realtor ============================= */}
        {/* ==================================== Realtor ============================= */}
        {/* ==================================== Realtor ============================= */}
        <h1 className="text-xl font-semibold mt-8">Poster Details</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md ">
          <InputComponent
            id="RealtorName"
            Title="Ad Poster Name or Company Name"
            placeholder="Name"
            value={RealtorName}
            type="text"
            onChange={(e) => setRealtorName(e.target.value)}
            required={true}
          />
          <MaskInputComponent
            id="RealtorPhone"
            Title="Phone Number"
            required={false}
            placeholder="Phone Number"
            value={RealtorPhone}
            onChange={(e) => {
              setRealtorPhone(e.target.value);
            }}
            mask="+31(999)-999-9999"
          />
          <InputComponent
            id="RealtorMail"
            Title="Ad Poster E-mail"
            placeholder="Name"
            value={RealtorEmail}
            type="email"
            onChange={(e) => setRealtorEmail(e.target.value)}
            required={true}
          />
          <div className=" w-full md:flex md:items-center md:gap-x-5 ">
            <AnimatedSelect
              isMulti={false}
              name="OpenningHour"
              title="Contact After"
              List={OpenningHour}
              onChange={setRealtorOpenningHour}
            />
            <AnimatedSelect
              isMulti={false}
              name="ClosingHour"
              title="Contact Before"
              List={ClosingHour}
              onChange={setRealtorClosingHour}
            />
          </div>
          <div className=" w-full md:flex md:items-center md:gap-x-5 ">
            <AnimatedSelect
              isMulti={false}
              name="OpenningDay"
              title="Opening Day"
              List={OpenningDay}
              onChange={setRealtorOpenningDay}
            />
            <AnimatedSelect
              isMulti={false}
              name="ClosingDay"
              title="Closing Day"
              List={ClosingDay}
              onChange={setRealtorClosingDay}
            />
          </div>
          <div className="flex flex-col relative mt-12">
            <label
              htmlFor="logo"
              className=" absolute -top-5 text-sm font-semibold"
            >
              Logo or Photo
              <span className="text-red-600"> *</span>
            </label>
            <ImageUploading
              multiple={false}
              value={RealtorImage}
              onChange={handleRealtorImage}
              maxNumber={1}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  {RealtorImage.length === 0 && (
                    <button
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                      className=" mt-3 border-dashed border-2 px-4 py-2 text-blue-800  font-semibold"
                    >
                      Click or Drop here
                    </button>
                  )}

                  {imageList.map((image, index) => (
                    <div key={index} className="image-item ">
                      <div className="relative w-[150px]">
                        <img
                          src={image["data_url"]}
                          alt=""
                          className="border-gray-400 border-2 w-[150px] h-[150px] object-cover"
                        />
                        <button
                          onClick={() => onImageRemove(index)}
                          className="absolute top-0 right-1 text-gray-400 hover:text-black z-1"
                        >
                          X
                        </button>
                      </div>
                      <div className="image-item__btn-wrapper">
                        <button
                          onClick={() => onImageUpdate(index)}
                          className="w-[150px] mt-1 px-2 py-1 border text-blue-800 font-semibold border-blue-400 rounded-md hover:text-white hover:bg-blue-500"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
        </div>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RealEstateForm;
