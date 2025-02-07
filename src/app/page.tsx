import AboutUs from "@/components/AboutUs";
import { LastPage } from "@/components/eventPages";
import Events from "@/components/Events";
import Home from "@/components/homePages/Home";
import SponserGrid from "@/components/homePages/SponserGrid";
import Landing from "@/components/Landing";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HorizontalScroll = () => {
  return (
    <div
      className={`bg-bg-gradient h-screen overflow-x-scroll overflow-y-hidden  text-white ${cinzel.className}`}
    >
      <div className="flex min-w-[400vw] h-full">
        <section className="bg-gradient-radial from-[#09227A] via-[#05123F] to-black">
          
          <Home />
        </section>

        <section className="">
          <AboutUs />
        </section>
        <section className="">
          <Events />
        </section>
        <section className="bg-gradient-radial from-[#09227A] via-[#05123F] to-black">
          <SponserGrid />
        </section>
        <section className="bg-gradient-radial from-[#09227A] via-[#05123F] to-black">
          <LastPage
            isNavMenuShown={false}
            desktopSrc="/assets/home/last-bg-desktop.png"
            mobileSrc="/assets/home/last-bg-mobile.png"
          />
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll;
