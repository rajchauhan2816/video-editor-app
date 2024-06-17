import "@/app/globals.css";
import type { Metadata } from "next";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Theme } from "../component/Theme";

export const metadata: Metadata = {
  title: "Video Editor",
  description: "A video editor built with Next.js and Ant Design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AntdRegistry>
          <Theme>{children}</Theme>
        </AntdRegistry>
      </body>
    </html>
  );
}
