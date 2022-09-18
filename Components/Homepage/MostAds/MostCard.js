import React from "react";

const MostCard = (props) => {
  return (
    <div className="h-64 w-96 flex border-0 cursor-pointer">
      <div className="relative most-card-inner all-150-linear ">
        <div className="w-96 h-full overflow-hidden rounded-lg">
          <img
            className="object-cover w-full h-full brightness-[.6] all-150-linear"
            src={props.imageUrl}
          />
        </div>

        <div className="absolute top-[30%] px-2 all-150-linear left-0 right-0 card-title">
          <h3 className="text-white text-5xl font-extrabold">{props.Title}</h3>
          <h6 className="text-lg font-semibold text-white card-subtitle">
            {props.Secondary}
          </h6>
        </div>
        <div className="-z-10 flex-center-evenly absolute top-[40%] card-info w-full">
          <div className="flex flex-col items-center text-white dark:text-white">
            <h5 className="text-3xl font-extrabold">{props.firstNumber}</h5>
            <p className="">{props.firstCategory}</p>
          </div>
          <div className="flex flex-col items-center text-white dark:text-white">
            <h5 className="text-3xl font-extrabold ">{props.secondNumber}</h5>
            <p className="">{props.secondCategory}</p>
          </div>
        </div>

        <div className="absolute bottom-2 right-2 w-full text-right">
          <a className="flex-center-center text-right text-sm text-white">
            <span>See {props.totalNumber} ads </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MostCard;
