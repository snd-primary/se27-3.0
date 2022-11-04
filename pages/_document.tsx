import { Seo } from "@components";
import { light } from "@styles";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const document: React.FC<Document> = () => {
  return (
    <Html className="light">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default document;
