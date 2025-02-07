"use client";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";

export default function SnowVideo(props: HTMLAttributes<HTMLVideoElement>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        autoPlay
        controls={false}
        loop
        muted={isMuted}
        {...props}
        className={`absolute h-full w-full object-cover opacity-20`}
      >
        <source src="https://res.cloudinary.com/dxtfen6z8/video/upload/v1738936724/frobk3chutjruhymic3l.mp4" type="video/mp4" />
      </video>

      <button
        id="mute-button"
        onClick={toggleMute}
        className="absolute top-4 left-4 bg-black p-2 z-40 rounded"
      >
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
}
