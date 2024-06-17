import {
  accelerate,
  makeTransparent,
  reverse,
} from "@cloudinary/url-gen/actions/effect";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { concatenate } from "@cloudinary/url-gen/actions/videoEdit";
import {
  Cloudinary,
  CloudinaryVideo,
  Transformation,
} from "@cloudinary/url-gen/index";
import { videoSource } from "@cloudinary/url-gen/qualifiers/concatenate";
import { Button, ColorPicker, Form, Input, Typography } from "antd";

interface SlowMotionFormProps {
  setModifiedVideo: (video: CloudinaryVideo) => void;
  video: CloudinaryVideo;
}

export const SlowMotionForm = ({
  setModifiedVideo,
  video,
}: SlowMotionFormProps) => {
  const applySlowMotion = (values: any) => {
    console.log("values", values);
    let modifiedVideo = video.effect(accelerate().rate(values.rate));
    // ("https://res.cloudinary.com/demo/video/upload/c_scale,w_400/sample-video-1_rxr8or?_a=DATAdtAAZAA0");
    console.log("video", modifiedVideo.toURL());
    setModifiedVideo(modifiedVideo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ rate: -50 }}
      onFinish={applySlowMotion}
      onFinishFailed={() => {}}
      autoComplete="off"
      labelAlign="left"
    >
      <Form.Item
        label="Speed"
        name="rate"
        rules={[
          {
            pattern: /^-?[0-9]{1,2}$|^100$/,
            message:
              "Please enter a value between -50 (slowest) and 100 (fast)",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Apply
        </Button>
      </Form.Item>
    </Form>
  );
};
