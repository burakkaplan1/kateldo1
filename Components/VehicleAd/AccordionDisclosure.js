import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import AccordionItem from "./AccordionItem";

const AccordionDisclosure = (props) => {
  const PropArray = props.ArrayName;
  return (
    <Disclosure as="div" className="mt-2">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 dark:bg-gray-700 px-4 py-2 text-left text-sm font-medium text-blue-900 dark:text-blue-200 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
            <span>{props.Title}</span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-blue-500 dark:text-blue-200`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="grid grid-cols-responsive gap-y-4 gap-x-0.5 px-2 pt-4 pb-2">
            {Object.entries(PropArray)
              .sort() //By first letter
              .sort((a, b) => b[1] - a[1]) // by bool value
              .map((item) => (
                <AccordionItem item={item[0]} value={item[1]} />
              ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default AccordionDisclosure;
