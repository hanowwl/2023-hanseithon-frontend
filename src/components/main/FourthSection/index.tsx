import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import Ticker from "framer-motion-ticker";

import * as S from "./styled";

export interface MainFourthSectionProps {
  imageGroups: StaticImageData[][];
}

const FourthSection: React.FC<MainFourthSectionProps> = ({ imageGroups }) => {
  const [isHover, setIsHover] = useState<boolean[]>(imageGroups.map(() => true));

  const handleOnMouseEvent = (index: number, value: boolean) => {
    const newHoverList = [...isHover];
    newHoverList[index] = value;
    setIsHover(newHoverList);
  };

  return (
    <S.FourthSection>
      {imageGroups.map((images, i) => {
        return (
          <Ticker
            key={i}
            direction={i % 2 === 0 ? -1 : 1}
            duration={34}
            onMouseEnter={() => handleOnMouseEvent(i, false)}
            onMouseLeave={() => handleOnMouseEvent(i, true)}
            isPlaying={isHover[i]}
          >
            {images.map((image, j) => {
              return (
                <Image
                  key={j}
                  src={image}
                  alt=""
                  width={480}
                  height={240}
                  style={{
                    margin: "0 1.5rem 0 1.5rem",
                    borderRadius: "2rem",
                    border: "2px solid rgba(255, 255, 255, 0.15)",
                  }}
                  quality={100}
                />
              );
            })}
          </Ticker>
        );
      })}
    </S.FourthSection>
  );
};

export { FourthSection };
