import { useState } from "react";
import Uplaod from "../Uplaod";
import { RcFile, UploadFile } from "antd/es/upload";

interface VideoPlayerProps {
  video: {
    src: string;
  } | null;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

export const VideoPlayer = ({
  video,
  isPlaying,
  onPlay,
  onPause,
}: VideoPlayerProps) => {
  const [file, setFile] = useState<UploadFile | undefined>(undefined);
  console.log("file", file);
  return (
    <div>
      {file && file.originFileObj ? (
        <video
          src={URL.createObjectURL(file?.originFileObj)}
          autoPlay={isPlaying}
          controls
          style={{ width: "100%" }}
        />
      ) : (
        <Uplaod setFile={setFile} />
      )}
    </div>
  );
};
