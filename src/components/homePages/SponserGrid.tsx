import { Cinzel } from "next/font/google";
import Image from "next/image";
import { PAST_SPONSORS } from "@/constant/sponser";

const cinzel = Cinzel({
  subsets: ["latin"],
});

export interface SponsorProps {
  image: string;
    name: string;
    className?: string;
}


export default function SponserGrid() {
  return (
    <section
      className={`flex flex-col items-center justify-center w-auto min-w-[100vw] h-full relative px-16 ${cinzel.className}`}
    >
      <div className="hidden md:block absolute top-0 right-0 z-0 bg-opacity-10">
        <Image
          src="/assets/home/stone.png"
          alt="Stone"
          width={300}
          height={300}
          className="transform -translate-x-1/3 -translate-y-1/3 w-full"
        />
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 z-0">
        <Image
          src="/assets/home/stone.png"
          alt="Stone"
          width={300}
          height={300}
          className="transform translate-x-1/3 translate-y-1/3 w-full"
        />
      </div>
      <div className="relative mt-8 md:mt-10 lg:mt-16 w-full h-full flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-white font-bold mb-8">
          Past Sponsors
        </h1>
        <div className="w-full h-full overflow-x-auto">
          <div className="grid grid-flow-col auto-cols-[150px]  grid-rows-[repeat(4,minmax(120px,1fr))] md:grid-rows-[repeat(4,minmax(120px,1fr))] gap-2 md:gap-4 lg:gap-6 justify-center items-center content-center">
            {PAST_SPONSORS.length > 0 && PAST_SPONSORS.map((sponsor, i) => (
              <div
                key={i}
                className={`relative w-full h-full bg-[#a5a5d2] rounded-lg overflow-hidden ${sponsor.className}`}
                
              >
                <Image
                  src={`${sponsor.image}`}
                  alt={sponsor.name}
                  fill={true}
                  className={`object-contain object-center mix-blend-multiply col-span-1 row-span-1 ${sponsor.className}`}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
