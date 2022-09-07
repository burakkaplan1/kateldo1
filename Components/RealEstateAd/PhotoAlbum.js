import { PhotographIcon } from "@heroicons/react/outline";

function PhotoAlbum(props) {
  return (
    <div
      className="flex flex-col mb-20 w-full pb-2 border-b-4 border-blue-500"
      onClick={props.BigPhotoFunction}
    >
      <div className="max-h-[30rem] grid items-center justify-content-center m-2 grid-cols-1 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-4 md:gap-3">
        <img
          className="md:row-span-2 md:col-span-2 cursor-pointer lg:hover:scale-[1.01] transition-all duration-150 ease-out md:w-full md:h-full"
          layout="cover"
          src={props.image1}
          alt=""
        />
        <img
          className="hidden lg:inline-grid cursor-pointer hover:scale-[1.01] transition-all duration-150 ease-out w-full h-full"
          layout="cover"
          src={props.image2}
          alt=""
        />
        <img
          className="hidden lg:inline-grid cursor-pointer hover:scale-[1.01] transition-all duration-150 ease-out w-full h-full"
          layout="cover"
          src={props.image3}
          alt=""
        />
        <img
          className="hidden lg:inline-grid cursor-pointer hover:scale-[1.01] transition-all duration-150 ease-out w-full h-full"
          layout="cover"
          src={props.image4}
          alt=""
        />
        <img
          className="hidden lg:inline-grid cursor-pointer hover:scale-[1.01] transition-all duration-150 ease-out w-full h-full"
          layout="cover"
          src={props.image5}
          alt=""
        />
      </div>
      <div className="flex items-center mx-2 p-1 md:p-2 lg:p-3 dark:bg-gray-700 bg-blue-50 mt-4 w-48 cursor-pointer border md:border-2 border-blue-100 dark:border-gray-400 ">
        <PhotographIcon className="lg:w-8 lg:h-8 md:w-7 md:-7 w-6 h-6 dark:text-gray-200 text-blue-800" />
        <h1 className="text-blue-900 dark:text-gray-100 font-semibold text-sm md:text-md lg:text-xl ml-2">
          {props.PhotoNumber} Photos
        </h1>
      </div>
    </div>
  );
}

export default PhotoAlbum;
