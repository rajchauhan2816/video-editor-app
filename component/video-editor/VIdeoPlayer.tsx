import { useState } from "react";
import Uplaod from "../Uplaod";
import { RcFile, UploadFile } from "antd/es/upload";
import { UploadResponse } from "@/types/cloudnary";
import { AdvancedVideo } from "@cloudinary/react";
import { CloudinaryVideo } from "@cloudinary/url-gen/index";
import { Typography } from "antd";

interface VideoPlayerProps {
  video: {
    src: string;
  } | null;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  setResponse: (response: UploadResponse) => void;
  modifiedVideo?: CloudinaryVideo;
}

const cloudName = "demo";
const unsignedUploadPreset = "doc_codepen_example";

export const VideoPlayer = ({
  video,
  isPlaying,
  onPlay,
  onPause,
  setResponse,
  modifiedVideo,
}: VideoPlayerProps) => {
  const [file, setFile] = useState<UploadFile | undefined>(undefined);
  console.log("file", file);
  const [loading, setLoading] = useState<boolean>(false);

  // remove background

  const uploadFile = async (file: UploadFile) => {
    setLoading(true);
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const fd = new FormData();
    fd.append("upload_preset", unsignedUploadPreset);
    fd.append("tags", "browser_upload"); // Optional - add tags for image admin in Cloudinary
    fd.append("file", file?.originFileObj!);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      console.log("data", data);
      setResponse(data);
    } catch (error) {
      console.error("Error uploading the file:", error);
    } finally {
      setLoading(false);
    }
  };

  const setAndUpload = (file: UploadFile | undefined) => {
    // set file to state
    setFile(file);

    // upload file to cloudinary
    if (file) uploadFile(file);
  };

  if (loading) return <Typography.Text>Uploading...</Typography.Text>;

  if (modifiedVideo) {
    return (
      <div>
        <AdvancedVideo cldVid={modifiedVideo} controls />
      </div>
    );
  }

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
        <Uplaod setFile={setAndUpload} />
      )}
    </div>
  );
};
