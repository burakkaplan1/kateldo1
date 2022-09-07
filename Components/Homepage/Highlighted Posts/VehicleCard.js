function RealEstateCard(props) {
  const color = props.Color;
  return (
    <div className="flex flex-col md:w-full w-4/5 mb-3 lg:h-[348px] border dark:border-white dark:bg-tranparent border-blue-300 rounded-md hover:scale-[1.01] md:hover:scale-[1.03] transition-all duration-200 ease-out">
      <div className="relative overflow-hidden">
        <img
          className="rounded-md w-full lg:h-[258px] max-h-64 object-cover"
          src={props.image}
          alt=""
        />
        <span className="absolute top-4 -right-7 px-10 font-semibold text-white bg-indigo-700 rotate-45 ">
          {props.VehicleType}
        </span>
      </div>

      <div className="p-2">
        <div className="flex justify-between font-semibold text-lg dark:text-white text-blue-600">
          <div>
            <p>
              {props.Brand}, {props.Model}
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
            {new Intl.NumberFormat("nl-NL", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(props.Kilometers)}{" "}
            Km, {props.GearType}
          </p>
        </div>
        <div className="pt-3">
          <div className="flex space-x-3 dark:text-gray-200 text-gray-500 text-xs">
            <p>{props.FuelType}</p>
            <p className="font-extrabold"> · </p>
            <p>
              {props.EngineSize !== "Electric Motor"
                ? props.EngineSize
                : props.Torque}{" "}
              {props.EngineSize !== "Electric Motor" ? "cc" : "Nm"}
            </p>
            <p className="font-extrabold"> · </p>
            <p>{props.Horsepower} hp</p>
            <p className="font-extrabold"> · </p>
            <div className="flex items-center">
              <p>{props.Color}</p>{" "}
              <div
                style={{ backgroundColor: props.Color }}
                className="w-2 h-2 rounded-sm ml-1 "
              ></div>
            </div>
            <p className="font-extrabold"> · </p>
            <p>{props.ModelYear} Model</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstateCard;
