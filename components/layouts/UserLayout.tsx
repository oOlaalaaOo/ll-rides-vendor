import { FC } from 'react';
import Head from 'next/head';
import { Snackbar, Navbar, Header } from '../ui';

interface IUserLayout {
  headerTitle?: String;
  title?: String;
  bgColor?: String;
  children: any;
}

const UserLayout: FC<IUserLayout> = ({
  children,
  title = `Dashboard`,
  headerTitle = 'Dashboard',
  bgColor = 'bg-secondary',
}) => {
  return (
    <>
      <Head>
        <title>{`LL Rides - ${title}`}</title>
      </Head>
      <Snackbar />
      <main className={`${bgColor} min-h-screen`}>
        <Navbar />
        <Header title={headerTitle} />
        <div className='mb-5' />
        {children}
      </main>
    </>
  );
};

export default UserLayout;
