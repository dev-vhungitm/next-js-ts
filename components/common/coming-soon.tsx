import { pathnames } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { PrimaryButton } from './buttons';
import styles from './coming-soon.module.scss';

export const ComingSoon = () => {
  const title = 'Coming Soon';
  const message = 'This page is under development. Please try again once we are done';
  const notFoundImageURL = '/media/404.webp';
  const goToHomePageTitle = 'Home Page';

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
