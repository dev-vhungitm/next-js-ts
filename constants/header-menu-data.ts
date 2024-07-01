import { pathnames } from './pathnames';

export interface HeaderMenu {
  title: string;
  url: string;
  subMenus?: HeaderMenu[];
}

export const headerMenuData: HeaderMenu[] = [
  {
    title: pathnames.home.name,
    url: pathnames.home.pathname
  },
  {
    title: pathnames.services.name,
    url: pathnames.services.pathname,
    subMenus: [
      {
        title: pathnames.services.softwareTesting.name,
        url: pathnames.services.softwareTesting.pathname
      },
      {
        title: pathnames.services.digitalTransformation.name,
        url: pathnames.services.digitalTransformation.pathname
      }
    ]
  }
];
