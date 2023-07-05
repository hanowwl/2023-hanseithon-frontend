import { NavbarProps } from "src/components/common";

const now = new Date();
const day = now.getDate();
export const NAVBAR_MENU: NavbarProps["menu"] = [
  { text: "한세톤 소개", href: "/" },
  { text: "대회 일정", href: `/schedules/${day === 21 ? `Friday` : `Thursday`}` },
  { text: "후원사", href: "/sponsors" },
];
