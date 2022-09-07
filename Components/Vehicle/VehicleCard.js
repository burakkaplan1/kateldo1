import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Moment from "react-moment";
import { FilterIcon, LightningBoltIcon } from "@heroicons/react/outline";
import { BiArea, BiBed } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { useTranslation } from "next-i18next";
const VehicleCard = (props) => {
  const { data: session } = useSession();
  const [hasLiked, setHasLiked] = useState(false);
  const Router = useRouter();
  const { t } = useTranslation();
  return (
    <div
      onClick={() => {
        Router.push({
          pathname: `/vehicle/post/${props.id}`,
        });
      }}
      className="first:border-t border-b pr-3 hover:scale-[1.02] hover:opacity-[0.9] transition-all duration-150 ease-in-out border-gray-300 flex items-center px-1 py-2 mr-5 my-0 h-64 cursor-pointer"
    >
      <div className="relative h-full w-80 m-1  ">
        <img
          className=" h-full w-80 rounded-md m-0"
          src={props.image}
          alt="house"
          layout="fill"
        />
      </div>
      <div className="flex flex-col ml-8 h-full justify-between flex-1">
        <div className="flex items-center justify-between">
          <h1 className="dark:text-blue-300 text-blue-600">{props.title}</h1>
          <div className="">
            {session?.user ? (
              hasLiked ? (
                <FaHeart
                  className=" w-7 h-7 text-red-500"
                  onClick={() => setHasLiked(!hasLiked)}
                />
              ) : (
                <FaRegHeart
                  className=" w-7 h-7 dark:text-gray-100 text-gray-500"
                  onClick={() => setHasLiked(!hasLiked)}
                />
              )
            ) : null}
          </div>
        </div>
        <div className="mt-1 font-semibold leading-0 dark:text-white text-gray-700 text-xl">
          <h2>
            {props.Brand}, {props.Model}
          </h2>
        </div>
        <div className="mt-1 leading-0 dark:text-gray-100 text-gray-600 ">
          <h3>
            {props.Kilometers} km, {props.FuelType}
          </h3>
        </div>

        <div className="flex flex-row flex-1 mt-24 justify-between items-center">
          <div className="flex items-center flex-wrap ">
            {props.FuelType !== "Electricity" ? (
              <div className="flex items-center space-x-1 mr-3">
                <LightningBoltIcon className="h-2 w-2 md:h-5 md:w-5 dark:text-gray-300  text-gray-500" />
                <p className="dark:text-gray-300 text-gray-600 font-semibold text-[0.6rem]">
                  {props.EngineDisplacement} cc
                </p>
              </div>
            ) : (
              <div className="flex items-center space-x-1 mr-3">
                <GiPathDistance className="h-2 w-2 md:h-5 md:w-5 dark:text-gray-300  text-gray-500" />
                <p className="dark:text-gray-300 text-gray-600 font-semibold text-[0.6rem]">
                  {props.EVRange} Km
                </p>
              </div>
            )}
            <div className="flex items-center space-x-1 mr-3">
              <BiArea className="h-2 w-2 md:h-5 md:w-5 dark:text-gray-300  text-gray-500" />
              <p className="text-gray-600 dark:text-gray-300  font-semibold text-[0.6rem]">
                {new Intl.NumberFormat("nl-NL", {
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(props.HorsePower)}{" "}
                Hp
              </p>
            </div>

            <div className="flex items-center space-x-1 mr-3 ">
              <BiBed className="h-2 w-2 md:h-5 md:w-5 dark:text-gray-300  text-gray-500" />
              <p className="text-gray-600 dark:text-gray-300  font-semibold text-[0.6rem]">
                {props.Torque} Nm
              </p>
            </div>
            <div className="flex items-center space-x-1 mr-3 ">
              <div
                className="w-3 h-3 md:h-4 md:w-4 border border-gray-400 rounded-sm"
                style={{ backgroundColor: props.color }}
              ></div>
              <p className="text-gray-600 dark:text-gray-300  font-semibold text-[0.6rem]">
                {t(`Common:${props.color}`)} Exterior
              </p>
            </div>

            <div className="flex items-center space-x-1  dark:text-orange-400 text-orange-600 ">
              <FilterIcon className="h-2 w-2 md:h-5 md:w-5 " />
              <p className=" font-semibold  text-[0.6rem]">
                {props.SortType === "PostingDate" ? (
                  <Moment unix fromNow>
                    {props.FilterItem}
                  </Moment>
                ) : (
                  <span>
                    {props.FilterItem}
                    {props.FilterText}
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="dark:text-blue-100 text-blue-800 font-semibold">
            <p className="text-md md:text-lg font-semibold">
              {new Intl.NumberFormat("nl-NL", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              }).format(props.Price)}
            </p>
          </div>
        </div>
        <span className="hidden">{props.SortType}</span>
      </div>
      <span className="hidden">{props.id}</span>
    </div>
  );
};

export default VehicleCard;
