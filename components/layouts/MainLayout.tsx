import { FC } from 'react';
import Head from 'next/head';
import { Snackbar } from '../ui';

type Props = {
  children: any;
  title?: string;
  bgColor?: string;
};

const MainLayout: FC<Props> = ({
  children,
  title = 'LL Rides',
  bgColor = 'bg-secondary',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Snackbar />
      <div className={`${bgColor} min-h-screen`}>{children}</div>
    </>
  );
};

export default MainLayout;
