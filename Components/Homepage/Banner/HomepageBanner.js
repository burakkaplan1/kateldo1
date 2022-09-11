import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

function HomepageModal() {
  const { t } = useTranslation("Common");
  const Router = useRouter();

  const bannerCards = {
    left: {
      imageURL:
        "https://media.istockphoto.com/photos/colonial-style-house-picture-id1284097677?b=1&k=20&m=1284097677&s=170667a&w=0&h=1A7BkHG5OU4WCN7m22OOhvVmU21q4UsYVJPrS1kgcKI=",
      text: t("BannerLeftText"),
      coloredText: t("BannerLeftColoredText"),
      buttonText: t("BannerLeftButtonText"),
      buttonURL: "/realestate/list",
    },
    right: {
      imageURL:
        "https://media.istockphoto.com/photos/road-trip-with-my-best-friend-picture-id1324380685?b=1&k=20&m=1324380685&s=170667a&w=0&h=T7fFkZmHzvye117esYVj5aRmZ5po_67XbDxIELFkBDg=",
      text: t("BannerRightText"),
      coloredText: t("BannerRightColoredText"),
      buttonText: t("BannerRightButtonText"),
      buttonURL: "/vehicle/list",
    },
  };
  useEffect(() => {
    console.log(Object.values(bannerCards).map((i) => i.imageURL));
  }, []);

  return (
    <div className="mx-2 flex space-x-4">
      {Object.values(bannerCards).map((card) => (
        <div className=" relative flex justify-center items-center w-full mx-auto">
          <img
            className="w-full min-h-[50vh] object-cover rounded-lg brightness-50 dark:filter dark:grayscale"
            layout=""
            src={card.imageURL}
            alt="homepage pic"
          />
          <h1 className="absolute top-10 left-[10%] max-w-sm text-3xl sm:text-5xl font-extrabold text-white cursor-default">
            {card.text}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br text-5xl sm:text-6xl from-purple-500 to-blue-500 ">
              {card.coloredText}
            </span>
          </h1>
          <div className="absolute bottom-[15%] left-[10%] min-w-[30%]">
            <button
              role="button"
              className="p-1.5 w-full dark:bg-gray-900 bg-white border-2 border-blue-500 dark:border-gray-800 text-blue-500 dark:text-gray-200 text-sm sm:text-lg rounded-lg hover:bg-blue-500 dark:hover:bg-gray-800 hover:text-gray-100 dark:hover:text-white  focus:border-4 focus:ring-blue-300 dark:focus:ring-white cursor-pointer"
              onClick={() => Router.push({ pathname: card.buttonURL })}
            >
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomepageModal;
