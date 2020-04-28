import { FC } from 'react';
import Head from 'next/head';

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
      <div className={`${bgColor} min-h-screen`}>{children}</div>
    </>
  );
};

export default MainLayout;
