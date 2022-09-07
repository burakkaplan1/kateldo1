import React from "react";
import { useTranslation } from "next-i18next";

const InformationTableRow = (props) => {
  const { t } = useTranslation();
  return (
    <>
      {props.item && (
        <tr className="flex items-center justify-between dark:odd:bg-gray-800 dark:even:bg-slate-800 odd:bg-blue-50 even:bg-[#edf1fa] p-1 text-sm">
          <td className="">{props.item}</td>
          <td className="font-semibold text-blue-800 dark:text-blue-200">
            {[props.value].toString().includes("undefined") ||
            props.value == null ||
            props.value == false
              ? "Not Available"
              : props.value}{" "}
            {/* {t("Common:NotAvailable")} */}
          </td>
        </tr>
      )}
    </>
  );
};

export default InformationTableRow;
