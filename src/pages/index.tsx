import {
  RecordItem,
  FirstSection,
  FiveSection,
  FourthSection,
  SecondSection,
  SeventhSection,
  SixthSection,
  ThirdSection,
} from "src/components/main";
import { companyLogo, faq } from "src/constants";

export default function HomePage() {
  const RECORDS: RecordItem[] = [
    {
      emoji: "😎",
      title: "누적 참여 학생",
      value: "230명 +",
      description: "",
    },
    {
      emoji: "🌈",
      title: "운영 기간",
      value: "6회차",
      description: "2018년부터",
    },
    {
      emoji: "😵",
      title: "갈려나간 노예들",
      value: "120명 +",
      description: "자랑스럽다! 무!급!노!예!",
    },
  ];
  return (
    <div>
      <FirstSection
        operationPeriod="JULY 20 - JULY 21"
        applicationPeriod="접수 기간 : 7. 10 ~ 7. 19"
      />
      <SecondSection />
      <ThirdSection records={RECORDS} />
      <FourthSection />
      <FiveSection companyArr={companyLogo} />
      <SixthSection />
      <SeventhSection faqArr={faq} />
    </div>
  );
}
