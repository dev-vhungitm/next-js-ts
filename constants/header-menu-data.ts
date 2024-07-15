import { IHeaderMenu } from '@/models';
import { pathnames } from './pathnames';

export const headerMenuData: IHeaderMenu[] = [
  {
    title: pathnames.home.name,
    url: pathnames.home.pathname
  },
  {
    title: pathnames.services.name,
    url: pathnames.services.pathname,
    children: [
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
