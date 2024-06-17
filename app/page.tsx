"use client";
import { VideoEditor } from "@/component/video-editor/VideoEditor";
import { theme } from "antd";

const Page = () => {
  const {
    token: { colorBgBase },
  } = theme.useToken();
  return (
    <div
      style={{
        backgroundColor: colorBgBase,
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <VideoEditor />
    </div>
  );
};

export default Page;
