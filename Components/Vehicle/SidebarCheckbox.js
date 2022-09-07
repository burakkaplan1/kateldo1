import React from "react";

const SidebarCheckbox = (props) => {
  return (
    <li className="flex items-center space-x-2" onClick={props.onClick}>
      <input
        type="checkbox"
        className="cursor-pointer rounded-sm checked:bg-orange-500 checked:hover:bg-orange-600 focus:ring-orange-300 focus:checked:bg-orange-500 checked:border-transparent"
        checked={props.value}
      />
      <span
        className={`${
          props.value && "text-blue-500 font-semibold "
        } text-md cursor-pointer`}
      >
        {props.text}
      </span>
    </li>
  );
};

export default SidebarCheckbox;
