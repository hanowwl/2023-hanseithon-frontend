import { HANSEITHON_IMAGES } from "src/assets";
import { EmojiCardProps } from "src/components/common";
import { Main } from "src/components/main";
import { SPONSOR_LIST, QUESTION_ANSWER_LIST } from "src/constants";

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
    {
      emoji: "💰",
      name: "역대 최고 상금",
      value: { from: 0, to: 140, suffix: "만원" },
      description: "자세한 사항은 7/10일 공개됩니다",
    },
  ];

  return (
    <main>
      <Main.MainSection operationPeriod="JULY 20 - JULY 21" applicationPeriod="7. 10 ~ 7. 19" />
      <Main.HackathonSection />
      <Main.HanseithonSection records={RECORDS} />
      <Main.ImageBannerSection
        imageGroups={[HANSEITHON_IMAGES.slice(0, 5), HANSEITHON_IMAGES.slice(6)]}
      />
      <Main.SponsorsSection sponsors={SPONSOR_LIST} />
      <Main.ParagraphSection
        paragraphs={[
          <>
            개발에
            <br />
            정답은
            <br />
            없으니까
          </>,
          <>
            한세톤과
            <br />
            너의 길을
            <br />
            개척해봐
          </>,
        ]}
      />
      <Main.FAQSection questions={QUESTION_ANSWER_LIST} />
    </main>
  );
}
