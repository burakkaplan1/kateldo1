import { LightningBoltIcon } from "@heroicons/react/outline";
import React from "react";
import { FaGasPump, FaHorseHead } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";

const Intro = (props) => {
  return (
    <div className="flex flex-col border-b-2 border-blue-300 pb-2">
      <h1 className="text-3xl font-semibold">
        {props.Brand}, {props.Model}
      </h1>
      <h2 className="text-xl text-gray-700 dark:text-gray-200">
        {props.Modification}, {props.modelYear}
      </h2>
      <h3 className="text-xl text-blue-700 dark:text-orange-300 font-semibold">
        {new Intl.NumberFormat("nl-NL", {
          currency: "EUR",
          style: "currency",
          minimumFractionDigits: 0,
        }).format(props.Price)}
      </h3>

      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center space-x-1">
          <p className="text-sm">
            {props.FuelType !== "Electricity" ? (
              <div className="flex items-center space-x-1 mr-3">
                <LightningBoltIcon className="h-2 w-2 md:h-5 md:w-5 dark:text-gray-300  text-gray-600" />
                <p className="dark:text-gray-300 text-gray-600 font-semibold text-sm">
                  {new Intl.NumberFormat("nl-NL", {
                    minimumFractionDigits: 0,
                  }).format(props.EngineDisplacement)}{" "}
                  cc
                </p>
              </div>
            ) : (
              <div className="flex items-center space-x-1 mr-3">
                <GiPathDistance className="h-2 w-2 md:h-5 md:w-5 dark:text-gray-300  text-gray-500" />
                <p className="dark:text-gray-300 text-gray-600 font-semibold text-sm">
                  {props.EVRange} Km
                </p>
              </div>
            )}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <p className="text-sm">
            <div className="flex items-center space-x-1 mr-3">
              <FaHorseHead className="h-2 w-2 md:h-5 md:w-5 dark:text-gray-300  text-gray-600" />
              <p className="dark:text-gray-300 text-gray-600 font-semibold text-sm">
                {new Intl.NumberFormat("nl-NL", {
                  minimumFractionDigits: 0,
                }).format(props.HorsePower)}{" "}
                HP
              </p>
            </div>
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <p className="text-sm">
            <div className="flex items-center space-x-1 mr-3">
              <FaHorseHead className="h-2 w-2 md:h-5 md:w-5 dark:text-gray-300  text-gray-600" />
              <p className="dark:text-gray-300 text-gray-600 font-semibold text-sm">
                {new Intl.NumberFormat("nl-NL", {
                  minimumFractionDigits: 0,
                }).format(props.Torque)}{" "}
                Nm
              </p>
            </div>
          </p>
        </div>
        {props.WLTPFuel !== undefined && props.WLTPFuel !== null && (
          <div className="flex items-center space-x-1">
            <p className="text-sm">
              <div className="flex items-center space-x-1 mr-3">
                <FaGasPump className="h-2 w-2 md:h-5 md:w-5 dark:text-gray-300  text-gray-600" />
                <p className="dark:text-gray-300 text-gray-600 font-semibold text-sm">
                  {new Intl.NumberFormat("nl-NL", {
                    minimumFractionDigits: 1,
                  }).format(props.LowFuel)}
                  {" - "}
                  {new Intl.NumberFormat("nl-NL", {
                    minimumFractionDigits: 1,
                  }).format(props.HighFuel)}
                  {props.FuelType !== "Electricity"
                    ? " lt/100 Km"
                    : " kWh/100 Km"}
                </p>
              </div>
            </p>
          </div>
        )}
        <div className="flex items-center space-x-1">
          <p className="text-sm">
            <div className="flex items-center space-x-1 mr-3">
              <FaHorseHead className="h-2 w-2 md:h-5 md:w-5 dark:text-gray-300  text-gray-600" />
              <p className="dark:text-gray-300 text-gray-600 font-semibold text-sm">
                {new Intl.NumberFormat("nl-NL", {
                  minimumFractionDigits: 0,
                }).format(props.usedKM)}{" "}
                Km
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
