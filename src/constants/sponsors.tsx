import {
  CodingAppleLogoPNG,
  EasyspubLogoPNG,
  GilbutHorizontalLogoPNG,
  JpubLogoPNG,
} from "src/assets";

export const SPONSORS = [
  {
    name: "이지스퍼블리싱",
    description: (
      <>
        IT 전문 도서 출판사로 다양한 주제의 책을 출판하여
        <br />
        독자들에게 기술적인 지식과 인사이트를 제공합니다.
      </>
    ),
    logo: EasyspubLogoPNG,
    url: "http://www.easyspub.co.kr/Main/pub",
  },
  {
    name: "코딩애플",
    description: (
      <>
        온라인 교육 플랫폼으로 개발자들을 위한 <br />
        다양한 강의와 컨텐츠를 합니다.
      </>
    ),
    logo: CodingAppleLogoPNG,
    url: "https://codingapple.com",
  },
  {
    name: "길벗",
    description: (
      <>
        온라인 교육 플랫폼으로 개발자들을 위한 <br />
        다양한 강의와 컨텐츠를 합니다.
      </>
    ),
    logo: GilbutHorizontalLogoPNG,
    url: "https://www.gilbut.co.kr",
  },
  {
    name: "제이펍",
    description: (
      <>
        IT 전문 출판사로 소프트웨어 개발, 데이터 분석,
        <br />
        디자인 등 다양한 분야의 기술 서적을 출판하고 있습니다.
      </>
    ),
    logo: JpubLogoPNG,
    url: "https://jpub.tistory.com/",
  },
] as const;
