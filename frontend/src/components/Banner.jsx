import { ArrowRight } from 'lucide-react';
import BannerImg from "../assets/bannerImg/banner1.png";

const Banner = () => {
  return(
    <>
    <div className='min-h-96 bg-gradient-to-t from-red-600 to-red-500 px-5'>
      <h1 className='text-5xl text-white font-bold pt-16'>Give Your Workout</h1>
      <h1 className='text-5xl text-yellow-400 font-bold pt-5'>A New Style!</h1>
      <p className='text-white pt-2 text-xl w-96'>Success is Always About Grace, It's About Consistency. Consistency and hard work gain success, Greatness will come.</p>
      <button className='flex bg-white text-red-600 mt-10 h-14 px-6 text-xl font-bold rounded-full items-center gap-2'>Explore Now <ArrowRight /></button>
      <img src={BannerImg} alt="Banner image 1" className='pb-10' />
    </div>
    </>
  );
};

export default Banner;
