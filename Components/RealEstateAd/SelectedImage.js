import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "@heroicons/react/outline";

const SelectedImage = (props) => {
  return (
    <div className="w-full relative flex items-center justify-between">
      <div className="flex items-center justify-center justify-items-center">
        <ChevronLeftIcon
          onClick={props.PrevImage}
          className="h-5 w-5 bg-blue-500 rounded-full text-white"
        />
      </div>
      <div className="w-[80%]">
        <img src={props.CurrentImage} alt="" className="w-full h-full" />
      </div>
      <div className="flex items-center justify-center justify-items-center">
        <ChevronRightIcon
          onClick={props.NextImage}
          className="h-5 w-5 bg-blue-500 rounded-full text-white"
        />
      </div>
      <div className="absolute top-4 right-4">
        <XIcon className="w-6 h-6" onClick={props.CloseFunction} />
      </div>
    </div>
  );
};

export default SelectedImage;
