import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import VehicleAd from "../../../Components/VehicleAd/VehicleAd";
import { db } from "../../../firebase";

export const getStaticPaths = async () => {
  const snapshot = await getDocs(collection(db, "Vehicles"));
  const paths = snapshot.docs.map((doc) => {
    return { params: { id: doc.id.toString() } };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context, locale) => {
  const id = context.params.id;
  const docRef = doc(db, "Vehicles", id);
  const docSnap = await getDoc(docRef);
  const vehicleProps = JSON.stringify(docSnap.data()) || null;

  return {
    props: {
      vehicleProps,
      ...(await serverSideTranslations(locale !== undefined ? locale : "en", [
        "Sidebar",
        "Colours",
      ])),
    },
  };
};

const Post = ({ vehicleProps, locale }) => {
  const vehicle = JSON.parse(vehicleProps);
  console.log(locale);
  const { t } = useTranslation();
  function omit(key, obj) {
    const { [key]: omitted, ...rest } = obj;
    return Array(rest);
  }

  const totalHorsepower = Object.values(omit("System", vehicle.Power)[0])
    .map((engine) => engine.HorsePower)
    .filter((engine) => engine !== undefined)
    .reduce((accumulator, curr) => accumulator + curr);

  const totalTorque = Object.values(omit("System", vehicle.Torque)[0])
    .map((engine) => engine.Value)
    .filter((engine) => engine !== undefined)
    .reduce((accumulator, curr) => accumulator + curr);

  return (
    <div>
      <VehicleAd
        ImageArray={vehicle.ImageArray}
        image1={vehicle.ImageArray[0]}
        image2={vehicle.ImageArray[1]}
        image3={vehicle.ImageArray[2]}
        image4={vehicle.ImageArray[3]}
        image5={vehicle.ImageArray[4]}
        imageArrayLength={vehicle.ImageArray.length}
        Brand={vehicle.Brand}
        Model={vehicle.Model}
        Modification={vehicle.ModificationEngine}
        modelYear={vehicle.ModelYear}
        Price={vehicle.Price}
        GearType={vehicle.GearType}
        Length={vehicle.Length}
        Width={vehicle.Width}
        Height={vehicle.Height}
        WidthMirror={vehicle.WidthMirror}
        Wheelbase={vehicle.Wheelbase}
        DragCoefficient={vehicle.DragCoefficient}
        Weight={vehicle.KerbWeight}
        MaxWeight={vehicle.MaxWeight}
        TrunkSpaceMinimum={vehicle.TrunkSpaceMinimum}
        FuelTankCapacity={vehicle.FuelTankCapacity}
        EngineDisplacement={vehicle.EngineDisplacement}
        FuelType={vehicle.FuelType}
        EVRange={vehicle.ElectricRange}
        HorsePower={
          vehicle.EngineIncluded?.System &&
          vehicle.Power?.System?.HorsePower !== undefined
            ? vehicle.Power?.System?.HorsePower
            : totalHorsepower
        }
        Torque={
          vehicle.EngineIncluded?.System &&
          vehicle.Torque?.System?.Value !== undefined
            ? vehicle.Torque?.System?.Value
            : totalTorque
        }
        WLTPFuel={vehicle.WLTPfuel}
        AverageFuelConsumption={vehicle.WLTPFuel?.Average}
        LowFuel={vehicle.WLTPfuel?.Low}
        HighFuel={vehicle.WLTPfuel?.High}
        WLTPElectric={vehicle.WLTPelectric}
        AverageEnergyConsumption={vehicle.WLTPelectric?.Average}
        LowEnergyConsumption={vehicle.WLTPelectric?.Low}
        HighEnergyConsumption={vehicle.WLTPelectric?.High}
        CO2ConsumptionLow={vehicle.WLTPco2?.Low}
        CO2ConsumptionHigh={vehicle.WLTPco2?.High}
        EmissionStandard={vehicle?.EmissionStandard}
        usedKM={vehicle.Kilometers}
        PowertrainArchitecture={vehicle.PowertrainArchitecture}
        Generation={vehicle.Generation}
        BodyType={vehicle.BodyType}
        ExteriorColor={vehicle.ExteriorColor}
        InteriorColor={vehicle.InteriorColor}
        Doors={vehicle.Doors}
        Seats={vehicle.Seats}
        ZeroToHundred={vehicle.ZeroToHundred}
        ZeroTo2Hundred={vehicle.ZeroTo2Hundred}
        MaximumSpeed={vehicle.MaximumSpeed}
        WeightToPowerKG={vehicle.WeightToPowerKG}
        WeightToPowerHP={vehicle.WeightToPowerHP}
        WeightToTorqueKG={vehicle.WeightToTorqueKG}
        WeightToTorqueHP={vehicle.WeightToTorqueHP}
        Cylinders={vehicle.NumberOfCylinders}
        PositionOfCylinders={vehicle.PositionOfCylinders}
        PositionOfEngineICE1={
          vehicle.EngineLocation?.ICEngine1?.FrontOrRear +
          ", " +
          vehicle.EngineLocation?.ICEngine1?.LongitudinalOrLatitude
        }
        PositionOfEngineICE2={
          vehicle.EngineLocation?.ICEngine2?.FrontOrRear +
          ", " +
          vehicle.EngineLocation?.ICEngine2?.LongitudinalOrLatitude
        }
        PositionOfEngineEV1={
          vehicle.EngineLocation?.EngineEV1?.FrontOrRear +
          ", " +
          vehicle.EngineLocation?.EngineEV1?.LongitudinalOrLatitude
        }
        PositionOfEngineEV2={
          vehicle.EngineLocation?.EngineEV2?.FrontOrRear +
          ", " +
          vehicle.EngineLocation?.EngineEV2?.LongitudinalOrLatitude
        }
        PositionOfEngineEV3={
          vehicle.EngineLocation?.EngineEV3?.FrontOrRear +
          ", " +
          vehicle.EngineLocation?.EngineEV3?.LongitudinalOrLatitude
        }
        SystemIncluded={vehicle.EngineIncluded?.System}
        ICEngine1={vehicle.EngineIncluded?.ICEngine1}
        ICEngine2={vehicle.EngineIncluded?.ICEngine2}
        EngineEV1={vehicle.EngineIncluded?.EngineEV1}
        EngineEV2={vehicle.EngineIncluded?.EngineEV2}
        EngineEV3={vehicle.EngineIncluded?.EngineEV3}
        SystemTorque={vehicle.Torque?.System?.Value}
        ICEngine1Torque={vehicle.Torque?.ICEngine1?.Value}
        ICEngine2Torque={vehicle.Torque?.ICEngine2?.Value}
        EngineEV1Torque={vehicle.Torque?.EngineEV1?.Value}
        EngineEV2Torque={vehicle.Torque?.EngineEV2?.Value}
        EngineEV3Torque={vehicle.Torque?.EngineEV3?.Value}
        SystemPower={vehicle.Power?.System?.HorsePower}
        ICEngine1HP={vehicle.Power?.ICEngine1?.HorsePower}
        ICEngine2HP={vehicle.Power?.ICEngine2?.HorsePower}
        EngineEV1HP={vehicle.Power?.EngineEV1?.HorsePower}
        EngineEV2HP={vehicle.Power?.EngineEV2?.HorsePower}
        EngineEV3HP={vehicle.Power?.EngineEV3?.HorsePower}
        EngineAspiration={
          vehicle.EngineAspiration != undefined && vehicle.EngineAspiration[0]
        } //ICEngine1 e göre ayarla
        GrossBatteryCapacity={vehicle.GrossBattery?.Battery1} // Düzenle
        BatteryVoltage={vehicle.BatteryVoltage}
        BatteryTechnology={vehicle.BatteryTechnology}
        PartsArray={vehicle.ChangedParts}
        SecurityArray={vehicle.SecurityFeatures}
        InteriorArray={vehicle.InternalHardware}
        ExternalArray={vehicle.ExternalHardware}
        MultimediaArray={vehicle.Multimedia}
      />
    </div>
  );
};

export default Post;
