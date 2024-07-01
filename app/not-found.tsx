'use client';

import { pathnames } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './not-found.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { PrimaryButton } from '@/components';

const NotFoundPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const title = 'Page Not Found';
  const message = 'The page you are looking is not found';
  const notFoundImageURL = '/media/404.webp';
  const goToHomePageTitle = 'Home Page';

  // Navigate to NotFound page
  useEffect(() => {
    if (!pathname.startsWith(pathnames.notFound.pathname)) {
      router.push(pathnames.notFound.pathname + '?url=' + encodeURI(pathname));
    }
  }, [router, pathname]);

  return (
    <div className={styles.main}>
      <div className={styles.container + ' container'}>
        <Image src={notFoundImageURL} width={560} height={171} alt={title} />
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.message}>{message}</div>
        <Link href={pathnames.home.pathname}>
          <PrimaryButton>{goToHomePageTitle}</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
