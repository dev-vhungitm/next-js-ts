import { SoftwareTestingBanner } from './software-testing-banner';
import { SoftwareTestingContent } from './software-testing-content';
import { SoftwareTestingFooter } from './software-testing-footer';
import styles from './software-testing.module.scss';

export const SoftwareTesting = () => {
  return (
    <div className={styles.main}>
      <SoftwareTestingBanner />
      <SoftwareTestingContent />
      <SoftwareTestingFooter />
    </div>
  );
};
