import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { LanguageState } from "../../atoms/states";
const AllFeatures = (props) => {
  const [language, setLanguage] = useRecoilState(LanguageState);
  const Fecade = [
    {
      prop: props.west,
      value: { English: "West", Turkish: "Batı", Nederlands: "West" },
    },
    {
      prop: props.east,
      value: { English: "East", Turkish: "Doğu", Nederlands: "Oost" },
    },
    {
      prop: props.north,
      value: { English: "North", Turkish: "Kuzey", Nederlands: "Noorden" },
    },
    {
      prop: props.south,
      value: { English: "South", Turkish: "Güney", Nederlands: "Zuiden" },
    },
  ];
  const InteriorFeature = [
    {
      prop: props.AirConditioning,
      value: {
        English: "Air Conditioning",
        Turkish: "Klima",
        Nederlands: "Airconditioning",
      },
    },
    {
      prop: props.FireAlarm,
      value: {
        English: "Fire Alarm",
        Turkish: "Yangın Alarmı",
        Nederlands: "Brandalarm",
      },
    },
    {
      prop: props.TheftAlarm,
      value: {
        English: "Security Alarm",
        Turkish: "Güvenlik Alarmı",
        Nederlands: "Beveiligings Alarm",
      },
    },
    {
      prop: props.AluminiumWork,
      value: {
        English: "Aluminium Joinery",
        Turkish: "Alüminyum Doğrama",
        Nederlands: "Aluminium Schrijnwerk",
      },
    },
  ];

  const HouseType = [
    {
      prop: props.Detached,
      value: {
        English: "Detached-house",
        Turkish: "Müstakil Ev",
        Nederlands: "Vrijstaand ",
      },
    },
    {
      prop: props.Duplex,
      value: {
        English: "Duplex Apartment",
        Turkish: "Dublex Daire",
        Nederlands: "Duplex Appartement",
      },
    },
    {
      prop: props.SemiDetached,
      value: {
        English: "Semi-detached house",
        Turkish: "Yarı-müstakil Ev",
        Nederlands: "Halfvrijstaande Woning",
      },
    },
    {
      prop: props.RowHouse,
      value: {
        English: "Row House",
        Turkish: "Sıra ev",
        Nederlands: "Rijtjes-woning",
      },
    },
    {
      prop: props.ApartmentHouse,
      value: {
        English: "Apartment",
        Turkish: "Daire",
        Nederlands: "Appartement",
      },
    },
    {
      prop: props.CanalHouse,
      value: {
        English: "Canal House",
        Turkish: "Kanal Evi",
        Nederlands: "Grachtenpand",
      },
    },
    {
      prop: props.BoatHouse,
      value: {
        English: "Boat House",
        Turkish: "Kayık Evi",
        Nederlands: "Boothuis",
      },
    },
    {
      prop: props.Mezzanine,
      value: {
        English: "Mezzanine Apartment",
        Turkish: "Asma Katlı Daire",
        Nederlands: "Tussenverdieping ",
      },
    },
    {
      prop: props.Penthouse,
      value: {
        English: "Penthouse Apartment",
        Turkish: "Çatı Katı Dairesi",
        Nederlands: "Penthouse Appartement",
      },
    },
    {
      prop: props.Villa,
      value: {
        English: "Villa",
        Turkish: "Villa",
        Nederlands: "Villa",
      },
    },
    {
      prop: props.StudioApartment,
      value: {
        English: "Studio Apartment",
        Turkish: "Stüdyo Daire (1 + 0)",
        Nederlands: "Studio Appartement",
      },
    },
    {
      prop: props.Triplex,
      value: {
        English: "Triplex Apartment",
        Turkish: "Tripleks Daire",
        Nederlands: "Triplex Appartement",
      },
    },
    {
      prop: props.Quadruplex,
      value: {
        English: "Quadruplex Apartment",
        Turkish: "4 Katlı Daire",
        Nederlands: "Quadruplex Appartement",
      },
    },
  ];
  const Transportation = [
    {
      prop: props.Airport,
      value: {
        English: "Airport",
        Turkish: "Havaalanı",
        Nederlands: "Luchthaven",
      },
    },
    {
      prop: props.BusStop,
      value: {
        English: "Bus Stop",
        Turkish: "Otobüs Durağı",
        Nederlands: "Bushalte",
      },
    },
    {
      prop: props.BicyclePath,
      value: {
        English: "Bicycle Path",
        Turkish: "Bisiklet Yolu",
        Nederlands: "Fietspad",
      },
    },
    {
      prop: props.CarSharing,
      value: {
        English: "Car Sharing",
        Turkish: "Paylaşımlı Araba",
        Nederlands: "Car Poolen",
      },
    },
    {
      prop: props.Ferry,
      value: {
        English: "Ferry Line",
        Turkish: "Feribot Hattı",
        Nederlands: "Veerboot ",
      },
    },
    {
      prop: props.Highway,
      value: {
        English: "Highway",
        Turkish: "Otoban",
        Nederlands: "Snelweg",
      },
    },
    {
      prop: props.Metro,
      value: {
        English: "Metro",
        Turkish: "Metro",
        Nederlands: "Metro",
      },
    },
    {
      prop: props.TrainStation,
      value: {
        English: "Train Station",
        Turkish: "Tren İstasyonu",
        Nederlands: "Treinstation",
      },
    },
    {
      prop: props.Tram,
      value: {
        English: "Tram Line",
        Turkish: "Tramvay Hattı",
        Nederlands: "Tram-halte",
      },
    },
    {
      prop: props.SeaPort,
      value: {
        English: "Sea Port",
        Turkish: "Deniz Limanı",
        Nederlands: "Zeehaven",
      },
    },
  ];

  const View = [
    {
      prop: props.CanalView,
      value: {
        English: "Canal",
        Turkish: "Su Kanalı",
        Nederlands: "Kanaal",
      },
    },
    {
      prop: props.PolderView,
      value: {
        English: "Polder",
        Turkish: "Denizden Kazanılan Toprak",
        Nederlands: "Polder",
      },
    },

    {
      prop: props.WindmillView,
      value: {
        English: "Windmill",
        Turkish: "Yel Değirmeni",
        Nederlands: "Windmollen",
      },
    },
    {
      prop: props.SeaView,
      value: {
        English: "Sea",
        Turkish: "Deniz",
        Nederlands: "Zee",
      },
    },
    {
      prop: props.LakeView,
      value: {
        English: "Lake",
        Turkish: "Göl",
        Nederlands: "Meerzicht",
      },
    },
    {
      prop: props.ForestView,
      value: {
        English: "Forest",
        Turkish: "Orman",
        Nederlands: "Bos",
      },
    },
    {
      prop: props.ParkView,
      value: {
        English: "Park",
        Turkish: "Park",
        Nederlands: "Park",
      },
    },
    {
      prop: props.SquareView,
      value: {
        English: "Square",
        Turkish: "Meydan",
        Nederlands: "Plein",
      },
    },
    {
      prop: props.NatureView,
      value: {
        English: "Nature",
        Turkish: "Doğa",
        Nederlands: "Natuur",
      },
    },
    {
      prop: props.HouseView,
      value: {
        English: "Other Houses",
        Turkish: "Diğer Evler",
        Nederlands: "Ander Woningen",
      },
    },
  ];

  const NearbyLocation = [
    {
      prop: props.ShoppingMall,
      value: {
        English: "Shopping Mall",
        Turkish: "Alışveriş Merkezi",
        Nederlands: "Winkelcentrum",
      },
    },
    {
      prop: props.BusinessDistrictNearby,
      value: {
        English: "Business District",
        Turkish: "İş Merkezi",
        Nederlands: "Zakenwijk",
      },
    },
    {
      prop: props.ShoppingStreet,
      value: {
        English: "Shopping Street",
        Turkish: "Çarşı",
        Nederlands: "Winkelstraten",
      },
    },
    {
      prop: props.MunicapilityBuilding,
      value: {
        English: "Municipality Building",
        Turkish: "Belediye Binası",
        Nederlands: "Gemeentebestuur",
      },
    },
    {
      prop: props.Church,
      value: {
        English: "Church",
        Turkish: "Kilise",
        Nederlands: "Kerk",
      },
    },
    {
      prop: props.Mosque,
      value: {
        English: "Mosque",
        Turkish: "Camii",
        Nederlands: "Moskee",
      },
    },
    {
      prop: props.Synagogue,
      value: {
        English: "Synagogue",
        Turkish: "Sinagog",
        Nederlands: "Synagoge",
      },
    },
    {
      prop: props.Canal,
      value: {
        English: "Canal",
        Turkish: "Su Kanalı",
        Nederlands: "Kanaal",
      },
    },
    {
      prop: props.Hospital,
      value: {
        English: "Hospital",
        Turkish: "Hastane",
        Nederlands: "Ziekenhuis",
      },
    },
    {
      prop: props.FamilyPracticeCenter,
      value: {
        English: "Family Practice Center",
        Turkish: "Aile Sağlığı Merkezi",
        Nederlands: "Huisartsenpraktijk",
      },
    },
    {
      prop: props.PoliceStation,
      value: {
        English: "Police Station",
        Turkish: "Polis Karakolu",
        Nederlands: "Politiebureau",
      },
    },
    {
      prop: props.Kindergarten,
      value: {
        English: "Kindergarten",
        Turkish: "Ana Okulu",
        Nederlands: "Lleuterschool",
      },
    },
    {
      prop: props.ElemantarySchool,
      value: {
        English: "Elementary School",
        Turkish: "İlkokul ",
        Nederlands: "Basisschool",
      },
    },
    {
      prop: props.VMO,
      value: {
        English: "Preparatory Scientific Education (VMO)",
        Turkish: "VMO Lisesi",
        Nederlands: "VMO",
      },
    },
    {
      prop: props.HAVO,
      value: {
        English: "Higher General Continued Education (HAVO)",
        Turkish: "HAVO Lisesi",
        Nederlands: "HAVO",
      },
    },
    {
      prop: props.VMBO,
      value: {
        English: "Pre-vocational Secondary Education (WMBO)",
        Turkish: "VMBO Lisesi (Teknik)",
        Nederlands: "WMBO",
      },
    },
    {
      prop: props.MBO,
      value: {
        English: "Middle-level Applied Education (MBO)",
        Turkish: "Yükseköğretim (MBO)",
        Nederlands: "MBO",
      },
    },
    {
      prop: props.HBO,
      value: {
        English: "Collage (HBO)",
        Turkish: "Üniversite (HBO)",
        Nederlands: "HBO",
      },
    },
    {
      prop: props.WO,
      value: {
        English: "Research University (WO)",
        Turkish: "Araştırma Universitesi (WO)",
        Nederlands: "WO",
      },
    },
    {
      prop: props.Supermarket,
      value: {
        English: "Supermarket",
        Turkish: "Süper Market",
        Nederlands: "Supermarkt",
      },
    },
    {
      prop: props.MarketPlace,
      value: {
        English: "Marketplace",
        Turkish: "Pazar",
        Nederlands: "Marktplaats",
      },
    },
    {
      prop: props.FoodMarket,
      value: {
        English: "Market Hall",
        Turkish: "Yemek Marketi",
        Nederlands: "Markthal",
      },
    },
    {
      prop: props.FitnessCenter,
      value: {
        English: "Fitness Center",
        Turkish: "Fitness Salonu",
        Nederlands: "Fitnesscentrum",
      },
    },
    {
      prop: props.SwimmingPoolNearby,
      value: {
        English: "Public Swimming Pool",
        Turkish: "Halka Açık Yüzme Havuzu",
        Nederlands: "Zwembad",
      },
    },
    {
      prop: props.FootballField,
      value: {
        English: "Football Field",
        Turkish: "Futbol Sahası",
        Nederlands: "Voetbalveld",
      },
    },
    {
      prop: props.BasketballCourt,
      value: {
        English: "Basketball Court",
        Turkish: "Basketbol Sahası",
        Nederlands: "Basketbalveld",
      },
    },
    {
      prop: props.TennisCourt,
      value: {
        English: "Tennis Court",
        Turkish: "Tenis Kortu",
        Nederlands: "Tennisbaan",
      },
    },
    {
      prop: props.IceRink,
      value: {
        English: "Ice Rink",
        Turkish: "Buz Pateni Pisti",
        Nederlands: "Ijsbaan",
      },
    },
    {
      prop: props.HorseRidingClub,
      value: {
        English: "Horse Riding Club",
        Turkish: "Binicilik Kulübü ",
        Nederlands: "Paardrijden",
      },
    },
    {
      prop: props.SkatePark,
      value: {
        English: "Skate Park",
        Turkish: "Kaykay Alanı",
        Nederlands: "Skatepark",
      },
    },
    {
      prop: props.Museum,
      value: {
        English: "Museum",
        Turkish: "Müze",
        Nederlands: "Museum",
      },
    },
    {
      prop: props.Theatre,
      value: {
        English: "Theatre",
        Turkish: "Tiyatro",
        Nederlands: "Theater",
      },
    },
    {
      prop: props.MovieTheatre,
      value: {
        English: "Movie Theatre",
        Turkish: "Sinema",
        Nederlands: "Filmzalen",
      },
    },
    {
      prop: props.ConcertArea,
      value: {
        English: "Concert Area",
        Turkish: "Konser Alanı",
        Nederlands: "Concertzaal",
      },
    },
    {
      prop: props.ArtCenter,
      value: {
        English: "Art Center",
        Turkish: "Sanat Merkezi",
        Nederlands: "Kunstcentrum",
      },
    },
    {
      prop: props.PublicLibrary,
      value: {
        English: "Public Library",
        Turkish: "Kütüphane",
        Nederlands: "Bibliotheek",
      },
    },
    {
      prop: props.Cafes,
      value: {
        English: "Café",
        Turkish: "Kafe",
        Nederlands: "Café",
      },
    },
    {
      prop: props.Restaurants,
      value: {
        English: "Restaurant",
        Turkish: "Restoran",
        Nederlands: "Restaurant",
      },
    },
    {
      prop: props.Bars,
      value: {
        English: "Bar",
        Turkish: "Bar",
        Nederlands: "Bar",
      },
    },
    {
      prop: props.Nightclubs,
      value: {
        English: "Nightclub",
        Turkish: "Gece Kulübü",
        Nederlands: "Nachtclub",
      },
    },
    {
      prop: props.Pubs,
      value: {
        English: "Pub",
        Turkish: "Pub",
        Nederlands: "Pub",
      },
    },
    {
      prop: props.Coffeeshops,
      value: {
        English: "Coffeeshop",
        Turkish: "Coffeeshop",
        Nederlands: "Coffeeshop",
      },
    },
    {
      prop: props.Parks,
      value: {
        English: "Park",
        Turkish: "Park",
        Nederlands: "Park",
      },
    },
  ];

  const Accessability = [
    {
      prop: props.BathAccess,
      value: { English: "Bathroom", Turkish: "Banyo", Nederlands: "Badkamer" },
    },
    {
      prop: props.BrailAccess,
      value: {
        English: "Braille",
        Turkish: "Braille Alfabesi",
        Nederlands: "Braille",
      },
    },
    {
      prop: props.DoorHandleAccess,
      value: {
        English: "Door Handles",
        Turkish: "Kapı Kolları",
        Nederlands: "Deurkrukken",
      },
    },
    {
      prop: props.ElevatorAccess,
      value: { English: "Elevator", Turkish: "Asansör", Nederlands: "Lift" },
    },
    {
      prop: props.EntranceAccess,
      value: {
        English: "Building Entrance",
        Turkish: "Bina Girişi",
        Nederlands: "Entreegebouw",
      },
    },
    {
      prop: props.GardenAccess,
      value: { English: "Garden", Turkish: "Bahçe", Nederlands: "Tuin" },
    },
    {
      prop: props.HallwayAccess,
      value: { English: "Hallway", Turkish: "Koridor", Nederlands: "Gang" },
    },
    {
      prop: props.HandRailsAccess,
      value: {
        English: "Handrail",
        Turkish: "Merdiven Korkuluğu",
        Nederlands: "Leuning",
      },
    },
    {
      prop: props.ParkingAccess,
      value: {
        English: "Parking Spot",
        Turkish: "Park Yeri",
        Nederlands: "Parkeerplekken",
      },
    },
    {
      prop: props.PavementAccess,
      value: { English: "Pavement", Turkish: "Kaldırım", Nederlands: "Stoep" },
    },
    {
      prop: props.PlugAccess,
      value: {
        English: "Plug-ins",
        Turkish: "Prizler",
        Nederlands: "Plug-ins",
      },
    },
    {
      prop: props.RampAccess,
      value: { English: "Ramp", Turkish: "Rampa", Nederlands: "Helling" },
    },
    {
      prop: props.KitchenAccess,
      value: { English: "Kitchen", Turkish: "Mutfak", Nederlands: "Keuken" },
    },
    {
      prop: props.PoolAccess,
      value: {
        English: "Swimming Pool",
        Turkish: "Yüzme Havuzu",
        Nederlands: "Zwembad",
      },
    },
    {
      prop: props.SwitchAccess,
      value: {
        English: "Light Switch",
        Turkish: "Aydınlatma Anahtarı",
        Nederlands: "Lichtschakelaar",
      },
    },
  ];

  return (
    <div className="w-full my-10 pb-10">
      <div className="w-full dark:bg-gray-900  bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left dark:text-white text-blue-900 dark:bg-gray-700 bg-blue-100 rounded-sm dark:hover:bg-gray-800 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Post Description</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180 " : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm dark:bg-gray-800 dark:text-white text-gray-800">
                {props.description}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left dark:text-white text-blue-900 dark:bg-gray-700 bg-blue-100 rounded-sm dark:hover:bg-gray-800 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>
                  Fecade{" "}
                  {`(${
                    Fecade.filter(function (trueItem) {
                      return trueItem.prop;
                    }).length > 1
                      ? Fecade.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Features"
                      : Fecade.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Feature"
                  } / ${Object.keys(Fecade).length} *)`}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm grid items-center justify-between justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 dark:bg-gray-800">
                {Fecade.map((item) => (
                  <span
                    key={`${item.value}`}
                    className={`${
                      item.prop === true
                        ? "text-blue-700 dark:text-white font-semibold"
                        : "text-gray-400 dark:text-gray-400 line-through "
                    }`}
                  >
                    {" "}
                    {`${
                      language === "Nederlands"
                        ? item.value.Nederlands
                        : language === "English"
                        ? item.value.English
                        : item.value.Turkish
                    }`}{" "}
                  </span>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left dark:text-white text-blue-900 dark:bg-gray-700 bg-blue-100 rounded-sm dark:hover:bg-gray-800 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>
                  Interior Features{" "}
                  {`(${
                    InteriorFeature.filter(function (trueItem) {
                      return trueItem.prop;
                    }).length > 1
                      ? InteriorFeature.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Features"
                      : InteriorFeature.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Feature"
                  } / ${Object.keys(InteriorFeature).length} *)`}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm grid items-center justify-between justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 dark:bg-gray-800">
                {InteriorFeature.map((item) => (
                  <span
                    key={`${item.value}`}
                    className={`${
                      item.prop === true
                        ? "text-blue-700 dark:text-white font-semibold"
                        : "text-gray-400 dark:text-gray-400 line-through "
                    }`}
                  >
                    {" "}
                    {`${
                      language === "Nederlands"
                        ? item.value.Nederlands
                        : language === "English"
                        ? item.value.English
                        : item.value.Turkish
                    }`}{" "}
                  </span>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left dark:text-white text-blue-900 dark:bg-gray-700 bg-blue-100 rounded-sm dark:hover:bg-gray-800 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>
                  House Type{" "}
                  {`(${
                    HouseType.filter(function (trueItem) {
                      return trueItem.prop;
                    }).length > 1
                      ? HouseType.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Features"
                      : HouseType.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Feature"
                  } / ${Object.keys(HouseType).length} *)`}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm grid items-center justify-between justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 dark:bg-gray-800">
                {HouseType.map((item) => (
                  <span
                    key={`${item.value}`}
                    className={`${
                      item.prop === true
                        ? "text-blue-700 dark:text-white font-semibold"
                        : "text-gray-400 dark:text-gray-400 line-through "
                    }`}
                  >
                    {" "}
                    {`${
                      language === "Nederlands"
                        ? item.value.Nederlands
                        : language === "English"
                        ? item.value.English
                        : item.value.Turkish
                    }`}{" "}
                  </span>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left dark:text-white text-blue-900 dark:bg-gray-700 bg-blue-100 rounded-sm dark:hover:bg-gray-800 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>
                  Transportation{" "}
                  {`(${
                    Transportation.filter(function (trueItem) {
                      return trueItem.prop;
                    }).length > 1
                      ? Transportation.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Features"
                      : Transportation.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Feature"
                  }  / ${Object.keys(Transportation).length} *)`}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm grid items-center justify-between justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 dark:bg-gray-800">
                {Transportation.map((item) => (
                  <span
                    key={`${item.value}`}
                    className={`${
                      item.prop === true
                        ? "text-blue-700 dark:text-white font-semibold"
                        : "text-gray-400 dark:text-gray-400 line-through "
                    }`}
                  >
                    {" "}
                    {`${
                      language === "Nederlands"
                        ? item.value.Nederlands
                        : language === "English"
                        ? item.value.English
                        : item.value.Turkish
                    }`}{" "}
                  </span>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left dark:text-white text-blue-900 dark:bg-gray-700 bg-blue-100 rounded-sm dark:hover:bg-gray-800 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>
                  View{" "}
                  {`(${
                    View.filter(function (trueItem) {
                      return trueItem.prop;
                    }).length > 1
                      ? View.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Features"
                      : View.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Feature"
                  } / ${Object.keys(View).length} *)`}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm grid items-center justify-between justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 dark:bg-gray-800">
                {View.map((item) => (
                  <span
                    key={`${item.value}`}
                    className={`${
                      item.prop === true
                        ? "text-blue-700 dark:text-white font-semibold"
                        : "text-gray-400 dark:text-gray-400 line-through "
                    }`}
                  >
                    {" "}
                    {`${
                      language === "Nederlands"
                        ? item.value.Nederlands
                        : language === "English"
                        ? item.value.English
                        : item.value.Turkish
                    }`}{" "}
                  </span>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left dark:text-white text-blue-900 dark:bg-gray-700 bg-blue-100 rounded-sm dark:hover:bg-gray-800 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>
                  Nearby Locations{" "}
                  {`(${
                    NearbyLocation.filter(function (trueItem) {
                      return trueItem.prop;
                    }).length > 1
                      ? NearbyLocation.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Features"
                      : NearbyLocation.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Feature"
                  }  / ${Object.keys(NearbyLocation).length} *)`}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm grid items-center justify-between justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 dark:bg-gray-800">
                {NearbyLocation.map((item) => (
                  <span
                    key={`${item.value}`}
                    className={`${
                      item.prop === true
                        ? "text-blue-700 dark:text-white font-semibold"
                        : "text-gray-400 dark:text-gray-400 line-through "
                    }`}
                  >
                    {" "}
                    {`${
                      language === "Nederlands"
                        ? item.value.Nederlands
                        : language === "English"
                        ? item.value.English
                        : item.value.Turkish
                    }`}{" "}
                  </span>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left dark:text-white text-blue-900 dark:bg-gray-700 bg-blue-100 rounded-sm dark:hover:bg-gray-800 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>
                  Accessible For Handicapped{" "}
                  {`(${
                    Accessability.filter(function (trueItem) {
                      return trueItem.prop;
                    }).length > 1
                      ? Accessability.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Features"
                      : Accessability.filter(function (trueItem) {
                          return trueItem.prop;
                        }).length + " Feature"
                  }  / ${Object.keys(Accessability).length} *)`}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm grid items-center justify-between justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 dark:bg-gray-800">
                {Accessability.map((item) => (
                  <span
                    key={`${item.value}`}
                    className={`${
                      item.prop === true
                        ? "text-blue-700 dark:text-white font-semibold"
                        : "text-gray-400 dark:text-gray-400 line-through "
                    }`}
                  >
                    {" "}
                    {`${
                      language === "Nederlands"
                        ? item.value.Nederlands
                        : language === "English"
                        ? item.value.English
                        : item.value.Turkish
                    }`}{" "}
                  </span>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default AllFeatures;
