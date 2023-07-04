import styled from "@emotion/styled";

export const ButtonElement = styled.button<{ current: boolean }>`
  margin-right: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => (props.current ? "#1774fe" : "#1F1F1F")};

  cursor: pointer;
`;

export const ButtonText = styled.h3`
  color: #fff;

  font-family: Pretendard;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  padding: 1rem 1.4rem;

  letter-spacing: -0.072rem;
`;
