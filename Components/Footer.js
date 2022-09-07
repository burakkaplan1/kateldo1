function Footer() {
  return (
    <div className="dark:bg-gray-900 bg-gray-100 grid grid-cols-2 md:grid-cols-4 justify-evenly justify-items-center border-t-4 border-blue-300 dark:border-gray-700 px-[5%] py-10 ">
      {/* far left */}
      <div className="mb-6 justify-self-stretch">
        <h3 className="font-semibold text-md md:text-xl mb-4">Real Estate</h3>
        <ul className="list-none leading-8 text-sm md:text-md dark:text-gray-100 text-gray-600 ">
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Find the perfect house
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Find the perfect office / shop
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Find an estate agent
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Value check
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Business
          </li>
        </ul>
      </div>
      {/* center-left */}
      <div className="mb-6 justify-self-stretch">
        <h3 className="font-semibold text-md md:text-xl mb-4">Vehicle</h3>

        <ul className="list-none leading-8 text-sm md:text-md  dark:text-gray-100 text-gray-600 ">
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Find the perfect vehicle
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Sell you car
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Value check
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Register your showroom to Kateldo
          </li>
        </ul>
      </div>
      {/* Right-center */}
      <div className="justify-self-stretch">
        <h3 className="font-semibold text-md md:text-xl mb-4">Services</h3>
        <ul className="list-none leading-8 text-sm md:text-md dark:text-gray-100 text-gray-600 ">
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Posting
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Lawsuit
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Customer service
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Pricing
          </li>
        </ul>
      </div>
      {/* Far-Right */}
      <div className="justify-self-stretch">
        <h3 className="font-semibold text-md md:text-xl mb-4">Company</h3>
        <ul className="list-none leading-8 text-sm md:text-md dark:text-gray-100 text-gray-600 ">
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            About us
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            History
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Locations
          </li>
          <li className="cursor-pointer hover:scale-[1.01] hover:text-gray-500 dark:hover:text-gray-200 transition-all duration-150">
            Work with us
          </li>
        </ul>
      </div>
      {/*  */}
    </div>
  );
}

export default Footer;
