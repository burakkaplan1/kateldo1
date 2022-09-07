import React from "react";
import InformationTableRow from "./InformationTableRow";

const InformationTable = (props) => {
  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold text-orange-500 dark:text-orange-400">
        {props.Title}
      </h2>
      <table className="w-full">
        <tbody className="grid lg:grid-cols-2 gap-x-2 gap-y-0.5 ">
          <InformationTableRow item={props.item1} value={props.value1} />
          <InformationTableRow item={props.item2} value={props.value2} />
          <InformationTableRow item={props.item3} value={props.value3} />
          <InformationTableRow item={props.item4} value={props.value4} />
          <InformationTableRow item={props.item5} value={props.value5} />
          <InformationTableRow item={props.item6} value={props.value6} />
          <InformationTableRow item={props.item7} value={props.value7} />
          <InformationTableRow item={props.item8} value={props.value8} />
          <InformationTableRow item={props.item9} value={props.value9} />
          <InformationTableRow item={props.item10} value={props.value10} />
          <InformationTableRow item={props.item11} value={props.value11} />
          <InformationTableRow item={props.item12} value={props.value12} />
          <InformationTableRow item={props.item13} value={props.value13} />
          <InformationTableRow item={props.item14} value={props.value14} />
          <InformationTableRow item={props.item15} value={props.value15} />
          <InformationTableRow item={props.item16} value={props.value16} />
        </tbody>
      </table>
    </div>
  );
};

export default InformationTable;
