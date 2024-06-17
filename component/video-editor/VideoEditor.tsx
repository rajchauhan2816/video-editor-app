"use client";
import { useState } from "react";
import { VideoPlayer } from "./VIdeoPlayer";
import { VideoControl } from "./VideoControl/VideoControl";
import { Effect } from "@/constant/effect";
import { UploadResponse } from "@/types/cloudnary";
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen";

//
import { fill, scale } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";
import {
  backgroundRemoval,
  reverse,
  removeBackground,
  makeTransparent,
} from "@cloudinary/url-gen/actions/effect";
import { trim } from "@cloudinary/url-gen/actions/videoEdit";
import { source } from "@cloudinary/url-gen/actions/overlay";

interface Video {
  src: string;
}
export const VideoEditor = () => {
  const [video, setVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [response, setResponse] = useState<UploadResponse | null>(null);
  const [modifiedVideo, setModifiedVideo] = useState<
    CloudinaryVideo | undefined
  >(undefined);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "demo",
      apiKey: "t__Y4vUplqEbzxg1xT6_fecdgEY",
    },
  });

  const handleEffect = async (effect: Effect) => {
    console.log(effect);
    const myVideo = cld.video(response?.public_id);
    // identify background color from the video

    myVideo.effect(makeTransparent().tolerance(2).colorToReplace("#dfc3ba"));
    // myVideo.effect(makeTransparent().tolerance(2).colorToReplace("#4b555d"));
    // myVideo
    //   .resize(scale().width(200))
    //   .videoEdit(trim().startOffset("12.0").duration("15.0"))
    //   .overlay(
    //     source(
    //       video("overlap_video.mp4").transformation(
    //         new Transformation()
    //           .resize(scale().width("1.0").relative())
    //           .effect(makeTransparent().tolerance(15).colorToReplace("#87ff66"))
    //       )
    //     )
    //   );
    setModifiedVideo(myVideo);
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
        modifiedVideo={modifiedVideo}
        setResponse={setResponse}
      />
    </div>
  );
};
