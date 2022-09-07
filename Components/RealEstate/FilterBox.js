import { GrClose } from "react-icons/gr";

export default function FilterBox(props) {
  //   const removeMinPrice = MinPriceRemoveState();
  return (
    <div
      className="odd:bg-blue-500 even:bg-orange-500 text-sm px-2 py-1 flex items-center justify-between space-x-2 h-8 text-gray-50 cursor-pointer "
      onClick={props.removeItem}
    >
      <span className="filter-box-text">
        {props.filterContext} {props.beforeFilterContext}{" "}
        <span className="font-semibold text-md">{props.filterValue}</span>
        {props.afterFilterContext}
      </span>
      <span className="">
        <GrClose className="w-3 h-3 text-gray-400" />
      </span>
    </div>
  );
}
