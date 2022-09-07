import Select from "react-select";
import makeAnimated from "react-select/animated"; //Multiselect
import { useTheme } from "next-themes";

export const AnimatedSelect = (props) => {
  const { theme } = useTheme();
  const animatedComponents = makeAnimated();
  const customSelectTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#495057", // focus ve selected item
        primary25: "#adb5bd", // listedekileri hover'layınca
        neutral0: "#1e293b", // inputun içi ve yazı rengi
        neutral10: "#334155", // inputun içi ve yazı rengi
        neutral50: "#fff", // liste'de seleceted item yazı rengi
        neutral80: "#fff", // input'da seleceted item yazı rengi
      },
    };
  };
  return (
    <div
      className={`relative  ${
        props.isMulti === true ? "w-[60%]" : "w-[40%]"
      } mt-10`}
    >
      <label
        htmlFor={props.name}
        className=" absolute -top-5 text-sm font-semibold"
      >
        {props.title} <span className="text-red-600">*</span>
      </label>
      <Select
        closeMenuOnSelect={props.isMulti == true ? false : true}
        name={props.name}
        theme={theme === "dark" && customSelectTheme}
        components={animatedComponents}
        isMulti={props.isMulti}
        options={props.List}
        onChange={props.onChange}
        isSearchable={props.isMulti}
      />
    </div>
  );
};
