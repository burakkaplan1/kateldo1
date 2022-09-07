const InfoTable = (props) => {
  return (
    <div className=" mt-10">
      <h2 className="text-2xl mb-5 border-b border-gray-200">{props.title}</h2>
      <div className="lg:flex lg:items-center lg:justify-between">
        <table className="table-auto w-full lg:w-[49%] ">
          <tbody className="w-full">
            <tr className="dark:bg-gray-700 bg-[#edf2ff] flex items-center justify-between px-2 py-1 text-sm">
              <td className="dark:text-white">{props.FirstTitle}</td>
              <td className="font-semibold text-blue-900 dark:text-white">
                {props.FirstData}
              </td>
            </tr>
            {props.SecondTitle !== undefined && (
              <tr className="dark:bg-gray-600 bg-[#fffe] flex items-center justify-between px-2 py-1 text-sm">
                <td className="dark:text-white">{props.ThirdTitle}</td>
                <td className="font-semibold text-blue-900 dark:text-white">
                  {props.ThirdData}
                </td>
              </tr>
            )}
            {props.FourthTitle !== undefined && (
              <tr className="dark:bg-gray-700 bg-[#edf2ff] flex items-center justify-between px-2 py-1 text-sm">
                <td className="dark:text-white">{props.FifthTitle}</td>
                <td className="font-semibold text-blue-900 dark:text-white">
                  {props.FifthData}
                </td>
              </tr>
            )}
            {props.SixthTitle !== undefined && (
              <tr className="dark:bg-gray-600 bg-[#fffe] flex items-center justify-between px-2 py-1 text-sm">
                <td>{props.SeventhTitle}</td>
                <td className="font-semibold text-blue-900 dark:text-white">
                  {props.SeventhData}
                </td>
              </tr>
            )}
            {props.EighthTitle !== undefined && (
              <tr className="dark:bg-gray-700 bg-[#edf2ff] flex items-center justify-between px-2 py-1 text-sm">
                <td>{props.NinthTitle}</td>
                <td className="font-semibold text-blue-900 dark:text-white">
                  {props.NinthData}
                </td>
              </tr>
            )}
            {props.EleventhTitle !== undefined &&
              props.TenthTitle !== undefined && (
                <tr className="dark:bg-gray-600 bg-[#fffe] flex items-center justify-between px-2 py-1 text-sm">
                  <td>{props.EleventhTitle}</td>
                  <td className="font-semibold text-blue-900">
                    {props.EleventhData}
                  </td>
                </tr>
              )}
          </tbody>
        </table>
        <table className="table-auto w-full lg:w-[49%]">
          <tbody className="w-full">
            {props.FirstTitle !== undefined && (
              <tr className="dark:bg-gray-600 lg:dark:bg-gray-700 bg-[#fffe] lg:bg-[#edf2ff] flex items-center justify-between px-2 py-1 text-sm">
                <td>{props.SecondTitle}</td>
                <td className="font-semibold text-blue-900 dark:text-white">
                  {props.SecondData}
                </td>
              </tr>
            )}
            {props.ThirdTitle !== undefined && (
              <tr className="dark:bg-gray-700 lg:dark:bg-gray-600 bg-[#edf2ff] lg:bg-[#fffe] flex items-center justify-between px-2 py-1 text-sm">
                <td>{props.FourthTitle}</td>
                <td className="font-semibold text-blue-900 dark:text-white">
                  {props.FourthData}
                </td>
              </tr>
            )}
            {props.FifthTitle !== undefined && (
              <tr className="dark:bg-gray-600 lg:dark:bg-gray-700 bg-[#fffe] lg:bg-[#edf2ff] flex items-center justify-between px-2 py-1 text-sm">
                <td>{props.SixthTitle}</td>
                <td className="font-semibold text-blue-900 dark:text-white">
                  {props.SixthData}
                </td>
              </tr>
            )}
            {props.SeventhTitle !== undefined && (
              <tr className="dark:bg-gray-700 lg:dark:bg-gray-600 bg-[#edf2ff] lg:bg-[#fffe] flex items-center justify-between px-2 py-1 text-sm">
                <td>{props.EighthTitle}</td>
                <td className="font-semibold text-blue-900 dark:text-white">
                  {props.EighthData}
                </td>
              </tr>
            )}
            {props.NinthTitle !== undefined && (
              <tr className="dark:bg-gray-600 lg:dark:bg-gray-700 bg-[#fffe] lg:bg-[#edf2ff] flex items-center justify-between px-2 py-1 text-sm">
                <td>{props.TenthTitle}</td>
                <td className="font-semibold text-blue-900 dark:text-white">
                  {props.TenthData}
                </td>
              </tr>
            )}
            {props.TwelvethTitle !== undefined &&
              props.EleventhTitle !== undefined && (
                <tr className="dark:bg-gray-700 lg:dark:bg-gray-600 bg-[#edf2ff] lg:bg-[#fffe] flex items-center justify-between px-2 py-1 text-sm">
                  <td>{props.TwelvethTitle}</td>
                  <td className="font-semibold text-blue-900 dark:text-white">
                    {props.TwelvethData}
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoTable;
