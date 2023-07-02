import { Main } from "src/components/main";
import { MAIN_SECTIONS } from "src/constants";

export default function HomePage() {
  return (
    <main>
      <Main.MainSection
        operationPeriod={MAIN_SECTIONS.OPERATION_PERIOD}
        applicationPeriod={MAIN_SECTIONS.APPLICATION_PERIOD}
      />
      <Main.HackathonSection />
      <Main.HanseithonSection records={MAIN_SECTIONS.HANSEITHON_RECORDS} />
      <Main.ImageBannerSection imageGroups={MAIN_SECTIONS.IMAGES} />
      <Main.SponsorsSection sponsors={MAIN_SECTIONS.SPONSORS} />
      <Main.ParagraphSection paragraphs={MAIN_SECTIONS.PARAGRAPS} />
      <Main.FAQSection questions={MAIN_SECTIONS.QUESTIONS} />
    </main>
  );
}
