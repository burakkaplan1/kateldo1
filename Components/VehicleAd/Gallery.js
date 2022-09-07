import { PhotographIcon } from "@heroicons/react/outline";
import React from "react";

const Gallery = (props) => {
  return (
    <div className="w-full flex flex-col space-y-2 p-2 ">
      <div className="grid grid-cols-4 grid-rows-2 gap-2">
        <img
          src={props.image1}
          alt=""
          className={`w-full h-full object-cover cursor-pointer hover:opacity-[.95] transition-all duration-200 ease-in-out ${
            props.imageArrayLength == 1
              ? "col-span-4 row-span-2"
              : props.imageArrayLength == 2
              ? "col-span-2 row-span-2"
              : props.imageArrayLength == 3
              ? "col-span-3 row-span-2"
              : props.imageArrayLength == 4
              ? "col-span-2 row-span-1"
              : "col-span-2 row-span-2"
          } `}
        />
        {props.imageArrayLength >= 2 && (
          <img
            src={props.image2}
            alt=""
            className={`w-full h-full object-cover cursor-pointer hover:opacity-[.95] transition-all duration-200 ease-in-out ${
              props.imageArrayLength == 2
                ? "col-span-2 row-span-2"
                : props.imageArrayLength == 3
                ? "col-span-1 row-span-1"
                : props.imageArrayLength == 4
                ? "col-span-2 row-span-1"
                : "col-span-1 row-span-1"
            } `}
          />
        )}
        {props.imageArrayLength >= 3 && (
          <img
            src={props.image3}
            alt=""
            className={`w-full h-full object-cover cursor-pointer hover:opacity-[.95] transition-all duration-200 ease-in-out ${
              props.imageArrayLength == 3
                ? "col-span-1 row-span-1"
                : props.imageArrayLength == 4
                ? "col-span-2 row-span-1"
                : "col-span-1 row-span-1"
            } `}
          />
        )}
        {props.imageArrayLength >= 4 && (
          <img
            src={props.image4}
            alt=""
            className={`w-full h-full object-cover cursor-pointer hover:opacity-[.95] transition-all duration-200 ease-in-out ${
              props.imageArrayLength == 4
                ? "col-span-2 row-span-1"
                : "col-span-1 row-span-1"
            } `}
          />
        )}
        {props.imageArrayLength >= 5 && (
          <img
            src={props.image5}
            alt=""
            className="w-full h-full col-span-1 row-span-1 object-cover cursor-pointer hover:opacity-[.95] transition-all duration-200 ease-in-out"
          />
        )}
      </div>
      <div className="flex items-center border-b-4 pb-2 border-orange-400">
        <div className="border-2 dark:border-orange-400 border-blue-600 flex items-center justify-around py-1 px-2 text-lg ">
          <PhotographIcon className="lg:w-8 lg:h-8 md:w-7 md:-7 w-6 h-6 text-blue-800 dark:text-blue-300" />
          <p className="text-blue-800 dark:text-blue-200 font-semibold">
            {props.imageArrayLength} Images
          </p>
        </div>
      </div>
      <span className="hidden">{props.imageArrayLength}</span>
    </div>
  );
};

export default Gallery;
