/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

function Landing() {
  const { schoolInfo } = useSelector((state: any) => state.schoolInfo);
  return (
    <div
      id="landing"
      className="h-full flex flex-col items-center justify-center mt-20 "
    >
      {schoolInfo.basicInfo?.map((info: any, index: number) => (
        <div
          key={index}
          className="w-full h-screen flex items-center flex-col text-center bg-gradient-to-r from-indigo-400 to-cyan-400 justify-center max-w-7xl p-6"
        >
          <p className="text-4xl font-bold text-white">
            Welcome to{" "}
            <span className="text-blue-600 text-5xl underline">
              {info.schoolName}
            </span>
          </p>
          <p className="text-lg text-white mt-4">{info.quote}</p>

          <div className="flex flex-col mt-10 items-start space-y-5 text-white">
            <p className="text-center text-xl font-semibold text-yellow-400">
              Latest News
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolInfo.latestNews?.map((news: any, newsIndex: number) => (
                <div
                  key={newsIndex}
                  className="px-6 py-4 rounded-lg shadow-md border"
                >
                  <p className="font-bold text-yellow-400">{news.title}</p>
                  <p>{news.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Landing;
