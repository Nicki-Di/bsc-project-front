import "../global/globals.css";
import React from "react";
import { ConfigProvider } from "antd";
import { childrenType } from "../global/types";

const RootLayout: React.FC<childrenType> = ({ children }) => {
  return (
    <html lang="fa">
      <head />
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "YekanBakhFaNum",
            colorLink: "#283040",
            colorPrimary: "#1E6DFA",
          },
        }}
      >
        <body className={"px-4 lg:px-16 body-lg"}>{children}</body>
      </ConfigProvider>
    </html>
  );
};
