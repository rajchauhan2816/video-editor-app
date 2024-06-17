"use client";
import { Effect } from "@/constant/effect";
import { UploadResponse } from "@/types/cloudnary";
import { CloudinaryVideo } from "@cloudinary/url-gen";
import { useState } from "react";
import { VideoPlayer } from "./VIdeoPlayer";
import { VideoControl } from "./VideoControl/VideoControl";

//
import { VideoControlForm } from "./VideoControlForm/VideoControlForm";

export const VideoEditor = () => {
  const [response, setResponse] = useState<UploadResponse | null>(null);
  const [modifiedVideo, setModifiedVideo] = useState<
    CloudinaryVideo | undefined
  >(undefined);
  const [effect, setEffect] = useState<Effect | undefined>(undefined);

  const handleEffect = async (effect: Effect) => {
    console.log(effect);
    setEffect(effect);
  };

  return (
    <div>
      <VideoControl
        handleEffect={handleEffect}
        isVideoUplaoded={!!response}
        modifiedVideo={modifiedVideo}
      />
      <div>
        {effect && (
          <VideoControlForm
            effect={effect}
            setModifiedVideo={setModifiedVideo}
            publicId={response?.public_id!}
          />
        )}
        <VideoPlayer modifiedVideo={modifiedVideo} setResponse={setResponse} />
      </div>
    </div>
  );
};
