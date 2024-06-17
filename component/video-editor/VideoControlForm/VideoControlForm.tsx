import { Effect } from "@/constant/effect";
import { BackgroundRemovalForm } from "./BackgroundRemovalForm";
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen/index";
import { SlowMotionForm } from "./SlowMotionForm";
import { TrimForm } from "./TrimForm";

interface VideoControlFormProps {
  effect: Effect;
  setModifiedVideo: (video: CloudinaryVideo) => void;
  publicId: string;
  //   video: CloudinaryVideo;
}

export const VideoControlForm = ({
  effect,
  setModifiedVideo,
  //   video,
  publicId,
}: VideoControlFormProps) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "demo",
      apiKey: "t__Y4vUplqEbzxg1xT6_fecdgEY",
    },
  });
  const video = cld.video(publicId);

  const effectComponent = {
    REMOVE_BACKGROUND: (
      <BackgroundRemovalForm
        setModifiedVideo={setModifiedVideo}
        video={video}
      />
    ),
    SLOW_MOTION: (
      <SlowMotionForm setModifiedVideo={setModifiedVideo} video={video} />
    ),
    TRIM: <TrimForm setModifiedVideo={setModifiedVideo} video={video} />,
  };

  const renderEffectComponent = effectComponent[effect];
  return <>{renderEffectComponent}</>;
};
