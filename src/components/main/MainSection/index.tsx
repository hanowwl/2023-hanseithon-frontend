import React, { useRef } from "react";

import { ArrowDownSVG } from "src/assets";

import * as S from "./styled";

export interface MainSectionProps {
  operationPeriod: string;
  applicationPeriod: string;

  onClickDownArrow?: React.MouseEventHandler;
}

export const MainSection: React.FC<MainSectionProps> = ({
  operationPeriod,
  applicationPeriod,
  onClickDownArrow,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <S.MainSection>
      <S.MainSectionContentContainer>
        <S.OperationPeriod
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        >
          {operationPeriod}
        </S.OperationPeriod>

        <S.MainSectionTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.4,
            opacity: {
              duration: 0.8,
            },
            letterSpacing: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
        >
          6TH
          <br />
          HANSEITHON
        </S.MainSectionTitle>

        <S.ApplicationPeriod
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        >
          접수기간 : {applicationPeriod}
        </S.ApplicationPeriod>
      </S.MainSectionContentContainer>

      <S.DownArrowButton
        onClick={onClickDownArrow}
        initial={{ opacity: 0, bottom: "6rem" }}
        animate={{ opacity: 1, bottom: "5rem" }}
        transition={{
          delay: 1.4,
          duration: 0.3,

          bottom: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.6,
          },
        }}
      >
        <ArrowDownSVG />
        <ArrowDownSVG />
        <ArrowDownSVG />
      </S.DownArrowButton>

      <S.MainSectionLayer>
        <S.MainSectionVideo ref={videoRef} muted autoPlay playsInline webkit-playsinline="true">
          <source src="/static/main_animation.mp4" type="video/mp4" />
        </S.MainSectionVideo>
      </S.MainSectionLayer>
    </S.MainSection>
  );
};
