import EventCardFooter from "@/components/includes/EventCardFooter";
import Image from "next/image";
import { Cinzel } from "next/font/google";
import TextDecorater from "@/components/SVGs/TextDecorater";

const cinzel = Cinzel({
  subsets: ["latin"],
});

export default function EventRegisterPage() {
  return (
    <section className={`bg-black min-w-screen h-svh ${cinzel.className}`}>
      <main className="overflow-hidden min-w-screen h-svh bg-[#D77519] bg-opacity-15 rounded-md p-8 lg:p-16 flex gap-12 flex-col lg:flex-row">
        <div className="hidden w-full lg:w-1/3 lg:flex flex-row lg:flex-col gap-8 lg:gap-16">
          <div className="border-[#874A11] border-2 rounded-3xl aspect-[6/4] relative w-full md:w-1/2 lg:w-auto hidden md:block">
            <Image
              src="/assets/events/dummy-card.jpg"
              alt="Event Image"
              fill={true}
              sizes="(max-width: 640px) 100%, 640px"
              className="rounded-3xl object-cover overflow-hidden"
            />
            <EventCardFooter className="ps-3 max-w-[250px]" />
          </div>
          <EventDetailCard
            name="Event Name"
            day="Day 1"
            time="10:00 AM"
            venue="Main Stage"
            pocs="John Doe"
          />
        </div>
        <EventStepCard />
      </main>
    </section>
  );
}

function EventDetailCard({
  name = "Event Name",
  day = "Day 1",
  time = "10:00 AM",
  venue = "Main Stage",
  pocs = "John Doe",
}: {
  name?: string;
  day?: string;
  time?: string;
  venue?: string;
  pocs?: string;
}) {
  return (
    <div className="bg-[#613505] rounded-3xl flex-1 relative text-[#FFDE7D] px-8 py-4 border-[#874A11] border-2  w-1/2 lg:w-full lg:h-full">
      <div className="flex justify-center items-center">
        <TextDecorater>
          <h2 className="text-center text-xl lg:text-3xl">{name}</h2>
        </TextDecorater>
      </div>
      <ul className="flex-col gap-4 mt-4 text-lg lg:text-xl pb-4">
        <li>
          <span className="font-bold text-[#CC9800]">
            Day - <span className="text-[#FFDE7D]">{day}</span>
          </span>
        </li>
        <li>
          <span className="font-bold text-[#CC9800]">
            Time - <span className="text-[#FFDE7D]">{time}</span>
          </span>
        </li>
        <li>
          <span className="font-bold text-[#CC9800]">
            Venue - <span className="text-[#FFDE7D]">{venue}</span>
          </span>
        </li>
        <li>
          <span className="font-bold text-[#CC9800]">
            POCs -
            <span className="text-[#FFDE7D] text-base lg:text-lg">{pocs}</span>
          </span>
        </li>
      </ul>
      <EventCardFooter className="md:w-auto max-sm:bottom-2 max-w-[250px]" />
    </div>
  );
}

function EventStepCard({
  headerText = "Step 1: Fill the form",
  bodyText = "Fill the form with your details",
  backgroundImg = "/assets/events/dummy-card.jpg",
  step = 2,
}) {
  return (
    <div
      className={`bg-[#634502] bg-opacity-75 rounded-3xl h-full w-full lg:w-2/3 border-[#874A11] border-2 relative bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="absolute inset-0 bg-[#634502]/70 rounded-3xl"></div>
      <div className="absolute inset-0 p-2 md:px-4 md:py-2 flex flex-col gap-6">
        <div className="">
          <div className="flex justify-center items-center">
            <TextDecorater>
              <h2 className="text-center text-xl sm:text-2xl text-[#FFEF9E] md:text-3xl uppercase">
                Steps to Register
              </h2>
            </TextDecorater>
          </div>
          <div className="h-[80%] w-full mx-auto bg-[#613505] border-2 text-[#FFDE7D] border-[#A97B01] rounded-3xl p-4 relative pt-12 mt-8">
            <div className="absolute -top-6 left-12 bg-[#FCD771] px-4 py-2 rounded-2xl border-[#874A11] border-2">
              <span className="text-[#874A11] text-xl md:text-2xl lg:text-3xl font-bold">
                {headerText}
              </span>
            </div>

            <p className=" text-lg md:text-xl lg:text-2xl whitespace-normal">
              {bodyText}
            </p>
          </div>
          <div className="mt-4 flex justify-center items-center gap-4">
            {step === 1 ? (
              <>
                <button className="px-4 py-2 bg-[#FFDE85] text-[#8E4D18] font-semibold rounded-md text-lg md:text-xl lg:text-2xl uppercase w-full max-w-[250px] mx-auto">
                  Register
                </button>
              </>
            ) : (
              <>
                <button className="px-4 py-2 bg-[#FFDE85] text-[#8E4D18] font-semibold rounded-md text-lg md:text-xl lg:text-2xl uppercase w-full max-w-[250px] mx-auto">
                  Register
                </button>
                <button className="px-4 py-2 bg-[#FFDE85] text-[#8E4D18] font-semibold rounded-md text-lg md:text-xl lg:text-2xl uppercase w-full max-w-[250px] mx-auto">
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <EventCardFooter className="md:w-auto max-sm:bottom-2 max-w-[250px]" />
    </div>
  );
}
