import { HomeBanner } from './home-banner';
import { HomeContent } from './home-content';
import { HomeFooter } from './home-footer';
import styles from './home.module.scss';

export const Home = () => {
  return (
    <div className={styles.main}>
      <HomeBanner />
      <HomeContent />
      <HomeFooter />
    </div>
  );
};
