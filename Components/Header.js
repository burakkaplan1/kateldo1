import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import LogoPic from "../public/kateldomor.webp";
import {
  HomeIcon,
  TruckIcon,
  SearchIcon,
  TranslateIcon,
  DocumentAddIcon,
  IdentificationIcon,
} from "@heroicons/react/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { LanguageState } from "../atoms/states";

function Header() {
  const { data: session } = useSession();
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useRecoilState(LanguageState);
  const Router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          role="button"
          className="w-7 h-7 navBtn"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          role="button"
          className="w-7 h-7 text-blue-800 navBtn"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  const handleUploadButton = () => {
    if (session?.user) {
      Router.push({ pathname: "/upload/realestate/forsale" });
    }
    if (!session) {
      Router.push({ pathname: "/auth/signin" });
    }
  };
  return (
    <div className=" dark:bg-gray-900 bg-white h-20 z-[9999] flex items-center w-full mt-0 sticky shadow-sm border-b dark:border-b dark:border-b-gray-800 top-0 px-5">
      <div
        className="flex-center-between max-w-6xl mx-auto lg:mx-1 cursor-pointer"
        onClick={() => {
          Router.push({
            pathname: "/",
          });
        }}
      >
        <Image src={LogoPic} alt="logo" width={48} height={48} />
        <h1 className="logoText">Kateldo</h1>
      </div>
      {/* LOGO */}
      {/* Search */}
      <div className="max-w-xs mx-auto flex-1 ">
        <div className="flex relative mt-1 p-3 rounded-md ">
          <div className="absolute inset-y-0 pl-3 flex items-center">
            <SearchIcon className=" w-5 text-gray-500" />
          </div>

          <input
            className="dark:bg-gray-700 py-2 dark:placeholder-shown:text-gray-100 dark:text-gray-300 text-black  bg-gray-50 pl-10 block w-full sm:text-md border-blue-600 dark:border-gray-700 border-2 rounded-md focus:ring-black focus:border-black dark:focus:ring-gray-400 "
            type="text"
            placeholder={
              language === "Nederlands"
                ? "Zoek... "
                : language === "English"
                ? "Search... "
                : "Ara..."
            }
          />
        </div>
      </div>
      {/* Icons / Profile */}
      <div className="flex items-center space-x-4 ">
        <HomeIcon
          onClick={() => Router.push({ pathname: "/realestate/list" })}
          className="dark:text-white text-indigo-700 h-7 w-7 navBtn"
        />
        <TruckIcon
          className="dark:text-white  text-indigo-700 h-7 w-7 navBtn"
          onClick={() => Router.push({ pathname: "/vehicle/list" })}
        />
        <DocumentAddIcon
          onClick={handleUploadButton}
          className="dark:text-white text-indigo-700 h-7 w-7 navBtn"
        />
        <div className="relative h-7 w-7 flex items-center justify-center ">
          <Menu as="div">
            <Menu.Button className="flex items-center dark:text-white text-indigo-700 font-medium rounded focus:border-gray-500 focus:outline-none">
              <TranslateIcon className="w-7 h-7 navBtnUnhide" />
            </Menu.Button>
            <Menu.Items className="absolute  top-10 right-0 text-gray-600 bg-white border-2 border-gray-400 rounded">
              <Menu.Item
                as="div"
                onClick={() => setLanguage("Nederlands")}
                disabled={language === "Nederlands"}
                className="flex items-center  space-x-2 py-2 px-4 lg:px-10 hover:bg-blue-50 hover:text-blue-900 cursor-pointer"
              >
                Nederlands
              </Menu.Item>
              <Menu.Item
                as="div"
                onClick={() => setLanguage("English")}
                disabled={language === "English"}
                className="flex py-2 px-4 lg:px-10  hover:bg-blue-50 hover:text-blue-900 cursor-pointer"
              >
                English
              </Menu.Item>
              <Menu.Item
                as="div"
                onClick={() => setLanguage("Turkce")}
                disabled={language === "Turkce"}
                className="flex py-2 px-4 lg:px-10  hover:bg-blue-50 hover:text-blue-900 cursor-pointer"
              >
                Türkçe
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        {renderThemeChanger()}

        <div className="relative items-center justify-center ">
          <Menu as="div" className="flex items-center">
            <Menu.Button className="dark:text-white text-indigo-700 font-medium rounded focus:border-gray-500 focus:outline-none ">
              <IdentificationIcon className="w-7 h-7 navBtnUnhide" />
            </Menu.Button>
            <Menu.Items className="absolute w-40  top-10 right-0 text-gray-600 bg-white border-2 border-gray-400 rounded">
              {!session ? (
                <>
                  <Menu.Item
                    as="div"
                    onClick={() => signIn()}
                    className="flex items-center  space-x-2 py-2 px-4 lg:px-10 hover:bg-blue-50 hover:text-blue-900 cursor-pointer"
                  >
                    Sign In
                  </Menu.Item>
                  <Menu.Item
                    as="div"
                    className="flex py-2 px-4 lg:px-10  hover:bg-blue-50 hover:text-blue-900 cursor-pointer"
                  >
                    Sign Up
                  </Menu.Item>{" "}
                </>
              ) : (
                <Menu.Item
                  as="div"
                  onClick={() => signOut()}
                  className="flex py-2 px-4 lg:px-10  hover:bg-blue-50 hover:text-blue-900 cursor-pointer"
                >
                  Sign Out
                </Menu.Item>
              )}
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
