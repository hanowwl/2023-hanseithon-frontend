import styled from "@emotion/styled";

export const FourthSection = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const ImgContentContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  .FMT__container {
    height: auto !important;
    margin-bottom: 53px;
  }
`;

export const ImgContent = styled.div`
  width: 51.8rem;
  height: 28rem;

  border: 0.1rem solid rgba(255, 255, 255, 0.16);
  border-radius: 2.8rem;

  margin: 0 1.5rem 0 1.5rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 2.8rem;
`;
