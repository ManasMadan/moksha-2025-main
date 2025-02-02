'use client'
import { Playfair } from 'next/font/google'
import React, { useState } from 'react'
import { Popover } from 'react-tiny-popover'

const playfair = Playfair();
const Faq = () => {
  const [activeCircle, setActiveCircle] = useState<string | null>(null);

  return (
    <div>
      <Authcircle 
        name='Category' 
        position='top-[20%] left-[40%]' 
        size='md:w-28 md:h-28 w-16 h-16'
        content={<>
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
        </>} 
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle} 
      />
      <Authcircle 
        name='Entry' 
        position='top-[15%] left-[65%]' 
        size='md:w-28 md:h-28 w-16 h-16'
        content={<>
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
        </>} 
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle} 
      />
      <Authcircle 
        name='Accomadation' 
        position='md:top-[40%] top-[30%] left-[10%]' 
        size='md:w-28 md:h-28 w-16 h-16'
        content={<>
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
        </>} 
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle} 
      />
      <Authcircle 
        name='Dress&nbsp;Code' 
        position='bottom-[30%] left-[15%] md:left-[50%]' 
        size='md:w-28 md:h-28 w-16 h-16 '
        content={<>
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
        </>} 
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle} 
      />
      <Authcircle 
        name='Mini&nbsp;Fest' 
        position='bottom-[40%] right-[15%]' 
        size='md:w-28 md:h-28 w-16 h-16'
        content={<>
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
        </>} 
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle} 
      />
      <Authcircle 
        name='Scoring' 
        position='bottom-[15%] left-[15%] md:left-[25%]' 
        size='md:w-18 md:h-18 w-16 h-16 '
        content={<>
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
        </>} 
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle} 
      />
      <Authcircle 
        name='Eatables' 
        position='bottom-[5%] right-[15%]' 
        size='md:w-24 md:h-24 w-16 h-16'
        content={<>
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
          <Accordion content='What if something is something? What if something is something? What if something is something?' title='What if something is something?' />
        </>} 
        activeCircle={activeCircle}
        setActiveCircle={setActiveCircle} 
      />
    </div>
  )
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
        className={`cursor-pointer py-2 px-2 text-white flex justify-between items-center bg-[#21252F99] border-[1px] border-white rounded-md max-w-80 md:min-w-80 md:text-base text-sm mb-1`}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
      </div>
      <div
        className={`${
          isActive ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-max-height duration-500 ease-in-out`}
      >
         <div
          className="py-3 px-2 text-white bg-opacity-20 backdrop-blur-sm border-[1px] border-solid translate-x-4 border-white rounded-md scale-y-110 max-w-96 will-change-transform"
        >
          {content}
        </div>
      </div>
    </div>
  );
};
