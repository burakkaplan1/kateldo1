import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Moment from "react-moment";
import { ArrowsExpandIcon, FilterIcon } from "@heroicons/react/outline";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { BiArea, BiBed, BiBath } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const Card = (props) => {
  const { data: session } = useSession();
  const [hasLiked, setHasLiked] = useState(false);
  const Router = useRouter();

  return (
    <div
      className="first:border-t  border-b pr-3 hover:scale-[1.02] hover:opacity-[0.9] transition-all duration-150 ease-in-out border-gray-300 flex items-center px-1 py-2 mr-5 my-0 2xl:h-[400px] h-64 cursor-pointer"
      onClick={() => {
        Router.push({
          pathname: `/realestate/post/${props.id}`,
        });
      }}
    >
      <div className="relative h-full 2xl:w-[600px] w-80 m-1  ">
        <Image
          className=" h-full 2xl:w-[600px] w-80 rounded-md m-0"
          src={props.image}
          alt="house"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col ml-8 h-full justify-between flex-1">
        <div className="flex items-center justify-between">
          <h1 className="dark:text-blue-300 text-blue-600 2xl:text-2xl">
            {props.title}
          </h1>
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
        <div className="mt-1 font-semibold leading-0 dark:text-white text-gray-700 2xl:text-3xl text-xl">
          <h2>
            {props.Municipality}, {props.Province}
          </h2>
        </div>
        <div className="mt-1 leading-0 dark:text-gray-100 text-gray-600 2xl:text-lg ">
          <h3>
            {props.PostalCode.toUpperCase()}, {props.Town}
          </h3>
        </div>
        <div className="flex flex-row flex-1 mt-24 justify-between items-center">
          <div className="flex items-center flex-wrap ">
            <div className="flex items-center space-x-1 mr-3">
              <ArrowsExpandIcon className="h-2 w-2 md:h-5 md:w-5 2xl:w-8 2xl:h-8 dark:text-gray-300  text-gray-500" />
              <p className="dark:text-gray-300 text-gray-600 font-semibold 2xl:text-lg text-[0.6rem]">
                {new Intl.NumberFormat("nl-NL", {
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(props.PlotSize)}
                m² Plot Area
              </p>
            </div>
            <div className="flex items-center space-x-1 mr-3">
              <BiArea className="h-2 w-2 md:h-5 md:w-5  2xl:w-8 2xl:h-8 dark:text-gray-300  text-gray-500" />
              <p className="text-gray-600 dark:text-gray-300  font-semibold 2xl:text-lg text-[0.6rem]">
                {new Intl.NumberFormat("nl-NL", {
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }).format(props.FloorSize)}
                m² Floor Area
              </p>
            </div>
            <div className="flex items-center space-x-1 mr-3">
              <MdOutlineMeetingRoom className="h-2 w-2 2xl:w-8 2xl:h-8 md:h-5 md:w-5 dark:text-gray-300  text-gray-500" />
              <p className="text-gray-600 dark:text-gray-300  font-semibold 2xl:text-lg text-[0.6rem]">
                {props.RoomNumber} Rooms
              </p>
            </div>
            <div className="flex items-center space-x-1 mr-3 ">
              <BiBed className="h-2 w-2 md:h-5 md:w-5 dark:text-gray-300 2xl:w-8 2xl:h-8  text-gray-500" />
              <p className="text-gray-600 dark:text-gray-300  font-semibold 2xl:text-lg text-[0.6rem]">
                {props.BedroomNumber} Bedrooms
              </p>
            </div>
            <div className=" items-center space-x-1 flex dark:text-orange-400  text-orange-600 ">
              <FilterIcon className="h-2 w-2 md:h-5 md:w-5   2xl:w-8 2xl:h-8" />
              <p className=" font-semibold  text-[0.6rem] 2xl:text-lg">
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
              }).format(props.price)}
            </p>
          </div>
        </div>
      </div>
      <span className="hidden">{props.SortType}</span>
    </div>
  );
};

export default Card;
