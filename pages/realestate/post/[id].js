import {
  doc,
  getDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from "@firebase/firestore";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "@heroicons/react/outline";
import ReactHtmlParser from "react-html-parser";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { LanguageState } from "../../../atoms/states";

import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import AllFeatures from "../../../Components/RealEstateAd/AllFeatures";
import InfoParagraph from "../../../Components/RealEstateAd/InfoParagraph";
import InfoTable from "../../../Components/RealEstateAd/InfoTable";
import PhotoAlbum from "../../../Components/RealEstateAd/PhotoAlbum";
import RealtorBox from "../../../Components/RealEstateAd/RealtorBox";

import { db } from "../../../firebase";

const Post = ({ houseProps }) => {
  const house = JSON.parse(houseProps);
  const router = useRouter();
  const { id } = router.query;
  const images = [...house.ImageArray];
  const [realtor, setRealtor] = useState([]);
  const [language, setLanguage] = useRecoilState(LanguageState);

  const [bigPhoto, setBigPhoto] = useState(false);
  //==================================================== YOUTUBE ==========================================
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);
  const [transL, setTransL] = useState(false);
  const [transR, setTransR] = useState(false);

  useEffect(() => {
    if (transR) {
      setTimeout(() => {
        setTransR(false);
      }, 450);
    }
    if (transL) {
      setTimeout(() => {
        setTransL(false);
        setIndex((index + 1) % images.length);
        setIndex1((index1 + 1) % images.length);
      }, 450);
    }
  }, [transL, transR]);

  const handlePrevious = () => {
    setTransL(false);
    setTransR(true);
    const nextIndex = index - 1;
    const nextIndex1 = index1 - 1;

    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }

    if (nextIndex1 < 0) {
      setIndex1(images.length - 1);
    } else {
      setIndex1(nextIndex1);
    }
  };
  const handleNext = () => {
    setTransL(true);
    setTransR(false);
  };
  //==================================================== YOUTUBE ==========================================

  const PostWeekday = Date(house.PostingDate).slice(0, 3); //POSTING DATE
  const PostDay = Date(house.PostingDate).slice(8, 10);
  const PostMonth = Date(house.PostingDate).slice(4, 7);
  const PostYear = Date(house.PostingDate).slice(11, 15);
  const PostDate =
    PostWeekday + ", " + PostDay + " " + PostMonth + " " + PostYear;

  const weekday = Date(house.UpdateDate).slice(0, 3); //UPDATE DATE
  const day = Date(house.UpdateDate).slice(8, 10);
  const month = Date(house.UpdateDate).slice(4, 7);
  const year = Date(house.UpdateDate).slice(11, 15);
  const date = weekday + ", " + day + " " + month + " " + year;

  // ================================== REALTOR ==============================
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "houses", id, "Realtor")),

        (snapshot) => {
          setRealtor(snapshot.docs);
        }
      ),
    [db]
  );

  // ================================== REALTOR ==============================

  return (
    <div className="dark:bg-gray-900">
      {bigPhoto !== true ? (
        <div>
          <Header />
          <p>Post {id} </p>

          <PhotoAlbum
            BigPhotoFunction={() => setBigPhoto(true)}
            PhotoNumber={house.ImageArray.length}
            image1={house.ImageArray[0]}
            image2={house.ImageArray[1]}
            image3={house.ImageArray[2]}
            image4={house.ImageArray[3]}
            image5={house.ImageArray[4]}
          />

          <div className="flex justify-between items-start mx-2">
            {/* information */}
            <div className="w-[60%] h-full ">
              <InfoParagraph
                Municipality={house.Municipality}
                Province={house.Province}
                PostalCode={house.PostalCode.toUpperCase()}
                Street={house.Street}
                Price={house.Price}
                PlotSize={house.PlotArea}
                FloorSize={house.FloorArea}
                RoomNumber={house.NumberOfRoom}
                BedroomNumber={house.NumberOfBedroom}
                BathNumber={house.NumberOfBathroom}
              />

              <InfoTable
                title={
                  language === "English"
                    ? "Price"
                    : language === "Nederlands"
                    ? "Prijs"
                    : "??cretler"
                }
                FirstTitle={
                  language === "English"
                    ? "Asking price"
                    : language === "Nederlands"
                    ? "Vraagprijs"
                    : "Fiyat"
                }
                FirstData={new Intl.NumberFormat("nl-NL", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(house.Price)}
                SecondTitle={
                  language === "English"
                    ? "Monthly Dues"
                    : language === "Nederlands"
                    ? "Maandelijkse bijdrage"
                    : "Aidat"
                }
                SecondData={new Intl.NumberFormat("nl-NL", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(house.Dues)}
                ThirdTitle={
                  language === "English"
                    ? "Asking price per plot m??"
                    : language === "Nederlands"
                    ? "vraagprijs per perceel m??"
                    : "Br??t m?? ba????na fiyat "
                }
                ThirdData={new Intl.NumberFormat("nl-NL", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(house.Price / house.PlotArea)}
                FourthTitle={
                  language === "English"
                    ? "Average electric bill"
                    : language === "Nederlands"
                    ? "Gemiddelde elektriciteitsrekening"
                    : "Ortalama elektrik faturas??"
                }
                FourthData={new Intl.NumberFormat("nl-NL", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(house.ElectricBill)}
                FifthTitle={
                  language === "English"
                    ? "Asking price per floor m??"
                    : language === "Nederlands"
                    ? "Prijs per vloermaat m??"
                    : "Net m?? ba????na fiyat "
                }
                FifthData={new Intl.NumberFormat("nl-NL", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(house.Price / house.FloorArea)}
                SixthTitle={
                  language === "English"
                    ? "Average water bill"
                    : language === "Nederlands"
                    ? "Gemiddelde waterrekening"
                    : "Ortalama su faturas??"
                }
                SixthData={new Intl.NumberFormat("nl-NL", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(house.WaterBill)}
                SeventhTitle={
                  language === "English"
                    ? "Status"
                    : language === "Nederlands"
                    ? "Status"
                    : "??lan t??r??"
                }
                SeventhData={
                  house.RentOrSale === "For Sale"
                    ? language === "English"
                      ? house.RentOrSale
                      : language === "Nederlands"
                      ? "Te Koop"
                      : "Sat??l??k"
                    : house.RentOrSale === "For Rent"
                    ? language === "English"
                      ? house.RentOrSale
                      : language === "Nederlands"
                      ? "Te Huur"
                      : "Kiral??k"
                    : ""
                }
                EighthTitle={
                  language === "English"
                    ? "Average natural gas bill"
                    : language === "Nederlands"
                    ? "Gemiddelde aardgasrekening"
                    : "Ortalama do??al gaz faturas??"
                }
                EighthData={new Intl.NumberFormat("nl-NL", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(house.GasBill)}
                NinthTitle={
                  language === "English"
                    ? "Realtor's contribution "
                    : language === "Nederlands"
                    ? "Makelaarsbijdrage "
                    : "Emlak???? ??creti"
                }
                NinthData={new Intl.NumberFormat("nl-NL", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(house.RealtorContribution)}
                TenthTitle={
                  language === "English"
                    ? "Total average monthly expense"
                    : language === "Nederlands"
                    ? "Totale gemiddelde maandelijkse uitgaven"
                    : "Toplam ayl??k masraflar"
                }
                TenthData={new Intl.NumberFormat("nl-NL", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(
                  house.Dues +
                    house.ElectricBill +
                    house.GasBill +
                    house.WaterBill
                )}
              />
              <InfoTable
                title={
                  language === "English"
                    ? "Adress Details"
                    : language === "Nederlands"
                    ? "Adresgegevens"
                    : "Adres Bilgileri"
                }
                FirstTitle={
                  language === "English"
                    ? "Province"
                    : language === "Nederlands"
                    ? "Provincie"
                    : "Eyalet"
                }
                FirstData={house.Province}
                ThirdTitle={
                  language === "English"
                    ? "Municipality (City)"
                    : language === "Nederlands"
                    ? "Gemeente"
                    : "??ehir (Belediye)"
                }
                ThirdData={house.Municipality}
                FifthTitle={
                  language === "English"
                    ? "Town"
                    : language === "Nederlands"
                    ? "Stad"
                    : "Mahalle"
                }
                FifthData={house.Neighbourhood}
                SeventhTitle={
                  language === "English"
                    ? "Street"
                    : language === "Nederlands"
                    ? "Straat"
                    : "Sokak"
                }
                SeventhData={
                  house.Street !== undefined ? house.Street : "Not available"
                }
                NinthTitle={
                  language === "English"
                    ? "Postal code"
                    : language === "Nederlands"
                    ? "Postcode"
                    : "Posta kodu"
                }
                NinthData={house.PostalCode.toUpperCase()}
                SecondTitle={
                  language === "English"
                    ? "House number"
                    : language === "Nederlands"
                    ? "Huisnummer"
                    : "Ev numaras??"
                }
                SecondData={
                  house.HouseNumber !== undefined
                    ? "No: " + house.HouseNumber
                    : "Not available"
                }
                FourthTitle={
                  language === "English"
                    ? "House type"
                    : language === "Nederlands"
                    ? "Soort woonhuis"
                    : "Ev tipi"
                }
                FourthData={house.HouseType}
                SixthTitle={
                  language === "English"
                    ? "Location description"
                    : language === "Nederlands"
                    ? "Beschrijving van de locatie"
                    : "Lokasyon ??zelli??i"
                }
                SixthData={
                  house.LocationDescription !== undefined &&
                  house.LocationDescription.length > 0
                    ? house.LocationDescription.reduce((a, b) =>
                        a.length <= b.length ? a : b
                      )
                    : "Not available"
                }
                ninthFeatNumber={
                  house.LocationDescription !== undefined &&
                  house.LocationDescription.length
                }
                EighthTitle={
                  language === "English"
                    ? "Floor Number"
                    : language === "Nederlands"
                    ? "Verdiepingsnummer"
                    : "Bulundu??u kat"
                }
                EighthData={
                  house.HouseType !== "Apartment"
                    ? "Ground floor"
                    : house.FloorNumber
                }
                TenthTitle={
                  language === "English"
                    ? "Coordinates"
                    : language === "Nederlands"
                    ? "Co??rdinaten"
                    : "Koordinatlar"
                }
                TenthData={
                  house.Location !== undefined
                    ? String(house.Location.latitude).slice(0, 7) +
                      " N, " +
                      String(house.Location.longitude).slice(0, 7) +
                      " E"
                    : "Not available"
                }
              />

              <InfoTable
                title={
                  language === "English"
                    ? "Rooms"
                    : language === "Nederlands"
                    ? "Kamers"
                    : "Odalar"
                }
                FirstTitle={
                  language === "English"
                    ? "Room number"
                    : language === "Nederlands"
                    ? "Aantal kamers"
                    : "Oda say??s??"
                }
                FirstData={
                  house.NumberOfRoom > 1
                    ? language === "English"
                      ? house.NumberOfRoom + " Rooms"
                      : language === "Nederlands"
                      ? house.NumberOfRoom + " Kamers"
                      : house.NumberOfRoom + " Odal??"
                    : house.NumberOfRoom === 1
                    ? language === "English"
                      ? house.NumberOfRoom + " Room"
                      : language === "Nederlands"
                      ? house.NumberOfRoom + " Kamer"
                      : house.NumberOfRoom + " Oda"
                    : language === "English"
                    ? "Not available"
                    : language === "Nederlands"
                    ? "Niet beschikbaar"
                    : "Bilinmiyor"
                }
                SecondTitle={
                  language === "English"
                    ? "Balcony number and size"
                    : language === "Nederlands"
                    ? "Aantal en grootte van balkons"
                    : "Balkon say??s?? ve boyutu"
                }
                SecondData={
                  house.BalconySize.length > 1
                    ? house.BalconySize.length +
                      "  ??  " +
                      house.BalconySize.reduce(
                        (accumulator, curr) => accumulator + curr
                      ) +
                      " m??"
                    : house.BalconySize.length === 1
                    ? house.BalconySize.reduce(
                        (accumulator, curr) => accumulator + curr
                      ) + " m??"
                    : language === "English"
                    ? "Not available"
                    : language === "Nederlands"
                    ? "Niet beschikbaar"
                    : "Bilinmiyor"
                }
                ThirdTitle={
                  language === "English"
                    ? "Bedroom number"
                    : language === "Nederlands"
                    ? "Aantal slaapkamers"
                    : "Yatak odas?? say??s??"
                }
                ThirdData={
                  house.NumberOfBedroom > 1
                    ? language === "English"
                      ? house.NumberOfBedroom + " Bedrooms"
                      : language === "Nederlands"
                      ? house.NumberOfBedroom + " Slaapkamers"
                      : house.NumberOfBedroom + " Yatak odal??"
                    : house.NumberOfBedroom === 1
                    ? language === "English"
                      ? house.NumberOfBedroom + " Bedroom"
                      : language === "Nederlands"
                      ? house.NumberOfBedroom + " Slaapkamer"
                      : house.NumberOfBedroom + " Yatak odal??"
                    : language === "English"
                    ? "Not available"
                    : language === "Nederlands"
                    ? "Niet beschikbaar"
                    : "Bilinmiyor"
                }
                FourthTitle={
                  language === "English"
                    ? "Terrace number and size"
                    : language === "Nederlands"
                    ? "Aantal en grootte van de terrassen"
                    : "Teras say??s?? ve boyutu"
                }
                FourthData={
                  house.NumberOfTerrace > 0
                    ? house.TerraceSize.length +
                      "  ??  " +
                      house.TerraceSize.reduce(
                        (accumulator, curr) => accumulator + curr
                      ) +
                      " m??"
                    : house.TerraceSize.length === 1
                    ? house.TerraceSize.reduce(
                        (accumulator, curr) => accumulator + curr
                      ) + " m??"
                    : language === "English"
                    ? "Not available"
                    : language === "Nederlands"
                    ? "Niet beschikbaar"
                    : "Bilinmiyor"
                }
                FifthTitle={
                  language === "English"
                    ? "Livingroom number"
                    : language === "Nederlands"
                    ? "Aantal Woonkamers"
                    : "Oturma odas?? say??s??"
                }
                FifthData={
                  house.NumberOfLivingRoom > 1
                    ? language === "English"
                      ? house.NumberOfLivingRoom + " Livingrooms"
                      : language === "Nederlands"
                      ? house.NumberOfLivingRoom + " Woonkamers"
                      : house.NumberOfLivingRoom + " Oturma odal??"
                    : house.NumberOfLivingRoom === 1
                    ? language === "English"
                      ? house.NumberOfLivingRoom + " Livingroom"
                      : language === "Nederlands"
                      ? house.NumberOfLivingRoom + " Woonkamer"
                      : house.NumberOfLivingRoom + " Oturma odal??"
                    : language === "English"
                    ? "Not available"
                    : language === "Nederlands"
                    ? "Niet beschikbaar"
                    : "Bilinmiyor"
                }
                SixthTitle={
                  language === "English"
                    ? "Garden number and size"
                    : language === "Nederlands"
                    ? "Aantal en grootte van de tuinen"
                    : "Bah??e say??s?? ve boyutu"
                }
                SixthData={
                  house.NumberOfGarden > 0
                    ? house.GardenSize.length +
                      "  ??  " +
                      house.GardenSize.reduce(
                        (accumulator, curr) => accumulator + curr
                      ) +
                      " m??"
                    : house.GardenSize.length === 1
                    ? house.GardenSize.reduce(
                        (accumulator, curr) => accumulator + curr
                      ) + " m??"
                    : language === "English"
                    ? "Not available"
                    : language === "Nederlands"
                    ? "Niet beschikbaar"
                    : "Bilinmiyor"
                }
                SeventhTitle={
                  language === "English"
                    ? "Bathroom number"
                    : language === "Nederlands"
                    ? "Aantal Badkamers"
                    : "Lavabo say??s??"
                }
                SeventhData={
                  house.NumberOfBathroom > 1
                    ? language === "English"
                      ? house.NumberOfBathroom + " Bathrooms"
                      : language === "Nederlands"
                      ? house.NumberOfBathroom + " Badkamers"
                      : house.NumberOfBathroom + " Banyolu"
                    : house.NumberOfBathroom === 1
                    ? language === "English"
                      ? house.NumberOfBathroom + " Bathroom"
                      : language === "Nederlands"
                      ? house.NumberOfBathroom + " Badkamer"
                      : house.NumberOfBathroom + " Banyolu"
                    : language === "English"
                    ? "Not available"
                    : language === "Nederlands"
                    ? "Niet beschikbaar"
                    : "Bilinmiyor"
                }
                EighthTitle={
                  language === "English"
                    ? "Private garage"
                    : language === "Nederlands"
                    ? "Priv??-garage"
                    : "??zel garaj"
                }
                EighthData={
                  house.NumberOfGarage > 0
                    ? house.GarageSize.length +
                      "  ??  " +
                      house.GarageSize.reduce(
                        (accumulator, curr) => accumulator + curr
                      ) +
                      " m??"
                    : house.GarageSize.length === 1
                    ? house.GarageSize.reduce(
                        (accumulator, curr) => accumulator + curr
                      ) + " m??"
                    : language === "English"
                    ? "Not available"
                    : language === "Nederlands"
                    ? "Niet beschikbaar"
                    : "Bilinmiyor"
                }
                NinthTitle={
                  language === "English"
                    ? "Number of toilet"
                    : language === "Nederlands"
                    ? "Aantal toiletten"
                    : "Tuvalet say??s??"
                }
                NinthData={
                  house.NumberOfToilet > 1
                    ? language === "English"
                      ? house.NumberOfToilet + " Toilets"
                      : language === "Nederlands"
                      ? house.NumberOfToilet + " Toiletten"
                      : house.NumberOfToilet + " Tuvaletli"
                    : house.NumberOfToilet === 1
                    ? language === "English"
                      ? house.NumberOfToilet + " Toilet"
                      : language === "Nederlands"
                      ? house.NumberOfToilet + " Toilet"
                      : house.NumberOfToilet + " Tuvaletli"
                    : language === "English"
                    ? "Not available"
                    : language === "Nederlands"
                    ? "Niet beschikbaar"
                    : "Bilinmiyor"
                }
                TenthTitle={
                  language === "English"
                    ? "Number of house's stories"
                    : language === "Nederlands"
                    ? "Aantal verdiepingen"
                    : "Evin kat say??s??"
                }
                TenthData={
                  house.NumberOfFloor > 1
                    ? house.NumberOfFloor + " stories"
                    : house.NumberOfFloor + " story"
                }
              />

              <InfoTable
                title={
                  language === "English"
                    ? "Room Sizes"
                    : language === "Nederlands"
                    ? "Kamergrootte"
                    : "Oda Boyutlar??"
                }
                FirstTitle={
                  language === "English"
                    ? "Floor size"
                    : language === "Nederlands"
                    ? "Vloermaat"
                    : "Net boyut"
                }
                FirstData={house.FloorArea + " m??"}
                SecondTitle={
                  language === "English"
                    ? "Other bedrooms"
                    : language === "Nederlands"
                    ? "Andere slaapkamers"
                    : "Di??er yatak odalar??"
                }
                SecondData={
                  house.OtherBedroomSize !== undefined
                    ? house.OtherBedroomSize.length > 1
                      ? house.OtherBedroomSize.length +
                        "  ??  " +
                        house.OtherBedroomSize.reduce(
                          (accumulator, curr) => accumulator + curr
                        ) +
                        " m??"
                      : house.OtherBedroomSize.length === 1
                      ? house.OtherBedroomSize.reduce(
                          (accumulator, curr) => accumulator + curr
                        ) + " m??"
                      : "Not available"
                    : "Not available"
                }
                ThirdTitle={
                  language === "English"
                    ? "Plot size"
                    : language === "Nederlands"
                    ? "Perceeloppervlakte"
                    : "Br??t alan"
                }
                ThirdData={house.PlotArea + " m??"}
                FourthTitle={
                  language === "English"
                    ? "Kitchen size"
                    : language === "Nederlands"
                    ? "Keukengrootte"
                    : "Mutfak alan??"
                }
                FourthData={
                  house.NumberOfKitchen !== undefined
                    ? house.NumberOfKitchen > 0
                      ? house.NumberOfKitchen +
                        "  ??  " +
                        house.KitchenArea.reduce(
                          (accumulator, curr) => accumulator + curr
                        ) +
                        " m??"
                      : house.KitchenArea.reduce(
                          (accumulator, curr) => accumulator + curr
                        ) + " m??"
                    : "Not available"
                }
                FifthTitle={
                  language === "English"
                    ? "House volume"
                    : language === "Nederlands"
                    ? "Huis volume"
                    : "Ev hacmi"
                }
                FifthData={
                  house.HouseVolume !== undefined
                    ? house.HouseVolume + " m??"
                    : "Not available"
                }
                SixthTitle={
                  language === "English"
                    ? "Storage area"
                    : language === "Nederlands"
                    ? "Opslagruimte"
                    : "Depo alan??"
                }
                SixthData={
                  house.StorageArea !== undefined && house.NumberOfStorage > 0
                    ? house.StorageArea.length > 1
                      ? house.NumberOfStorage +
                        "  ??  " +
                        house.StorageArea.reduce(
                          (accumulator, curr) => accumulator + curr
                        ) +
                        " m??"
                      : house.StorageArea.reduce(
                          (accumulator, curr) => accumulator + curr
                        ) + " m??"
                    : "Not available"
                }
                SeventhTitle={
                  language === "English"
                    ? "Living room size"
                    : language === "Nederlands"
                    ? "Woonkamer gebied"
                    : "Oturma odas?? alan??"
                }
                SeventhData={
                  house.LivingRoomArea !== undefined
                    ? house.LivingRoomArea.length > 1
                      ? house.LivingRoomArea.length +
                        "  ??  " +
                        house.LivingRoomArea.reduce(
                          (accumulator, curr) => accumulator + curr
                        ) +
                        " m??"
                      : house.LivingRoomArea.length === 1
                      ? house.LivingRoomArea.reduce(
                          (accumulator, curr) => accumulator + curr
                        ) + " m??"
                      : "Not available"
                    : "Not available"
                }
                EighthTitle={
                  house.HouseType === "Apartment"
                    ? language === "English"
                      ? "External space"
                      : language === "Nederlands"
                      ? "Buitenruimte"
                      : "D???? alan"
                    : language === "English"
                    ? "Shed size"
                    : language === "Nederlands"
                    ? "Schuur gebied"
                    : "Bah??e kabini alan??"
                }
                EighthData={
                  house.NumberOfShed > 0
                    ? house.NumberOfShed > 1
                      ? house.NumberOfShed +
                        "  ??  " +
                        house.ShedArea.reduce(
                          (accumulator, curr) => accumulator + curr
                        ) +
                        " m??"
                      : house.ShedArea.reduce(
                          (accumulator, curr) => accumulator + curr
                        ) + " m??"
                    : "Not available"
                }
                NinthTitle={
                  language === "English"
                    ? "Master bedroom size"
                    : language === "Nederlands"
                    ? "Ouderslaapkamer gebied"
                    : "Ebeveyn odas?? alan??"
                }
                NinthData={
                  house.OtherBedroomSize !== undefined
                    ? Math.max(...house.OtherBedroomSize) + " m??"
                    : "Not available"
                }
                TenthTitle={
                  house.HouseType === "Apartment"
                    ? language === "English"
                      ? "Number of building floor"
                      : language === "Nederlands"
                      ? "Aantal verdiepingen"
                      : "Bina kat say??s??"
                    : language === "English"
                    ? "Attic size"
                    : language === "Nederlands"
                    ? "Zoldergrootte"
                    : "??at?? kat?? alan??"
                }
                TenthData={
                  house.HouseType !== "Apartment"
                    ? house.AtticArea !== NaN
                      ? house.AtticArea + " m??"
                      : "Not Available"
                    : house.FloorNumber + "th floor"
                }
              />

              <InfoTable
                title={
                  language === "English"
                    ? "Other Details"
                    : language === "Nederlands"
                    ? "Andere Gegevens"
                    : "Di??er Bilgiler"
                }
                FirstTitle={
                  language === "English"
                    ? "Construction year of the house"
                    : language === "Nederlands"
                    ? "Bouwjaar van het huis"
                    : "Bina yap??m y??l??"
                }
                FirstData={
                  house.ConstructionYear !== undefined
                    ? house.ConstructionYear
                    : "Not available"
                }
                SecondTitle={
                  language === "English"
                    ? "Post's last update"
                    : language === "Nederlands"
                    ? "Bouwjaar van het huis"
                    : "Son g??ncellenme tarihi"
                }
                SecondData={
                  house.UpdateDate !== undefined
                    ? date
                    : "This post is not updated yet"
                }
                ThirdTitle={
                  language === "English"
                    ? "Post ID"
                    : language === "Nederlands"
                    ? "Post ID"
                    : "??lan numaras??"
                }
                ThirdData={house.id}
                FourthTitle={
                  language === "English"
                    ? "Ad posted by"
                    : language === "Nederlands"
                    ? "Geplaatst door"
                    : "Yay??nlayan ki??i"
                }
                FourthData={
                  house.PostedBy !== undefined
                    ? house.PostedBy
                    : "Not available"
                }
                FifthTitle={
                  language === "English"
                    ? "Building type"
                    : language === "Nederlands"
                    ? "Soort bouw"
                    : "Kullan??lm????l??k durumu"
                }
                FifthData={
                  house.BuildingType !== undefined
                    ? house.BuildingType
                    : "Not available"
                }
                SixthTitle={
                  language === "English"
                    ? "Eligible for credit?"
                    : language === "Nederlands"
                    ? "Aanmerking komen voor bankkrediet?"
                    : "Krediye uygun mu?"
                }
                SixthData={house.EligibleCredit === true ? "Yes" : "No"}
                SeventhTitle={
                  language === "English"
                    ? "Posting date"
                    : language === "Nederlands"
                    ? "Plaatsingsdatum"
                    : "Yay??nlanma tarihi"
                }
                SeventhData={
                  house.PostingDate !== undefined ? PostDate : "Not available"
                }
                EighthTitle={
                  language === "English"
                    ? "Furnished?"
                    : language === "Nederlands"
                    ? "Gemeubileerd?"
                    : "E??yal?? m???"
                }
                EighthData={house.Furnished ? "Yes" : "No"}
                NinthTitle={
                  language === "English"
                    ? "User status"
                    : language === "Nederlands"
                    ? "Gebruikersstatus"
                    : "Kullan??m durumu"
                }
                NinthData={
                  house.UserStatus !== undefined
                    ? house.UserStatus
                    : "Not available"
                }
                TenthTitle={
                  language === "English"
                    ? "Total floor number of the building"
                    : language === "Nederlands"
                    ? "Aantal verdiepingen van het gebouw"
                    : "Bina kat say??s??"
                }
                TenthData="23 Floor"
              />

              <InfoTable
                title={
                  language === "English"
                    ? "Energy"
                    : language === "Nederlands"
                    ? "Energie"
                    : "Enerji"
                }
                FirstTitle={
                  language === "English"
                    ? "Energy consumption level"
                    : language === "Nederlands"
                    ? "Energieverbruiksniveau"
                    : "Enerji t??ketim seviyesi"
                }
                FirstData={house.EnergyLevel + "-label "}
                SecondTitle={
                  language === "English"
                    ? "Air conditioner"
                    : language === "Nederlands"
                    ? "Airconditioner"
                    : "Klima sistemi"
                }
                SecondData={
                  house.AirConditionerType !== undefined
                    ? house.AirConditionerType
                    : "Not available"
                }
                ThirdTitle={
                  language === "English"
                    ? "Heating system"
                    : language === "Nederlands"
                    ? "Verwarmingssysteem"
                    : "Is??t??c?? sistem"
                }
                ThirdData={house.HeatingSystem}
                FourthTitle={
                  language === "English"
                    ? "Underfloor heating"
                    : language === "Nederlands"
                    ? "Vloerverwarming"
                    : "Zemin alt?? ??s??tma"
                }
                FourthData={
                  house.UnderfloorHeating === true
                    ? "Available"
                    : "Not available"
                }
                FifthTitle={
                  language === "English"
                    ? "Insulation"
                    : language === "Nederlands"
                    ? "Isolatie"
                    : "??zolasyon"
                }
                FifthData={
                  house.InsulationExist === true
                    ? house.InsulationType.reduce((a, b) =>
                        a.length <= b.length ? a : b
                      )
                    : "Not available"
                }
                SixthTitle={
                  language === "English"
                    ? "Renewable energy"
                    : language === "Nederlands"
                    ? "Hernieuwbare energie"
                    : "Yenilenebilir enerji"
                }
                SixthData={
                  house.SolarPowerExist === true
                    ? house.SolarPowerOutput !== undefined
                      ? "Available  ??  " + house.SolarPowerOutput + "kW"
                      : "Available"
                    : "Not available"
                }
                SeventhTitle={
                  language === "English"
                    ? "Water heater"
                    : language === "Nederlands"
                    ? "Boiler"
                    : "Su ??s??tma sistemi"
                }
                SeventhData={house.HotWater}
                EighthTitle={
                  language === "English"
                    ? "EV Charger"
                    : language === "Nederlands"
                    ? "EV-box"
                    : "Elektrikli araba ??arj??"
                }
                EighthData={
                  house.EVChargerExist === true
                    ? "Available  ??  " + house.EVChargerOutput + "kW"
                    : "Not available"
                }
                NinthTitle={
                  language === "English"
                    ? "Oven supplier"
                    : language === "Nederlands"
                    ? "Ovenleverancier"
                    : "Ocak t??r??"
                }
                NinthData={house.OvenSupplier}
                TenthTitle={
                  language === "English"
                    ? "Electric generator"
                    : language === "Nederlands"
                    ? "Elektrische generator"
                    : "Jenerat??r"
                }
                TenthData={
                  house.GeneratorExist === true ? "Available" : "Not available"
                }
              />
              <AllFeatures
                title1="Description"
                description={ReactHtmlParser(house.Description)}
                west={house.Fecade["West"]} // Fecade
                east={house.Fecade["East"]}
                south={house.Fecade["South"]}
                north={house.Fecade["North"]}
                AirConditioning={house.AirConditionerExist} // interior
                FireAlarm={house.FireAlarmExist}
                TheftAlarm={house.TheftAlarmExist}
                AluminiumWork={house.AluminumWorkExist}
                Detached={house.FeatureHouseType["Detached"]} //House Type
                Duplex={house.FeatureHouseType["Duplex"]}
                SemiDetached={house.FeatureHouseType["SemiDetached"]}
                RowHouse={house.FeatureHouseType["RowHouse"]}
                ApartmentHouse={house.FeatureHouseType["ApartmentHouse"]}
                CanalHouse={house.FeatureHouseType["CanalHouse"]}
                BoatHouse={house.FeatureHouseType["BoatHouse"]}
                Mezzanine={house.FeatureHouseType["Mezzanine"]}
                Penthouse={house.FeatureHouseType["Penthouse"]}
                Villa={house.FeatureHouseType["Villa"]}
                StudioApartment={house.FeatureHouseType["StudioApartment"]}
                Triplex={house.FeatureHouseType["Triplex"]}
                Quadruplex={house.FeatureHouseType["Quadruplex"]}
                Airport={house.Transportation["Airport"]} // Transportation
                BusStop={house.Transportation["BusStop"]}
                BicyclePath={house.Transportation["BicyclePath"]}
                CarSharing={house.Transportation["CarSharing"]}
                Ferry={house.Transportation["Ferry"]}
                Highway={house.Transportation["Highway"]}
                Metro={house.Transportation["Metro"]}
                TrainStation={house.Transportation["TrainStation"]}
                Tram={house.Transportation["Tram"]}
                SeaPort={house.Transportation["SeaPort"]}
                CanalView={house.View["CanalView"]} // VIEW
                PolderView={house.View["PolderView"]}
                DijkView={house.View["DijkView"]}
                WindmillView={house.View["WindmillView"]}
                SeaView={house.View["SeaView"]}
                LakeView={house.View["LakeView"]}
                ForestView={house.View["ForestView"]}
                ParkView={house.View["ParkView"]}
                SquareView={house.View["SquareView"]}
                NatureView={house.View["NatureView"]}
                HouseView={house.View["HouseView"]}
                ShoppingMall={house.ShoppingMall} //Nearby Nearby["locations"]
                BusinessDistrictNearby={house.Nearby["BusinessDistrictNearby"]}
                ShoppingStreet={house.Nearby["ShoppingStreet"]}
                MunicapilityBuilding={house.Nearby["MunicapilityBuilding"]}
                Church={house.Nearby["Church"]}
                Mosque={house.Nearby["Mosque"]}
                Synagogue={house.Nearby["Synagogue"]}
                Canal={house.Nearby["Canal"]}
                Hospital={house.Nearby["Hospital"]}
                FamilyPracticeCenter={house.Nearby["FamilyPracticeCenter"]}
                PoliceStation={house.Nearby["PoliceStation"]}
                Kindergarten={house.Nearby["Kindergarten"]}
                ElemantarySchool={house.Nearby["ElemantarySchool"]}
                VMO={house.Nearby["VMO"]}
                HAVO={house.Nearby["HAVO"]}
                VMBO={house.Nearby["VMBO"]}
                MBO={house.Nearby["MBO"]}
                HBO={house.Nearby["HBO"]}
                WO={house.Nearby["WO"]}
                Supermarket={house.Nearby["Supermarket"]}
                MarketPlace={house.Nearby["MarketPlace"]}
                FoodMarket={house.Nearby["FoodMarket"]}
                FitnessCenter={house.Nearby["FitnessCenter"]}
                SwimmingPoolNearby={house.Nearby["SwimmingPoolNearby"]}
                FootballField={house.Nearby["FootballField"]}
                BasketballCourt={house.Nearby["BasketballCourt"]}
                TennisCourt={house.Nearby["TennisCourt"]}
                IceRink={house.Nearby["IceRink"]}
                HorseRidingClub={house.Nearby["HorseRidingClub"]}
                SkatePark={house.Nearby["SkatePark"]}
                Museum={house.Nearby["Museum"]}
                Theatre={house.Nearby["Theatre"]}
                MovieTheatre={house.Nearby["MovieTheatre"]}
                ConcertArea={house.Nearby["ConcertArea"]}
                ArtCenter={house.Nearby["ArtCenter"]}
                PublicLibrary={house.Nearby["PublicLibrary"]}
                Cafes={house.Nearby["Cafes"]}
                Restaurants={house.Nearby["Restaurants"]}
                Bars={house.Nearby["Bars"]}
                Nightclubs={house.Nearby["Nightclubs"]}
                Pubs={house.Nearby["Pubs"]}
                Coffeeshops={house.Nearby["Coffeeshops"]}
                Parks={house.Nearby["Parks"]}
                BathAccess={house.Accessible["BathAccess"]} // Accessbility
                BrailAccess={house.Accessible["BrailAccess"]}
                DoorHandleAccess={house.Accessible["DoorHandleAccess"]}
                ElevatorAccess={house.Accessible["ElevatorAccess"]}
                EntranceAccess={house.Accessible["EntranceAccess"]}
                GardenAccess={house.Accessible["GardenAccess"]}
                HallwayAccess={house.Accessible["HallwayAccess"]}
                HandRailsAccess={house.Accessible["HandRailsAccess"]}
                ParkingAccess={house.Accessible["ParkingAccess"]}
                PavementAccess={house.Accessible["PavementAccess"]}
                PlugAccess={house.Accessible["PlugAccess"]}
                RampAccess={house.Accessible["RampAccess"]}
                KitchenAccess={house.Accessible["KitchenAccess"]}
                PoolAccess={house.Accessible["PoolAccess"]}
                SwitchAccess={house.Accessible["SwitchAccess"]}
              />
            </div>
            {/* Realtor data */}
            <div className="w-[40%] h-[1000px] ">
              {realtor.length > 0 &&
                realtor.map((item) => (
                  <RealtorBox
                    key={item.id}
                    RealtorImage={item.data().RealtorImage}
                    RealtorName={item.data().Name}
                    RealtorPhoneTag={item.data().PhoneNumber}
                    RealtorMail={item.data().Email}
                    OpenningHour={item.data().OpenningHour}
                    AmPm1={item.data().AmPm1}
                    ClosingHour={item.data().ClosingHour}
                    AmPm2={item.data().AmPm2}
                    OpenningDay={
                      language === "Nederlands"
                        ? item.data().OpenningDay[0]
                        : language === "English"
                        ? item.data().OpenningDay[1]
                        : language === "Turkce"
                        ? item.data().OpenningDay[2]
                        : ""
                    }
                    ClosingDay={
                      language === "Nederlands"
                        ? item.data().ClosingDay[0]
                        : language === "English"
                        ? item.data().ClosingDay[1]
                        : language === "Turkce"
                        ? item.data().ClosingDay[2]
                        : ""
                    }
                    AcikGun={item.data().AcikGun}
                    OpenDagen={item.data().OpenDagen}
                    KapaliGun={item.data().KapaliGun}
                    sluitingsdag={item.data().sluitingsdag}
                    Website={item.data().Website}
                    LinkedIn={item.data().LinkedIn}
                    Instagram={item.data().Instagram}
                    Facebook={item.data().Facebook}
                    Twitter={item.data().Twitter}
                  />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex relative items-center mx-[5%] space-x-4 my-10">
          <button
            className="h-auto w-10  font-extrabold text-3xl"
            onClick={handlePrevious}
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white" />
          </button>
          <div className="relative w-[90vw] h-[90vh] overflow-hidden">
            <img
              src={images[index]}
              alt=""
              className={`absolute object-contain z-20 w-full h-full p-4 ${
                transL
                  ? "transition duration-500 ease-linear transform -translate-x-full"
                  : transR
                  ? "animate-slideL"
                  : ""
              }`}
            />
            <img
              src={images[index1]}
              alt=""
              className={`absolute object-contain z-20 w-full h-full p-4 ${
                transL
                  ? "animate-slideR"
                  : transR
                  ? "transition duration-500 ease-linear transform translate-x-full"
                  : ""
              }`}
            />
          </div>
          <button
            className="h-auto w-10 font-extrabold text-3xl"
            onClick={handleNext}
          >
            <ChevronRightIcon className="h-5 w-5  text-gray-700 rounded-full hover:bg-blue-600 hover:text-white" />
          </button>
          <div className="absolute top-1 right-6">
            <XIcon
              className="w-6 h-6 text-gray-700 hover:text-black cursor-pointer"
              onClick={() => setBigPhoto(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const snapshot = await getDocs(collection(db, "houses"));
  const paths = snapshot.docs.map((doc) => {
    return { params: { id: doc.id.toString() } };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const docRef = doc(db, "houses", id);
  const docSnap = await getDoc(docRef);

  return { props: { houseProps: JSON.stringify(docSnap.data()) || null } };
};
