import React from "react";

const SidebarInput = (props) => {
  return (
    <div className="py-2 pl-1">
      <ul className="flex flex-col text-gray-500">
        <li>
          <input
            type={props.Type1}
            id={props.id1}
            placeholder={props.placeholder1}
            value={props.value1}
            onChange={props.setState1}
            className="inline-block w-full px-4 py-2 text-xs rounded text-blue-700 dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800 border border-gray-400 placeholder:text-gray-500"
          />
        </li>
        <li className="mt-2">
          <input
            type={props.type2}
            id={props.id2}
            placeholder={props.placeholder2}
            value={props.value2}
            onChange={props.setState2}
            className="inline-block w-full px-4 py-2 text-xs rounded text-blue-700 dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800 border border-gray-400 placeholder:text-gray-500"
          />
        </li>
      </ul>
    </div>
  );
};

export default SidebarInput;
