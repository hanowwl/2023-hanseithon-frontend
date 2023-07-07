import { PageLayout } from "src/components/layouts";
import { SponsorCard } from "src/components/sponsors";
import { SPONSORS } from "src/constants";

import * as S from "./styled";

export default function SponsorsPage() {
  return (
    <PageLayout title="후원사 소개" description="이번 한세톤 운영에 도움을 주신 후원사에요">
      <S.SponsorGridContainer>
        {SPONSORS.map(({ name, description, logo, url }, i) => {
          return (
            <SponsorCard key={i} name={name} description={description} logo={logo} link={url} />
          );
        })}
      </S.SponsorGridContainer>
    </PageLayout>
  );
}
