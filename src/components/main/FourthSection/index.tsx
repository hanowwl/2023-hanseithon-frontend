import React, { useEffect, useState } from "react";

import Ticker from "framer-motion-ticker";

import onePNG from "src/assets/png/Rectangle 36.png";
import twoPNG from "src/assets/png/Rectangle 37.png";
import threePNG from "src/assets/png/Rectangle 38.png";
import fourPNG from "src/assets/png/Rectangle 39.png";

import * as S from "./styled";

const FourthSection: React.FC = () => {
  const photos = [onePNG, twoPNG, threePNG, fourPNG];
  const [isPlayingFirst, setIsPlayingFirst] = useState(true);
  const [isPlayingSecond, setIsPlayingSecond] = useState(true);
  return (
    <S.FourthSection>
      <S.ImgContentContainer>
        <Ticker
          onMouseEnter={() => setIsPlayingFirst(false)}
          onMouseLeave={() => setIsPlayingFirst(true)}
          direction={1}
          duration={20}
          isPlaying={isPlayingFirst}
        >
          {photos.map((item, idx) => {
            return (
              <S.ImgContent key={idx}>
                <S.Img src={item.src} />
              </S.ImgContent>
            );
          })}
        </Ticker>
        <Ticker
          onMouseEnter={() => setIsPlayingSecond(false)}
          onMouseLeave={() => setIsPlayingSecond(true)}
          direction={-1}
          duration={20}
          isPlaying={isPlayingSecond}
        >
          {photos.map((item, idx) => {
            return (
              <S.ImgContent key={idx}>
                <S.Img src={item.src} />
              </S.ImgContent>
            );
          })}
        </Ticker>
      </S.ImgContentContainer>
    </S.FourthSection>
  );
};

export { FourthSection };
