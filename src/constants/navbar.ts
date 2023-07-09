import { NavbarProps } from "src/components/common";

export const NAVBAR_MENU: NavbarProps["menu"] = [
  { text: "한세톤 소개", href: "/" },
  { text: "대회 일정", href: `/schedules` },
  { text: "후원사", href: "/sponsors" },
];

export const NAVBAR_MENU_IN_TEAM_ROUTES: NavbarProps["menu"] = [
  { text: "한세톤 소식", href: "/teams" },
  { text: "나의 팀", href: "/teams/@me" },
  // { text: "파일 업로드", href: "/teams/upload" },
];
