export type NavItem = {
  label: string;
  href: string;
  iconSrc: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    iconSrc: "/assets/e65f73caba4a71e951fc33ffbea7c871b003a347.svg",
  },
  {
    label: "Match",
    href: "/match",
    iconSrc: "/assets/84434e44c1dbe6ab31005594fdca8e99dd87ec8c.svg",
  },
  {
    label: "Messages",
    href: "/messages",
    iconSrc: "/assets/35723952cb4bef1c7ca074d190ec612d7920e176.svg",
  },
  {
    label: "Directory",
    href: "/directory",
    iconSrc: "/assets/62aa41f07a42fef3f083bfbfc4c3486d9647b09d.svg",
  },
  {
    label: "Deal Card",
    href: "/deal-card",
    iconSrc: "/assets/0797debd1e1d298b9171878b3fd56561ef4736ae.svg",
  },
  {
    label: "Leads",
    href: "/leads",
    iconSrc: "/assets/6af4baf6b290539171acb5d752d6bb02394231c0.svg",
  },
];
