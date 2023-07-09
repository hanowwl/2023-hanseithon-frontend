import { NavbarProps } from "src/components/common";

export const NAVBAR_MENU: NavbarProps["menu"] = [
  { text: "한세톤 소개", href: "/" },
  { text: "대회 일정", href: `/schedules` },
  { text: "후원사", href: "/sponsors" },
];
