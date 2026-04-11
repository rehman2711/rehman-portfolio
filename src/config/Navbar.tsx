export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Resume',
      href: '/resume',
    },
  ] as NavItem[],
};
