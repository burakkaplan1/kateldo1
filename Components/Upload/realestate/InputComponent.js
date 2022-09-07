import InputMask from "react-input-mask";
export const InputComponent = (props) => {
  return (
    <div className="relative mt-12">
      <label
        htmlFor={props.id}
        className=" absolute -top-5 text-sm font-semibold"
      >
        {props.Title}
        <span className="text-red-600"> {props.required && "*"}</span>
      </label>
      <input
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        className="w-full md:w-[50%] rounded-md dark:bg-gray-800 dark:text-white border-gray-300 border py-2 px-2 dark:border-gray-200 "
        type={props.type}
        onChange={props.onChange}
        required={props.required}
        maxLength={props.maxLength}
      />
    </div>
  );
};

export const MaskInputComponent = (props) => {
  return (
    <div className="relative mt-12">
      <label
        htmlFor={props.id}
        className=" absolute -top-5 text-sm font-semibold"
      >
        {props.Title}
        <span className="text-red-600"> {props.required && "*"}</span>
      </label>
      <InputMask
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        className="w-full md:w-[50%] rounded-md border dark:bg-gray-800 dark:text-white border-gray-300  py-2 px-2 dark:border-gray-200 "
        onChange={props.onChange}
        required={props.required}
        mask={props.mask}
        type="text"
      />
    </div>
  );
};

export const InsideLabelInput = (props) => {
  return (
    <div className="mt-12">
      <div className="relative ">
        <label
          htmlFor={props.name}
          className=" absolute -top-5 text-sm font-semibold"
        >
          {props.title}{" "}
          {props.required && <span className="text-red-600">*</span>}
        </label>
        <div className="flex w-full md:w-[40%] items-center justify-between rounded-md border border-gray-400 focus:ring-blue-700 focus:border-blue-700">
          <input
            type={props.type}
            id={props.name}
            name={props.name}
            className="w-[50%] rounded-md border-0 focus:ring-0 dark:bg-gray-800 dark:text-white border-gray-300  py-2 px-2 dark:border-gray-200 "
            onChange={props.onChange}
            required={props.required}
            value={props.value}
            maxLength={props.maxLength}
          />

          <p className="mr-3 pl-3 border-l-2 font-semibold">
            {props.value > 1 ? (
              <span>{props.plural}</span>
            ) : (
              <span>{props.singular}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export const InputWithCheckBox = (props) => {
  return (
    <div className="mt-12">
      <div className="relative flex gap-x-5 ">
        <label
          htmlFor={props.name}
          className=" absolute -top-5 text-sm font-semibold"
        >
          {props.title}{" "}
          {props.required && <span className="text-red-600">*</span>}
        </label>
        <div className="flex w-full md:w-[40%] items-center justify-between rounded-md border border-gray-400 focus:ring-blue-700 focus:border-blue-700">
          <input
            type={props.type}
            id={props.name}
            name={props.name}
            className="w-[50%] rounded-md border-0 focus:ring-0 dark:bg-gray-800 dark:text-white border-gray-300  py-2 px-2 dark:border-gray-200 "
            onChange={props.onChange}
            required={props.required}
            value={props.value}
            maxLength={props.maxLength}
          />
          <p className="mr-3 pl-3 border-l-2 font-semibold">
            {props.value > 1 ? (
              <span>{props.plural}</span>
            ) : (
              <span>{props.singular}</span>
            )}
          </p>
        </div>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox accent-blue-500 "
            onChange={props.CheckboxOnChange}
          />
          <span className="ml-2 text-gray-400">{props.CheckboxTitle}</span>
        </label>
      </div>
    </div>
  );
};
