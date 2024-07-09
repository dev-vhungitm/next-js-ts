import styles from './logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.site_name}>ITM</div>
      <div className={styles.site_sub}>Văn Hùng</div>
    </div>
  );
};

export default Logo;
