import { useRecoilState } from "recoil";
import { ShowState } from "../../../atoms/states";
import { Tab } from "@headlessui/react";
import Search from "./Search";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MiddleSearchSection() {
  const [show, setShow] = useRecoilState(ShowState);

  function handleCategory(e) {
    setShow(e.target.selected);
  }

  return (
    <div className="my-8 mx-auto px-2 lg:px-20 flex justify-center  ">
      {/* Selector (all, real estate, vehicle) */}
      <div className="w-full max-w-6xl px-8 py-8 sm:px-0 dark:bg-gray-800 bg-blue-50 rounded-lg">
        <Tab.Group>
          <Tab.List className="flex mx-1 p-1 space-x-1 max-w-lg dark:bg-gray-700 bg-blue-600 rounded-md">
            <Tab
              key={show}
              className={({ selected }) =>
                classNames(
                  "w-full py-1 text-sm leading-5 font-medium dark:text-white text-blue-700 rounded-md",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "dark:bg-gray-900 bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Real Estate
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-1 text-sm leading-5 font-medium dark:text-white text-blue-700 rounded-md",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "dark:bg-gray-900 bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Vehicle
            </Tab>
          </Tab.List>
          <Tab.Panels className="">
            <Tab.Panel className={classNames("bg-white rounded-xl ")}>
              <Search
                FirstCategory="For Sale"
                SecondCategory="For Rent"
                placeholder="Search by Province, Municipality, Street ..."
              />
            </Tab.Panel>
            <Tab.Panel className={classNames("bg-white rounded-xl ")}>
              <Search
                FirstCategory="Automobile"
                SecondCategory="SUV"
                placeholder="Search by Brand, Model, Engine Power ..."
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default MiddleSearchSection;
