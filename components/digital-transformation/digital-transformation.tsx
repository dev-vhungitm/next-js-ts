import { DigitalTransformationBanner } from './digital-transformation-banner';
import { DigitalTransformationContent } from './digital-transformation-content';
import { DigitalTransformationFooter } from './digital-transformation-footer';
import styles from './digital-transformation.module.scss';

export const DigitalTransformation = () => {
  return (
    <div className={styles.main}>
      <DigitalTransformationBanner />
      <DigitalTransformationContent />
      <DigitalTransformationFooter />
    </div>
  );
};
