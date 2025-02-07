import Image from "next/image";
import { Cinzel } from "next/font/google";
import { AngelDayText } from "../SVGs";
import NavMenu from "../includes/NavMenu";
import EventHomeCard from "../includes/EventHomeCard";
import Link from "next/link";
import BackgroundPageImg from "../includes/BackgroudPageImg";
import { MokshaLogo } from "../SVGs";
import SnowVideo from "../includes/SnowVideo";
const cinzel = Cinzel({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="h-full w-screen sm:w-[130vw] relative" id="event-home">
      {/* <div className="absolute z-[2] w-full h-full aspect-video tranlate-x-1/2 "> */}
        <BackgroundPageImg
          mobileSrc="/assets/home/dragon-bg-mobile.png"
          desktopSrc="/assets/home/dragon-bg-desktop.png"
          alt="Dragon"
          shadow={false}
        />
        <SnowVideo />
      {/* </div> */}
      <div className="absolute inset-0">

      <div className="relative z-[2] h-full w-screen md:pt-14 lg:pt-12 flex flex-col justify-center items-center">
        <div className="w-10/12 max-w-2xl mx-auto relative z-[8]">
          <MokshaLogo className="fill-white transition-colors duration-300 ease-in-out" />
        </div>
      </div>
      <NavMenu className="max-sm:bottom-8" />
      </div>
    </div>
  );
}



