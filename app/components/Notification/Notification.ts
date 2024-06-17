import { notification } from "antd";

type NotificationType = "success" | "error" | "info" | "warning";

const Notification = (
  type: NotificationType,
  message: string,
  description: string
) => {
  notification[type]({
    message: message,
    description: description,
  });
};

const SuccessNotification = (message: string, description: string) => {
  Notification("success", message, description);
};

const ErrorNotification = (message: string, description: string) => {
  Notification("error", message, description);
};

const InfoNotification = (message: string, description: string) => {
  Notification("info", message, description);
};

const WarningNotification = (message: string, description: string) => {
  Notification("warning", message, description);
};

export default {
  SuccessNotification,
  ErrorNotification,
  InfoNotification,
  WarningNotification,
};
