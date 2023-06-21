import { FirstSection, SecondSection, ThirdSection } from "src/components/main";

export default function HomePage() {
  const ThirdDataArr = [
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
      emoji: "😵",
      title: "갈려나간 노예들",
      count: "120명 +",
      desc: "자랑스럽다! 무!급!노!예!",
    },
  ];
  return (
    <div>
      <FirstSection operatingPeriod="JULY 20 - JULY 21" receiptPeriod="접수 기간 : 7. 10 ~ 7. 19" />
      <SecondSection />
      <ThirdSection ThirdArr={ThirdDataArr} />
    </div>
  );
}
