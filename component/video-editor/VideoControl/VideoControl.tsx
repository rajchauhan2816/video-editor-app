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
        ) : null}
      </Col>
      <Col span={4}>
        <div
          style={{ display: "flex", justifyContent: "end", marginRight: "5px" }}
        >
          <Button disabled={!modifiedVideo}>
            <CloudDownloadOutlined onClick={downloadVideo} />
          </Button>
        </div>
      </Col>
    </Row>
  );
};
