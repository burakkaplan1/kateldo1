import React, { useEffect, useState } from "react";
import { SaleOrRent } from "../../Provinces";
import { AnimatedSelect } from "./AnimatedSelect";
import axios from "axios";

const VehicleForm = () => {
  // LMkbh9ONzhIkm0A9QWZy/Q==DPJ0zUT4dRWEcz2b
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [confirmedYear, setConfirmedYear] = useState(false);
  const [models, setModels] = useState([]);
  const [model, setModel] = useState([]);

  const brandOptions = {
    method: "GET",
    url: "https://car-data.p.rapidapi.com/cars/makes",
    headers: {
      "X-RapidAPI-Key": "8639f16e72mshbc174c18fb5830cp1bcc06jsn745532145d5e",
      "X-RapidAPI-Host": "car-data.p.rapidapi.com",
    },
  };
  var brandList = [];

  useEffect(() => {
    axios
      .request(brandOptions)
      .then(function (response) {
        setBrands(response.data);
        console.log(brands);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  for (let i = 0; i < brands.length; i++) {
    brandList.push({ value: brands[i], label: brands[i] });
  }
  //  ---------------------------------------------------------------------------------------------------------------------------
  if (confirmedYear == true) {
    const modelOptions = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: {
        limit: "50",
        page: "0",
        year: year.toString(),
        make: brand.value,
      },
      headers: {
        "X-RapidAPI-Key": "8639f16e72mshbc174c18fb5830cp1bcc06jsn745532145d5e",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    axios
      .request(modelOptions)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <div className="dark:bg-gray-900 bg-blue-50">
      <form className="w-[80%] px-10 py-8 mx-auto" action="">
        <h1 className="text-xl font-semibold">Post Details</h1>
        <div className="shadow-md dark:bg-gray-800 bg-white p-10 rounded-md">
          <AnimatedSelect
            name="Brand"
            title="Brand"
            List={brandList}
            isMulti={false}
            onChange={() => {
              setBrand;
              setConfirmedYear(false);
            }}
          />
          <div className="flex">
            <input
              type="number"
              className="w-1/2 p-2 bg-slate-50 mt-4"
              onChange={(e) => setYear(e.target.value)}
              value={year}
              disabled={confirmedYear == true}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setConfirmedYear(true);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VehicleForm;
//   useEffect(() => {
//     fetch({
//       success: function (result) {
//         console.log(result);
//       },
//       error: function ajaxError(jqXHR) {
//         console.error("Error: ", jqXHR.responseText);
//       },
//     });
//   }, []);

//   const options = {
//     method: "GET",
//     url: "https://api.api-ninjas.com/v1/cars?make=audi",
//     headers: { "X-Api-Key": "LMkbh9ONzhIkm0A9QWZy/Q==DPJ0zUT4dRWEcz2b" },
//   };
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
//   useEffect(() => {
//     const modelOptions = {
//       method: "GET",
//       url: "https://car-data.p.rapidapi.com/cars",
//       params: { limit: "50", page: "0", make: brand.value },
//       headers: {
//         "X-RapidAPI-Key": "8639f16e72mshbc174c18fb5830cp1bcc06jsn745532145d5e",
//         "X-RapidAPI-Host": "car-data.p.rapidapi.com",
//       },
//     };

//     axios
//       .request(modelOptions)
//       .then(function (response) {
//         console.log(response.data.map((i) => i.model));
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//     const abc = { limit: "50", page: "0", make: brand.value };
//     console.log(abc);
//   }, [brand]);
