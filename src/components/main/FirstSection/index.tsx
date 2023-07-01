import React from "react";

import { ArrowDownSVG } from "src/assets";

import * as S from "./styled";

export interface FirstProps {
  operationPeriod: string;
  applicationPeriod: string;

  onClickDownArrow?: React.MouseEventHandler;
}

const FirstSection: React.FC<FirstProps> = ({
  operationPeriod,
  applicationPeriod,
  onClickDownArrow,
}) => {
  return (
    <S.FirstSection>
      <S.FirstSectionContentContainer>
        <S.OperationPeriod
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        >
          {operationPeriod}
        </S.OperationPeriod>

        <S.FirstSectionTitle
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
        </S.FirstSectionTitle>

        <S.ApplicationPeriod
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        >
          {applicationPeriod}
        </S.ApplicationPeriod>
      </S.FirstSectionContentContainer>

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

      <S.FirstSectionLayer>
        <S.FirstSectionVideo muted autoPlay>
          <source src="/static/main_animation.mp4" type="video/mp4" />
          <source src="/static/main_animation.webm" type="video/webm" />
        </S.FirstSectionVideo>
      </S.FirstSectionLayer>
    </S.FirstSection>
  );
};

export { FirstSection };
