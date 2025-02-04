'use client';

import { Cinzel } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const cinzel = Cinzel({
  subsets: ['latin'],
});

const Gallery = () => {
  const artistArray: string[] = [
    '/assets/gallery/images/artist1.png',
    '/assets/gallery/images/artist2.png',
    '/assets/gallery/images/artist3.png',
    '/assets/gallery/images/artist4.png',
    '/assets/gallery/images/artist5.png',
    '/assets/gallery/images/artist6.png',
    '/assets/gallery/images/artist7.png',
    '/assets/gallery/images/artist8.png',
    '/assets/gallery/images/artist9.png',
    '/assets/gallery/images/artist10.png',
    '/assets/gallery/images/artist11.png',
  ];

  const [currentArtist, setCurrentArtist] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const crystalBackgroundRef = useRef<HTMLDivElement>(null);
  const leftDoor = useRef<HTMLDivElement>(null);
  const rightDoor = useRef<HTMLDivElement>(null);

  const startTimer = () => {
    if (timer) clearInterval(timer);
    const newTimer = setInterval(() => {
      setCurrentArtist((prev) => (prev < artistArray.length - 1 ? prev + 1 : 0));
    }, 5000);
    setTimer(newTimer);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timer!);
  }, []);

  useEffect(() => {
    const preloadImages = (srcArray: string[]) => {
      srcArray.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    };

    preloadImages(artistArray);
  }, [artistArray]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLDivElement).style.animationPlayState = 'running';
          } else {
            (entry.target as HTMLDivElement).style.animationPlayState = 'paused';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (crystalBackgroundRef.current) {
      observer.observe(crystalBackgroundRef.current);
    }
    if (leftDoor.current) {
      observer.observe(leftDoor.current);
    }
    if (rightDoor.current) {
      observer.observe(rightDoor.current);
    }

    return () => {
      if (crystalBackgroundRef.current) {
        observer.unobserve(crystalBackgroundRef.current);
      }
      if (leftDoor.current) {
        observer.unobserve(leftDoor.current);
      }
      if (rightDoor.current) {
        observer.unobserve(rightDoor.current);
      }
    };
  }, []);

  const handlePrev = () => {
    setCurrentArtist((prev) => (prev > 0 ? prev - 1 : artistArray.length - 1));
    startTimer();
  };

  const handleNext = () => {
    setCurrentArtist((prev) => (prev < artistArray.length - 1 ? prev + 1 : 0));
    startTimer();
  };

  return (
    <div
      ref={crystalBackgroundRef}
      className="crystal-background flex flex-col items-center justify-center gap-0 relative"
    >
      <div
        className={`text-center pt-24 absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-4xl font-semibold md:text-6xl ${cinzel.className}`}
      >
        Gallery
      </div>
      <div
        className={`h-[17.5rem] w-[21rem] md:h-[25rem] md:w-[30rem] bg-blend-color-burn bg-no-repeat relative`}
        style={{
          backgroundImage: `url(/assets/gallery/portal.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      >
        <div className={`absolute h-[71.5%] w-[52.5%] top-[15.3%] left-[24%] bg-black bg-opacity-80`}>
          {artistArray.map((src, index) => (
            <Image
              key={index}
              src={src}
              fill
              alt={`artist ${index + 1}`}
              className={currentArtist === index ? 'fade-in' : 'hidden'}
            />
          ))}
        </div>
        <div className="scale-105 h-full">
          <div className='absolute bg-no-repeat h-[12.5rem] w-[6rem] md:h-[18rem] md:w-[8.1rem] z-50 top-[15.3%] md:left-[24.2%] left-[25%] bg-contain' id='leftDoor' ref={leftDoor} >
            <Image
              src={'/assets/gallery/leftDoor.png'}
              fill
              alt='left door'
            />
          </div>
          <div className='absolute bg-no-repeat h-[12.5rem] w-[6.1rem] md:h-[18rem] md:w-[8rem] z-50 top-[15.3%] md:right-[22.25%] right-[17.6%] bg-contain' id='rightDoor' ref={rightDoor} >
            <Image
              src={'/assets/gallery/rightDoor.png'}
              fill
              alt='right door'
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-4 justify-between w-[24rem] md:w-[30rem] px-7">
        <button
          onClick={handlePrev}
          className='bg-cover bg-[url(/assets/gallery/left-arrow.png)] w-[8.5rem] h-[5.5rem]'
        />
        <button
          onClick={handleNext}
          className='bg-cover bg-[url(/assets/gallery/right-arrow.png)] w-[8.5rem] h-[5.5rem]'
        />
      </div>
    </div>
  );
};

export default Gallery;
