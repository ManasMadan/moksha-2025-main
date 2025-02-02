'use client'
import { Playfair } from 'next/font/google'
import React, { useState } from 'react'
import { Popover } from 'react-tiny-popover'

const playfair = Playfair({
  subsets: ['latin'],
});

const Faq = () => {
  const [activeCircle, setActiveCircle] = useState<string | null>(null);

  return (
    <div>
      <Authcircle
        name='General Information'
        position='top-[20%] left-[40%]'
        size='md:w-28 md:h-28 w-16 h-16'
        content={<>
          <Accordion content='Moksha is the annual cultural festival of NSUT, a 3-day long escape from reality into a whole different world of magic, mystery, and innovation that takes place in the month of March.' title='What is Moksha’25?' />
          <Accordion content='Moksha’25 is a 3-day annual cultural extravaganza, organized in the month of March to be held at NSUT Main Campus, Dwarka.' title='Where will Moksha’25 take place?' />
          <Accordion content='The event is open to all college students. Participants must carry a valid ID for entry.' title='Who all can attend Moksha’25?' />
        </>}
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle}
      />
      <Authcircle
        name='Events'
        position='top-[15%] left-[65%]'
        size='md:w-28 md:h-28 w-16 h-16'
        content={<>
          <Accordion content='Every year, Moksha brings alive a world of magic and imagination ranging from captivating dramatics to dazzling dance performances, driven by the energetic hosts and enthusiastic participants.' title='What are the events in Moksha’25?' />
          <Accordion content='Yes, Moksha is accepting participants in their amazing and innovative events from all across the country.' title='Is Moksha accepting outside Delhi-NCR teams to participate in their events?' />
        </>}
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle}
      />
      <Authcircle
        name='Accommodation'
        position='md:top-[40%] top-[30%] left-[10%]'
        size='md:w-28 md:h-28 w-16 h-16'
        content={<>
          <Accordion content='Accommodation details will be provided closer to the event date. Please stay tuned for more updates.' title='What are the accommodation arrangements?' />
          <Accordion content='Yes, we provide accommodation for teams traveling from outside Delhi-NCR.' title='Is there accommodation for participants?' />
        </>}
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle}
      />
      <Authcircle
        name='Entry'
        position='bottom-[30%] left-[15%] md:left-[50%]'
        size='md:w-28 md:h-28 w-16 h-16 '
        content={<>
          <Accordion content='The event is open to all college students. Participants must carry a valid ID for entry.' title='Who can enter Moksha’25?' />
          <Accordion content='Yes, participants must carry a valid student ID to gain entry into the event.' title='Do participants need to carry any ID for entry?' />
        </>}
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle}
      />
      <Authcircle
        name='Mini Fest'
        position='bottom-[40%] right-[15%]'
        size='md:w-28 md:h-28 w-16 h-16'
        content={<>
          <Accordion content='Mini Fest details will be shared soon. Keep an eye on our announcements.' title='What is the Mini Fest?' />
          <Accordion content='Yes, the Mini Fest will include multiple events and activities for all participants.' title='Will the Mini Fest have activities for everyone?' />
        </>}
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle}
      />
      <Authcircle
        name='Scoring'
        position='bottom-[15%] left-[15%] md:left-[25%]'
        size='md:w-18 md:h-18 w-16 h-16 '
        content={<>
          <Accordion content='Scoring criteria vary by event. Detailed scoring guidelines will be provided on the day of the event.' title='What is the scoring criteria?' />
          <Accordion content='Scores will be calculated based on the performance, creativity, and adherence to the guidelines of each event.' title='How are scores calculated?' />
        </>}
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle}
      />
      <Authcircle
        name='Eatables'
        position='bottom-[5%] right-[15%]'
        size='md:w-24 md:h-24 w-16 h-16'
        content={<>
          <Accordion content='Food stalls will be available at the venue, offering a variety of options for all tastes.' title='Will there be food available?' />
          <Accordion content='No, participants are not allowed to bring their own snacks and beverages, but alcohol is strictly prohibited.' title='Can we bring our own eatables?' />
        </>}
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle}
      />
    </div>
  );
}

export default Faq

const Authcircle = ({ name, position, size, content, activeCircle, setActiveCircle }:
  { name: string, position: string, size: string, content: React.ReactNode, activeCircle: string | null, setActiveCircle: (name: string | null) => void }) => {
  const isActive = activeCircle === name;

  const buttonClass = `overflow-visible absolute text-xl md:text-3xl flex items-center justify-center text-center rounded-full transition-all duration-300 ${position}`;

  const activeClass = isActive ? 'bg-gray-500 text-base text-black h-8 w-8 md:h-12 md:w-12' : `bg-[#010115] text-white ${size} ${playfair.className} border-t-2`;

  return (
    <Popover
      isOpen={isActive}
      positions={['bottom', 'left', 'top', 'right']}
      content={content}
    >
      <button
        onClick={() => setActiveCircle(isActive ? null : name)}
        className={`${buttonClass} ${activeClass}`}>
        {isActive ? 'x' : name}
      </button>
    </Popover>
  );
}

const Accordion = ({ title, content }:{title:string,content:string}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={`cursor-pointer py-2 px-3 text-white flex justify-between items-center bg-[#21252F99] border-[1px] border-white rounded-md max-w-80 md:min-w-80 md:text-base text-sm mb-1`}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
      </div>
      <div
        className={`${isActive ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-max-height duration-500 ease-in-out`}
      >
        <div
          className="py-3 px-2 text-white bg-opacity-20 backdrop-blur-sm border-[1px] border-solid translate-x-4 border-white rounded-md scale-y-110 max-w-96 will-change-transform"
        >
          {content}
        </div>
      </div>
    </div>
  );
}
