import styled from "@emotion/styled";

export const DayElement = styled.div<{ current: boolean }>`
  width: 12.4rem;

  margin-right: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => (props.current ? "#1774fe" : "#FFFFFF1F")};
`;

export const ButtonText = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  padding: 1.2rem 0;

  letter-spacing: -0.072rem;
`;
