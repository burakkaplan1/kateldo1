import React from "react";

const MostCard = (props) => {
  return (
    <div className="p-2 h-40 min-w-[30vw] flex border-2 border-gray-100 ">
      <div className="flex-center-between">
        <div className="border-b border-b-gray-100">
          <h3>{props.Municipality}</h3>
        </div>
      </div>
    </div>
  );
};

export default MostCard;
