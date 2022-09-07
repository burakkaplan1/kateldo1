function RealEstateCard(props) {
  return (
    <div className="flex flex-col md:w-full w-4/5 mb-3 border dark:border-white dark:bg-transparent border-blue-300 rounded-md hover:scale-[1.01] md:hover:scale-[1.03] transition-all duration-200 ease-out cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          className="rounded-md w-full"
          layout="cover"
          src={props.image}
          alt=""
        />
        <span className="absolute top-4 -right-7 px-7 font-semibold text-white bg-indigo-700 rotate-45 ">
          {props.RentOrSale}
        </span>
      </div>

      <div className="p-2">
        <div className="flex-center-between font-semibold text-lg dark:text-white text-blue-600">
          <div>
            <p>
              {props.Province}, {props.Municipality}
            </p>
          </div>
          <p className="dark:text-white text-blue-900 font-bold ">
            {new Intl.NumberFormat("nl-NL", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(props.Price)}
          </p>
        </div>
        <div className="text-sm mt-0 pt-0">
          <p>
            {props.PostalCode}, {props.Street}
          </p>
        </div>
        <div className="pt-3">
          <div className="flex space-x-3 dark:text-gray-200 text-gray-500 text-xs">
            <p>
              {new Intl.NumberFormat("nl-NL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(props.PlotSize)}
              m²
            </p>
            <p className="font-extrabold"> · </p>
            <p>
              {props.RoomNumber} {props.RoomNumber > 1 ? "rooms" : "room"}
            </p>
            <p className="font-extrabold"> · </p>
            <p>
              {props.BedroomNumber}{" "}
              {props.BedroomNumber > 1 ? "bedrooms" : "bedroom"}
            </p>
            <p className="font-extrabold"> · </p>
            <p>{props.HouseType}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstateCard;
