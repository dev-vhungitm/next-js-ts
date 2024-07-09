import { ServicesBanner } from './services-banner';
import { ServicesContent } from './services-content';
import { ServicesFooter } from './services-footer';
import styles from './services.module.scss';

export const Services = () => {
  return (
    <div className={styles.main}>
      <ServicesBanner />
      <ServicesContent />
      <ServicesFooter />
    </div>
  );
};
