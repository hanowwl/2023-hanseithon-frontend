import styled from "@emotion/styled";

export const ButtonElement = styled.button<{ current: boolean }>`
  padding: 1rem 1.4rem;

  border: none;
  border-radius: 0.8rem;

  background-color: ${(props) => (props.current ? "#1774fe" : "#ffffff31")};
`;

export const ButtonText = styled.h3`
  color: #fff;
  font-family: Pretendard;

  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.072rem;
`;
