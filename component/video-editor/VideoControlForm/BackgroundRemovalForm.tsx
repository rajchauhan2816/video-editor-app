import { makeTransparent } from "@cloudinary/url-gen/actions/effect";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen/index";
import { Button, ColorPicker, Form, Input, Typography } from "antd";

interface BackgroundRemovalFormProps {
  setModifiedVideo: (video: CloudinaryVideo) => void;
  video: CloudinaryVideo;
}

export const BackgroundRemovalForm = ({
  setModifiedVideo,
  video,
}: BackgroundRemovalFormProps) => {
  const applyBackgroundRemoval = (values: any) => {
    const colourReplace =
      typeof values.color == "string"
        ? values.color
        : values.color.toHexString();

    let modifiedVideo = video.effect(
      makeTransparent()
        .tolerance(values.tolerance)
        .colorToReplace(colourReplace)
    );
    setModifiedVideo(modifiedVideo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ tolerance: 10, color: "#FFFFFF" }}
      onFinish={applyBackgroundRemoval}
      onFinishFailed={() => {}}
      autoComplete="off"
      labelAlign="left"
    >
      <Form.Item
        label="Color"
        name="color"
        rules={[
          {
            required: true,
            message: "Please Select Backgroud Colour you want to remove",
          },
        ]}
      >
        <ColorPicker />
      </Form.Item>

      <Form.Item label="Matching Colour Thereshold" name="tolerance">
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
