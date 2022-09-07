import {
  AtSymbolIcon,
  CalendarIcon,
  ClockIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { useRecoilState } from "recoil";
import { LanguageState } from "../../atoms/states";
const RealtorBox = (props) => {
  const [language, setLanguage] = useRecoilState(LanguageState);
  return (
    <div className="flex justify-center w-full h-[30rem] ">
      <div className="flex relative flex-col border-2 border-gray-400 rounded-xl h-full w-[80%]">
        {/* top */}
        <div className="flex justify-center dark:bg-gray-700 bg-blue-100 rounded-t-xl h-[30%] w-full">
          <h1 className="text-3xl mt-5 dark:text-white text-blue-900 font-semibold">
            {props.RealtorName}
          </h1>
        </div>
        {/* Bottom */}
        <div className="px-3 pt-24 dark:bg-gray-800 bg-[#fffe] rounded-b-xl">
          <div className="flex items-center hover:scale-[1.01] dark:text-white dark:hover:text-gray-100 text-blue-600 hover:text-blue-900 mb-4">
            <PhoneIcon className="w-6 h-6 mr-3" />
            <a href={`tel:${props.RealtorPhoneTag}`}>
              {language === "English"
                ? "Contact by phone"
                : language === "Nederlands"
                ? "Telefonisch contact opnemen"
                : "Telefon ile iletişime geç"}
            </a>
          </div>
          <div className="flex items-center hover:scale-[1.01] dark:text-white dark:hover:text-gray-100 text-blue-600 hover:text-blue-900 mb-4 cursor-pointer">
            <ClockIcon className="w-6 h-6 mr-3" />
            <p>
              {language === "English"
                ? "Open hours:"
                : language === "Nederlands"
                ? "Openingsuren:"
                : "Açık saatler:"}{" "}
              {props.OpenningHour}&nbsp;{props.AmPm1}&nbsp;-&nbsp;
              {props.ClosingHour}&nbsp;{props.AmPm2}
            </p>
          </div>
          <div className="flex items-center hover:scale-[1.01] dark:text-white dark:hover:text-gray-100 text-blue-600 hover:text-blue-900 mb-4 cursor-pointer">
            <CalendarIcon className="w-6 h-6 mr-3" />
            <p>
              {language === "English"
                ? "Open days:"
                : language === "Nederlands"
                ? "Open dagen:"
                : "Açık günler:"}{" "}
              {props.OpenningDay} - {props.ClosingDay}
            </p>
          </div>
          <div className="flex items-center hover:scale-[1.01] dark:text-white dark:hover:text-gray-100 text-blue-600 hover:text-blue-900 mb-4">
            <AtSymbolIcon className="w-6 h-6 mr-3" />
            <a href={`mailto:${props.RealtorMail}`}>
              {" "}
              {language === "English"
                ? "E-mail to contact"
                : language === "Nederlands"
                ? "E-mail naar contact"
                : "E-mail ile iletişime geç"}
            </a>
          </div>
          <div className="flex flex-row items-center justify-evenly">
            {props.Website !== undefined && (
              <div className="flex w-10 h-10 border border-gray-400 hover:border-blue-300 items-center justify-center rounded-md">
                <a href={`https://www.${props.Website}`}>
                  {" "}
                  <GlobeAltIcon className="text-gray-600 hover:text-yellow-600 w-6 h-6" />
                </a>
              </div>
            )}
            {props.LinkedIn !== undefined && (
              <div className="flex w-10 h-10 border border-gray-400 hover:border-blue-300 items-center justify-center rounded-md">
                <a href={`https://www.${props.LinkedIn}`}>
                  <FaLinkedinIn className="text-gray-600 hover:text-[#2867B2] w-6 h-6" />
                </a>
              </div>
            )}
            {props.Instagram !== undefined && (
              <div className="flex w-10 h-10 border border-gray-400 hover:border-blue-300 items-center justify-center rounded-md">
                <a href={`https://www.${props.Instagram}`}>
                  <FaInstagram className="text-gray-600 hover:text-black w-6 h-6" />
                </a>
              </div>
            )}
            {props.Facebook !== undefined && (
              <div className="flex w-10 h-10 border border-gray-400 hover:border-blue-300 items-center justify-center rounded-md">
                <a href={`https://www.${props.Facebook}`}>
                  <FaFacebookF className="text-gray-600 hover:text-[#4267B2] w-6 h-6" />
                </a>
              </div>
            )}
            {props.Twitter !== undefined && (
              <div className="flex w-10 h-10 border border-gray-400 hover:border-blue-300 items-center justify-center rounded-md">
                <a href={`https://www.${props.Twitter}`}>
                  <FaTwitter className="text-gray-600 hover:text-[#1DA1F2] w-6 h-6" />
                </a>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center mt-3">
            <p className="dark:text-blue-100 text-blue-600 text-sm cursor-pointer">
              {language === "English"
                ? "Report this post"
                : language === "Nederlands"
                ? "Meld deze post"
                : "Sorun bildir"}
            </p>
          </div>
        </div>
        {/* Image */}
        <img
          className="absolute object-scale-down left-[50%] top-[30%] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-40 md:h-40 rounded-xl border-4 dark:border-blue-900 border-blue-300"
          src={props.RealtorImage}
          alt="Realtor's Image"
        />
      </div>
    </div>
  );
};

export default RealtorBox;
