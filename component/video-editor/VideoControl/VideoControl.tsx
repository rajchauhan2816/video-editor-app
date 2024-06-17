"use client";

import { Effect } from "@/constant/effect";
import logo from "@/public/icons/logo.png";
import { CloudDownloadOutlined } from "@ant-design/icons";
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen/index";
import { Button, Col, Row, Select, Space, Typography } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const downloadVideo = () => {
    // Check if modifiedVideo exists and then trigger the download
    if (modifiedVideo) {
      // Get the download URL
      const downloadUrl = modifiedVideo.toURL();

      console.log("downloadUrl", downloadUrl);

      window.open(downloadUrl, "_blank");
    }
  };

  const handleChange = (value: any) => {
    handleEffect(value);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsMobile(window.matchMedia("(max-width: 600px)").matches);
  }, []);

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
            <Typography.Text>Apply Effect</Typography.Text>
            <Select
              placeholder="Select"
              onChange={handleChange}
              style={{ minWidth: "200px" }}
            >
              <Select.Option value="REMOVE_BACKGROUND">
                Remove Background
              </Select.Option>
              <Select.Option value="SLOW_MOTION">Slow Motion</Select.Option>
              <Select.Option value="TRIM">Trim</Select.Option>
            </Select>
          </Space>
        ) : null}
      </Col>
      <Col span={4}>
        <div
          style={{ display: "flex", justifyContent: "end", marginRight: "5px" }}
        >
          <Button disabled={!modifiedVideo}>
            {!isMobile ? "Download" : ""}
            <CloudDownloadOutlined onClick={downloadVideo} />
          </Button>
        </div>
      </Col>
    </Row>
  );
};
