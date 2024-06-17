import { useState } from "react";
import Uplaod from "../Uplaod";
import { RcFile, UploadFile } from "antd/es/upload";
import { UploadResponse } from "@/types/cloudnary";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen/index";
import { Typography } from "antd";
import { Spinner } from "../Spinner";

interface VideoPlayerProps {
  setResponse: (response: UploadResponse) => void;
  modifiedVideo?: CloudinaryVideo;
}

const cloudName = "demo";
const unsignedUploadPreset = "doc_codepen_example";

export const VideoPlayer = ({
  setResponse,
  modifiedVideo,
}: VideoPlayerProps) => {
  const [file, setFile] = useState<UploadFile | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

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

  if (loading)
    return (
      <div>
        <Spinner text="Hang tight! We're processing your video." />
      </div>
    );

  if (modifiedVideo) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AdvancedVideo cldVid={modifiedVideo} controls />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      {file && file.originFileObj ? (
        <video src={URL.createObjectURL(file?.originFileObj)} controls />
      ) : (
        <Uplaod setFile={setAndUpload} />
      )}
    </div>
  );
};
