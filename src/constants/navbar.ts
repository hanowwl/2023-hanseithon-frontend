import { User } from "src/apis/services";
import { NavbarProps } from "src/components/common";

export const NAVBAR_MENU: NavbarProps["menu"] = [
  { text: "한세톤 소개", href: "/" },
  { text: "대회 일정", href: `/schedules` },
  { text: "후원사", href: "/sponsors" },
];

export const NAVBAR_MENU_IN_TEAM_ROUTES: (user?: User) => NavbarProps["menu"] = (user) => {
  const menu = [{ text: "한세톤 소식", href: "/teams" }];
  if (user?.teamMember) menu.push({ text: "내 팀", href: "/teams/@me" });

  return menu;
};
