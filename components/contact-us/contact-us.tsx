import { ContactUsBanner } from './contact-us-banner';
import { ContactUsContent } from './contact-us-content';
import { ContactUsFooter } from './contact-us-footer';
import styles from './contact-us.module.scss';

export const ContactUs = () => {
  return (
    <div className={styles.main}>
      <ContactUsBanner />
      <ContactUsContent />
      <ContactUsFooter />
    </div>
  );
};
