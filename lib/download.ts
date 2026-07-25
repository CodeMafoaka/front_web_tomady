// Metadata for the direct-download APK hosted on the site.
// The signed APK is published at /downloads/tomady-v{version}.apk and
// served via the public/ folder. Update the version here whenever a
// new release is dropped in /public/downloads/.

export type DownloadTarget = {
  os: "android" | "ios";
  file: string; // path under /public
  sizeLabel: string;
  version: string;
};

export const DOWNLOAD_VERSION = "1.0.0";

export const DOWNLOADS: DownloadTarget[] = [
  {
    os: "android",
    file: "/downloads/tomady-v1.0.0.apk",
    sizeLabel: "18 MB",
    version: DOWNLOAD_VERSION,
  },
];

export function getAndroidDownload(): DownloadTarget | undefined {
  return DOWNLOADS.find((d) => d.os === "android");
}