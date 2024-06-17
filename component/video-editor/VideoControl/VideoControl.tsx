import { Button, Col, Flex, Row, Space, Typography } from "antd";
import Image from "next/image";
import logo from "@/public/icons/logo.png";
import { Effect } from "@/constant/effect";

interface VideoControlProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  handleEffect: (effect: Effect) => void;
}

export const VideoControl = ({
  isPlaying,
  onPlay,
  onPause,
  handleEffect,
}: VideoControlProps) => {
  const onClick = (effect: Effect) => {
    handleEffect(effect);
  };
  return (
    // <div>
    //   {isPlaying ? (
    //     <button onClick={onPause}>Pause</button>
    //   ) : (
    //     <button onClick={onPlay}>Play</button>
    //   )}
    // </div>
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
        <Space>
          <Typography.Text>Apply Effects</Typography.Text>
          <Button onClick={() => onClick("REMOVE_BACKGROUND")}>
            Remove Background
          </Button>
          <Button onClick={() => onClick("SLOW_MOTION")}>Slow Motion</Button>
          <Button onClick={() => onClick("TRIM")}>Trim</Button>
        </Space>
      </Col>
      <Col span={4}>
        <Button>Save</Button>
      </Col>
    </Row>
  );
};
