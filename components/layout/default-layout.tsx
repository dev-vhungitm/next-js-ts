import { theme } from '@/constants';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import styles from './default-layout.module.scss';
import { Footer } from './footer';
import { Header } from './header';

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider theme={theme}>
      <div className={styles.main}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ConfigProvider>
  );
};
