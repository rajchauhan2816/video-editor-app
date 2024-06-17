import { accelerate } from "@cloudinary/url-gen/actions/effect";
import { CloudinaryVideo } from "@cloudinary/url-gen/index";
import { Button, Form, Input } from "antd";

interface SlowMotionFormProps {
  setModifiedVideo: (video: CloudinaryVideo) => void;
  video: CloudinaryVideo;
}

export const SlowMotionForm = ({
  setModifiedVideo,
  video,
}: SlowMotionFormProps) => {
  const applySlowMotion = (values: any) => {
    let modifiedVideo = video.effect(accelerate().rate(values.rate));
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
