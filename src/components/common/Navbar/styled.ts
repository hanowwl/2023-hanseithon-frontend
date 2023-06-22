import Link from "next/link";

import styled from "@emotion/styled";

import { Container } from "src/components/layouts";

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  z-index: 1;
`;

export const NavbarInnerContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarBrandLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  user-select: none;
  color: ${(props) => props.theme.color.text.primary.default};
`;

export const NavbarBrandText = styled.h1`
  font-weight: 800;
  font-size: 2.4rem;
  letter-spacing: 0.04em;
  margin-bottom: 0.3rem;
`;

export const NavbarBrandSubText = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
  letter-spacing: -0.01em;
`;

export const NavbarMenuList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const NavbarMenuItem = styled.li`
  float: left;
`;

export const NavbarMenuLink = styled(Link)`
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.color.text.primary.default};
`;