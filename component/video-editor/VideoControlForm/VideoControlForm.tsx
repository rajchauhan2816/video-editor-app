import { Effect } from "@/constant/effect";
import { BackgroundRemovalForm } from "./BackgroundRemovalForm";
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen/index";
import { SlowMotionForm } from "./SlowMotionForm";

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
    TRIM: <h1>Trim</h1>,
  };

  const renderEffectComponent = effectComponent[effect];
  return <>{renderEffectComponent}</>;
};
