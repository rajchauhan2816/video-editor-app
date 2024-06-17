import { Effect } from "@/constant/effect";
import { BackgroundRemovalForm } from "./BackgroundRemovalForm";
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen/index";
import { SlowMotionForm } from "./SlowMotionForm";
import { TrimForm } from "./TrimForm";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_CLOUD_NAME,
} from "@/constant/environment";

interface VideoControlFormProps {
  effect: Effect;
  setModifiedVideo: (video: CloudinaryVideo) => void;
  publicId: string;
}

export const VideoControlForm = ({
  effect,
  setModifiedVideo,
  publicId,
}: VideoControlFormProps) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUDINARY_CLOUD_NAME,
      apiKey: CLOUDINARY_API_KEY,
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
