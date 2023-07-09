import { DefaultSeoProps } from "next-seo";

export const DEFAULT_SEO: DefaultSeoProps = {
  title: "제 6회 한세톤 | 한울",
  description: "7.20 - 7.21 이틀동안 진행되는 한세톤에 지금 참여하세요!",
  canonical: "https://hanseithon.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://hanseithon.com",
    title: "제 6회 한세톤 | 한울",
    description: "7.20 - 7.21 이틀동안 진행되는 한세톤에 지금 참여하세요!",
    siteName: "제 6회 한세톤 | 한울",
    images: [
      {
        url: "/static/og_thumbnail.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  additionalMetaTags: [
    {
      property: "keywords",
      content:
        "한세, 한세고, 한세사이버보안고등학교, 한울, 한세톤, 한세 해커톤, HANSEITHON, 해커톤",
    },
  ],
};
