import { ArrowRight } from "lucide-react";
import BannerImg from "../assets/bannerImg/banner1.png";

const Banner = () => {
  return (
    <>
      <div className="min-h-60 bg-gradient-to-t from-red-600 to-red-500 px-5 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-2xl sm:text-5xl md:text-4xl lg:text-5xl text-white font-bold pt-10">
            Give Your Workout
          </h1>
          <h1 className="text-5xl sm:text-5xl md:text-4xl lg:text-5xl text-yellow-400 font-bold pt-5">
            A New Style!
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white pt-2 w-full lg:w-96">
            Success is Always About Grace, It's About Consistency. Consistency
            and hard work gain success, Greatness will come.
          </p>
          <button className="flex bg-white text-red-600 mt-10 h-12 sm:h-14 px-4 sm:px-6 text-base sm:text-xl font-bold rounded-full items-center gap-2">
            Explore Now <ArrowRight />
          </button>
        </div>
        <img src={BannerImg} alt="Banner image 1" className="pb-10 lg:w-1/2" />
      </div>
    </>
  );
};

export default Banner;
