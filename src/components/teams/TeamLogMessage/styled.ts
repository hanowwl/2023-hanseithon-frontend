import styled from "@emotion/styled";

export const TeamLogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TeamLogActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const TeamLogMessage = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TeamLogDateText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.text.secondary.default};
`;

export const TeamLogHighlighter = styled.strong<{ variant?: "primary" | "danger" }>`
  color: ${(props) => (props.variant === "primary" || !props.variant ? "#3687FF" : "#E33A3A")};
`;

export const TeamLogsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
