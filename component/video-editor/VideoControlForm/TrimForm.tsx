import { trim } from "@cloudinary/url-gen/actions/videoEdit";
import { CloudinaryVideo } from "@cloudinary/url-gen/index";
import { Button, Form, Input } from "antd";

interface TrimFormProps {
  setModifiedVideo: (video: CloudinaryVideo) => void;
  video: CloudinaryVideo;
}

export const TrimForm = ({ setModifiedVideo, video }: TrimFormProps) => {
  const getVideoDuration = async () => {
    const videoElement = document.createElement("video");
    videoElement.src = video.toURL();
    videoElement.load();
    videoElement.onloadedmetadata = () => {
      console.log("videoElement.duration", videoElement.duration);
    };
  };
  const applyTrim = (values: any) => {
    let modifiedVideo = video.videoEdit(
      trim().startOffset(values.startOffset).endOffset(values.endOffset)
    );
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
      onFinish={applyTrim}
      onFinishFailed={() => {}}
      autoComplete="off"
      labelAlign="left"
    >
      <Form.Item
        label="Start Offset (seconds)"
        name="startOffset"
        rules={[{ required: true, message: "Please enter the start offset" }]}
      >
        <Input type="number" placeholder="Enter start offset" />
      </Form.Item>

      <Form.Item
        label="End Offset (seconds)"
        name="endOffset"
        rules={[{ required: true, message: "Please enter the end offset" }]}
      >
        <Input type="number" placeholder="Enter end offset" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Apply
        </Button>
      </Form.Item>
    </Form>
  );
};
