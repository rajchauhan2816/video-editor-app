"use client";
import { useState } from "react";
import { VideoPlayer } from "./VIdeoPlayer";
import { VideoControl } from "./VideoControl/VideoControl";
import { Effect } from "@/constant/effect";
interface Video {
  src: string;
}
export const VideoEditor = () => {
  const [video, setVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEffect = (effect: Effect) => {
    console.log(effect);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <VideoControl
        isPlaying={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
        handleEffect={handleEffect}
      />
      <VideoPlayer
        video={video}
        isPlaying={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </div>
  );
};
