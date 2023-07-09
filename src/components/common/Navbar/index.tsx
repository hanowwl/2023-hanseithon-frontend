import React, { useMemo } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./styled";
import { Button, ButtonProps } from "../Button";

export interface NavbarProps {
  menu: { text: string; href: string }[];
  actions?: (Omit<ButtonProps, "children"> & { text: string; href?: string })[];
}

export const Navbar: React.FC<NavbarProps> = ({ menu, actions }) => {
  const router = useRouter();
  const isTeamRoutes = useMemo(() => router.pathname.includes("teams"), [router.pathname]);

  return (
    <S.NavbarContainer>
      <S.NavbarInnerContainer showLinkInMobile={isTeamRoutes}>
        <S.NavbarBrandLink href="/">
          <S.NavbarBrandText>HANSEITHON</S.NavbarBrandText>
          <S.NavbarBrandSubText>6TH HANSEI HACKATHON</S.NavbarBrandSubText>
        </S.NavbarBrandLink>

        <S.NavbarMenuList>
          {menu.map(({ text, href }, i) => {
            return (
              <S.NavbarMenuItem key={i}>
                <S.NavbarMenuLink href={href}>{text}</S.NavbarMenuLink>
              </S.NavbarMenuItem>
            );
          })}
        </S.NavbarMenuList>

        {actions?.map(({ text, href, ...props }, i) => {
          if (href)
            return (
              <Link href={href} key={i} style={{ textDecoration: "none" }}>
                <Button {...props}>{text}</Button>
              </Link>
            );

          return (
            <Button key={i} {...props}>
              {text}
            </Button>
          );
        })}
      </S.NavbarInnerContainer>
    </S.NavbarContainer>
  );
};
