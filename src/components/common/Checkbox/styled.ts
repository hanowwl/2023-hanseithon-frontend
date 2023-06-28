import styled from "@emotion/styled";

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  user-select: none;

  &:has(input:checked) > div {
    box-shadow: unset;
    background-color: ${(props) => props.theme.color.primary.default};

    svg {
      color: ${(props) => props.theme.color.text.primary.default};
    }
  }
`;

export const CheckboxElement = styled.input`
  display: none;
`;

export const CheckboxCircle = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.color.outline};
  cursor: pointer;
  transition: background 100ms, color 100ms, box-shadow 100ms;

  svg {
    color: ${(props) => props.theme.color.outline};
  }
`;
