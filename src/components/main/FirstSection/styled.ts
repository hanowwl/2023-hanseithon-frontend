import styled from "@emotion/styled";

export const FirstSection = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  margin-top: -9rem;
  background: conic-gradient(
    from 180deg at 50% 50%,
    #3f86cb 0deg,
    #6da4da 71.25deg,
    #cae5fb 172.5deg,
    #82bff5 249.37deg,
    #3f86cb 360deg
  );
`;

export const PeriodContainer = styled.div`
  width: 100%;
  padding-top: 15rem;
`;
export const Period = styled.h2`
  font-size: 3.2rem;
  font-weight: 200;
  text-align: center;

  letter-spacing: 0.315em;
  line-height: 38px;
`;

export const MainTitleContainer = styled.div`
  margin: 5rem auto 0 auto;
`;
export const MainTitle = styled.h1`
  font-size: 12rem;
  font-weight: 900;
  text-align: center;
  line-height: 14.3rem;
  letter-spacing: 0.315em;
`;
export const MainSeason = styled.h1`
  font-size: 12rem;
  font-weight: 900;
  text-align: center;
  line-height: 14.3rem;
  letter-spacing: 0.315em;
`;

export const Periodkr = styled.h3`
  font-size: 2.8rem;
  font-weight: 500;
  text-align: center;

  line-height: 3.3rem;

  margin-top: 6rem;
`;

export const ScrollDown = styled.div`
  margin: auto auto 6rem auto;
  --color: #fff;
  --sizeX: 30px;
  --sizeY: 50px;
  position: relative;
  width: var(--sizeX);
  height: var(--sizeY);
  @keyframes scrolldown-anim {
    0% {
      opacity: 0;
      height: 6px;
    }
    40% {
      opacity: 1;
      height: 10px;
    }
    80% {
      transform: translate(0, 20px);
      height: 10px;
      opacity: 0;
    }
    100% {
      height: 3px;
      opacity: 0;
    }
  }
`;
export const Chevrons = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChevronDown = styled.div`
  margin-top: -13.6px;
  position: relative;
  border: solid var(--color);
  border-radius: 3px;
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 21px;
  height: 21px;
  transform: rotate(40deg) skew(350deg);
  :nth-of-type(odd) {
    animation: pulse 500ms ease infinite alternate;
  }
  :nth-of-type(even) {
    animation: pulse 500ms ease infinite alternate 250ms;
  }
  @keyframes pulse {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }
`;
