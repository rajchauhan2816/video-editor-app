export type UploadResponse = {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: Array<string>;
  pages: number;
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  playback_url: string;
  folder: string;
  access_mode: string;
  metadata: {
    color_id: Array<string>;
    colors_id: Array<string>;
    g0btpgkczvarsmkwli2e: Array<string>;
    s81oevuzdbvdqq8i6voe: string;
  };
  existing: boolean;
  audio: {};
  video: {
    pix_format: string;
    codec: string;
    level: number;
    profile: string;
    bit_rate: string;
    time_base: string;
  };
  frame_rate: number;
  bit_rate: number;
  duration: number;
  rotation: number;
  original_filename: string;
  nb_frames: number;
};
