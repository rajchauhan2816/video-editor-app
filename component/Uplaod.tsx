import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { message, Upload } from "antd";
import { RcFile } from "antd/es/upload";

const { Dragger } = Upload;

interface UploadFileProps {
  setFile: (file: UploadFile | undefined) => void;
}

const cloudName = "demo";
const unsignedUploadPreset = "doc_codepen_example";

const Uplaod: React.FC<UploadFileProps> = ({ setFile }) => {
  const props: UploadProps = {
    name: "file",
    // multiple: true,
    // action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
      }
      if (status === "done") {
        setFile(info.file);
        // message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {},
  };
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag video files to upload for editing
      </p>
      <p className="ant-upload-hint">
        Enhanced with AI technology from Cloudinary
      </p>
    </Dragger>
  );
};

export default Uplaod;
