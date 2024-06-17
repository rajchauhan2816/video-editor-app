import { Button, Col, Flex, Row, Space, Typography } from "antd";
import Image from "next/image";
import logo from "@/public/icons/logo.png";
import { Effect } from "@/constant/effect";
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen/index";
import { CloudDownloadOutlined } from "@ant-design/icons";

interface VideoControlProps {
  handleEffect: (effect: Effect) => void;
  isVideoUplaoded?: boolean;
  modifiedVideo?: CloudinaryVideo | undefined;
}

export const VideoControl = ({
  handleEffect,
  isVideoUplaoded,
  modifiedVideo,
}: VideoControlProps) => {
  const onClick = (effect: Effect) => {
    handleEffect(effect);
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: "demo",
      apiKey: "t__Y4vUplqEbzxg1xT6_fecdgEY",
    },
  });

  const downloadVideo = () => {
    // Check if modifiedVideo exists and then trigger the download
    if (modifiedVideo) {
      // Get the download URL
      const downloadUrl = modifiedVideo.toURL();

      console.log("downloadUrl", downloadUrl);

      window.open(downloadUrl, "_blank");
      // console.log("downloadUrl", downloadUrl);
      // // Create a temporary anchor element
      // const downloadLink = document.createElement("a");
      // downloadLink.href = downloadUrl;
      // downloadLink.download = "modified_video.mp4"; // Specify the file name here
      // // Append the anchor element to the body
      // document.body.appendChild(downloadLink);
      // // Trigger the download
      // downloadLink.click();
      // // Clean up
      // document.body.removeChild(downloadLink);
    }
  };
  return (
    <Row align={"middle"}>
      <Col span={4}>
        <Image
          src={logo}
          alt="Video Editor"
          width={50}
          height={50}
          className={`mx-auto my-4`}
          priority={true}
        />
      </Col>
      <Col span={16}>
        {isVideoUplaoded ? (
          <Space>
            <Typography.Text>Apply Effects</Typography.Text>
            <Button onClick={() => onClick("REMOVE_BACKGROUND")}>
              Remove Background
            </Button>
            <Button onClick={() => onClick("SLOW_MOTION")}>Slow Motion</Button>
            <Button onClick={() => onClick("TRIM")}>Trim</Button>
          </Space>
        ) : (
          <Typography.Text>Upload a video to get started</Typography.Text>
        )}
      </Col>
      <Col span={4}>
        <Button>
          <CloudDownloadOutlined onClick={downloadVideo} />
        </Button>
      </Col>
    </Row>
  );
};
