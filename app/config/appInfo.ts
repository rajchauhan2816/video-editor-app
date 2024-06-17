import { CLOUDINARY_CLOUD_NAME } from "@/constant/environment";

export const appInfo = {
  apiDomain: CLOUDINARY_CLOUD_NAME,
} satisfies Record<string, string>;
