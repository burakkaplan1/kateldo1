import Header from "../Header";
import Accordion from "./Accordion";
import Gallery from "./Gallery";
import InformationTable from "./InformationTable";
import Intro from "./Intro";
import Footer from "../Footer";
import Carousel from "../Common/Carousel";
import { useState } from "react";

const VehicleAd = (props) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  return (
    <>
      {galleryOpen != true ? (
        <div>
          <Header />
          <main className="dark:bg-gray-900 pb-10">
            <Gallery
              image1={props.image1}
              image2={props.image2}
              image3={props.image3}
              image4={props.image4}
              image5={props.image5}
              imageArrayLength={props.imageArrayLength}
            />
            <div className="flex items-start space-x-2 ">
              <main className="p-2 lg:w-[70%]">
                <Intro
                  Brand={props.Brand}
                  Model={props.Model}
                  Modification={props.Modification}
                  modelYear={props.modelYear}
                  Price={props.Price}
                  EngineDisplacement={props.EngineDisplacement}
                  FuelType={props.FuelType}
                  EVRange={props.EVRange}
                  HorsePower={props.HorsePower}
                  Torque={props.Torque}
                  WLTPFuel={props.WLTPFuel}
                  LowFuel={props.LowFuel}
                  AverageFuelConsumption={props.AverageFuelConsumption}
                  HighFuel={props.HighFuel}
                  usedKM={props.usedKM}
                />
                <InformationTable
                  Title="General"
                  item1="Brand"
                  value1={props.Brand}
                  item2="Price"
                  value2={new Intl.NumberFormat("nl-NL", {
                    currency: "EUR",
                    style: "currency",
                    minimumFractionDigits: 0,
                  }).format(props.Price)}
                  item3="Model"
                  value3={props.Model}
                  item4="Powertrain Architecture"
                  value4={props.PowertrainArchitecture}
                  item5="Generation"
                  value5={props.Generation}
                  item6="Body Type"
                  value6={props.BodyType}
                  item7="Modification "
                  value7={props.Modification}
                  item8="Exterior Color"
                  value8={props.ExteriorColor}
                  item9="Doors"
                  value9={props.Doors}
                  item10="Interior Color"
                  value10={props.InteriorColor}
                  item11="Seats"
                  value11={props.Seats}
                  item12="Model Year"
                  value12={props.modelYear}
                  item13="Gear Type"
                  value13={props.GearType}
                  item14="Fuel Type"
                  value14={props.FuelType}
                />

                <InformationTable
                  Title="Performance"
                  item2="AVG. Fuel Consumption"
                  value2={props.LowFuel + " - " + props.HighFuel + " lt/100km"}
                  item3="CO2 emissions"
                  value3={
                    props.CO2ConsumptionLow +
                    " - " +
                    props.CO2ConsumptionHigh +
                    " g/km"
                  }
                  item4="Emission Standard"
                  value4={props.EmissionStandard}
                  item8="Top Speed"
                  value8={props.MaximumSpeed + " km/h"}
                  item9="Acceleration (0 - 100 km/h)"
                  value9={props.ZeroToHundred + " sec."}
                  item10="Acceleration (0 - 200 km/h)"
                  value10={props.ZeroTo2Hundred + " sec."}
                  item11="Weight-to-torque Ratio"
                  value11={
                    props.WeightToTorqueKG +
                    " kg/Nm, " +
                    props.WeightToTorqueHP +
                    " Nm/tonne"
                  }
                  item12="Weight-to-power Ratio"
                  value12={
                    props.WeightToPowerKG +
                    " kg/HP, " +
                    props.WeightToPowerHP +
                    " HP/tonne"
                  }
                />
                {props.SystemIncluded == true && (
                  <InformationTable
                    Title="Sytem Values"
                    item1="System Torque"
                    value1={props.SystemTorque + " Nm"}
                    item2="System Power"
                    value2={props.SystemPower + " HP"}
                  />
                )}
                {props.ICEngine1 == true && (
                  <InformationTable
                    Title={
                      props.EngineEV1 == true
                        ? "Internal Combustion Engine"
                        : "Engine Specification"
                    }
                    item1="Engine Displacement"
                    value1={
                      new Intl.NumberFormat("nl-NL", {
                        minimumFractionDigits: 0,
                      }).format(props.EngineDisplacement) + " cc"
                    }
                    item2="Power"
                    value2={
                      new Intl.NumberFormat("nl-NL", {
                        minimumFractionDigits: 0,
                      }).format(props.ICEngine1HP) + " HP"
                    }
                    item3="Torque"
                    value3={
                      new Intl.NumberFormat("nl-NL", {
                        minimumFractionDigits: 0,
                      }).format(props.ICEngine1Torque) + " Nm"
                    }
                    item4="Number of Cylinders"
                    value4={props.Cylinders}
                    item5="Position of Cylinders"
                    value5={props.PositionOfCylinders + "-Engine"}
                    item6="Position of the Engine"
                    value6={props.PositionOfEngineICE1}
                    item7="Power per Liter"
                    value7={
                      Math.round(
                        (props.ICEngine1HP / props.EngineDisplacement) *
                          1000 *
                          10
                      ) /
                        10 +
                      " HP/lt"
                    }
                    item8="Engine Aspiration"
                    value8={props.EngineAspiration} // ICEngine1 e göre ayarla
                  />
                )}
                {props.EngineEV1 && (
                  <InformationTable
                    Title={
                      props.ICEngine1 == true || props.EngineEV2 == true
                        ? "Electric Motor 1 Specification"
                        : "Electric Motor Specification"
                    }
                    item1="Motor Torque"
                    value1={props.EngineEV1Torque + " Nm"}
                    item2="Motor Power"
                    value2={props.EngineEV1HP + " HP"}
                    item3="Position of Engine"
                    value3={props.PositionOfEngineEV1}
                  />
                )}
                {props.EngineEV2 && (
                  <InformationTable
                    Title={"Electric Motor 2 Specification"}
                    item1="Motor Torque"
                    value1={props.EngineEV2Torque + " Nm"}
                    item2="Motor Power"
                    value2={props.EngineEV2HP + " HP"}
                    item3="Position of Engine"
                    value3={props.PositionOfEngineEV2}
                  />
                )}
                {props.EngineEV1 && (
                  <InformationTable
                    Title="Electric and Hybrids Specifications"
                    item1="Gross Battery Capacity"
                    value1={props.GrossBatteryCapacity + " kWh"}
                    item2="Battery Voltage"
                    value2={props.BatteryVoltage + " V"}
                    item3="Battery Technology"
                    value3={props.BatteryTechnology}
                    item4="All-electric Range"
                    value4={props.EVRange + " km"}
                    item5="Average Energy Consumption"
                    value5={
                      props.LowEnergyConsumption !== undefined ||
                      props.HighEnergyConsumption !== undefined
                        ? props.LowEnergyConsumption +
                          " - " +
                          props.HighEnergyConsumption +
                          " kWh/100 km"
                        : props.AverageEnergyConsumption + " kWh/100 km"
                    }
                  />
                )}
                <InformationTable
                  Title="Dimensions"
                  item1="Length"
                  value1={props.Length + " mm"}
                  item2="Width"
                  value2={props.Width + " mm"}
                  item3="Height"
                  value3={props.Height + " mm"}
                  item4="Width including mirrors"
                  value4={props.WidthMirror + " mm"}
                  item5="Wheelbase"
                  value5={props.Wheelbase + " mm"}
                  item6="Drag coefficient"
                  value6={props.DragCoefficient}
                  item7="Kerb Weight"
                  value7={props.Weight + " kg"}
                  item8="Max. Weight"
                  value8={props.MaxWeight + " kg"}
                  item9="Trunk Volume"
                  value9={props.TrunkSpaceMinimum + " lt."}
                  item10="Fuel tank capacity"
                  value10={props.FuelTankCapacity + " lt."}
                />
                <Accordion
                  SecurityArray={props.SecurityArray}
                  InteriorArray={props.InteriorArray}
                  PartsArray={props.PartsArray}
                  ExternalArray={props.ExternalArray}
                  MultimediaArray={props.MultimediaArray}
                />
              </main>
              <div></div> {/* Satıcı bilgisi */}
            </div>
          </main>
          <Footer />
        </div>
      ) : (
        <Carousel
          image1={props.image1}
          image2={props.image2}
          image3={props.image3}
          image4={props.image4}
          image5={props.image5}
          ImageArray={props.ImageArray}
          imageArrayLength={props.imageArrayLength}
        />
      )}
    </>
  );
};

export default VehicleAd;
