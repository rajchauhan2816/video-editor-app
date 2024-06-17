import { Spin } from "antd";

export const Spinner = ({ text }: { text?: string }) => {
  const contentStyle: React.CSSProperties = {
    padding: 200,
    // background: "rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
  };

  const content = <div style={contentStyle} />;

  return (
    <div className="flex h-screen items-center justify-center text-center">
      <Spin tip={text} size="large">
        {content}
      </Spin>
    </div>
  );
};
