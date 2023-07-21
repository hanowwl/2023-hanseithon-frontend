import styled from "@emotion/styled";

export const TeamsBanner = styled.div`
  width: 100%;
  height: 35.1rem;

  margin-top: 2.5rem;
  border-radius: 2.2rem;
  background-color: #d9d9d9;
`;

export const TeamLayoutBannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5.2rem;
  border-radius: 1.6rem;

  background: conic-gradient(
    from 180deg at 50% 50%,
    #3f86cb 0deg,
    #6da4da 71.25deg,
    #cae5fb 172.5deg,
    #82bff5 249.37deg,
    #3f86cb 360deg
  );
`;

export const TeamLayoutChildrenContainer = styled.main``;

export const DeadLineText = styled.p`
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
`;

export const DeadLineLeftTime = styled.p`
  height: fit-content;
  font-size: 9.2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  text-align: center;
`;
