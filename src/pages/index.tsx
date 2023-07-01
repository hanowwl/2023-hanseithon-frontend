import { HANSEITHON_IMAGES } from "src/assets";
import { EmojiCardProps } from "src/components/common";
import {
  FirstSection,
  FiveSection,
  FourthSection,
  SecondSection,
  SeventhSection,
  SixthSection,
  ThirdSection,
} from "src/components/main";
import { SPONSOR_LIST, companyLogo, faq } from "src/constants";

export default function HomePage() {
  const RECORDS: EmojiCardProps[] = [
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
  ];
  return (
    <>
      <FirstSection
        operationPeriod="JULY 20 - JULY 21"
        applicationPeriod="접수 기간 : 7. 10 ~ 7. 19"
      />
      <SecondSection />
      <ThirdSection records={RECORDS} />
      <FourthSection imageGroups={[HANSEITHON_IMAGES, HANSEITHON_IMAGES.reverse()]} />
      <FiveSection sponsors={SPONSOR_LIST} />
      <SixthSection />
      <SeventhSection faqArr={faq} />
    </>
  );
}
