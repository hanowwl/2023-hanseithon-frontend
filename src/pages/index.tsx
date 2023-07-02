import {
  ArrayItem,
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
  const ThirdDataArray: ArrayItem[] = [
    {
      emoji: "😎",
      title: "누적 참여 학생",
      count: "230명 +",
      desc: "",
    },
    {
      emoji: "🌈",
      title: "운영 기간",
      count: "6회차",
      desc: "2018년부터",
    },
    {
      emoji: "😊",
      title: "열심히 달려온 학생회",
      count: "120명 +",
      desc: "",
    },
  ];
  return (
    <div>
      <FirstSection operatingPeriod="JULY 20 - JULY 21" receiptPeriod="접수 기간 : 7. 10 ~ 7. 19" />
      <SecondSection />
      <ThirdSection ThirdArray={ThirdDataArray} />
      <FourthSection />
      <FiveSection companyArr={companyLogo} />
      <SixthSection />
      <SeventhSection faqArr={faq} />
    </div>
  );
}
