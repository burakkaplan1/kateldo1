import { Tab } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { ShowState } from "../../../atoms/states";
import SearchInputArea from "./SearchInputArea";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Search(props) {
  const [show, setShow] = useRecoilState(ShowState);
  return (
    <div className="dark:bg-gray-800 bg-blue-50 ">
      {/* Selector (all, real estate, vehicle) */}
      <div className="w-full mx-1 px-2 py-2 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex max-w-sm p-1 space-x-1 dark:bg-gray-700 bg-blue-600 rounded-md">
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
              {props.FirstCategory}
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
              {props.SecondCategory}
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel className={classNames(" rounded-xl p-3")}>
              <SearchInputArea placeholder={props.placeholder} />
            </Tab.Panel>
            <Tab.Panel className={classNames(" rounded-xl ")}>
              <SearchInputArea placeholder={props.placeholder} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      {/* Search bar */}
    </div>
  );
}

export default Search;
