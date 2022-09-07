import React from "react";

const AccordionItem = (props) => {
  return (
    <p
      className={`text-sm font-semibold px-0.5 ${
        props.value == true
          ? "text-blue-700 dark:text-orange-300"
          : "text-gray-400 dark:text-gray-400"
      }`}
    >
      {props.item}
    </p>
  );
};

export default AccordionItem;
