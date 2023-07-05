import {
  CodingAppleLogoPNG,
  EasyspubLogoPNG,
  GilbutHorizontalLogoPNG,
  HANSEITHON_IMAGES,
  JpubLogoPNG,
  KoscomLogoPNG,
} from "src/assets";
import { FAQSectionProps } from "src/components/main/FAQSection";
import { HanseithonSectionProps } from "src/components/main/HanseithonSection";
import { ImageBannerSection } from "src/components/main/ImageBannerSection";
import { ParagraphSectionProps } from "src/components/main/ParagraphSection";
import { SponsorsSectionProps } from "src/components/main/SponsorsSection";

export const MAIN_SECTIONS = {
  OPERATION_PERIOD: "JULY 20 - JULY 21",
  APPLICATION_PERIOD: "7. 10 ~ 7. 19",

  HANSEITHON_RECORDS: [
    {
      emoji: "😎",
      name: "누적 참여 학생",
      value: { from: 0, to: 230, suffix: "명 +" },
      description: "",
    },
    {
      emoji: "🌈",
      name: "운영 기간",
      value: { from: 0, to: 6, suffix: "회차" },
      description: "2018년부터",
    },
    {
      emoji: "💰",
      name: "역대 최고 상금",
      value: { from: 0, to: 140, suffix: "만원" },
      description: "자세한 사항은 7/10일 공개됩니다",
    },
  ] as HanseithonSectionProps["records"],

  IMAGES: [
    HANSEITHON_IMAGES.slice(0, 5),
    HANSEITHON_IMAGES.slice(6),
  ] as ImageBannerSection["imageGroups"],

  SPONSORS: [
    {
      name: "이지스퍼블리싱",
      logo: EasyspubLogoPNG,
      url: "http://www.easyspub.co.kr/Main/pub",
    },
    {
      name: "코딩애플",
      logo: CodingAppleLogoPNG,
      url: "https://codingapple.com",
    },
    {
      name: "길벗",
      logo: GilbutHorizontalLogoPNG,
      url: "https://www.gilbut.co.kr",
    },
    {
      name: "제이펍",
      logo: JpubLogoPNG,
      url: "https://jpub.tistory.com/",
    },
    {
      name: "(주) 코스콤",
      logo: KoscomLogoPNG,
      url: "https://www.koscom.co.kr/",
    },
  ] as SponsorsSectionProps["sponsors"],

  PARAGRAPHS: [
    <>
      개발에
      <br />
      정답은
      <br />
      없으니까
    </>,
    <>
      한세톤에서
      <br />
      너의 길을
      <br />
      개척해봐
    </>,
  ] as ParagraphSectionProps["paragraphs"],

  QUESTIONS: [
    {
      question: "한 팀에 최소/최대 몇 명까지 참여할 수 있나요?",
      answer: "팀의 최소 구성 인원은 3명, 최대 인원은 4명까지 참여할 수 있어요",
    },
    {
      question: "한세톤 진행 중 식사는 어떻게 제공되나요?",
      answer:
        "진행 중 식사는 제공되며, 함께 야식도 제공될 예정이에요. 식사 메뉴는 한세톤 진행 중 별도 안내될 예정입니다",
    },
    {
      question: "Chat GPT와 Bard 같은 AI 사용이 가능한가요?",
      answer:
        "밤새 진행하며 스스로의 힘으로 완성한다는 취지의 해커톤으로서, AI 서비스는 이용할 수 없어요",
    },
    {
      question: "대회장에 반입 할 수 없는 물건이 있나요?",
      answer:
        "외부 음식(과자, 젤리, 음료) 및 개인 물품 이외의 것은 반입할 수 없어요. 또한 주변 팀에 방해가 될 수 있다고 판단되는 물건도 반입할 수 없어요",
    },
    {
      question: "대회 도중 외출이 가능한가요?",
      answer: "특별한 사유로 인해 운영진 측에 양해를 구하지 않는 한, 외부 외출은 할 수 없어요",
    },
    {
      question: "한세톤 주제는 언제 공개되나요?",
      answer: "주제는 한세톤 당일 오리엔테이션 시간에 공개될 예정이에요",
    },
  ] as FAQSectionProps["questions"],
};
