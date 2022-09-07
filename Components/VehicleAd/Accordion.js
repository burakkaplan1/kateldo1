import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import AccordionItem from "./AccordionItem";
import AccordionArrays, { Security } from "./AccordionArrays";
import { useEffect } from "react";
import AccordionDisclosure from "./AccordionDisclosure";

export default function Accordion(props) {
  const SecurityItems = [];

  for (let i = 0; i < Security.length; i++) {
    var valueName = String(Security[i].name);
    var propsName = `props.valueName`;
    SecurityItems.push(
      <AccordionItem item={Security[i].name} value={valueName} />
    );
  }
  useEffect(() => {
    Security.map((i, index) =>
      console.log(
        i,
        index,
        `value${index}`,
        `value${i.name}`,
        `${i.name}`,
        `props.${i.name}`,
        i["name"]
      )
    );
  }, []);

  //   {Security.map((item, index) => (
  //     <AccordionItem
  //       key={index}
  //       item={item.name}
  //       // value={props.item["name"]}
  //     />
  //   ))}

  return (
    <div className="w-full pt-4">
      <div className="mx-auto w-full  rounded-2xl bg-white dark:bg-slate-800 ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 dark:bg-gray-700 px-4 py-2 text-left text-sm font-medium text-blue-900 dark:text-blue-200 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Description</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-blue-500 dark:text-blue-200`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-50">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {props.SecurityArray && <AccordionDisclosure Title="Security" ArrayName={props.SecurityArray} />}
        {props.InteriorArray && <AccordionDisclosure Title="Internal Hardware" ArrayName={props.InteriorArray} />}
        {props.PartsArray && <AccordionDisclosure Title="Changed or Painted Parts" ArrayName={props.PartsArray} />}
        {props.ExternalArray && <AccordionDisclosure Title="External Hardware" ArrayName={props.ExternalArray} />}
        {props.MultimediaArray && <AccordionDisclosure Title="Multimedia" ArrayName={props.MultimediaArray} />}
      </div>
    </div>
  );
}
