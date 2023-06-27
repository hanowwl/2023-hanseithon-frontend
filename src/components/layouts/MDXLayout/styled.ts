import styled from "@emotion/styled";

import { Container } from "../Container";

export const MDXLayoutContainer = styled(Container)`
  padding: 3rem 0;
  font-size: 1.8rem;
  font-weight: 300;

  * {
    line-height: 150%;
  }
`;

export const Heading1 = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  margin: 1.6rem 0;
`;

export const Heading2 = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin: 2.8rem 0 1.2rem 0;
`;

export const Heading3 = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0.8rem 0;
`;

export const Heading4 = styled.h4`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0.6rem 0;
`;

export const OrderedList = styled.ol`
  list-style: decimal !important;
  padding: 0 0 0 1.8rem;
  margin: 0.8rem 0;

  ol {
    list-style-type: lower-roman;
  }
`;

export const UnorderedList = styled.ul`
  list-style: disc !important;
  padding: 0 0 0 1.8rem;
  margin: 0.8rem 0;
`;

export const Table = styled.table`
  margin: 0.8rem 0;

  tr,
  td,
  th {
    vertical-align: middle;
    border: 2px solid ${(props) => props.theme.color.outline};
  }

  th,
  td {
    padding: 0.8rem 1.2rem;
  }
`;

export const Strong = styled.strong`
  font-weight: 600;
`;

export const A = styled.a`
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.default};
  transition: color 150ms;

  &:hover {
    color: ${(props) => props.theme.color.primary.darker};
  }
`;
